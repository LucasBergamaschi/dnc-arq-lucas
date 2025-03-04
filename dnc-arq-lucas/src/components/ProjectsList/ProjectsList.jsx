
import { useContext, useState, useEffect} from 'react'
import './ProjectsList.css'


/*ASSETS*/

import LikedFilled from '../../assets/Like.svg'
import LikeOutline from '../../assets/Unlike.svg'

//COMPONENTS
import Button from '../Button/Button.jsx'

//UTILS
import { getApiData} from '../../services/apiServices.js'

//CONTEXT 
import { AppContext } from '../../Contexts/appContext'

function ProjectsList(props) {
    const appContext = useContext(AppContext)
    const [projects, setProject] = useState([])
    const [favProjects, setFavProject] = useState([])

    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse  = await getApiData('projects')
                setProject(projectsResponse)
            } catch {
                setProject([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const SavedFavProjects =JSON.parse(sessionStorage.getItem('favProjects'))
        if (SavedFavProjects) {
            setFavProject(SavedFavProjects)
        }
    }, [])
    return(
        <div className="projects-section" style={{ backgroundImage: `url(/${props.image})`}}>
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>    
            </div>
            <div className="projects-grid">
                {
                    projects.map((project) => (
                        <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                            <div 
                                className="thumb tertiary-background"
                                style={{backgroundImage:`url(${project.thumb})`} }
                            ></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick={() =>handleSavedProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ? LikedFilled : LikeOutline} height="20px" /> 
                            </Button>
                            
                        </div>
                    ))
                }
                

            </div>

        </div>
    )
}

export default ProjectsList 