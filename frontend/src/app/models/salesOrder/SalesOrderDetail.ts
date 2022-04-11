import {SalesOrderHeader} from "./SalesOrderHeader";
import {ItemLink} from "../item/ItemLink";
import {SecurityUser} from "../security/User";
/**
 * Created by Benja on 5/6/2017.
 */

export class SalesOrderDetail {
  public id: number;
  public lineNumber: number;
  public salesOrder: SalesOrderHeader;
  public itemLink: ItemLink;
  public pickMethod: string;
  public orderQty: number;
  public backOrder: boolean;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;

  constructor() {
    this.orderQty = 0;
    this.backOrder = false;
    this.pickMethod = "";
  }
}
