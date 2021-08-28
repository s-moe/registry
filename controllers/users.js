//RUD
//go to Arthur when show route

//Read

  //Index Route - for owner of website - high up admin person

  router.get('/admin/', async (req, res)=> {
    try{
      const foundUser = await User.find({})
      res.status(200).json(foundUser)
    }catch(error){
      console.error(error)
      res.status(404).json({
        message: error.message
      })
    }
  })


  //Show Route - for specific profile - condition - if this user is logged in, show this if not, then this 





//Update Route

router.put('/:id', async (req, res)=> {
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedUser)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})

//logout //get route? just to remove the token


//Destroy/Delete Route

router.delete('/:id', async (req, res)=> {
  try{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedUser)
  }catch(error){
    console.error(error)
    res.status(404).json({
      message: error.message
    })
  }
})
module.exports = router;
