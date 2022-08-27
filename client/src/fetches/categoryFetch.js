import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/categories";

const getCategories = async (cb) => {
  try {
    let categories = await axios({
      method: "GET",
      url: URL,
    });
    cb(categories.data);
    console.log(categories);
  } catch (err) {
    console.log(err);
  }
};

const add = async (category) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/add",
      data: category,
    });

    Swal.fire("Add category", "Author has been added", "success");
  } catch (err) {
    console.log(err);
  }
};

const deleteCategory = async (id) => {
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

const infoCategory = async (id, cb) => {
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

const editCategory = async (id, category) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: category,
    });
    Swal.fire(
      `Edit category ${id}`,
      `Category with id: ${id} has been updated`,
      "success"
    );
  } catch (err) {
    console.log(err);
  }
};

export { getCategories, add, deleteCategory, infoCategory, editCategory };
