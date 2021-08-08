import React from "react"

export default function Navbar(props) {
  return (
    <div className="flex justify-center mt-4">
      <span className="py-2 px-5 rounded text-white font-semibold bg-green-700 hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer max-w-screen-md">Fetch Jokes</span>
      <span className="py-2 px-12 text-center rounded text-white font-semibold bg-purple-700 ml-2 hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer max-w-screen-md">Save</span>
      <span className="py-2 px-12 text-center rounded text-white font-semibold bg-red-700 ml-2 hover:bg-purple-500 transition duration-300 ease-in-out cursor-pointer max-w-screen-md">Clear</span>
    </div>
  )
}
