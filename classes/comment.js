export const COMMENT_TYPE = {
  COMMENT: 'COMMENT',
  REPRIMAND: 'REPRIMAND',
};

export default class Comment {
  id = null;
  projectId = null;
  taskId = null;
  type = null;
  image = null;
  text = null;
  constructor({
    id,
    projectId = null,
    taskId = null,
    type = COMMENT_TYPE.COMMENT,
    image = null,
    text = null,
  }) {
    if (!id) {
      throw new Error('Invalid Task id');
    }
    if (!projectId) {
      throw new Error('Invalid current project id');
    }
    if (!image) {
      throw new Error('Invalid comment image');
    }

    this.id = id;
    this.projectId = projectId;
    this.taskId = taskId;
    this.type = type;
    this.image = image;
    this.text = text;
  }

  getPropNameText(key) {
    return {
      id: 'ID',
      projectId: 'ID проекта',
      taskId: 'ID задачи',
      type: 'Тип',
      image: 'Изображение',
      text: 'Текст',
    }[key] || key;
  }

  getPropValueText(key) {
    if (key === 'type') {
      return {
        [COMMENT_TYPE.COMMENT]: 'Комментарий',
        [COMMENT_TYPE.ONSITE]: 'Замечание',
      }[this.type] || this.tyoe;
    }

    return this[key];
  }

  getPropTable() {
    return [
      'type',
      'image',
      'text',
    ].map(key => ({
      label: this.getPropNameText(key),
      value: this.getPropValueText(key),
    }));
  }
};