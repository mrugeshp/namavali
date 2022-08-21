const express = require('express');
const router = express.Router();
const customersData = require('../shared/data')

router.get('/list', (req, res, next) => {
    console.log('Get request')
    res.json(customersData)
})

router.get('/:cid', (req, res, next) => {
    const cid = parseInt(req.params.cid);
    console.log('cid', cid)
    console.log(customersData)
    const customer = customersData.find((c) => {
        return c.id === cid;
    })
    if(!customer) {
        res.status(404).json({
            message: 'data not found'
        });
    }
    res.json(customer)
})



module.exports = router;