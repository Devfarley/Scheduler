const express = require('express');
const router = express.Router();
const {
    readSchedule,
    createSchedule,
    deleteSchedule,
    upsertSchedule
} = require('../../data/SchedulerDAL');

router.get('/', (req, res, next) =>{
    readSchedule().then(data => {
        res.send(data);
    });
});

router.post('/', (req, res, next) => {
    const body = req.body
    createSchedule(body).then(data => res.send(data));
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const body = req.body
    upsertSchedule(id, body).then(data => res.send(data));
});

router.delete('/', (req, res, next) => {
    const id = req.body._id
    deleteSchedule(id).then(data => res.send(data));
});

module.exports = router;