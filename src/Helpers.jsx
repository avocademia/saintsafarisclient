export const storeUser = (data) => {
  const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours expiration time
  document.cookie = `jwt=${data.jwt}; path=/; SameSite=Strict; Secure`;
  localStorage.setItem("user", JSON.stringify({
      firstName: data.user.first_name,
      middleName: data.user.middle_name,
      surname: data.user.surname,
      username: data.user.username,
      userId: data.user.id,
      expiresAt: expirationTime
  }))
};

    const getAccessToken = () => {
    const jwtCookie = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return jwtCookie;
    }
    export const userData = () => {
        const stringifiedUser = localStorage.getItem("user");
        let user = {};
      
        if (stringifiedUser) {
          try {
            user = JSON.parse(stringifiedUser);
            const currentTime = new Date().getTime();
            if (user.expiresAt && currentTime > user.expiresAt) {
              clearUserData();
              return {};
            }
          } catch (error) {
            console.error("Error parsing user data:", error);
            clearUserData(); // Clear invalid data
            return {};
          }
        }
      
        const token = getAccessToken();
        user.accessToken = token;
      
        return user;
      };
  

export const clearUserData = () => {
    // Clear localStorage
    localStorage.removeItem("user");
  
    // Clear accessToken cookie
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  
