import React, { useState } from "react";
import NowLoading from "./NowLoading";
import {
  getAuthors,
  dateTruncateHandler,
  deleteAuthor,
  info,
} from "../fetches/authorFetch";

const Author = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthorsHandler = () => {
    getAuthors((result) => setAuthors(result));
  };

  return (
    <div>
      <table border="1" cellSpacing="3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {authors.length > 0 ? (
            authors.map((author) => {
              const { id, name, dateOfBirth, city } = author;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{dateTruncateHandler(dateOfBirth)}</td>
                  <td>{city}</td>
                  <td>
                    <button
                      onClick={() => info(id)}
                      className="btn btn-sm btn-warning"
                    >
                      Info
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteAuthor(id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <NowLoading />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="container">
        <button
          onClick={() => getAuthorsHandler()}
          className="btn btn-sm btn-primary"
        >
          Get Authors
        </button>
      </div>
    </div>
  );
};

export default Author;
