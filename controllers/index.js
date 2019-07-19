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

module.exports = {
  getAllProjects,
  getProjectById
};
