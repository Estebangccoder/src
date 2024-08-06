import {
    Table,        
    Column,       
    Model,        
    DataType,     
    PrimaryKey,
    AutoIncrement,
  } from 'sequelize-typescript';
  
  
  @Table({
    tableName: "permissions", 
    timestamps: true, 
  })
  export class Permission extends Model { 
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER, 
    })
    id!: number; 
  
    //roleid

    //entityid


    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    canDelete!: boolean;
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    canGet!: boolean;

  }


