
import {SecurityUser} from "../security/User";
import {AdminBranch} from "../admin/Branch";

export class Warehouse {
  public id: number;
  public name: string;
  public branch: AdminBranch;
  public createUser: SecurityUser;
  public createDate: Date;
}

