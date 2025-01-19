class Task {
  titulo;
  descripcion;
  completado;

  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = false;
  }

  complete() {
    this.completado = true;
  }
}

let lista = [];

module.exports = {
  getTasks: () => {
    return lista;
  },

  addTask: (taskReq) => {
    let resultado = false;
    let task = new Task(taskReq.titulo, taskReq.descripcion);
    lista.push(task);
    resultado = true;
    return resultado;
  },

  getTask: (titulo) => {
    let resultado = false;
    for (let index = 0; index < lista.length; index++) {
      if (lista[index].titulo == titulo) {
        resultado = lista[index];
      }
    }
    return resultado;
  },

  deleteTask: (titulo) => {
    let resultado = false;
    for (let index = 0; index < lista.length; index++) {
      console.log(lista[index].titulo);
      console.log(titulo);
      if (lista[index].titulo == titulo) {
        lista.splice(index, 1);
        resultado = true;
      }
    }
    return resultado;
  },

  tickTask: (titulo) => {
    let resultado = false;
    for (let index = 0; index < lista.length; index++) {
      console.log(lista[index].titulo);
      console.log(titulo);
      if (lista[index].titulo == titulo) {
        lista[index].complete();
        resultado = true;
      }
    }
    return resultado;
  },
};
