import { Project } from "./projects";

export function loadCurrentTodos(project) {
    if (!(project instanceof Project)) {
        console.log("Project was not selected.");
    }
    const currentProject = document.getElementById("current-project");
    currentProject.textContent = `${project.name}'s todos.`;
}
