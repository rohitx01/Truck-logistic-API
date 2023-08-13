import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddTrucks = () => {
  useEffect(() => {
    document.title = "Add Trucks|| By Rohit Kumar";
  }, []);

  const [truck, setTruck] = useState({});

  const handleForm = (e) => {
    console.log(truck);
    postDataToServer(truck);

    e.preventDefault();
  };

  // server call
  const postDataToServer = (data) => {
    axios.post(`${base_url}/trucks`, data).then(
      (response) => {
        console.log(response.data);
        toast.success("Truck added successfully!");
        // setTruck({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(Error);
        toast.error("something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Trucking details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Truck ID</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setTruck({ ...truck, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Truck Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setTruck({ ...truck, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Truck Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setTruck({ ...truck, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Truck
          </Button>
          <Button type="reset" color="dark ms-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddTrucks;
