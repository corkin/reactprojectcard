import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function Card(){
    return (
        <div className="container">
           <App />
        </div>
    )
}

ReactDOM.render(<Card />, document.getElementById('root'));