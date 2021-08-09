import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import Joke from "./joke"

const BASE_URL = "https://icanhazdadjoke.com/"

export default function JokeList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [seenJokes, setSeenJokes] = useState([])

  useEffect(() => {
    setLoading(true)
    let limit = 10
    const fetchData = async () => {
      let jokes = []
      try {
        while (jokes.length < limit) {
          const res = await axios.get(BASE_URL, { headers: { Accept: "application/json" } })
          jokes.push({ id: uuidv4(), text: res.data.joke, votes: 0 })
        }
        setData(jokes)
        setLoading(false)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [])

  const handleVote = (id, change) => {
    const votedJokes = [...data].map((j) => (j.id === id ? { ...j, votes: j.votes + change } : j))
    setData(votedJokes)
  }

  return (
    <div className="w-8/12 mx-auto my-5 rounded-lg mt-5 md:flex bg-gray-50 bg-opacity-70">
      {error && <p>Something went wrong, try refreshing the page.</p>}
      {loading ? (
        <h4 className="mx-auto">Loading...</h4>
      ) : (
        <ul>
          {data.map((j) => (
            <Joke id={j.id} text={j.text} votes={j.votes} upvote={() => handleVote(j.id, 1)} downvote={() => handleVote(j.id, -1)} />
          ))}
        </ul>
      )}
    </div>
  )
}
