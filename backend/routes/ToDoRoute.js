import { Router } from "express";
import {getToDo, saveToDo, updateToDo, deleteToDo} from "../controllers/ToDoController.js"

const router = Router();

router.get("/get", getToDo)
router.post("/save", saveToDo)
router.put("/update/:id", updateToDo)
router.delete("/delete/:id", deleteToDo)

export default router;