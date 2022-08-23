

async function deleteBlog(blogsId) {
    const result = await fetch(`/api/blogs/delete/${blogsId}`, {
        method: 'DELETE'
    });
    window.location.reload();
};

