//importamos sequalize para darle las dependnecias 
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user'
import { Product } from '../models/product';
import { Order } from '../models/order';
import { ProductCart } from '../models/productCart';
import { Entity } from '../models/entity';
import { Permission } from '../models/permissions';
import { Role } from '../models/role';
import { Cart } from '../models/cart';


// creamos la clase sequalize la cual contiene las dependencias de la base de datos
const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'bmbanqpmkw5n3jhhsd6v-mysql.services.clever-cloud.com',
    username: 'uqq3wqithblbt3ae',
    password: 'hLNnLQaIEqGmIGnhCKMD',
    database: 'bmbanqpmkw5n3jhhsd6v',
    models: [User, Product, Order, ProductCart, Entity, Permission, Role, Cart], 
});
 //exportamos la clase
export default sequelize;