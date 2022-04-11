
import {SecurityUser} from "../security/User";
import {Warehouse} from "./Warehouse";

export class WarehouseZone {
  public id: number;
  public description: string;
  public warehouse: Warehouse;
  public createUser: SecurityUser;
  public createDate: Date;
}

