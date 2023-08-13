import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About|| By Rohit Kumar";
  }, []);

  return (
    <div className="top-content">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">About Us</h1>
                <p className="card-text">
                  Welcome to the About Us page of the Truck Logistics API
                  Application. This application is developed by Rohit Kumar to
                  manage trucking logistics data. Feel free to explore the
                  features and functionalities provided by this application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
