import { Row, Col, Image, Button } from "react-bootstrap";
import ImageOne from "../assets/image1.png";

export default function MainSection() {
  return (
    <Row style={{ marginTop: "100px", padding: "0 10%" }}>
      <Col className="d-flex justify-content-xl-end justify-content-center">
        <Image className="CustomImg" src={ImageOne} />
      </Col>
      <Col className="d-flex justify-content-xl-start justify-content-center">
        <div className="RightSection">
          <h1>Grow Your Business with Our Solutions.</h1>
          <h5>
            We help our clients to increase their website trafic, rankings and
            visibility in search results.
          </h5>
          <Button bsPrefix="CustomBtn"> Try it For Free</Button>
        </div>
      </Col>
    </Row>
  );
}
