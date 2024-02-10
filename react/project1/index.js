// const page = (
//     <div>
//         <img src="React.webp" width="100px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordon Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprice apps, including mobile apps</li>
//         </ul>
//     </div>
// )

import Navbar from "./Navbar"

function List(){
    return(
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordon Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprice apps, including mobile apps</li>
        </ul>
    )
}


function Page(){
    return(
    <div>
        <Navbar />
        <h1>Fun facts about React</h1>
        <List />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))