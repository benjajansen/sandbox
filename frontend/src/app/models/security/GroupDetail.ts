import {SecurityGroupHeader} from "./GroupHeader";
import {SecurityMenu1} from "./Menu1";
import {SecurityMenu3} from "./Menu3";
import {SecurityMenu2} from "./Menu2";

export class SecurityGroupDetail {
  public id: number;
  public header: SecurityGroupHeader;
  public menu1: SecurityMenu1;
  public menu2: SecurityMenu2;
  public menu3: SecurityMenu3;
}
