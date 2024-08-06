import UserRepository from "../repositories/userRepository";
import { injectable, inject } from "tsyringe";
import { User } from "../models/user";

@injectable()
export default class UserService {
  // Define el constructor que inyecta el repositorio de usuarios
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  
  async getAllUsers() {
    return await this.userRepository.findAll();
  }

 
  async createUser(user: Partial<User>) {
    return await this.userRepository.create(user);
  }

  async updateUser(id:number, user: Partial<User>){
    return await this.userRepository.update(id,user);
  }

  async deleteUser(id:number){
    return await this.userRepository.delete(id);
  }
  
}
