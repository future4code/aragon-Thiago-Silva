import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Comment from "./Comment"
import Post from "./Post"

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @OneToMany((type) => Post, (post) => post.user_id)
  postagens: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user_id)
  comments: Comment[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn() 
  up: Date;
}

export default User;