
import {SecurityUser} from "../security/User";
import {Debtor} from "./Debtor";

export class DebtorAttachment {
  public id: number;
  public debtor: Debtor;
  public createdDate: Date;
  public name: string;
  public description: string;
  public version: string;
  public attachment: string;
  public user: SecurityUser;
}
