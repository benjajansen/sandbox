
import {SecurityUser} from "../security/User";

export class CreditorGroup {
  public id: number;
  public description: string;
  public createUser: SecurityUser;
  public createDate: Date;
}
