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
  try {
    const actions = await db("actions").where({ project_id: project_id });
    const project = await db("projects")
      .where({ id: project_id })
      .first();
    if ((project, actions)) {
      return {
        ...project,
        completed: !!project.completed,
        actions: actions.map(act => {
          return { ...act, completed: !!act.completed };
        })
      };
    }
  } catch (err) {
    console.log(`database error ${err}`);
  }
};

const getAction = async action_id => {
  console.log("=====Query", action_id);
  try {
    if (action_id) {
      const action = await db("actions")
        .where({ id: action_id })
        .first();
      const context = await db("context").where({ action_id: action_id });
      return {
        ...action,
        completed: !!action.completed,
        context: context
      };
    }
    return db("actions");
  } catch (err) {}
};

module.exports = {
  getProjects,
  getProjectsById,
  addProject,
  addAction,
  getProjectsActions,
  getAction
};
