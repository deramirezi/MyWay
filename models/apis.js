const express =  require('express');
const router = express.Router();
const BlogPost = require('./blogPost')


router.get('/', (req, res) => {

    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});


//Post request

router.post( '/save' , (req, res) => {
    
    const data =  req.body;

    const newBlogPost = new BlogPost(data)
    
    newBlogPost.save((error)=>{
        if(error){
            res.status(500).json({msg: "Internal error, we are working for fix it"})
        }else{
            res.json({
                msg: "Data upload sucessfully"
            })
        }
    })  
  })


// Ruta de prueba para api

router.get( '/name' , (req, res) => {
  const data = {
      username: "deramirez",
      PlacePosition: 5, 
  };
  res.json(data)
})


module.exports = router;