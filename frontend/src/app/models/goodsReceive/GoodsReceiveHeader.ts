import {SecurityUser} from "../security/User";
import {SystemStatus} from "../system/Status";
import {AdminTransporter} from "../admin/Transporter";
import {Warehouse} from "../warehouse/Warehouse";
import {Creditor} from "../creditor/Creditor";
import {Debtor} from "../debtor/Debtor";
/**
 * Created by Benja on 5/6/2017.
 */

export class GoodsReceiveHeader {
  public id: number;
  public receiveDate: Date;
  public status: SystemStatus;
  public debtor: Debtor;
  public creditor: Creditor;
  public deliveryNote: string;
  public invoiceNo: string;
  public sealNo: string;
  public vehReg: string;
  public purchaseOrderNo: string;
  public batchNo: string;
  public transporter: AdminTransporter;
  public productionDate: Date;
  public warehouse: Warehouse;
  public comments: string;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;


  constructor() {
    this.receiveDate = new Date();
    this.vehReg = "";
    this.sealNo = "";
    this.comments = "";
    this.createDate = new Date();
  }
}
