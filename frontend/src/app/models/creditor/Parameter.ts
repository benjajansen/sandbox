
import {SecurityUser} from "../security/User";

export class CreditorParameter {
  public id: number;
  public autoGen: boolean;
  public user: SecurityUser;
  public createdDate: Date;
}
