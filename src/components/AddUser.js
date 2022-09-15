import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddUser extends Component {
  notify = () => toast("There You go! Form Submitted");
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
    };

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  changeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const registered = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };

    axios.post(`http://localhost:4000/app/signup`, registered).then((resp) => {
      console.log(resp.data);

      this.setState({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div
            className="form-div"
            style={{
              width: "70%",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
              padding: "10rem",
            }}
          >
            <form onSubmit={this.onSubmit} className="pb-2">
              <input
                type="text"
                placeholder="Enter Name"
                onChange={this.changeName}
                value={this.state.name}
                className="form-control form-group w-100 py-3 m-3"
              />

              <input
                type="text"
                placeholder="Enter Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group py-3 m-3"
              />

              <input
                type="text"
                placeholder="Enter Phone"
                onChange={this.changePhone}
                value={this.state.phone}
                className="form-control form-group py-3 m-3"
              />

              <input
                type="text"
                placeholder="Enter Address"
                onChange={this.changeAddress}
                value={this.state.address}
                className="form-control form-group py-3 m-3"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
                onClick={this.notify}
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default AddUser;
