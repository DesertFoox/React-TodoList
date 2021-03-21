import React, { Component } from "react";
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import { useId } from "react-id-generator";

class AddTask extends Component {
  
 

  render() {
    const {value, ChangeHandler,SubmitHandler} = this.props;
    return (
      <React.Fragment>
        <MDBInputGroup
          value={value}
          onChange={ChangeHandler}
          hint="What is your task For Today ?"
          containerClassName="mb-3"
          autoFocus
          className="block-example border border-primary nobg"
          append={
            <MDBBtn
              type="submit"
              onClick={SubmitHandler}
              gradient="blue"
              className=" m-0 px-3 py-2 z-depth-0"
            >
              Create !
            </MDBBtn>
          }
        />
      </React.Fragment>
    );
  }
}
export default AddTask;
