import {
    Table,        
    Column,       
    Model,        
    DataType,     
    ForeignKey,   
    HasOne,   
    PrimaryKey,
    AutoIncrement,
    BelongsToMany
    } from 'sequelize-typescript';
  
  // Importa la clase Product para definir la relación
import { User } from './user';
import { Product } from './product';
import { ProductCart } from './productCart';  
  
  @Table({
    tableName: "carts", 
    timestamps: true, 
  })
  export class Cart extends Model { 
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER, 
    })
    id!: number; 

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER, // El tipo de dato es entero
        allowNull: false,       // No se permite valor nulo
    })
    userId!: number;


    @HasOne(()=>User)
    user!: User;


   @BelongsToMany(() => Product, () => ProductCart)

   products!: Product[];

}