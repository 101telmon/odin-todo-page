import { loadCurrentTodos } from "./todos";

const projectContainer = document.getElementById("project-container");

export class Project {
    static projects = [];
    constructor(name, todos = []) {
        this.name = name;
        this.todos = todos;
    }
    static addNewProject(project) {
        this.projects.push(project);
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("project");
        projectBtn.textContent = project.name;
        projectBtn.addEventListener("click", (event) => {
            loadCurrentTodos(project);
        });
        projectContainer.appendChild(projectBtn);
    }
}
