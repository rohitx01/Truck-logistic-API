import React from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

const Truck = ({ truck, remove }) => {
  const deleteTruck = (id) => {
    axios.delete(`${base_url}/trucks/${id}`).then(
      (response) => {
        toast.success("Truck deleted successfully!");
        // setTruck({ id: "", title: "", description: "" });
        remove(id);
      },
      (error) => {
        console.log(Error);
        toast.error("something went wrong");
      }
    );
  };
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{truck.title}</CardSubtitle>
        <CardText>{truck.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteTruck(truck.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning ms-3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Truck;
