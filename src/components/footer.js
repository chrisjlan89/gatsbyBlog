import React from "react"
import styled from "styled-components"

const FooterWrappper = styled.div`
  display: flex;
  color: white;
  background: #663399;
  align-items: center;
  align-content: center;
  box-shadow: 5px 3px 10px rgba(25, 17, 34, 0.8);
  justify-content: space-around;
  flex-direction: column;

  h3 {
    display: flex;
    align-self: center;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    margin: 0;
  }
  p {
    margin: 0;
  }
`

const Footer = () => {
  return (
    <FooterWrappper>
      <h3>Tasty Treats</h3>
      <p> Jumpstart your training today </p>
    </FooterWrappper>
  )
}

export default Footer
