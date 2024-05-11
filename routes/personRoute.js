const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
});

router.get('/', async(req, res) => {
    try {
        const data= await Person.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'internal server error'})
    }
});

router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if(workType=== 'chef'){
            const response = await Person.find({work: workType});
            res.status(200).json(response);
        } else {
            res.status(404).json({error: "Invalid work type"})
        }
    } catch (error) {
        res.status(505).json({error: 'Internal server error'});
    }
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const response = await Person.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
        if(!response) {
           return res.status(404).json({error: "Invalid person"})
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(505).json({error: 'Internal server error'});
    }
});

router.delete('/:id', async(req, res) => {
    const id= req.params.id;
    try {
        const response = await Person.findByIdAndDelete(id, {
            new: true,
            runValidators: true
        });
        if(!response) {
            return res.status(404).json({error: "Invalid person"})
        }
        res.status(200).json({message: "Person deleted successfully"});
    } catch (error) {
        res.status(505).json({error: 'Internal server error'});
    }
});

module.exports = router;