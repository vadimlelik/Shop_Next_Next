import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  userName: string;

  @Column
  password: string;

  @Column
  email: string;
}
