const db = require("../databaseConfig");

const getProjects = async () => {
  try {
    const projects = await db("projects");
    return projects;
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

const getProjectsById = async project_id => {
  try {
    const data = await db
      .select("*")
      .from("projects")
      .join("actions", "actions.project_id", "projects.id")
      .where({ "projects.id": project_id });
    if (data) {
      return data;
    }
    return `id does not exist`;
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

const addProject = project => {
  console.log(project);
  return db("projects")
    .insert(project)
    .then(data => {
      console.log(data);
      return data;
    });
};

const addAction = action => {
  return db("actions")
    .insert(action)
    .then(data => {
      return data;
    });
};
const getProjectsActions = async project_id => {
  console.log("=====hit");
  try {
    const actions = await db("actions").where({ project_id: project_id });
    const project = await db("projects").where({ id: project_id });
    if ((project, actions)) {
      return { ...project[0], actions: actions };
    }
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

module.exports = {
  getProjects,
  getProjectsById,
  addProject,
  addAction,
  getProjectsActions
};
