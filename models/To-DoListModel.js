class Task {
  #ID;
  #titulo;
  #descripcion;
  #completado;

  constructor(ID, titulo, descripcion) {
    this.#ID = ID;
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#completado = false;
  }

  complete() {
    this.#completado = true;
  }

  getID() {
    return this.#ID;
  }
}

let lista = [];

module.exports = {
  getTasks: () => {
    return lista;
  },

  addTask: (taskReq) => {
    let resultado = false;
    id = lista.length++;
    let task = new Task(id, taskReq.titulo, taskReq.descripcion);
    for (let index = 0; index < lista.length; index++) {
      if (lista[index].getID() == ID) {
        lista.push(task);
        resultado = true;
      }
    }
    return resultado;
  },

  deleteTask: (ID) => {
    let resultado = false;
    for (let index = 0; index < lista.length; index++) {
      if (lista[index].getID() == ID) {
        lista.splice(index, 1);
        resultado = true;
      }
    }
  },

  tickTask: (ID) => {
    let resultado = false;
    for (let index = 0; index < lista.length; index++) {
      if (lista[index].getID() == ID) {
        lista[index].complete();
        resultado = true;
      }
    }
    return resultado;
  },
};
