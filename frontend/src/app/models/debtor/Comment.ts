
import {SecurityUser} from "../security/User";
import {Debtor} from "./Debtor";

export class DebtorComment {
  public id: number;
  public debtor: Debtor;
  public createdDate: Date;
  public comment: string;
  public actionDate: Date;
  public user: SecurityUser;
}
