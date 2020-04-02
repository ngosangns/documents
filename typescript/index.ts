class PostRepository {
    getPostById() {
        return Post.orderBy('id', 'desc').get();
    }
}


class PostController extends Controller {
    constructor(private postRepository: PostRepository) { }
    getPost() {
        let posts = this.postRepository.getPostById();
        return posts;
    }
}