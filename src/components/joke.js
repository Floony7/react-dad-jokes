import React from "react"

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

const Joke = ({ text, id, votes, upvote, downvote }) => {
  return (
    <li key={id} className="joke border-b-2 py-2 px-2 border-opacity-80 max-w-full cursor-pointer hover:bg-red-300">
      <div className="joke-text">{text}</div>
      <div className="joke-vote"></div>
    </li>
  )
}

export default Joke
