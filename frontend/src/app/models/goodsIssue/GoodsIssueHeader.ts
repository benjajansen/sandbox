import {SecurityUser} from "../security/User";
import {SystemStatus} from "../system/Status";
import {SalesOrderHeader} from "../salesOrder/SalesOrderHeader";
import {AdminTransporter} from "../admin/Transporter";
import {Warehouse} from "../warehouse/Warehouse";
/**
 * Created by Benja on 5/6/2017.
 */

export class GoodsIssueHeader {
  public id: number;
  public issueDate: Date;
  public status: SystemStatus;
  public salesOrderHeader: SalesOrderHeader;
  public sealNo: string;
  public vehReg: string;
  public transporter: AdminTransporter;
  public warehouse: Warehouse;
  public comments: string;
  public delInstructions: string;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;


  constructor() {
    this.issueDate = new Date();
    this.vehReg = "";
    this.sealNo = "";
    this.comments = "";
    this.createDate = new Date();
  }
}
