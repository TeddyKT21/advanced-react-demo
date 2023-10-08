// import React from 'react'

import { useSelector } from "react-redux"
import { RootState } from "../store"

export default function Home() {
  const userName = useSelector((state:RootState) => state.user.name);
  return (
    <div>Welcome, {userName} !</div>
  )
}
