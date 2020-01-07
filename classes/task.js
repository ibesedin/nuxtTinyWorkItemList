export const TASK_TYPE = {
  PLANNED: 'PLANNED',
  ONSITE: 'ONSITE',
};

export const TASK_STATUS = {
  CREATED: 'CREATED',
  CONFIRMAWAIT: 'CONFIRMAWAIT',
  OPENED: 'OPENED',
  CLOSED: 'CLOSED',
};

export default class Task {
  #context = null;
  id = null;
  projectId = null;
  type = null;
  name = null;
  duration = 0;
  status = null;

  constructor({
    id,
    projectId = null,
    type = TASK_TYPE.ONSITE,
    name = null,
    duration = 0,
    status = TASK_STATUS.CREATED,
    context,
  }) {
    if (!id) {
      throw new Error('Invalid Task id');
    }
    if (!projectId) {
      throw new Error('Invalid current project id');
    }

    this.#context = context;
    
    this.id = id;
    this.projectId = projectId;
    this.type = type;
    this.name = name;
    this.duration = duration;
    this.status = status;
  }

  get comments() {
    return this.#context.getters.comments.filter(c => c.taskId === this.id);
  }

  get isOpened() {
    return this.status === TASK_STATUS.OPENED;
  }

  get isClosed() {
    return this.status === TASK_STATUS.CLOSED;
  }

  setStatus(newStatus) {
    if (!Object.values(TASK_STATUS).includes(newStatus)) {
      throw new Error(`Invalid Task status = ${newStatus}`);
    }
    this.status = newStatus;
  }

  getPropNameText(key) {
    return {
      id: 'ID',
      projectId: 'ID проекта',
      type: 'Тип',
      name: 'Название',
      duration: 'Продолжительность',
      status: 'Статус',
    }[key] || key;
  }

  getPropValueText(key) {
    if (key === 'status') {
      return {
        [TASK_STATUS.CREATED]: 'Новая',
        [TASK_STATUS.CONFIRMAWAIT]: 'Ожидает подтверждения',
        [TASK_STATUS.OPENED]: 'Открыта',
        [TASK_STATUS.CLOSED]: 'Закрыта',
      }[this.status] || this.status;
    }

    if (key === 'type') {
      return {
        [TASK_TYPE.PLANNED]: 'КСГ',
        [TASK_TYPE.ONSITE]: 'На месте',
      }[this.type] || this.tyoe;
    }

    return this[key];
  }
  
  getPropTable() {
    return [
      'id',
      'type',
      'projectId',
      'name',
      'duration',
      'status',
    ].map(key => ({
      label: this.getPropNameText(key),
      value: this.getPropValueText(key),
    }));
  }
};