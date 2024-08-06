import {
    Table,        
    Column,       
    Model,        
    DataType,     
    ForeignKey,   
    BelongsTo,     
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
  
  // Importa la clase Product para definir la relación
import { User } from './user';
import { ProductCart } from './productCart';
  
  
  @Table({
    tableName: "orders", 
    timestamps: true, 
  })
  export class Order extends Model { 
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER, 
    })
    id!: number; 
  
    //userId
    @ForeignKey(()=> User)
    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(()=>User)
    user!: User;



    //profuctcardid

    @ForeignKey(()=> ProductCart)
    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    productCartid!: number;

    @BelongsTo(()=>ProductCart)
    productCart!: ProductCart[];


    @Column({
        type: DataType.FLOAT(10,2), // El tipo de dato es flotante
        allowNull: false,     // No se permite valor nulo
    })
    total!: number; // 'price' es de tipo number (flotante) y es obligatorio

}