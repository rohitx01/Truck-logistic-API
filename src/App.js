import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Truck from "./components/Truck";
import Alltruck from "./components/Alltrucks";
import AddTrucks from "./components/AddTruck";
import Header from "./components/Header";
import OMenus from "./components/OMenus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  const btnHandle = () => {
    toast.success("Done", {
      position: "top-center",
    });
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <OMenus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddTrucks />} />
                <Route path="/view-courses" element={<Alltruck />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
