import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
// import { ToastContainer, toast } from 'react-toastify'

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import "./styles/UserView.css";

export const UserView = () => {
  const { setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
 
  return (
    <Menu>
      <MenuButton className="prueba" as={Button} colorScheme="green">
        <i className="fa-solid fa-user"></i>
      </MenuButton>
      <MenuList className="menu-item">
        <MenuItem className="menu-item">View Perfil</MenuItem>
        <MenuItem className="menu-item">Change Email</MenuItem>
        <MenuItem className="menu-item">
          <Link className="menu-item" to="/changePass">
            Change Password
          </Link>
        </MenuItem>
        <MenuItem className="menu-item text-danger">Delete Account</MenuItem>
        <MenuItem onClick={handleLogOut} className="text-danger menu-item">
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
