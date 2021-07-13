import { useReducer, useEffect } from "react"
import axios from "axios"

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
}

const BASE_URL = "https://icanhazdadjoke.com/"

const initialState = { jokes: [], loading: true, error: false }

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

export default function useFetchJobs(url, page) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL)
  }, [url])

  return state
}
