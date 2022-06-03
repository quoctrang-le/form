const userApi = {
  register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: "200",
        });
      }, 1500);
    });
  },
  login(username, password) {
    return new Promise((resolve) => {
      if (username === "tranq" && password === "Tranqvjppro123") {
        setTimeout(() => {
          resolve({
            status: "201",
            token: `${username}token`,
            type: "admin",
          });
        }, 1000);
      } else {
        setTimeout(() => {
          resolve({
            status: "201",
            token: `${username}token`,
            type: "client",
          });
        }, 1000);
      }
    });
  },
};

export default userApi;
