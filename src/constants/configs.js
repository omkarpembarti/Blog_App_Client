export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userRegister: { url: '/register', method: 'POST' },
    publishBlog: { url: 'blog/publish', method: 'POST' },
    uploadImage: { url: 'blog/publishImage', method: 'POST' },
    getAllBlogs: { url: '/allBlogs', method: 'GET' }
    // getRefreshToken: { url: '/token', method: 'POST' },

    // createPost: { url: 'create', method: 'POST' },
    // deletePost: { url: 'delete', method: 'DELETE', query: true },
    // getPostById: { url: 'post', method: 'GET', query: true },
    // newComment: { url: '/comment/new', method: 'POST' },
    // getAllComments: { url: 'comments', method: 'GET', query: true },
    // deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    // updatePost: { url: 'update', method: 'PUT', query: true }
}