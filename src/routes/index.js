const projects = require('../projects.json')
const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("Home");
});

router.get('/aboutme', (req,res )=> {
    res.render("about-me")
})


router.get('/myportafolio', (req,res) => {
    res.render("my-portafolio")
})

router.get('/projects', (req,res) => {
    // res.render('my-projects')
    console.log(projects)
    res.render('projects-list', {projects})
})

// router.get('/projects/:id', (req,res) => {
//     const { id } = req.params
//     // res.send("showing my project number: " + id )
//     res.send(`showing my project number ${id}`)
// })

//usando esta ruta haciendole handlebars
router.get('/projects/:id', (req,res) => {
    const { id } = req.params
    res.render('show-projects' , {id})
})


module.exports = router;
