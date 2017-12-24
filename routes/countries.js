var express = require('express');
var router = express.Router();
var Country=require('../models/Country');

router.get('/:id?',function(req,res,next){
    if(req.params.id){
	    Country.getCountryById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        Country.getAllCountries(function(err,rows){
            if(err)
            {
                var response = {
                    success : true,
                    error: err
                };
                res.json(response);
            }
            else
            {
                var response = {
                    success : true,
                    countries: rows
                };
                res.json(response);
            }
        });
    }
});

router.post('/',function(req,res,next){
        console.log(req.body);
        req.checkBody("name", "Please enter country name.").notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        } else {
            console.log("post method 111");
             // normal processing here
            Country.addCountry(req.body,function(err,count){
             //console.log(req.body);
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(req.body);//or return count for 1 & 0
                }
            }); 
        }
});

router.delete('/:id',function(req,res,next){
    Country.deleteCountry(req.params.id,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    Country.updateCountry(req.params.id,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;