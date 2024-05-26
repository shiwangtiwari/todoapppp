import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true
  }
});

const ToDo = mongoose.model('ToDo', todoSchema);

export default ToDo;