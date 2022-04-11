
import {GoodsIssueHeader} from "./GoodsIssueHeader";
import {SalesOrderDetail} from "../salesOrder/SalesOrderDetail";
import {InventoryTransaction} from "../inventory/Transaction";
import {SecurityUser} from "../security/User";
/**
 * Created by Benja on 5/6/2017.
 */

export class GoodsIssueDetail {
  public id: number;
  public lineNumber: number;
  public goodsIssueHeader: GoodsIssueHeader;
  public salesOrderDetail: SalesOrderDetail;
  public inventoryTransaction: InventoryTransaction;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;

  constructor() {
    this.createDate = new Date();
  }
}
