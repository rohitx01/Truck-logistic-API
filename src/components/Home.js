import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./Home.css"; // Import custom CSS file

const Home = () => {
  useEffect(() => {
    document.title = "Home|| By Rohit Kumar";
  }, []);
  return (
    <div className="jumbotron text-center">
      <h1>Trucking Logistics</h1>
      <p>
        This API is developed by Rohit Kumar. To add your truck in the system ,
        make an ADD request, meanwhile existing user can either Update or Delete
        thier existing Trucks from the system.
      </p>
      <Container>
        <Button color="primary" outline>
          Start Using the Application
        </Button>
      </Container>
    </div>
  );
};

export default Home;
