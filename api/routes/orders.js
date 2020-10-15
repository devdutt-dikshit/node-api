const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
        messages:'orders were fetched'
    })
});

router.post('/',(req,res,next)=>{

    res.status(200).json({
        messages:'orders were created'
    })
});

router.get('/:orderID',(req,res,next)=>{

    res.status(200).json({
        messages:'orders details',
        orderID: req.params.orderID
    });
});

module.exports = router;