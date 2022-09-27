import { Repository } from "typeorm";
import User from "../../models/User";
import { AppDataSource } from "../../database"

interface IUserRepository {
  get(data: string): Promise<User | null>;
}

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async get(user: string): Promise<User | null> {
    const userBd = this.ormRepository.findOneBy({
      user: user
    });

    return userBd;
  }
}

export default UserRepository;