export const storeUser = (user) => {

    try {
        localStorage.setItem("user", JSON.stringify({
            firstName: user.first_name,
            middleName: user.middle_name,
            surname: user.surname,
            username: user.username,
            userId: user.id,
        }))
    } catch (error) {
        throw error
    }
}

export const storeToken = (token) => {
    try {
        localStorage.setItem("accessToken", JSON.stringify(token))
    } catch (error) {
        throw error
    }
}

export const userData = () => {

    const stringifiedToken = localStorage.getItem('accessToken')
    const stringifiedUser = localStorage.getItem("user")
    let user = {}
    let token
      
    if (stringifiedUser && stringifiedToken) {
        try {
            user = JSON.parse(stringifiedUser)
            token = JSON.parse(stringifiedToken)
            const currentTime = new Date().getTime()
            if (user.expiresAt && currentTime > user.expiresAt) {
              clearUserData()
              return {}
            }
        } catch (error) {
            console.error("Error parsing user data:", error)
            clearUserData()
            return {}
        }
    }
    user.accessToken  = token
    return user
}
  
export const clearUserData = () => {

    try {
        localStorage.removeItem("user")
        localStorage.removeItem('accessToken')
    } catch (error) {
        throw error
    }
}
  
