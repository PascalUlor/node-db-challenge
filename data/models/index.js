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
const getActions = async () => {
  try {
    const actions = await db("actions");
    return actions;
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

module.exports = {
  getProjects,
  getProjectsById,
  addProject,
  addAction
};
