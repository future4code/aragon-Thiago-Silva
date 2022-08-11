import { PostDatabase } from "../database/PostDatabase";
import {
  ICreatePostInputDTO,
  IDeletePostInputDTO,
  IGetPostsDBDTO,
  IGetPostsInputDTO,
  IGetPostsOutputDTO,
  IGetPostsPost,
  ILikePostDTO,
  Post,
} from "../models/Post";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createPost = async (input: ICreatePostInputDTO) => {
    const id = this.idGenerator.generate();
    const content = input.content;
    const tokenData = input.token;

    if (!content || content.length < 1) {
      throw new Error("Parâmetro 'content' inválido");
    }

    const userToken = this.authenticator.getTokenPayload(tokenData);

    const user_id = userToken.id;

    const postDB = new Post(
      id, 
      content, 
      user_id
      );

    await this.postDatabase.createPost(postDB);

    const response = {
      message: "Post criado com sucesso",
      postDB,
    };

    return response;
  };

  public getPosts = async (input: IGetPostsInputDTO) => {
    const token = input.token;
    const search = input.search || "";
    const order = input.order || "content";
    const sort = input.sort || "ASC";
    const limit = Number(input.limit) || 10;
    const page = Number(input.page) || 1;

    const offset = limit * (page - 1);

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    const getPostsInputDB: IGetPostsDBDTO = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const postsDB = await this.postDatabase.getPosts(getPostsInputDB);

    const posts = postsDB.map((postDB) => {
      const post = new Post(postDB.id, postDB.content, postDB.user_id);

      const postResponse: IGetPostsPost = {
        id: post.getId(),
        content: post.getContent(),
        user_id: post.getUserId(),
      };

      return postResponse;
    });

    const response: IGetPostsOutputDTO = {
      posts,
    };

    return response;
  };

  public deletePost = async (input: IDeletePostInputDTO) => {
    const token = input.token;
    const idToDelete = input.idToDelete;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }    
  
    const postDB = await this.postDatabase.findById(idToDelete);

    if (!postDB) {
      throw new Error("Post a ser deletado não encontrado");
    }

    const isUserAdmin = payload.role === USER_ROLES.ADMIN

    const isCreatorUser = payload.id === postDB.user_id

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new Error("Apenas admins podem deletar qualquer post");
    }

    await this.postDatabase.deletePost(idToDelete);

    const response = {
      message: "Post deletado com sucesso",
    };

    return response;
  };

  likePost = async(input: any)=> {
    const token = input.token
    const post_id = input.post_id as string
    const payload = this.authenticator.getTokenPayload(token)
    const likeDB = await this.postDatabase.likePost(post_id)
}
}
