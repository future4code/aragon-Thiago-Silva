import { Repository } from "typeorm";
import Post from "../../models/Post";
import { AppDataSource } from "../../database"
import { IPostRequestDTO } from "../../business/PostBusiness";

interface IPostRepository {
  get(data: string): Promise<Post | null>;
}

class PostRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Post);
  }

  public async get(postId: string): Promise<Post | null> {
    const postBd = this.ormRepository.findOne({ 
      where: {
        id: postId 
      },
      // relations: ['Usuario']
    });

    return postBd;
  }

  public async create(postId: IPostRequestDTO): Promise<Post> {
    const post = this.ormRepository.save({
      text: postId.text,
      user_id: postId.user_id
    });

    return post;
  }
}

export default PostRepository;