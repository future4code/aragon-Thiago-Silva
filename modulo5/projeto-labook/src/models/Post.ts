export interface IPostDB {
    id: string,
    content: string,
    user_id: string,
    likes: number
}

export interface ILikeDB {
    post_id: string,
    user_id: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

export interface ICreatePostInputDTO {
    content: string,
    token: string
}

export interface IGetPostsInputDTO {
    token: string,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetPostsPost {
    id: string,
    content: string,
    user_id: string
}

export interface IGetPostsOutputDTO {
    posts: IGetPostsPost[]
}

export interface IGetPostsDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IDeletePostInputDTO {
    token: string,
    idToDelete: string
}

export interface ILikePostInputDTO {
    token:string,
    user_id:string,
    post_id:string
}

export interface ILikePostDTO {
    token:string,
    post_id:string
}

export interface ILikeDBOutputDTO {
    user_id:string,
    post_id:string
}