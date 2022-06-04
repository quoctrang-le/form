import axios from "axios";
export const getAllAnimals = async () => {
  return axios
    .get("https://629836b0f2decf5bb73d67d4.mockapi.io/animals")
    .then(function (response) {
      const { data } = response;
      return data;
    })
    .catch(function (response) {
      return response;
    });
};

export const deleteAnimal = (id) => {
  return axios.delete(
    `https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${id}`
  );
};

export const getAnimal = (id) => {
  return axios
    .get(`https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (e) {
      console.log(e);
    });
};

export const updateAnimal = (id, data) => {
  return axios
    .put(`https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${id}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (e) {
      console.log(e);
    });
};
