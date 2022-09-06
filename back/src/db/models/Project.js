import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }

  //프로젝트 개별 아이디로 리스트 중 하나 추림
  static async findById({ project_id }) {
    const project = await ProjectModel.findOne({ id: project_id });
    return project;
  }

  //유저 아이디로 전체 프로젝트 리스트 가져옴
  static async findAll({ user_id }) {
    const projects = await ProjectModel.find({ user_id });
    return projects;
  }

  static async update({ project_id, fieldToUpdate, newValue }) {
    const filter = { id: project_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedProject = await ProjectModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProject;
  }
}

export { Project };
