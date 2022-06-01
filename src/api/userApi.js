const userApi = {
  register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: '200',
        });
      }, 1500);
    });
  },
};

export default userApi;
