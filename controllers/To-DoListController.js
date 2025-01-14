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
       let ID = req.params.ID;
       let respuesta = taskModel.deleteTask(ID);
       res.json({success: respuesta});
   },


   tickTask: (req,res) => {
       let ID = req.params.ID;
       let respuesta = taskModel.tickTask(ID);
       res.json({success:respuesta});
   }
}
