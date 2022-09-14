import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";

export default function Home(){
    return (
        <div className="Home">
          <div className="Homediv-1">
          <h1>Hi 👋,</h1>
           <h1>I'am <b style={{color:"black"}}>Naveed</b> <b style={{color:"black"}}>Pasha</b></h1>
           <h1>MERN Developer</h1>
           <a href="https://drive.google.com/file/d/1LsmXVTZ0pokx3CfxO4EitHs96d9DKqEz/view?usp=sharing" target="_blank"><button className="ResumeButton">Resume</button></a> 
           
           <div className="Lin_Git">  
            <a href="https://github.com/heynaveed" target={"_blank"}><AiFillGithub className="githublink"/></a>
            <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target={"_blank"}><AiFillLinkedin className="githublink"/></a>
           </div>
          </div>
          <div className="Imagediv">
            <img className="myImage" src="https://avatars.githubusercontent.com/u/103996126?s=400&u=79ce7fa13266182c5cda743807f22b96c60aa415&v=4" alt="image" />
          </div>
        </div>
    )
}