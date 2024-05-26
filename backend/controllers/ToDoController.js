// import express from 'express';
import ToDo from "../models/ToDoModel.js";
import bodyParser from 'body-parser';

// const app = express();
// app.use(bodyParser.json());

// export const getToDo = async (req, res) => {
//     try {
//         const toDo = await ToDoModel.find();
//         res.send(toDo);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

export const getToDo = async (req, res) => {
    const toDo = await ToDo.find();
    res.send(toDo);
};

export const saveToDo = (req, res) => {
    const { toDo } = req.body;
    ToDo.create({ toDo })
        .then((data) => {
            console.log("Added Successfully...");
            res.status(201).send(data);
        })
        .catch((err) => {console.log(err)
            res.send({ error: err, msg: "Something went wrong"});
        });
};


export const updateToDo = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;
    ToDo
        .findByIdAndUpdate(id, { toDo })
        .then((data) => {
            res.send("Updated Successfully...");
        })
        .catch((err) => {console.log(err)
            res.send({ error: err, msg: "Something went wrong"});
        });
    };

    export const deleteToDo = (req, res) => {
        const { id } = req.params
        ToDo
            .findByIdAndDelete(id).then((data) => {
                res.send("Deleted Successfully...");
            })
            .catch((err) => {console.log(err)
                res.send({ error: err, msg: "Something went wrong"});
            });
        };