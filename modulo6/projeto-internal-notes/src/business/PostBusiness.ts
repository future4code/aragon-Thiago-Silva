import CommentRepository from "../database/repositories/CommentRepository";
import PostRepository from "../database/repositories/PostRepository";

export interface IPostRequestDTO {
    user_id: string;
    text: string
}

export interface ICommentRequestDTO {
    user_id: string;
    text: string
}

export class PostBusiness {
    private postRepository;
    private commentRepository;

    constructor(
    ) {
        this.postRepository = new PostRepository();
        this.commentRepository = new CommentRepository();
    }

    public get = async (post: string) => {
        return this.postRepository.get(post)
    }

    public getComments = async (postId: string) => {
        return this.commentRepository.getByPost(postId)
    }

    public createPost = async (post: IPostRequestDTO) => {
        return this.postRepository.create(post)
    }

    public createComment = async (postId: string, comment: ICommentRequestDTO) => {
        return this.commentRepository.create(postId, comment)
    }
}