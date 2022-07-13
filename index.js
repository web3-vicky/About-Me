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
            <button className="LinkedIn"> LinkedIn</button>
        </div>
    )
}

function About() {
    return(
        <div>

        </div>
    )
}

function Interests() {
    return(
        <div>

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
            <Interests />
            <Footer />
        </div>)
}

ReactDOM.render(Page(), document.getElementById("root"))
