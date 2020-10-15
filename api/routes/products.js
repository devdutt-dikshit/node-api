const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'GET Requests'
    });
});

router.post('/', (req,res,next) => {
    const products = {
        productId: req.body.prodID,
        quantity: req.body.quantity
    };
    console.log(products)
    res.status(200).json({
        message:'POST Requests'
    });
});

router.get('/:productID',(req,res,next)=>{
    const id= req.params.productID;
    if(id==='special'){
        res.status(200).json({
            message:' NEW SPECIAL ID',
            ID: id 
        });
    }
    else{
        res.status(200).json({
            message:' NEW SPECIAL new ID',
        });
    }
});

router.patch('/:productID',(req,res,next)=>{
    res.status(200).json({
        messages:'UPDATED'
    })
});

router.delete('/:productID',(req,res,next)=>{
    res.status(200).json({
        messages:'deleted'
    })
});

module.exports = router;