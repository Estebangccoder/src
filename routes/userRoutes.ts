// Importa el enrutador de express
import { Router } from 'express';

// Importa el controlador de usuarios
import UserController from '../controllers/userController';

// Crea una instancia del enrutador de express
export const userRouter = Router();

// Definimos las rutas para acceder a los metodos
userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.createUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);
