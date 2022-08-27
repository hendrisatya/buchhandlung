import React from "react";
import { MdAssignment } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="my-3">
      <div className="w-100 text-center">
        <h3>HomePage</h3>
        <p>Welcome to my dashboard Book Shop App.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top"
                  src="https://via.placeholder.com/150"
                />
              </div>
              <div className="card-body">
                <div className="home-icons">
                  <MdAssignment></MdAssignment>
                </div>
                <div className="home-text">
                  <h5>Lorem Ipsum</h5>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top"
                  src="https://via.placeholder.com/150"
                />
              </div>
              <div className="card-body">
                <div className="home-icons">
                  <MdAssignment></MdAssignment>
                </div>
                <div className="home-text">
                  <h5>Lorem Ipsum</h5>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top"
                  src="https://via.placeholder.com/150"
                />
              </div>
              <div className="card-body">
                <div className="home-icons">
                  <MdAssignment></MdAssignment>
                </div>
                <div className="home-text">
                  <h5>Lorem Ipsum</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
