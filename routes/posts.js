import express from 'express';
import { Router } from 'express';

const router = Router();

// Serve static files from the 'public' directory
//app.use(express.static(path.join(__dirname, 'public')));


/*
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));   
}) */
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
]


// Endpoint to get all posts
  router.get('/', (req, res) => {
    res.json(posts);
  })

// Endpoint to get a single post by ID
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

router.post('/', (req, res) => {
    console.log(req.body);

    
      
    const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  }; 
  
  posts.push(newPost);
  res.status(201).json(posts);
});

//update
router.put('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1) {
    const updatedPost = {
      id: postId,
      title: req.body.title,
      content: req.body.content
    };
    
    posts[postIndex] = updatedPost;
    res.status(200).json(updatedPost);
  } else {
    res.status(404).send('Post not found');
  }
});

//delete
router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Post not found');
  }
});

export default router;