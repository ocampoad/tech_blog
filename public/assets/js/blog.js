
const updateBtn = document.querySelector('#submitPost');



async function deleteBlog(blogsId) {
    const result = await fetch(`/api/blogs/delete/${blogsId}`, {
        method: 'DELETE'
    });
    window.location.reload();
};

async function editBlog(blogsId) {
    document.querySelector(`#hiddenInput${blogsId}`).style.display = 'block';
}

async function submitEditBlog(blogsId) {
    const blogPostInput = document.querySelector(`#blogPostInput${blogsId}`);
    const blogPostTitle = document.querySelector(`#blogPostTitle${blogsId}`);
    const blogValue = blogPostInput.value;
    const blogTitle = blogPostTitle.value;
    console.log(blogTitle, blogValue)
    const response = await fetch(`/api/blogs/edit/${blogsId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            blogTitle: blogTitle,
            blogPost: blogValue,
        }) 
    });
    window.location.href = '/api/blogs'
}