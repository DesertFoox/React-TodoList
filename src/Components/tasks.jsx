import React, { Component } from "react";

import { MDBIcon } from "mdbreact";
const Task = (props) => {
  return (
    <React.Fragment>
      <div key={props.key} className={`col-12 mb-3 rounded row ${props.color}`}>
        <div className="col-9">
          <h3>
            {props.items} {props.isComplete ? `is Completed` : ``}
          </h3>
        </div>
        <div className="col-3 d-flex justify-content-end ">
          <MDBIcon
            onClick={() => props.DeleteHandler(props.id)}
            style={{ marginTop: 8 }}
            far
            icon="trash-alt"
          />
          <MDBIcon
            onClick={() => props.compl(props.id)}
            style={{ marginTop: 8, marginLeft: 6 }}
            icon="check-square"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Task;
