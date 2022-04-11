
import {SecurityUser} from "./User";

export class SecurityPassword {
  public id: number;
  public user: SecurityUser;
  public currentPassword: string;
  public previousOne: string;
  public previousTwo: string;
}
