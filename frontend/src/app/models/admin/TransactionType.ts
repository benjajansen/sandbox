
import {SecurityUser} from "../security/User";

export class AdminTransactionType {
  public id: number;
  public name: string;
  public createUser: SecurityUser;
  public createDate: Date;
}

