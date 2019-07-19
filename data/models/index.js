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
  try {
    if (action_id) {
      const contextActions = await db
        .select(
          "actions.notes",
          "actions.description",
          "actions.completed",
          "actions.project_id",
          "context.name"
        )
        .from("actions")
        .join("contextactions", "contextactions.action_id ", "actions.id")
        .join("context", "contextactions.context_id", "context.id")
        .where({ action_id: action_id });
      return contextActions.map(ca => {
        return { ...ca, completed: !!ca.completed, name: [ca.name] };
      });
    }
    const allAction = await db("actions");
    return allAction.map(ca => {
      return { ...ca, completed: !!ca.completed };
    });
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
