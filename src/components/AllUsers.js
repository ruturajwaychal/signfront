import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./EditModal";
import { Link } from "react-router-dom";

const AllUsers = ({ history }) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/app/signup`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  // const gotoedit = () => {
  //   history.push("/edituser");
  // };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>

        {data.map((item) => {
          return (
            <>
              <tbody key={item._id}>
                <tr>
                  <th>{item._id}</th>
                  <th>{item.name}</th>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    {/* <Link to="/edituser">
                      {" "}
                      <AiFillEdit />{" "}
                    </Link>
                    <AiFillDelete /> */}
                    <Link to={`/edituser/${item._id}`}>
                      <AiFillEdit
                        style={{
                          textDecoration: "none",
                          color: "#00000",
                          marginRight: "3px",
                          fontSize: "22px",
                        }}
                      />
                    </Link>
                    <AiFillDelete
                      style={{
                        textDecoration: "none",
                        color: "#00000",
                        marginRight: "3px",
                        fontSize: "22px",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default AllUsers;
