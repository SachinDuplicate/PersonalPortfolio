import React from "react";

const LoginForm = ({ isShowHire }) => {
  return (
    <div className={`${isShowHire ? "active" : ""} show`}>
      <div className="hire-form">
        <div className="form-box solid">
          <form>
            <h1 className="hire-text">Hire</h1>
            <label>Company Name</label>
            <br></br>
            <input type="text" name="username" className="hire-box" />
            <label>E-mail</label>
            <br></br>
            <input type="text" name="E-mail" className="hire-box" />
            <label>Contact</label>
            <br></br>
            <input type="text" name="Contact" className="hire-box" />
            <label>Location</label>
            <br></br>
            <input type="text" name="Location" className="hire-box" />
            <br></br>
            <label>Position</label>
            <br></br>
            <input type="text" name="postion" className="hire-box" />
            <br></br>
            <a href="mailto:sachinduplicate10@gmail.com"> Submit</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;