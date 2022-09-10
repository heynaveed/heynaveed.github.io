import { NavLink } from "react-router-dom";

export default function Navbar(){

    const isactive={
        color:"blue",
    }
    const notActive={
        color:"black",
        textDecoration:"none",
    }
    return(
        <div className="Navbar">
            <div className="NameLink">
            <NavLink style={{color:"black", textDecoration:"none"}} to={"/"} >Naveed Pasha</NavLink>
            </div>
            <div className="Navlinks">
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/"} >Home</NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/about"} >About</NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/skills"} >Skills</NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/projects"} >Project</NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/contact"} >Contact</NavLink>
            </div>
        </div>
    )
}