import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

// https://www.robinwieruch.de/react-hooks-fetch-data
const url = "https://icanhazdadjoke.com/"

const List = styled.ul`
  list-style: none;
  padding-left: 0;
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

  useEffect(() => {
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
      <h1>Dad Jokes</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <Message color="tomato">Something went wrong. Please reload the page.</Message>}
      <List>{data && data.map((j) => <li>{j.text}</li>)}</List>
      <Button color="#fff" bgColor="mediumSeaGreen">
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
