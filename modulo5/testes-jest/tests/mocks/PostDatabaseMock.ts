import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ILikeDB, IPostDB, Post } from "../../src/models/Post";

export class PostDatabaseMock extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public toPostDBModel = (post: Post) => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };

    return postDB;
  };

  public createPost = async (post: Post) => {};

  public getPosts = async () => {
    const posts: IPostDB[] = [
      {
        id: "201",
        content: "Olá, sou novo por aqui!",
        user_id: "101",
      },
      {
        id: "202",
        content: "Bom dia, família!",
        user_id: "102",
      },
      {
        id: "203",
        content: "Receba!",
        user_id: "103",
      },
    ];

    return posts;
  };

  public getLikes = async (postId: string) => {
    const likes: ILikeDB[] = [
      {
        id: "301",
        post_id: "201",
        user_id: "101",
      },
      {
        id: "302",
        post_id: "202",
        user_id: "101",
      },
      {
        id: "303",
        post_id: "203",
        user_id: "101",
      },
      {
        id: "304",
        post_id: "201",
        user_id: "102",
      },
      {
        id: "305",
        post_id: "201",
        user_id: "103",
      },
      {
        id: "306",
        post_id: "202",
        user_id: "103",
      },
    ];
    return likes;
  };

  public findPostById = async (postId: string) => {
    switch (postId) {
      case "201":
        return {
          id: "301",
          post_id: "201",
          user_id: "101",
        };
      default:
        return undefined;
    }
  };

  public deletePost = async (postId: string) => {};

  public findLike = async (postId: string, userId: string) => {};

  public addLike = async (likeDB: ILikeDB) => {};

  public removeLike = async (postId: string, userId: string) => {};
}
