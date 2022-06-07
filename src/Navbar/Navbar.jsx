import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import Home from "../Home/Home";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Breadcrumb spacing="16px" separator=" ">
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Menu>
                <MenuButton
                  fontWeight="500"
                  aria-label="Options"
                  variant="outline"
                >
                  Clothings
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>
                    <Link to="/mens">Mens</Link>
                  </MenuItem>
                  <MenuItem>Womens</MenuItem>
                  <MenuItem>Kids</MenuItem>
                  <MenuItem>Sports</MenuItem>
                </MenuList>
              </Menu>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Menu>
                <MenuButton
                  fontWeight="500"
                  aria-label="Options"
                  variant="outline"
                >
                  Mobiles
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>MI</MenuItem>
                  <MenuItem>SAMSUNG</MenuItem>
                  <MenuItem>REALme</MenuItem>
                  <MenuItem>VIVO</MenuItem>
                </MenuList>
              </Menu>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Menu>
                <MenuButton
                  fontWeight="500"
                  aria-label="Options"
                  variant="outline"
                >
                  Accessories
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>Kitchen</MenuItem>
                  <MenuItem>Car</MenuItem>
                  <MenuItem>Mobile</MenuItem>
                  <MenuItem>Laptop</MenuItem>
                </MenuList>
              </Menu>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Menu>
                <MenuButton
                  fontWeight="500"
                  aria-label="Options"
                  variant="outline"
                >
                  Fitness
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>Bumbells</MenuItem>
                  <MenuItem>Proteins</MenuItem>
                  <MenuItem>Accessories</MenuItem>
                  <MenuItem>Shoes</MenuItem>
                </MenuList>
              </Menu>
            </BreadcrumbItem>

            
          </Breadcrumb>
        </div>

        <div className={styles.right}>
          <Breadcrumb spacing="16px" separator=" ">
            <BreadcrumbItem>
              <Link to="/cart">
                <Icon as={BsCart4} />
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/contactus">
                <Icon as={BsCart4} />
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/contactus">
                <Icon as={BsCart4} />
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
