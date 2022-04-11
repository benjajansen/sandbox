import {Debtor} from "../debtor/Debtor";
import {Warehouse} from "../warehouse/Warehouse";
import {SecurityGroupHeader} from "./GroupHeader";

export class SecurityUser {
  public id: number;
  public firstName: string;
  public lastName: string;
  public customer: Debtor;
  public warehouse: Warehouse;
  public groupHeader: SecurityGroupHeader;
  public jobTitle: string;
  public telNo: string;
  public cellNo: string;
  public email: string;
  public logonName: string;
  public registerDate: Date;
  public createDate: Date;
  public createUser: SecurityUser;
  public active: boolean;
  public inactiveDate: Date;
}
