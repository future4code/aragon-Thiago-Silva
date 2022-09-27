import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";

export const postRouter = Router();

const postController = new PostController(new PostBusiness())

postRouter.post('/postagens', postController.createPost)
postRouter.get('/postagens/:postId', postController.get)

postRouter.post('/postagens/:postId/comentarios', postController.createComment)
postRouter.get('/postagens/:postId/comentarios', postController.getComments)