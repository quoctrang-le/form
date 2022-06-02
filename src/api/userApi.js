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
      if (username === "tranqvjppro" && password === "Tranqvjppro123") {
        setTimeout(() => {
          resolve({
            status: "201",
            token: `${username}token`,
          });
        }, 1500);
      }
    });
  },
};

export default userApi;
