import React from "react";
import Button from "./styled/Button";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" alt="logo" width={"300px"} />
        </div>
      </Nav>
      <div>
        <Button color="#AF3A53">Apply Courses</Button>
        <Button bg="#AF3A53">Talk to Advisor</Button>
      </div>
      <div>
        <h1>The IT Career of Your Dreams Starts Here!</h1>
        <p>
          Clarusway is a leading international software Bootcamp. Join a micro
          class online with other trainees and learn coding skills with a
          highly-skilled instructor.
        </p>
      </div>
    </div>
  );
};

export default Header;
