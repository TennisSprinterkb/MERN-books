import React from "react";
import Button from "../Button";
import "./style.css";

function RemoveBookBtn(props) {
    return (
      <Button className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Button>
    );
  }



  export default RemoveBookBtn;