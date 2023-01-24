import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Shop() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#212529",
          fontSize: "1.75rem",
          marginTop: "3rem",
        }}
        className="animation-text"
      >
        Latest Collections 🚗 🚕 🚙
      </h1>
      <Row md={2} xs={1} lg={3} className="g-3 animation">
        {storeItems.map((item) => {
          return (
            // <Col key={item.id}>{JSON.stringify(item)}</Col>
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
