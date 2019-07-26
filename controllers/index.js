const projectModel = require("../data/models");

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.getProjects();
    if (projects) {
      return res.status(200).json({
        status: 200,
        data: projects
      });
    }
    return res.status(404).json({
      status: 404,
      message: "No project available"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const getProjectById = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const project = await projectModel.getProjectsById(id);
      if (project) {
        return res.status(200).json({
          status: 200,
          data: project
        });
      }
      return res.status(404).json({
        status: 404,
        message: "No project available"
      });
    }
    return res.status(404).json({
      status: 404,
      message: "Project with id does not exist"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newProject = await projectModel.addProject({ name, description });
    if (newProject) {
      res.status(201).json({
        status: 201,
        data: newProject
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const createAction = async (req, res) => {
  const id = req.params.id;
  const { notes, description } = req.body;
  try {
    const newAction = await projectModel.addAction({
      notes,
      description,
      project_id: id
    });
    if (newAction) {
      res.status(201).json({
        status: 201,
        data: newAction
      });
    }
  } catch (err) {}
};
const getInfoById = async (req, res) => {
  const id = req.params.id;
  try {
    const info = await projectModel.getProjectsActions(id);
    if (info) {
      return res.status(200).json({
        status: 200,
        data: info
      });
    }
    return res.status(404).json({
      status: 404,
      message: "No info available"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const getActions = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const action = await projectModel.getAction(id);
      if (action) {
        return res.status(200).json({
          status: 200,
          data: action
        });
      }
      return res.status(404).json({
        status: 404,
        message: "No actions available"
      });
    }
    const action = await projectModel.getAction();
    if (action) {
      return res.status(200).json({
        status: 200,
        data: action
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const updateProject = async (req, res) => {
  const id = req.params.id;
  const { notes, description } = req.body;
  try {
    const update = await projectModel.updateProject({ notes, description }, id);
    if (update) {
      res.status(200).json({
        status: 200,
        data: update
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    const removeData = await projectModel.deleteProject(id);
    if (id) {
      res.status(200).json({
        status: 200,
        data: removeData
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: err
    });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  createAction,
  getInfoById,
  getActions,
  updateProject,
  deleteProject
};
