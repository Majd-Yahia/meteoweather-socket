const express = require('express');
const router = new express.Router();
const Logs = require('../models/logs')


router.delete('/logs/clear', async (req, res) => {
    try {
        await Logs.deleteMany({})
        res.status(204).send();
    } catch (error) {
        consolo.log("error", error);
        res.status(500).send('Something went wrong');
    }
});

router.delete('/logs/:id/remove', async (req, res) => {
    try {
        const { id } = req.params;
        await Logs.deleteMany({ _id: id });
        res.status(204).send();
    } catch (error) {
        console.log("error", error);
        res.status(500).send('Something went wrong');
    }
});


router.get('/logs', (req, res) => {

    let { page, perPage } = req.query;

    page = parseInt(page, 10) || 1;  // Default to 1 if not set
    perPage = parseInt(perPage, 10) || 10;  // Default to 10 if not set[]

    const paginateOptions = {
        page,
        limit: perPage,
        sort: { '_id': -1 },
        customLabels: {
            totalDocs: 'total',
            docs: 'data',
            limit: 'perPage',
            page: 'currentPage',
            nextPage: 'next',
            prevPage: 'prev',
            totalPages: 'lastPage',
            pagingCounter: 'slNo',
            meta: 'paginator',
        },
    };

    Logs.paginate({}, paginateOptions)
        .then(result => {
            // result will have the pagination data
            // similar to Laravel's paginator
            res.send(result);
        })
        .catch(err => {
            res.status(500).send('Something went wrong');
        });
})

module.exports = router;