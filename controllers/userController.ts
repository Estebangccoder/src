import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";
import { UserInterface } from "../interfaces/userInterface";

// Define la clase UserController
export default class UserController {
  
  static async getAllUsers(_: Request, res: Response) {
    try {
      // Resuelve una instancia de UserService utilizando tsyringe
    const userService = container.resolve(UserService);
    // Llama al método getAllUsers del servicio de usuarios
    const users = await userService.getAllUsers();
    res.status(200).json({
      status:200,
      data: users});
    
    } catch (error:any) {
      res.status(500).json({
        status:500,
        error:error.message
    })
    }
    
  }

  static async createUser(req: Request, res: Response) {
    try {
    // Resuelve una instancia de UserService utilizando tsyringe
    const userService = container.resolve(UserService);
    // Crea un nuevo usuario llamando al método createUser del servicio de usuarios con los datos del cuerpo de la solicitud
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message:"The product was created succesfully",
      data:user});
      
    } catch (error:any) {
      res.status(500).json({
        status:500,
        error:error.message
    })
    }
    }


  static async updateUser(req: Request, res: Response){
    const userService: UserService = container.resolve(UserService);
    const id: number = parseInt(req.params.id);
    const user: Partial<UserInterface> = req.body;
    try{
        const [affectedCount]: number[] = await userService.updateUser(id, user);
        if(affectedCount === 0){
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: 'User updated successfully'
        });
    }catch(err: any){
        res.status(500).json({
            status: 500,
            message: err.message});
    }  
  }

  static async deleteUser(req: Request, res: Response){
    const userService: UserService = container.resolve(UserService);
    const id: number = parseInt(req.params.id);
    try{
        const affectedCount: number = await userService.deleteUser(id);
        if(affectedCount === 0){
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: 'User deleted successfully'
        });
    }catch(err: any){
        res.status(500).json({
            status: 500,
            message: err.message});
    }
}
}