import {
  Table,        
  Column,       
  Model,        
  DataType,     
  ForeignKey,        
  PrimaryKey,
  AutoIncrement,
  HasMany
} from 'sequelize-typescript';

import {Cart} from './cart'
import { Product } from './product';
import {Order} from './order';

@Table({
  tableName: "productCarts", 
  timestamps: true, 
})
export class ProductCart extends Model { 
  
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER, 
  })
  id!: number; 

  @ForeignKey(() => Cart)
  @Column({
      type: DataType.INTEGER, // El tipo de dato es entero
      allowNull: false,       // No se permite valor nulo
  })
  cartId!: number;

  


  @ForeignKey(() => Product)
  @Column({
      type: DataType.INTEGER, // El tipo de dato es entero
      allowNull: false,       // No se permite valor nulo
  })
  productId!: number;
  
  

  @Column({
    type:DataType.INTEGER,
    allowNull:false,
})
quantity!: number

@HasMany(() => Order)
    orders!: Order[];

}