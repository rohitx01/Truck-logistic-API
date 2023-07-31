import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
const Allcourse = () => {
  useEffect(() => {
    document.title = "View Trucks|| By- Rohit Kumar";
  }, []);

  // Function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log("response");
      },
      (error) => {
        console.log("Error");
      }
    );
  };
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    {
      title: "Tata Standard X51",
      description: "India's most popular truck for Standard laods",
    },
    {
      title: "Ashok Leyland V8",
      description:
        "A name trusted by every Indian Trucker- Best suited for Heavy loads",
    },
    {
      title: "Mahindra Heavy Duty LXI",
      description: "Built like a Tank- Best for Hilly areas",
    },
    {
      title: "BharatBenz 21 Series",
      description:
        "Engine as smooth as melted butter- Best suited for National Highways",
    },
  ]);
  return (
    <div>
      <h1>Trucks Available</h1>
      <p>List of available Trucks are as follows</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} />)
        : "No Trucks Available"}
    </div>
  );
};

export default Allcourse;
