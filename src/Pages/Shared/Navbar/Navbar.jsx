
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import useAuth from "../../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../../Routes/AuthProviders";

const Navbar = () => {
  // const {userLogout, user} = useContext(AuthContext);
  const {userLogout, user} =  useAuth();
  
  const handleLogOut = () => {
    userLogout()
    .then(()=>{})
    .catch(err => console.log(err))
  }


    const navitems = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/service'}>Service</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    {
      user ? <><li><NavLink to={'/bookings'}>My Booking</NavLink></li> <li><button onClick={handleLogOut}>Log Out</button> </li></> : <li><NavLink to={'/login'}>Log in</NavLink></li>
    }
    </>
  return (
    <div className="navbar bg-base-100 h-28 mb-5">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navitems}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-secondary">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
