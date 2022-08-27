import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/publishers";

const getPublishers = async (cb) => {
  try {
    let publishers = await axios({
      method: "GET",
      url: URL,
    });
    cb(publishers.data);
    console.log(publishers);
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

const add = async (publisher) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/add",
      data: publisher,
    });

    Swal.fire("Add publisher", "Author has been added", "success");
  } catch (err) {
    console.log(err);
  }
};

const deletePublisher = async (id) => {
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

const infoPublisher = async (id, cb) => {
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

const editPublisher = async (id, publisher) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: publisher,
    });
    Swal.fire(
      `Edit publisher ${id}`,
      `Publisher with id: ${id} has been updated`,
      "success"
    );
  } catch (err) {
    console.log(err);
  }
};

export {
  getPublishers,
  dateTruncateHandler,
  add,
  deletePublisher,
  infoPublisher,
  editPublisher,
};
