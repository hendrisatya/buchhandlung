import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/books";

const getBooks = async (cb) => {
  try {
    let books = await axios({
      method: "GET",
      url: URL,
    });
    cb(books.data);
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

const addPage = async (cb2) => {
  try {
    let categories = await axios({
      method: "GET",
      url: URL + "/add",
    });
    cb2(categories);
  } catch (err) {
    console.log(err);
  }
};

const add = async (book) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/add",
      data: book,
    });

    Swal.fire("Add book", "Book has been added", "success");
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (id) => {
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

const infoBook = async (id, cb) => {
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

const editBook = async (id, book) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: book,
    });
    Swal.fire(
      `Edit book ${id}`,
      `Book with id: ${id} has been updated`,
      "success"
    );
  } catch (err) {
    console.log(err);
  }
};

export {
  getBooks,
  dateTruncateHandler,
  add,
  deleteBook,
  infoBook,
  editBook,
  addPage,
};
