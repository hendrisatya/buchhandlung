import React, { useState, useEffect } from "react";
import {
  getAuthors,
  dateTruncateHandler,
  deleteAuthor,
} from "../../fetches/authorFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdEditNote, MdDeleteForever } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";

const ListAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors((result) => setAuthors(result));
  }, []);

  const deletehandler = (id) => {
    deleteAuthor(id);
  };

  return (
    <>
      <div className="flex text-center">
        <p>List of available authors.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float">
              <Link to="/authors/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Author
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <div className="">
                <div className="row">
                  {authors.length > 0 ? (
                    authors.map((author) => {
                      const { id, name, dateOfBirth, city, image } = author;
                      return (
                        <div
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
                              <h4 className="card-title">{name}</h4>
                              <p class="card-text">
                                {dateTruncateHandler(dateOfBirth)} <br />
                                {city}
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted float-end">
                              <Link
                                to={`/authors/edit/${id}`}
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

export default ListAuthors;
