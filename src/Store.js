import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Joke from "./components/joke"

/*
FEATURES TO ADD:
- Save fav jokes to local storage - select by I'd from state and save to state before saving to local storage
- Once saved, delete "X" option shows to delete it from saved jokes
- View saved jokes (clears current view and loads from Local Storage)
- Animations to enhance UI interactions
Fetching data: https://www.robinwieruch.de/react-hooks-fetch-data
*/
const url = "https://icanhazdadjoke.com/"

const Title = styled.h1`
  font-size: 3em;
  color: #efefef;
  text-align: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  color: #efefef;
`
const Button = styled.span`
  padding: 0.3rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: darkviolet;
  }
`

const Container = styled.div`
  margin: 0 auto;
  width: 70vw;
`

const Message = styled.div`
  padding: 0.25rem;
  background-color: ${(props) => props.color};
  color: #fff;
`

function App() {
  const limit = 10
  const [data, setData] = useState([])
  const [isError, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  // const [fav, setFav] = useState({})

  const getData = useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      setLoading(true)
      let jokes = []

      try {
        while (jokes.length < limit) {
          const res = await axios.get(url, { headers: { Accept: "application/json" } })
          jokes.push({ id: res.data.id, text: res.data.joke })
        }

        setData(jokes)
      } catch (error) {
        setError(error)
      }

      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Title>Dad Jokes</Title>
      {isLoading && <Message color="transparent">Loading new jokes...</Message>}
      {isError && <Message color="tomato">Something went wrong. Please reload the page.</Message>}
      {/* <List>{data && data.map((j) => <li>{j.text}</li>)}</List> */}
      <List>{data && data.map((j) => <Joke key={j.id} text={j.text} />)}</List>
      <Button onClick={() => getData} color="#fff" bgColor="#1ca9c9">
        New Jokes
      </Button>
    </Container>
  )
}

export default App

// useEffect(() => {
//   const fetchData = async () => {
// const options = {
//   url: 'https://icanhazdadjoke.com/',
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json'
//   }
//     }
//     const result = await axios(options)
//       setData(result.data)
//   }
//   fetchData()
// }, [])
