import React, { useState, useEffect } from "react";
import {
  getBooks,
  dateTruncateHandler,
  deleteBook,
} from "../../fetches/bookFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks((result) => setBooks(result));
  }, []);

  const deletehandler = (id) => {
    deleteBook(id);
  };

  return (
    <>
      <div className="flex text-center">
        <p>List of available books.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float-end">
              <Link to="/books/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Book
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Synopsis</th>
                    <th>Price</th>
                    <th>Publication Year</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {books.length > 0 ? (
                    books.map((book) => {
                      const {
                        id,
                        title,
                        synopsis,
                        price,
                        publicationYear,
                        categoryId,
                        authorId,
                        publisherId,
                      } = book;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>{synopsis}</td>
                          <td>{price}</td>
                          <td>{dateTruncateHandler(publicationYear)}</td>
                          <td>{categoryId}</td>
                          <td>{authorId}</td>
                          <td>{publisherId}</td>
                          <td>
                            <Link
                              to={`/books/edit/${id}`}
                              className="btn btn-sm btn-info"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deletehandler(+id)}
                              className="btn btn-sm btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <LoadingBar></LoadingBar>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBooks;
