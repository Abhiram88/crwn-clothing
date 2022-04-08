import { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import axios from "axios";

import "./wall-post.scss";

{
  /* // hardcoded userid to 1 in wall.jsx. */
}

const PostWall = ({ data }) => {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    console.log("hhh");
    console.log(post);
  };

  return (
    <div className="post" key={data.postid}>
      <p key={data.postid}>{data.post}</p>

      <span className="post-properties">
        <a className="edit-post" href="#" onClick={handleShow}>
          <EditIcon fontSize="small" />
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post: {data.postid}</Modal.Title>
          </Modal.Header>
          <form
            action="http://localhost:4000/update_post"
            method="POST"
            id="updatePost"
          >
            <Modal.Body>
              <input type="text" id="post-update" name="post" />
              <input
                type="hidden"
                id="post-update"
                name="postid"
                value={data.postid}
              />
              <input type="hidden" id="post-update" name="userid" value={1} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size="sm" onClick={handleClose}>
                Close
              </Button>
              <button
                type="submit"
                class="btn btn-success postbutton"
                onClick={handleClose}
              >
                Post
              </button>
            </Modal.Footer>
          </form>
        </Modal>

        <a className="delete-post" href="#">
          <DeleteIcon fontSize="small" style={{ color: "#f74c4f" }} />
        </a>
      </span>
    </div>
  );
};

export default PostWall;
