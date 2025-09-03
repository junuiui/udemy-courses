import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    function handleAddTask(text) {
        console.log(projectState.tasks)
        setProjectState(prev => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prev.selectedProjectId,
                id: taskId,
            };

            return {
                ...prev,
                tasks: [newTask, ...prev.tasks]
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectState(prev => {
            return {
                ...prev,
                tasks: prev.tasks.filter((tasks) => tasks.id !== id)
            };
        });
    }

    function handleStartAddProject() {
        setProjectState(prev => {
            return {
                ...prev,
                selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectState(prev => {
            return {
                ...prev,
                selectedProjectId: undefined,
            };
        });
    }

    function handleSelectedProejct(id) {
        setProjectState(prev => {
            return {
                ...prev,
                selectedProjectId: id,
            };
        });
    }

    function handleAddProject(projectData) {

        setProjectState(prev => {
            const idNumber = Math.random();
            const newProject = {
                ...projectData,
                id: idNumber
            }
            return {
                ...prev,
                selectedProjectId: undefined,
                projects: [...prev.projects, newProject]
            }
        });
    }

    function handleDeleteProject() {
        setProjectState(prev => {
            return {
                ...prev,
                selectedProjectId: undefined,
                projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId)
            };
        });
    }

    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

    let content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks} />;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
    }

    return (
        <main className="h-screen my-8 flex gap-8  ">
            <ProjectSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectedProejct} 
                selectedProjectId={projectState.selectedProjectId}/>
            {content}
        </main>
    );
}

export default App;
