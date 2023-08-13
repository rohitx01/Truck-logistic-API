import React, { useState, useEffect } from "react";
import Truck from "./Truck";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Alltruck = () => {
  useEffect(() => {
    document.title = "View Trucks|| By- Rohit Kumar";
    getAllTrucksFromServer();
  }, []);

  // Function to call server
  const getAllTrucksFromServer = () => {
    axios.get(`${base_url}/trucks`).then(
      (response) => {
        console.log(response.data);
        setTrucks(response.data);
        toast.success("Trucks have been loaded");
      },
      (error) => {
        console.log(error); // Corrected error logging
        toast.error("Something went wrong");
      }
    );
  };

  // calling loading course func
  // useEffect(() => {
  //   getAllTrucksFromServer();
  // }, []);

  const [trucks, setTrucks] = useState([]);
  // removing truck after deleting

  const removeTrucks = (id) => {
    setTrucks(trucks.filter((c) => c.id != id));
  };
  return (
    <div>
      <h1>Trucks Available</h1>
      <p>List of available Trucks are as follows</p>
      {trucks.length > 0
        ? trucks.map((item) => (
            <Truck
              className="truck-entry"
              key={item.id}
              truck={item}
              remove={removeTrucks}
            />
          ))
        : "No Trucks Available"}
    </div>
  );
};

export default Alltruck;
