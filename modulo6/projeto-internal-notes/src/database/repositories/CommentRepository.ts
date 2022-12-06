import { Repository } from "typeorm";
import Comment from "../../models/Comment";
import { AppDataSource } from "../../database"
import { ICommentRequestDTO } from "../../business/PostBusiness";

interface ICommentRepository {
  getByPost(data: string): Promise<Comment[]>;
}

class CommentRepository implements ICommentRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Comment);
  }

  public async getByPost(postId: string): Promise<Comment[]> {
    const commentBd = this.ormRepository.find({ 
      where: {
        post_id: postId
      },
    });

    return commentBd;
  }

  public async create(postId: string, body: ICommentRequestDTO): Promise<Comment> {
    const comment = this.ormRepository.save({
      text: body.text,
      user_id: body.user_id,
      post_id: postId
    });

    return comment;
  }
}

export default CommentRepository;