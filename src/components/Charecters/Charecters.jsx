import React, { useState } from "react";
import { Row, Col, Typography, Input, Card } from "antd";
import data from "../../data/charecters_data.json";
import "./Charecters.css";
import { SearchOutlined } from "@ant-design/icons";

const Charecters = () => {
  const { Title } = Typography;
  const [searchTerm, setSearchTerm] = useState("");

  // Filter character data based on search term
  const filteredCharacters =
    searchTerm.trim() === ""
      ? data.sections.filter(
          (section) => section.crew_name === "Straw Hat Pirates"
        )
      : data.sections.filter(
          (section) =>
            section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.crew_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <>
      <div className="character-page">
        <div className="character-page-search">
          <Input
            style={{
              border: "2px solid black",
              padding: "10px 40px",
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              marginBottom: "20px",
            }}
            placeholder="Search character"
            prefix={<SearchOutlined />}
            // Handle input change
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="character-page-data">
          <Row gutter={[20, 20]}>
            {/* Render filtered character cards */}
            {filteredCharacters.map((selectedCharacterData, index) => (
              <Col key={index} sm={24} xs={24}>
                <Card
                  className="card-body card"
                  style={{
                    width: "100%",
                    minHeight: "600px",
                    backgroundColor: "rgb(0, 0, 0, 0.5)",
                    color: "white",
                    textShadow: "2px 2px 4px black",
                  }}
                >
                  <Row>
                    <Col span={24}>
                      <img
                        className="card-img"
                        src={selectedCharacterData.image}
                      />
                      {/* Render character details */}
                      {selectedCharacterData && (
                        <div>
                          {/* Name */}
                          <h1>{selectedCharacterData.name}</h1>
                          {/* Crew Name */}
                          <strong>Crew Name:</strong>{" "}
                          {selectedCharacterData.crew_name} <br />
                          {/* Bounty */}
                          <strong>Bounty:</strong>{" "}
                          {selectedCharacterData.bounty} <br />
                          {/* Dob */}
                          <strong>Date of Birth:</strong>{" "}
                          {selectedCharacterData.dob} <br />
                          {/* Age */}
                          <strong>Age:</strong> {selectedCharacterData.age}{" "}
                          <br />
                          {/* Fruit */}
                          <strong>Devil Fruit User:</strong>{" "}
                          {selectedCharacterData.devil_fruit_user} <br />
                          <strong>Fruit:</strong> {selectedCharacterData.fruit}{" "}
                          <br />
                          {/* Powers */}
                          <h1>
                            {selectedCharacterData.powers && (
                              <strong>Powers:</strong>
                            )}
                          </h1>
                          {selectedCharacterData.powers.map((power, index) => (
                            <span key={index}>
                              <strong>{toTitleCase(power.key)}</strong>{" "}
                              {power.value}
                              <br />
                            </span>
                          ))}
                          <br />
                        </div>
                      )}
                    </Col>
                    <Col></Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Charecters;
