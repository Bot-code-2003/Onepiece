import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { Card } from "antd";
import data from "../../data/charecters_data.json";
import "./Charecters.css";

const Charecters = () => {
  const { Title } = Typography;
  const [requiredCharacter, setrequiredCharacter] = useState("Monkey D. Luffy");
  const selectedCharacterData = data.sections.find(
    (section) => section.name === requiredCharacter
  );
  function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return (
    <>
      <div className="character-page">
        <div className="character-page-search">{/* Search Bar */}</div>
        <div className="character-page-data">
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Col sm={24} xs={24} lg={24}>
              <Card className="heading-card card">
                <h1>{selectedCharacterData.name}</h1>
                <h2>{selectedCharacterData.crew_name}</h2>
              </Card>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
              className="card-container"
            >
              <Card
                className="card-body card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgb(0, 0, 0, 0.5)",
                  color: "white",
                  textShadow: "2px 2px 4px black",
                }}
              >
                {selectedCharacterData && (
                  <div>
                    <h1>{selectedCharacterData.name}</h1>
                    <p>
                      <strong>Crew Name:</strong>{" "}
                      {selectedCharacterData.crew_name} <br />
                      <strong>Bounty:</strong> {selectedCharacterData.bounty}{" "}
                      <br />
                      <strong>Date of Birth:</strong>{" "}
                      {selectedCharacterData.dob} <br />
                      <strong>Age:</strong> {selectedCharacterData.age} <br />
                      <strong>Devil Fruit User:</strong>{" "}
                      {selectedCharacterData.devil_fruit_user} <br />
                      <strong>Fruit:</strong> {selectedCharacterData.fruit}{" "}
                      <br />
                      <strong>Powers:</strong>
                      {selectedCharacterData.powers &&
                        selectedCharacterData.powers.map((power, index) => (
                          <span key={index}>
                            {power.gear1 && <span> {power.gear1},</span>}
                            {power.gear2 && <span> {power.gear2},</span>}
                            {power.gear3 && <span> {power.gear3},</span>}
                            {power.gear4 && <span> {power.gear4},</span>}
                            {power.gear5 && <span> {power.gear5}</span>}
                          </span>
                        ))}{" "}
                      <br />
                      {selectedCharacterData.family &&
                        selectedCharacterData.family.map((member, index) => (
                          <span key={index}>
                            <strong>{toTitleCase(member.key)}</strong>{" "}
                            {member.value}
                            <br />
                          </span>
                        ))}
                    </p>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Charecters;
