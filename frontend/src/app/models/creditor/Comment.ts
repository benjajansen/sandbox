import {Creditor} from "./Creditor";
import {SecurityUser} from "../security/User";

export class CreditorComment {
  public id: number;
  public creditor: Creditor;
  public createdDate: Date;
  public comment: string;
  public actionDate: Date;
  public user: SecurityUser;
}
