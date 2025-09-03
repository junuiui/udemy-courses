import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

// global id
var idNumber = 1;

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProjectState(prev => {
            return {
                ...prev,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectState(prev => {
            const newProject = {
                ...projectData,   
                id: idNumber++
            }
            return {
                ...prev,
                selectedProjectId: undefined, 
                projects: [...prev.projects, newProject]
            }
        });
    }

    console.log(projectState);

    let content;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
    }
    
    return (
        <main className="h-screen my-8 flex gap-8  ">
            <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
            {content}
        </main>
    );
}

export default App;
