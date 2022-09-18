import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {/* g-3 => gap  */}
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
