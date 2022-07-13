function Photo() {
    return(
        <div>
            <img src="" alt="Vignesh Murugan"></img>
        </div>
    )
}

function Name() {
    return(
        <div>

        </div>
    )
}

function Buttons() {
    return(
        <div>

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
        <div>
            <Photo />
            <Name />
            <Buttons />
            <About />
            <Interests />
            <Footer />
        </div>)
}

ReactDOM.render(Page(), document.getElementById("root"))
