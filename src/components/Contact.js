import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact|| By Rohit Kumar";
  }, []);

  return (
    <div className="top-content">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Contact Us</h1>
                <p className="card-text">
                  If you have any questions, feedback, or inquiries, feel free
                  to get in touch with us. You can reach us via email at
                  contact@trucklogistics.com or by calling our customer support
                  hotline at +1-123-456-7890.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
