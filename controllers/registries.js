const Registry = require('../models/registry');
const router = require('express').Router();

//CRUD


//Create

router.post('/', async (req, res)=> {
  try{
    const createdRegistry = await Registry.create(req.body)
    res.status(200).json(createdRegistry)
  }catch(error) {
    console.error(error)
    res.status(400).json({
      message: error.message
    })
  }
})

//Read

  //Index

router.get('/', async (req, res)=> {
  try{
    const foundRegistries = await Registry.find({})
    res.status(200).json(foundRegistries)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})


  //Show

router.get('/:id', async (req, res)=> {
  try{
    const foundRegistry = await Registry.findById(req.params.id)
    res.status(200).json(foundRegistry)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})

//Update

router.put('/:id', async (req, res)=> {
  try{
    const updatedRegistry = await Registry.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedRegistry)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})




//Delete

router.delete('/:id', async (req, res)=> {
  try{
    const deletedRegistry = await Registry.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedRegistry)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})
module.exports = router;
