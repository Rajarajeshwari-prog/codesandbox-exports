import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";

const Register = () => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [Phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (validator.current.allValid()) {
      alert("You submitted Details!");
      console.log({
        email: Email,
        password: Password,
        firstName: FirstName,
        lastName: LastName,
        phone: Phone,
        date: dob
      });
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

  return (
    <div className="container-fluid p-3">
      <div className="card bg-dark text-white m-5 border border-white border-4 ">
        <div className="card-body rounded">
          <h1 className="text-center">Register</h1>
          <div className="row g-3 form">
            <div className="row g-3 ">
              <label className="form-label">Name</label>
              <div className="col-md-6">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  name="FirstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={FirstName}
                />
                {validator.current.message(
                  "First name",
                  FirstName,
                  "required|alpha|min:3"
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="LastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
                {validator.current.message(
                  "last name",
                  LastName,
                  "required|alpha|min:3"
                )}
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Date Of Birth</label>
              <input
                onChange={(e) => setDob(e.target.value)}
                name="DateOfBirth"
                type="date"
                className="form-control"
              />
              {validator.current.message("Date of birth", dob, "required")}
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                name="Phone"
                type="number"
                className="form-control"
              />
              {validator.current.message("Phone", Phone, "required")}
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                type="email"
                className="form-control"
                placeholder="XYZ@example.com"
              />
              {validator.current.message("Email", Email, "required|email")}
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="Password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {validator.current.message(
                "title",
                Password,
                "required|^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"
              )}
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                <b>Submit</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
