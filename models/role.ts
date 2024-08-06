import {
    Table,        
    Column,       
    Model,        
    DataType,     
    ForeignKey,   
    BelongsTo,
    HasMany,     
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
  
  // Importa la clase Product para definir la relación
  import { User } from './user';
  
  
  @Table({
    tableName: "roles", 
    timestamps: true, 
  })
  export class Role extends Model { 
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER, 
    })
    id!: number; 
  
    @Column({
      type: DataType.STRING(200), // El tipo de dato es cadena de texto
      allowNull: false, // No se permite valor nulo
      unique: true, // El valor debe ser único en la tabla
    })
    name!: string
    
    
    @HasMany(() => User)
    users!: User[];
}