const BASE_REST_API_URL = "http://localhost:8080/api/todos";

export const getAllTodos = () => {
  return fetch(BASE_REST_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
