document.getElementById("addTaskForm").addEventListener("submit", addtask);
document.getElementById("deleteTask").addEventListener("click", deleteTask);
document.getElementById("tickTask").addEventListener("click", tickTask);
document.getElementById("getTask").addEventListener("click", getTask);
document.getElementById("getTasks").addEventListener("click", getTasks);

let allTasks = true;

getTasks();


async function getTasks() {
  let tabla = document.getElementById("taskList");
  try {
    const response = await fetch("/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    let lista = data.tareas;
    let filas = "";
    for (let index = 0; index < lista.length; index++) {
      let tarea = lista[index];
      let imagen = "img/cuadrado-en-blanco.png"; // Mover la inicialización aquí
      if (tarea.completado == true) {
        imagen = "img/tick.png";
      }
      filas += `<tr><td>${tarea.titulo}</td><td>${tarea.descripcion}</td><td><img src="${imagen}" id="imgCompletado"></td></tr>`;
    }
    tabla.innerHTML = filas;
    allTasks = true;
  } catch (error) {
    console.log(error);
  }
}


async function addtask(event) {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;

  try {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descripcion }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Añadido correctamente");
      getTasks();
    } else {
      alert("No se puedo añadir");
    }
  } catch (error) {
    console.log("Error inesperado");
  }
}


async function deleteTask() {
  const titulo = document.getElementById("tituloOpcion").value;
  console.log(titulo);
  try {
    const response = await fetch(`/task/${titulo}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      alert("Eliminado correctamente");
      if (allTasks) {
        getTasks();
      } else {
        getTask();
      }
    } else {
      alert("No se puedo eliminar");
    }
  } catch (error) {
    console.log("Error inesperado");
  }
}


async function tickTask() {
  const titulo = document.getElementById("tituloOpcion").value;
  console.log(titulo);
  try {
    const response = await fetch(`/tasks/${titulo}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      alert("Tarea completada");
      if (allTasks) {
        getTasks();
      } else {
        getTask();
      }
    } else {
      alert("No se puedo completar la tarea");
    }
  } catch (error) {}
}


async function getTask() {
  const titulo = document.getElementById("tituloOpcion").value;
  console.log(titulo);
  try {
    const response = await fetch(`/tasks/${titulo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let imagen = "img/cuadrado-en-blanco.png";
    let tabla = document.getElementById("taskList");
    const data = await response.json();
    let tarea = data.tarea;
    if (tarea.completado == true) {
      imagen = "img/tick.png";
    }
    if(tarea){
      let fila = `<tr><td>${tarea.titulo}</td><td>${tarea.descripcion}</td><td><img src="${imagen}" id="imgCompletado"></td></tr>`;
      tabla.innerHTML = fila;
      allTasks = false;
    }else{
      tabla.innerHTML = "";
    }
  } catch (error) {
    console.log(error);
  }
}
