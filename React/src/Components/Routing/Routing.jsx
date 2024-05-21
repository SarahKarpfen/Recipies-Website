import { Route, Routes } from "react-router-dom"
import { Connecting } from "../Connecting/Connecting"
import { Home } from "../Home/Home"
import { About } from "../About/About"
import {AddUser} from "../AddUser/AddUser"
import { AddRecipy } from "../AddRecipy/AddRecipy"
import { Users } from "../Users/Users"
import { RecipyDetails } from "../RecipyDetails/RecipyDetails"

export const Routing =()=>{

    return <div>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="RecipyDetails/:id" element={<RecipyDetails></RecipyDetails>}></Route>
            <Route path="Connecting" element={<Connecting></Connecting>}></Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="AddUser" element={<AddUser></AddUser>}></Route>
            <Route path="AddRecipy" element={<AddRecipy></AddRecipy>}></Route>
            <Route path="Users" element={<Users></Users>}></Route>
        </Routes>
    </div>
}