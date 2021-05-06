import React from "react";
import { Component,Fragment } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import "../Navbar.css";
import logo from "./assets/logoNav.png";
import login from "./assets/Login.svg";

class Navbar extends Component {
  state = {
    showCollapsedMenu: false,
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({
      showCollapsedMenu: !this.state.showCollapsedMenu,
    });
  };

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const show = this.state.showCollapsedMenu ? "show" : "";
    const showDrop = this.state.isOpen ? "show" : "";
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            onClick={this.toggleMenu}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={"collapse navbar-collapse " + show}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li>
                <Link class="navbar-brand" to="#">
                  <img
                    src={logo}
                    alt=""
                    width="40"
                    height="35"
                    class="d-inline-block align-text-top"
                    id="nav_logo_img"
                  />
                  <span style={{ marginLeft: 4 }} id="nav_logo_text">
                    {" "}
                    Been There
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <strong>HOME</strong>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  <strong>PLAN TRIP</strong>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <strong>EXPLORE NEARBY</strong>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="dropdown" onClick={this.toggleDropdown}>
                  <button
                    className="btn btn-dark dropdown-toggle bg-dark"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    style={{color:"gray"}}
                  >
                   <strong>PLAN TRIP</strong>
                  </button>
                  <div
                    className={"dropdown-menu " + showDrop}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/tripPlanner">
                      Kashmir
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Meghalaya
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Kerala
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Uttar Pradesh
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Goa
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      West Bengal
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Gujarat
                    </Link>
                    <Link className="dropdown-item" to="#nogo">
                      Uttarakhand
                    </Link>
                  </div>
                </div>
              </li>
              
            </ul>

            <ul className="navbar-nav ml-auto">
              <form className="form-inline me-2 my-rg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  {/* <strong>LOGIN</strong> */}
                  <img
                    src={login}
                    alt=""
                    width="40"
                    height="40"
                    class="d-inline-block align-text-top"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
