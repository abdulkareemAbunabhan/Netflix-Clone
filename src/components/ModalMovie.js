import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import axios from "axios";
function ModalMovie(props) {
  const sendReq = async (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.title.value,
      poster_path: e.target.poster_path.value,
      overview: e.target.overview.value,
      personalComments: e.target.personalComments.value,
    };
    const obje={
      personalComments:e.target.personalComments.value
    };
    if (props.item.id < 3000) {
      const serverURL = `https://movies-library-production-1603.up.railway.app/UPDATE/${props.item.id}`;
      axios.put(serverURL, obje).then(() => {
        props.handleClose();
      });
    } else {
      const serverURL = `https://movies-library-production-1603.up.railway.app/addMovies`;
      axios.post(serverURL, obj).then(() => {
        props.handleClose();
      });
    }
  };

  const baseImageURL = "https://image.tmdb.org/t/p/w780/";
  return (
    <Modal
      size="lg"
      show={props.showFlag}
      onHide={props.handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={`${baseImageURL}${props.item.poster_path}`}
          width="100%"
        ></Image>
        <Form onSubmit={sendReq}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>title</b>
            </Form.Label>
            <Form.Control name="title" type="text" value={props.item.title} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>poster_path</b>
            </Form.Label>
            <Form.Control
              name="poster_path"
              type="text"
              value={props.item.poster_path}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>overview</b>
            </Form.Label>
            <Form.Control
              name="overview"
              type="text"
              value={props.item.overview}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>personalComments</b>
            </Form.Label>
            <Form.Control
              name="personalComments"
              type="text"
              defaultValue={props.item.personalComments}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalMovie;
