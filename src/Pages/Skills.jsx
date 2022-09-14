import { FaHtml5,FaCss3Alt,FaReact } from "react-icons/fa";
import { SiJavascript,SiRedux ,SiTypescript,SiExpress,SiNodedotjs,SiMysql} from "react-icons/si";
import { IoMdLeaf} from "react-icons/io";


export default function Skills(){
    return (
        <div  className="Skill">
           <h1>Skills</h1>
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
    )
}