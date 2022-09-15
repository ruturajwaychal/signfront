import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";

const initialValue = {
  name: "",
  email: "",
  address: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, address, email, phone } = user;
  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push("/signup");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
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
        <form className="pb-2">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => onValueChange(e)}
            value={name}
            className="form-control form-group w-100 py-3 m-3"
          />

          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => onValueChange(e)}
            value={email}
            className="form-control form-group py-3 m-3"
          />

          <input
            type="text"
            placeholder="Enter Phone"
            onChange={(e) => onValueChange(e)}
            value={phone}
            className="form-control form-group py-3 m-3"
          />

          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => onValueChange(e)}
            value={address}
            className="form-control form-group py-3 m-3"
          />

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Edit"
            onClick={() => editUserDetails()}
          />
        </form>
      </div>
    </>
  );
};

export default EditUser;

// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import "./Signup.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// class EditUser extends Component {
//   notify = () => toast("There You go! Form Submitted");
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//     };
//   }

//   render() {
//     return (
//       <>
//         <div className="container">
//           <div
//             className="form-div"
//             style={{
//               width: "70%",
//               justifyContent: "center",
//               margin: "auto",
//               alignItems: "center",
//               padding: "10rem",
//             }}
//           >
//             <form onSubmit={this.onSubmit} className="pb-2">
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 onChange={this.changeName}
//                 value={this.state.name}
//                 className="form-control form-group w-100 py-3 m-3"
//               />

//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 onChange={this.changeEmail}
//                 value={this.state.email}
//                 className="form-control form-group py-3 m-3"
//               />

//               <input
//                 type="text"
//                 placeholder="Enter Phone"
//                 onChange={this.changePhone}
//                 value={this.state.phone}
//                 className="form-control form-group py-3 m-3"
//               />

//               <input
//                 type="text"
//                 placeholder="Enter Address"
//                 onChange={this.changeAddress}
//                 value={this.state.address}
//                 className="form-control form-group py-3 m-3"
//               />

//               <input
//                 type="submit"
//                 className="btn btn-primary btn-block"
//                 value="Edit"
//                 onClick={this.notify}
//               />
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// export default EditUser;
