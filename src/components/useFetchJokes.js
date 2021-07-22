import { useReducer, useEffect } from "react"
import axios from "axios"

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
}
// If needed; cors-anywhere.herokuapp.com
// const BASE_URL = "https://icanhazdadjoke.com/"

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { jokes: [], loading: true }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jokes: action.payload.jokes }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jokes: [] }
    default:
      return state
  }
}

export default function useFetchJokes(url) {
  const [state, dispatch] = useReducer(reducer, { jokes: [], loading: true, error: null })

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    const fetchData = async () => {
      let jokes = []
      const limit = 10

      try {
        while (jokes.length < limit) {
          const res = await axios.get(url, { headers: { Accept: "application/json" } })
          jokes.push({ id: res.data.id, text: res.data.joke })
          dispatch({ type: ACTIONS.GET_DATA, payload: jokes })
          // jokes.forEach(({ id, text }) => {
          //   console.log(id, text)
          // })
        }
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR })
      }
    }
    fetchData()
  }, [url])

  return state
}
