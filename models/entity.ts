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
  //import { User } from './user';
  
  
  @Table({
    tableName: "entities", 
    timestamps: true, 
  })
  export class Entity extends Model { 
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER, 
    })
    id!: number; 
  
    @Column({
        type: DataType.STRING(200), // El tipo de dato es cadena de texto
        allowNull: false,      // No se permite valor nulo
    })
    name!: string; // 'name' es de tipo string y es obligatorio
    

}