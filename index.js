const express = require('express');
const app = express();
const posts = require('./posts.json');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req,res){
    res.send('Hello world!');
})

app.post('/', function(req,res){
    res.send('This is a post request')
})

app.get('/posts', (req,res)=>{
    return res.json({ posts })
})

app.post('/posts',(req,res)=>{

     posts.push(req.body.newPost);
     console.log({ posts })

    let stringedData = JSON.stringify(posts, null, 2);
    fs.writeFile('posts.json', stringedData, (err) => {
        if (err) {
            return res.status(500).json({message: err});
        }        
    });

 return res.status(200).json({message: 'new post created'})
});

// fetch single post
app.get('/posts/:id',(req, res)=>{

    console.log(req.params.id);

    let id = req.params.id;

   let foundPost = posts.find(post =>{
       return String(post.id) === id;
    })

    if(foundPost){
        return res.status(200).json({post:foundPost})   
    }else{
        return res.status(404).json({ message: "post not found"})
    }
})

app.put('/posts/:id',(req, res)=>{
    //fetch req.params.id
    console.log(req.params.id);

    let id = req.params.id;

    let updatePost = posts.find(post => String(post.id) === id)
    if (updatePost){
        updatePost.title = req.body.title;
        updatePost.body = req.body.body;
    
       let stringedData = JSON.stringify(posts, null, 2);
        fs.writeFile('posts.json', stringedData, (err) => {
            if (err) {
                return res.status(500).json({message: err});
            }        
        });

        return res.status(200).json({post:updatePost});
    }else{
        return res.status(404).json({ message: "post could not be updated"})
    }
})



let port = 3000;

app.listen(port, function(){
    console.log('server is up and running on port: ', port);
})