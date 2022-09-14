import { NavLink } from "react-router-dom";
import { FaNeos } from "react-icons/fa";


export default function Navbar(){

    const isactive={
        color:"grey",
    }
    const notActive={
        color:"black",
        textDecoration:"none",
    }
    return(
        <div className="Navbar">
            <div className="NameLink">
            <NavLink style={{color:"black", textDecoration:"none"}} to={"/"} ><FaNeos className="Nlogo"/></NavLink>
            </div>
            <div className="Navlinks">
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/"} ><b>Home</b></NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/about"} ><b>About</b></NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/skills"} ><b>Skills</b></NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/projects"} ><b>Project</b></NavLink>
            <NavLink style={({isActive})=>(isActive?isactive:notActive)} to={"/contact"} ><b>Contact</b></NavLink>
            </div>
        </div>
    )
}