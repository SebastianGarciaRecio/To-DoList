document.getElementById("addTaskForm").addEventListener("submit", addtask);
document.getElementById("getTasks").addEventListener("click", getTasks);
document.getElementById("deleteTask").addEventListener("click", deleteTask);
document.getElementById("tickTask").addEventListener("click", tickTask);
document.getElementById("getTask").addEventListener("click", getTask);


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
    } else {
      alert("No se puedo añadir");
    }
  } catch (error) {
    console.log("Error inesperado");
  }
}

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
      filas += `<tr><td>${tarea.titulo}</td><td>${tarea.descripcion}</td><td>${tarea.completado}</td></tr>`;
    }
    tabla.innerHTML = filas;
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
        } else {
        alert("No se puedo completar la tarea");
        }
    } catch (error) {
       
    }
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
    
    let tabla = document.getElementById("taskList");
    const data = await response.json();
    let tarea = data.tarea;
    let fila = `<tr><td>${tarea.titulo}</td><td>${tarea.descripcion}</td><td>${tarea.completado}</td></tr>`;
    tabla.innerHTML = fila;
    
    
  } catch (error) {
    console.log(error);
  }
}