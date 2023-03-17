import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import  Button  from "react-bootstrap/Button";
function FavList(props) {
  const [favListArr, setFavListArr] = useState([]);
  const sendReq = () => {
    const serverURL =
      "https://movies-library-production-1603.up.railway.app/getMovies";
    axios(serverURL).then((res) => {
      setFavListArr(res.data);
    });
  };
  useEffect(() => {
    sendReq();
  }, []);
  const baseImageURL='https://image.tmdb.org/t/p/w780/';
  return (
    <Row xs={1} md={4} className="g-4">
      {favListArr.map((item) => {
        return (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                <b>{item.title}</b>
              </Card.Title>
              <Card.Img
                src={`${baseImageURL}${item.poster_path}`}
                variant="top"
              />
              <Card.Body>
                <Button
                  variant="success"
                  // onClick={() => {
                  //   modalRender(props.item);
                  // }}
                >
                  Update
                </Button>
                {/* <ModalMovie
            showFlag={showFlag}
            handleClose={handleClose}
            item={itemData}
          /> */}
              </Card.Body>{" "}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default FavList;
