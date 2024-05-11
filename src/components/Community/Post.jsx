import React from "react";
import { Row, Col, Typography, Input, Card } from "antd";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const { Title } = Typography;
  return (
    <div>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to={`post/1`}
            style={{ textDecoration: "none", minWidth: "100%" }}
          >
            <Card className="post">
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col
                  span={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p>10 Likes</p>
                  <p>21 Commented on this post</p>
                </Col>
                <Col
                  span={10}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3>Are Luffy and Joy boy same?</h3>
                </Col>
                <Col
                  span={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CgProfile />
                  <p>Deepu</p>
                  <p>Posted 20 min ago</p>
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Post;
