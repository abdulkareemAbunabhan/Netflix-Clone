import Movie from "./Movie";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
function MovieList(props) {
  return (
    <Row xs={1} md={4} className="g-4">
      {props.movieListArr.map((item) => {
        return (
          <Col key={item.id}>
          <Card style={{width:'18rem'}}>
          <Movie  item={item}/>
          </Card>
          </Col>
        );
      })}
    </Row>
    
  );
}
export default MovieList;