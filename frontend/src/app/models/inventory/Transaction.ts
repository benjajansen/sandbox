import {SecurityUser} from "../security/User";
import {AdminTransactionType} from "../admin/TransactionType";

export class InventoryTransaction {
  public id: number;
  public transactionType: AdminTransactionType;
  public reference: number;
  public itemDetail: number;

  public quantity: number;
  public nettWeight: number;
  public pallets: number;
  public reason: string;
  public palletNo: number;
  public createDate: Date;
  public createUser: SecurityUser;
  public modDate: Date;
  public modUser: SecurityUser;
  public version: number;
}
