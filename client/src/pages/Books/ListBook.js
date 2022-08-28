import React, { useState, useEffect } from "react";
import {
  getBooks,
  dateTruncateHandler,
  deleteBook,
} from "../../fetches/bookFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdEditNote, MdDeleteForever } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";

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
        <p>
          “A reader lives a thousand lives before he dies, said Jojen. The man
          who never reads lives only one.” ― George R.R. Martin
        </p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float">
              <Link to="/books/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Book
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <div className="">
                <div className="row">
                  {books.length > 0 ? (
                    books.map((book) => {
                      const {
                        id,
                        title,
                        synopsis,
                        price,
                        publicationYear,
                        image,
                      } = book;
                      return (
                        <div
                          key={id}
                          className="card mx-auto mb-3"
                          style={{ width: "400px" }}
                        >
                          <div className="card-horizontal">
                            <div className="img-square-wrapper">
                              <img
                                className="kartu-img"
                                src={image}
                                alt="gambar"
                              />
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">{title}</h4>
                              <p className="card-text">
                                {/* <b>Synopsis:</b> {synopsis}
                                <br /> */}
                                <b>Price: </b>
                                {price} USD
                                <br />
                                <b>Released:</b>{" "}
                                {dateTruncateHandler(publicationYear)}
                                <br />
                                <b>Category:</b>{" "}
                                {book.categoryId
                                  ? book.category
                                    ? book.category.name
                                    : "-"
                                  : "-"}
                                <br />
                                <b>Author:</b>{" "}
                                {book.authorId
                                  ? book.author
                                    ? book.author.name
                                    : "-"
                                  : "-"}
                                <br />
                                <b>Publisher:</b>{" "}
                                {book.publisherId
                                  ? book.publisher
                                    ? book.publisher.name
                                    : "-"
                                  : "-"}
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted float-end">
                              <Link
                                to={`/books/edit/${id}`}
                                className="btn btn-sm btn-link"
                              >
                                <MdEditNote></MdEditNote>
                              </Link>
                              <button
                                onClick={() => deletehandler(+id)}
                                className="btn btn-sm btn-link"
                              >
                                <MdDeleteForever></MdDeleteForever>
                              </button>
                            </small>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <LoadingBar></LoadingBar>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBooks;
