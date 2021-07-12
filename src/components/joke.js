import React from "react"
import styled from "styled-components"

const Item = styled.li`
  padding: 5px;
  background: rgb(202, 222, 222);
  background: linear-gradient(0deg, rgba(100, 100, 100, 0.5) 0%, rgba(84, 84, 84, 0.5) 100%);

  &:hover {
    background: linear-gradient(0deg, rgba(100, 100, 100, 0.2) 0%, rgba(84, 84, 84, 0.2) 100%);
  }
`

const Joke = ({ text }) => {
  return <Item>{text}</Item>
}

export default Joke
