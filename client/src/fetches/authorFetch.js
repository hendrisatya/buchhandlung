import axios from "axios";

const URL = "http://localhost:3000";

const getAuthors = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/authors`,
  })
    .then((result) => {
      // console.log(result);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const dateTruncateHandler = (str) => {
  if (str !== null) {
    return str.substr(0, 10);
  } else {
    return "";
  }
};

const add = (obj) => {
  const { name, dateOfBirth, city } = obj;
  axios({
    method: "POST",
    url: `${URL}/authors/add`,
    data: {
      name,
      dateOfBirth,
      city,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// belum jalan delete nya
const deleteAuthor = (id) => {
  axios({
    method: "DELETE",
    url: `${URL}/authors/delete/${id}`,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const info = (id) => {
  axios({
    method: "GET",
    url: `${URL}/authors/${id}`,
  })
    .then((result) => {
      const { id, name, dateOfBirth, city } = result.data;
      alert(
        `ID: ${id}, Name: ${name}, Date Of Birth: ${dateTruncateHandler(
          dateOfBirth
        )}, City: ${city}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAuthors, dateTruncateHandler, add, deleteAuthor, info };
