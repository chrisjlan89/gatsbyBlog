import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/cl.png"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background: #663399;
  h1 {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    /* color: rgb(0, 174, 239); */
  }
  font-family: "Montserrat", sans-serif;
  /* background: #fff; */

  justify-content: space-between;
  display: flex;
  align-content: center;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img
          style={{ width: "100px", margin: "0px" }}
          src={Logo}
          alt="logo"
        ></img>
      </Link>
    </h1>
    <h1> Tasty Treats</h1>
    <div className="falsy-boi"></div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
