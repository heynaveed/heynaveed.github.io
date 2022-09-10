export default function Home(){
    return (
        <div className="Home">
          <div className="Homediv-1">
          <h1>Hi 👋,</h1>
           <h1>I'am <b style={{color:"black"}}>Naveed</b> <b style={{color:"black"}}>Pasha</b></h1>
           <h1>MERN Developer</h1>
           <button>Resume</button>
           <div>
            <button>Linked in</button>
            <button>GIt Hub</button>
           </div>
          </div>
          <div className="Imagediv">
            <img className="myImage" src="https://avatars.githubusercontent.com/u/103996126?s=400&u=79ce7fa13266182c5cda743807f22b96c60aa415&v=4" alt="image" />
          </div>
        </div>
    )
}