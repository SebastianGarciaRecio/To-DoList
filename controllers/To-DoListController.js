const taskModel = require("../models/To-DoListModel");


module.exports = {
   addTask: (req,res) => {
       let taksReq = req.body;
       let respuesta = taskModel.addTask(taksReq);
       res.json({success: respuesta})
   },


   getTasks: (req,res) => {
       let tasks = taskModel.getTasks();
       res.json({tareas: tasks})
   },


   deleteTask: (req,res) => {
       let titulo = req.params.titulo;
       let respuesta = taskModel.deleteTask(titulo);
       res.json({success: respuesta});
   },


   tickTask: (req,res) => {
       let titulo = req.params.titulo;
       let respuesta = taskModel.tickTask(titulo);
       res.json({success:respuesta});
   },

   getTask: (req,res) => {
       let titulo = req.params.titulo;
       let task = taskModel.getTask(titulo);
       res.json({tarea: task})
   }
}
