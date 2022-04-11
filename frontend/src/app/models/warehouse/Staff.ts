
import {SecurityUser} from "../security/User";
import {AdminBranch} from "../admin/Branch";
import {WarehouseJobTitle} from "./JobTitles";

export class WarehouseStaff {
  public id: number;
  public name: string;
  public jobTitle: WarehouseJobTitle;
  public suspend: boolean;
  public suspendDate: Date;
  public createUser: SecurityUser;
  public createDate: Date;
}

