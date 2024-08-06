// Importa varios elementos necesarios de sequelize-typescript
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasOne,
    PrimaryKey,
    AutoIncrement,
    HasMany
} from 'sequelize-typescript';

  //Importamos la clase Product para definir la relación
  import { Role } from './role';
  import { Cart } from './cart';
  import { Order } from './order';


  @Table({
    tableName: "users",
    timestamps: true,
  })
  export class User extends Model {

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
    email!: string; // 'email' es de tipo string y es obligatorio

    // Define la columna 'password'
    @Column({
      type: DataType.STRING(200), // El tipo de dato es cadena de texto
      allowNull: false, // No se permite valor nulo
    })
    password!: string; // 'password' es de tipo string y es obligatorio

    @ForeignKey(()=> Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleid!: number

    @BelongsTo(()=>Role)
    role!: Role;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER, // El tipo de dato es entero
        allowNull: false,       // No se permite valor nulo
    })
    cartId!: number;

  
    @HasOne(()=>Cart)
    cart!: Cart;

    @HasMany(() => Order)
    orders!: Order[];

    }