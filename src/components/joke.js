import React from "react"
import styled from "styled-components"

// const Item = styled.li`
//   padding: 5px;
//   cursor: pointer;
//   background: rgb(202, 222, 222);
//   background: linear-gradient(0deg, rgba(100, 100, 100, 0.5) 0%, rgba(84, 84, 84, 0.5) 100%);
//   display: flex;
//   justify-content: space-between;
//   &:hover {
//     background: linear-gradient(0deg, rgba(100, 100, 100, 0.2) 0%, rgba(84, 84, 84, 0.2) 100%);
//   }
// `

// const Text = styled.span`
//   width: 70%;
// `

// const Icons = styled.span`
//   display: flex;
//   justify-content: space-evenly;
//   width: 25%;
// `

const Joke = ({ text, key }) => {
  return (
    <li key={key} className="border-b-2 py-2 px-2 border-opacity-60 max-w-full cursor-pointer hover:bg-blue-300">
      {text}
    </li>
  )
}

export default Joke
