function Main() {
    return(
        <div className="Main">
            <img className="Photo" src="./my-photo.jpg" alt="Vignesh Murugan"></img>
            
            
        </div>
    )
}

function Name() {
    return(
        <div>
            <h1 className="Name">Vignesh Murugan</h1>
            <h5 className="Name--">Web Developer</h5>
        </div>
    )
}

function Buttons() {
    return(
        <div className="Button">
            <button className="Email">📧 Email </button>
            <a href="https://www.linkedin.com/in/vignesh-murugan-339260152">
            <button className="LinkedIn" >LinkedIn</button>
            </a>
        </div>
    )
}

function About() {
    return(
        <div className="About">
            <p className="About-title">About:</p>
            <p className="About-description">Electrical engineer and a Self-taught Coder. </p>
            <p className="About-description1">Passionate about web development.</p>
        </div>
    )
}

function Skills() {
    return(
        <div className="div">
            <p className="div-p">Skills:</p>
            <ul className="div-ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
            </ul>
        </div>
    )
}

function Footer() {
    return(
        <div>

        </div>
    )
}

function Page() {
    return(
        <div className="Page">>
            <Main />
            <Name />
            <Buttons />
            <About />
            <Skills />
            <Footer />
        </div>)
}

ReactDOM.render(Page(), document.getElementById("root"))
