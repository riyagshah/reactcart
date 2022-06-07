import React from 'react';
import styles from "./Footer.module.css";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
         <div className={styles.footer}>
        <Breadcrumb spacing="20px" separator="">
        <BreadcrumbItem>
              <Link to="/aboutus">About Us</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/FAQ">FAQ</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/jobs">Job Opportunities</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/contactus">Contact Us</Link>
            </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default Footer