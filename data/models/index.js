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
    await db("projects")
      .join("actions", "actions.project_id", "projects.id")
      .where({ "projects.id": project_id });
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

module.exports = {
  getProjects,
  getProjectsById
};
