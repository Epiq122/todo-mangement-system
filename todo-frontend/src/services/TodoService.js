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

export const addTodo = (todo) => {
  return fetch(BASE_REST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
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

export const getTodo = (id) => {
  return fetch(BASE_REST_API_URL + "/" + id)
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

export const updateTodo = (id, todo) => {
  return fetch(BASE_REST_API_URL + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
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

export const deleteTodo = (id) => {
  return fetch(BASE_REST_API_URL + "/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const completeTodo = (id) => {
  return fetch(BASE_REST_API_URL + "/" + id + "/complete", {
    method: "PATCH",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const incompleteTodo = (id) => {
  return fetch(BASE_REST_API_URL + "/" + id + "/incomplete", {
    method: "PATCH",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
