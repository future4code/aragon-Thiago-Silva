import {
  IDislikeInputDBDTO,
  IDislikeInputDTO,
  IDislikeOutputDTO,
  IGetPostsDBDTO,
  ILikeDBOutputDTO,
  ILikePostInputDTO,
  IPostDB,
  Post,
} from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public createPost = async (post: Post) => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
      likes: post.getLikes(),
    };

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB);
  };

  public getPosts = async (input: IGetPostsDBDTO) => {
    const search = input.search;
    const order = input.order;
    const sort = input.sort;
    const limit = input.limit;
    const offset = input.offset;

    const postsDB: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select()
      .where("content", "LIKE", `%${search}%`)
      .orderBy(order, sort)
      .limit(limit)
      .offset(offset);

    return postsDB;
  };

  public findById = async (id: string) => {
    const postsDB: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select()
      .where({ id });

    return postsDB[0];
  };

  public deletePost = async (id: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ id });
  };

  public likePost = async (like: any) => {
    const likeDB: ILikeDBOutputDTO = {
      user_id: like.user_id,
      post_id: like.post_id,
    };

    await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(likeDB);

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .where("id", "=", `${like.post_id}`)
      .increment("likes", 1);
  };

  public dislikePost = async (dislike: IDislikeOutputDTO) => {
    const dislikeDB: IDislikeOutputDTO = {
      post_id: dislike.post_id,
      user_id: dislike.user_id,
    };

    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ post_id: dislike.post_id, user_id: dislike.user_id });

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .where("id", "=", `${dislike.post_id}`)
      .decrement("likes", 1);

    return dislikeDB;
  };
}
