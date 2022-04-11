
import {SecurityUser} from "../security/User";
import {AdminBranch} from "../admin/Branch";
import {WarehouseZone} from "./Zone";
import {WarehouseStaff} from "./Staff";

export class WarehouseAssignStaff {
  public id: number;
  public warehouseStaff: WarehouseStaff;
  public warehouseZone: WarehouseZone;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;
}

