import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/authors";

const getAuthors = async (cb) => {
  try {
    let authors = await axios({
      method: "GET",
      url: URL,
    });
    cb(authors.data);
    console.log(authors);
  } catch (err) {
    console.log(err);
  }
};

const dateTruncateHandler = (str) => {
  if (str !== null) {
    return str.substr(0, 10);
  } else {
    return "";
  }
};

const add = async (author) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/add",
      data: author,
    });

    Swal.fire("Add author", "Author has been added", "success");
  } catch (err) {
    console.log(err);
  }
};

const deleteAuthor = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          url: URL + "/delete/" + id,
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const infoAuthor = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/" + id,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const editAuthor = async (id, author) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: author,
    });
    Swal.fire(
      `Edit author ${id}`,
      `Author with id: ${id} has been updated`,
      "success"
    );
  } catch (err) {
    console.log(err);
  }
};

export {
  getAuthors,
  dateTruncateHandler,
  add,
  deleteAuthor,
  infoAuthor,
  editAuthor,
};

// const getAuthors = (cb) => {
//   axios({
//     method: "GET",
//     url: `${URL}`,
//   })
//     .then((result) => {
//       // console.log(result);
//       cb(result.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const dateTruncateHandler = (str) => {
//   if (str !== null) {
//     return str.substr(0, 10);
//   } else {
//     return "";
//   }
// };

// const add = (obj) => {
//   const { name, dateOfBirth, city } = obj;
//   axios({
//     method: "POST",
//     url: `${URL}/add`,
//     data: {
//       name,
//       dateOfBirth,
//       city,
//     },
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const deleteAuthor = (id) => {
//   axios({
//     method: "DELETE",
//     url: `${URL}/delete/${id}`,
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const info = (id) => {
//   axios({
//     method: "GET",
//     url: `${URL}/${id}`,
//   })
//     .then((result) => {
//       const { id, name, dateOfBirth, city } = result.data;
//       alert(
//         `ID: ${id}, Name: ${name}, Date Of Birth: ${dateTruncateHandler(
//           dateOfBirth
//         )}, City: ${city}`
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export { getAuthors, dateTruncateHandler, add, deleteAuthor, info };
