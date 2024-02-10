// import React from "react"
// import ReactDOM from "react-dom"

// function Navbar(){
//     return (
//         <h1>Hi im learning react</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//     </div>,
//     document.getElementById("root")
// );

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperitive way to program"
// h1.className = "header"
// console.log(h1)
// // document.getElementById("root").append(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

// const page = (
//     <div>
//         <h1 className = "header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(page, 
//     document.getElementById("root")
//     )

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(navbar))
