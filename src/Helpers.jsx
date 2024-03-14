export const storeUser = (data) => {
    localStorage.setItem("user",
     JSON.stringify ({
        firstName: data.user.first_name,
        jwt: data.jwt
     }))
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || ""; 
    return JSON.parse(stringifiedUser);
};
