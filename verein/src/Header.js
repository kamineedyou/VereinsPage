import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import nextConfig from "../next.config";
import Image from "next/image";
import styles from "../styles/Home.module.css"

const MetaInformation = () => {
    const basePath = nextConfig.basePath;
    return (
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        <title>First Generation</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={basePath + "/assets/home/rockets.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={basePath + "/assets/home/rockets.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={basePath + "/assets/home/rockets.png"}
        />
        <meta
          name="description"
          content="First Generation Studierenden Verein für Arbeiterkinder"
        />
        <meta name="google" content="notranslate" />
      </Helmet>
    );
  };

  const NavigationHome = () => {
    const basePath = nextConfig.basePath;
    const navbarStyles = {
        collapseOnSelect: true,
        expand: "lg",
        variant: "light",
        transition: "top 0.6s",
        width: "100%",
      };
    return (
      <Navbar className="container-fluid color-nav" style={navbarStyles}>
        <Navbar.Brand>
          <Link href={"/"} passHref>
            <a className="navbar-brand pl-4 pr-4" style={{ paddingLeft: "15px" }}>
              <Image
                src={basePath + "/assets/home/rockets.png"}
                width="78.02px"
                height="78.11px"
                className="d-inline-block align-top"
                alt=""
                style={{ marginTop: "4.09px",marginLeft:"9.71px" }}
              />
            </a>
          </Link>
        </Navbar.Brand>
          <Nav className="me-auto fontHome">
            <Link href={"/Home/"} passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
          <Link href={"/Studierende/"} passHref>
              <Nav.Link>Studierende</Nav.Link>
            </Link>
          <Link href={"/Paten/"} passHref>
              <Nav.Link>Paten</Nav.Link>
            </Link>
          <Link href={"/Über uns/"} passHref>
              <Nav.Link>Über uns</Nav.Link>
            </Link>
          <Link href={"/Spenden/"} passHref>
              <Nav.Link>Spenden</Nav.Link>
            </Link>
          <Link href={"/Kontakt/"} passHref>
              <Nav.Link>Kontakt</Nav.Link>
            </Link>
          </Nav>
      </Navbar>
    );
  };

  export default () =>{

    return (
        <>
        <MetaInformation></MetaInformation>
        <NavigationHome></NavigationHome>
        </>
    )
  }