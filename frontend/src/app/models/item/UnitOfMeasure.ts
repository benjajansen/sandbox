import {SecurityUser} from "../security/User";

export class ItemUnitOfMeasure {
  public id: number;
  public description: string;
  public createUser: SecurityUser;
  public createDate: Date;
}
