const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');

router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const menuItem = new MenuItem(data);
        const response = await menuItem.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

router.get('/', async(req, res) => {
    try {
        const response = await MenuItem.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

router.get('/:taste', async(req, res) => {
    try {
        const taste = req.params.taste;
        if(taste === 'sweet' || taste === 'sour') {
            const response = await MenuItem.find({taste});
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'Taste is not defind'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;