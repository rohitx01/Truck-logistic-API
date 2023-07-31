import React, { Fragment, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Trucks|| By Rohit Kumar";
  }, []);
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Trucking details</h1>
      <Form>
        <FormGroup>
          <label for="userId">Truck ID</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Task Title</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>

        <FormGroup>
          <label for="description">Task Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="dark ms-2">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
