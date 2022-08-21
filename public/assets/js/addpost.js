const addPost = document.querySelector('#addPost');
const blogPostInput = document.querySelector('#blogPostInput')

addPost.addEventListener('click', () => {
    const blogValue = blogPostInput.value();

    const response = await fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            blogTitle: blogTitle,
            blogPost: blogValue,
        })
        
    });
    res.send(response)
})