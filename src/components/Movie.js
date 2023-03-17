import ModalMovie from './ModalMovie'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Movie(props) {
  const [showFlag, setShowFlag] = useState(false);
  const [itemData, setItemData] = useState({});

  const modalRender = (param) => {
    setItemData(param);
    setShowFlag(true);
  };

  const handleClose = () => {
    setShowFlag(false);
  };
  const baseImageURL='https://image.tmdb.org/t/p/w780/';
  return (
    <>
      
      <Card>
        <Card.Title>
          <b>{props.item.title}</b>
        </Card.Title>
        <Card.Img
          src={`${baseImageURL}${props.item.poster_path}`}
          variant="top"
        />
        <Card.Body>
          <Button
            variant="success"
            onClick={() => {
              modalRender(props.item);
            }}
          >
            Add to favorites
          </Button>
          <ModalMovie
            showFlag={showFlag}
            handleClose={handleClose}
            item={itemData}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Movie;
