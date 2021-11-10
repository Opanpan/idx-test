import { Row, Col, Image, Button } from "react-bootstrap";
import ImageOne from "../assets/image1.png";

export default function MainSection() {
  return (
    <Row style={{ marginTop: "100px", padding: "0 10%" }}>
      <Col className="mx-5">
        <Image style={{ width: "100%" }} src={ImageOne} />
      </Col>
      <Col>
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
