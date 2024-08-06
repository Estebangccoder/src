// Importa varios elementos necesarios de sequelize-typescript
import {
    Table,        
    Column,       
    Model,        
    DataType,     
    BelongsToMany,    
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';

// importa la ProductCart User para definir la relación
import { ProductCart } from './productCart';
import { Cart } from './cart';

// Define la clase Product como una tabla en la base de datos con el decorador @Table
@Table({
    tableName: 'products', // Nombre de la tabla en la base de datos
    timestamps: true,      // Sequelize manejará automáticamente las columnas createdAt y updatedAt
})

export class Product extends Model<Product> { // La clase Product extiende de Model<Product>, lo que le da funcionalidad de modelo de Sequelize
    @PrimaryKey
    @AutoIncrement
    
    // Define la columna 'name'
    @Column({
        type: DataType.INTEGER 
    })
    id!: number;

    @Column({
        type: DataType.STRING(200), // El tipo de dato es cadena de texto
        allowNull: false,      // No se permite valor nulo
    })
    name!: string; // 'name' es de tipo string y es obligatorio

    // Define la columna 'price'
    @Column({
        type: DataType.FLOAT(10,2), // El tipo de dato es flotante
        allowNull: false,     // No se permite valor nulo
    })
    price!: number; // 'price' es de tipo number (flotante) y es obligatorio

    @Column({
        type: DataType.TEXT
    })
    description: string | undefined; 
    
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    stock!: number


  //  Define una relación de pertenencia a ProductCart

   @BelongsToMany(() => Cart, () => ProductCart)

   Cart!: Cart;
}

