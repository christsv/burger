var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// to show the burgers
router.get("/", function(req, res){
    res.redirect("/burgers");
    }
);

router.get("/burgers", function(req, res){
    burger.all(function(data){
        res.render("index", {id: data});
    })
})

router.post("/burgers/create", function(req, res){
    burger.insert(req.body.burger_name, function(result){
        res.redirect("/");
    })
});

router.put("/burgers/create/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    })
})

module.exports = router;
