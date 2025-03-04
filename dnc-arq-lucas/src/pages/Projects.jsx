import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from "../Contexts/appContext"

function Projects() {
    const appContext = useContext(AppContext)
    return(
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects 