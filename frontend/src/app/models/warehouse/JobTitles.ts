
import {SecurityUser} from "../security/User";
import {AdminBranch} from "../admin/Branch";

export class WarehouseJobTitle {
  public id: number;
  public title: string;
  public createUser: SecurityUser;
  public createDate: Date;
}

