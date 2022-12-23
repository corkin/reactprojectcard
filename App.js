
import React from "react"
import Interests from "./components/Interests"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return(
        <div className="app">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}