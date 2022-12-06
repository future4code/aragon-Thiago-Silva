import UserRepository from "../database/repositories/UserRepository";

export class UserBusiness {
    private userRepository;
    constructor(
    ) {
        this.userRepository = new UserRepository();
    }

    public get = async (user: string) => {

        return this.userRepository.get(user)
    }
}