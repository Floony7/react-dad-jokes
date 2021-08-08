// import react from "react"
import JokeList from "./components/jokeList"
import Navbar from "./components/navbar"

/*
FEATURES TO ADD:
- Save fav jokes to local storage - select by I'd from state and save to state before saving to local storage
- Once saved, delete "X" option shows to delete it from saved jokes
- View saved jokes (clears current view and loads from Local Storage)
- Animations to enhance UI interactions
Fetching data: https://www.robinwieruch.de/react-hooks-fetch-data
*/

export default function App() {
  return (
    <div className="flex justify-center items-center bg-red-400 bg-cover h-full">
      <div className="container mt-6 pb-4">
        <div className="mx-auto">
          <h1 className="text-6xl text-center text-white">Dad Jokes</h1>
          <h3 className="text-center pt-3 text-gray-100 text-lg">Because lame is a such a subjective term</h3>
        </div>
        <Navbar />
        <JokeList />
      </div>
    </div>
  )
}
