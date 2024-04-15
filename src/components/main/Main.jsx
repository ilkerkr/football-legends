import React, { useState } from "react";
import "./Main.css";
import data from "../../helpers/data";
import { Container, Row } from "react-bootstrap";
import MainCard from "./MainCard";

const Main = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  const dataFiltered = data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div className="main">
      <input
        type="search"
        className="search"
        placeholder="Search Player..."
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 my-3 card-container">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-3">
          {dataFiltered.map((legends) => (
            <MainCard key={legends.id} legends={legends} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
