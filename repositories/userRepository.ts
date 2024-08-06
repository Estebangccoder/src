// importamos el decorador injectable de tsyringe para habilitar la inyección de dependencias
import { injectable } from 'tsyringe';

// importa el modelo User para interactuar con la base de datos
import { User } from '../models/user';

// Marca la clase UserRepository como inyectable
@injectable()
export default class UserRepository {
    async findAll() {
        // Utiliza el método findAll del modelo User para obtener todos los registros
        return await User.findAll();
    }

  
    // Método asincrónico para crear un nuevo usuario
    async create(user: Partial<User>) {
        // Utiliza el método create del modelo User para crear un nuevo registro
        return await User.create(user);
    }

    async update(id: number, user: Partial<User>){
        return await User.update(user, {where: {id}});
    }

    async delete(id: number){
        return await User.destroy({where: {id}});
    }

}
