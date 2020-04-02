"use strict";
class PostRepository {
    getPostById() {
        return Post.orderBy('id', 'desc').get();
    }
}
class PostController extends Controller {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    getPost() {
        let posts = this.postRepository.getPostById();
        return posts;
    }
}
