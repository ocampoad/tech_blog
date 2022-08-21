const addPost = document.querySelector('#addPost');
const blogPostInput = document.querySelector('#blogPostInput');
const blogPostTitle = document.querySelector('#blogPostTitle');

addPost.addEventListener('click', async () => {
    const blogValue = blogPostInput.value;
    const blogTitle = blogPostTitle.value;
    
    const response = await fetch('/api/blogs/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            blogTitle: blogTitle,
            blogPost: blogValue,
        }) 
    });
    await response.json();
    window.location.href = '/api/blogs'

})