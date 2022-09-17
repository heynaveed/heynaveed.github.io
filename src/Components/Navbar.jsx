import { useRef } from "react";
import { FaNeos } from "react-icons/fa";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaHtml5,FaCss3Alt,FaReact } from "react-icons/fa";
import { SiJavascript,SiRedux ,SiTypescript,SiExpress,SiNodedotjs,SiMysql} from "react-icons/si";
import { IoMdLeaf} from "react-icons/io";
import {MdAttachEmail } from "react-icons/md";
import {BsFillTelephoneInboundFill,BsInstagram } from "react-icons/bs";


export default function Navbar(){
    const skillsection=useRef(null);
    const homesection=useRef(null);
    const aboutsection=useRef(null);
    const projectsection=useRef(null);
    const scrollto=(ref)=>{
        window.scrollTo({
            top:ref.current.offsetTop,
            behavior:"smooth"
        });
    }
    const scrolltocontact=()=>{
        window.scrollTo({
            top:document.documentElement.scrollHeight,
            behavior:"smooth"
        });
    }

    return(
        <div style={{width:"100%"}}>
        <div className="Navbar">
            <div className="ScrollName">
            <FaNeos className="Nlogo" onClick={()=>scrollto(homesection)} />
            </div>
            <div className="ScrollDiv">
            <button onClick={()=>scrollto(homesection)} >Home</button>
            <button onClick={()=>scrollto(aboutsection)}>About</button>
            <button onClick={()=>scrollto(skillsection)}>Skills</button>
            <button onClick={()=>scrollto(projectsection)} >Projects</button>
            <button onClick={scrolltocontact}>Contact</button>
            </div>
        </div>

       <div className="dummy"></div>
        {/* ----#####---------------HOME SECTION----#####--------------- */}
        <div >
      <div>
        <div className="Home" ref={homesection}>
          <div className="Homediv-1">
          <h1>Hi 👋,</h1>
           <h1>I'am <b style={{color:"black"}}>Naveed</b> <b style={{color:"black"}}>Pasha</b></h1>
           <h1>MERN Developer</h1>
           <a href="https://drive.google.com/file/d/1tfgE8dasU-MtL2lpZgNMdnPi2s5ppodK/view?usp=sharing" target="_blank"><button className="ResumeButton"><b>Resume</b></button></a> 
           <div className="Lin_Git">  
            <a href="https://github.com/heynaveed" target={"_blank"}><AiFillGithub className="githublink"/></a>
            <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target={"_blank"}><AiFillLinkedin className="githublink"/></a>
           </div>
          </div>
          <div className="Imagediv">
            <img className="myImage" src="https://avatars.githubusercontent.com/u/103996126?s=400&u=79ce7fa13266182c5cda743807f22b96c60aa415&v=4" alt="image" />
          </div>
        </div>
        </div>



        {/* ----#####---------------ABOUT SECTION----#####--------------- */}
        <div className="About" ref={aboutsection}>
        <h1 >About</h1>
            <h2 className="about-subtitle">I'am Naveed Pasha</h2>
            <p>
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology. Looking forward to applying
              and enhancing my skills and knowledge as a developer.
            </p>
            <br />
            <p>
              Drop a mail @ <a href="mailto:naveedpasha0058@gamil.com">naveedpasha0058@gmail.com</a>
            </p>
          </div>

          {/* ----#####---------------SKILL SECTION----#####--------------- */}
          
          <div  className="Skill" ref={skillsection}>
           <h1 style={{color:"grey"}}>Skills</h1>
           <div className="Skills">
           <div className="Skillsdiv-1">
                <h2>Front-End  Skills</h2>
                <div> <FaHtml5 className="skillsIcons"/><p>HTML5</p></div>
                <div><FaCss3Alt className="skillsIcons"/><p>CSS3</p></div>
                <div><SiJavascript className="skillsIcons"/><p>JAVASCRIPT</p></div>
                <div><FaReact className="skillsIcons"/><p>React</p></div>
                <div><SiRedux className="skillsIcons"/><p>Redux</p></div>
                <div><SiTypescript className="skillsIcons"/><p>TypeScript</p></div>
           </div>
           <div className="Skillsdiv-1">
                <h2>Back-End  Skills</h2>
                <div><SiExpress className="skillsIcons"/><p>Express.js</p></div>
                <div><SiNodedotjs className="skillsIcons"/><p>Node.js</p></div>
                <div><SiMysql className="skillsIcons"/><p>MySQL</p></div>
                <div><IoMdLeaf className="skillsIcons"/><p>MongoDB</p></div>
           </div>
           </div>
        </div>

         {/* ----#####---------------PROJECT SECTION----#####--------------- */}
           <div className="Projects" ref={projectsection}>
              <h1 style={{color:"grey"}}>Projects</h1>
              <div className="AllPrjects">
                <div className="subProject">
                    <img src="https://i.ibb.co/KV5DhZM/Screenshot-1050.png" alt="" />
                    <h2>Fartech</h2>
                    <p>
                       An British-Portuguese online luxury fashion retail platform that sells
                        products from over 700 boutiques and brands from around the world.
                    </p>
                    <p>
                    A collaborative project built by a team of 7 executed in 4 days
                    </p>
                    <div style={{display:"flex", alignItems:"center"}}><h3>Tech Stack : </h3><p> HTML | CSS | JavaScript.</p></div>
                    <div  className="ProjectButtons">
                    <a href="https://github.com/Sumit-Gangwar/Farfetch-Project" target={"_blank"}> <button>CODE</button></a><a href="https://celebrated-stardust-10d06f.netlify.app/" target={"_blank"}><button>LIVE</button></a>
                    </div>
                </div>
                <div className="subProject">
                    <img src="https://i.ibb.co/Df5GBXJ/Screenshot-1049.png" alt="" />
                    <h2>Overstock</h2>
                    <p>Overstock is an American internet retailer selling primarily furniture headquartered in Midvale. The company sell home decor, furniture, bedding, and many other goods that are closeout merchandise </p>
                    <p>A collaborative project built by a team of 6 executed in 4 days</p>
                    <div style={{display:"flex", alignItems:"center"}}><h3>Tech Stack : </h3><p> HTML | CSS | JavaScript.</p></div>
                    <div className="ProjectButtons">
                       <a href="https://github.com/AnshGirdhar1/Unit-2-Project" target={"_blank"}> <button>CODE</button></a><a href="https://famous-kitten-13c790.netlify.app/" target={"_blank"}><button>LIVE</button></a>
                    </div>
                </div>
              </div>
           </div>

          {/* ----#####---------------CONTACT SECTION----#####--------------- */}

          <div className="Contact" >
            <h1 style={{color:'grey'}}>Get In Touch</h1>
            <h1>Naveed Pasha</h1>
            <div className="SocialContact">
            <div> 
                <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target={"_blank"}><AiFillLinkedin className="socialicon" /></a>
                <br />
                <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target={"_blank"}><b className="socialname">LinkedIn</b></a>
                </div>
                <div> 
                <a href="mailto:naveedpasha0058@gmail.com" target={"_blank"}><MdAttachEmail className="socialicon"/></a>
                <br />
                <a href="mailto:naveedpasha0058@gmail.com" target={"_blank"}><b className="socialname">Email</b> </a>
                </div>
                <div> 
                <a href="https://www.instagram.com/nannuba_qureshi_/" target={"_blank"}><BsInstagram className="socialicon"/></a>
                <br />
                <a href="https://www.instagram.com/nannuba_qureshi_/" target={"_blank"}><b className="socialname">Instagram</b></a>
                </div>
                <div> 
                <a href="tel:+916362656225" target={"_blank"}><BsFillTelephoneInboundFill className="socialicon"/></a>
                <br />
                <a href="tel:+916362656225" target={"_blank"}><b className="socialname">Phone</b></a>
                </div>
            </div>
            <b>© 2020 copyright all right reserved</b>
        </div>
        </div>
        </div>
    )
}