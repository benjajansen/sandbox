import {SecurityUser} from "../security/User";

export class InventoryAdjustment {
  public id: number;
  public palletNo: number;
  public quantity: number;
  public nettWeight: number;
  public pallets: number;
  public reason: string;
  public createDate: Date;
  public createUser: SecurityUser;
  public modDate: Date;
  public modUser: SecurityUser;
  public version: number;
}
