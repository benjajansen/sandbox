import {Creditor} from "./Creditor";
import {SecurityUser} from "../security/User";

export class CreditorAttachment {
  public id: number;
  public creditor: Creditor;
  public createdDate: Date;
  public name: string;
  public description: string;
  public version: string;
  public attachment: string;
  public user: SecurityUser;
}
