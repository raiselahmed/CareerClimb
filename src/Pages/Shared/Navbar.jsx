import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import logo from '../../assets/imges/logo.png'
const Navbar = () => {
const {user, signOutUser} = useContext(AuthContext);


  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/myApplication"}>My Application</NavLink>
      </li>
      <li>
        <NavLink to={''}>Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to={""}>My Equipment</NavLink>
      </li>
    </>
  );

   const navigate = useNavigate();
    const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("logOut");
         showAlert("Success!", " Log out Successful.", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error during logout:", err);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img className="w-[140px] h-[40px] object-cover" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user?.email? <>
             <Link>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </Link>
           </> : <>
           <Link to={'/register'}>
           <button className="btn">Register</button>
        </Link>
       <Link to={'/login'}>
           <button className="btn ms-2">Log In</button>
        </Link>
          </>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
