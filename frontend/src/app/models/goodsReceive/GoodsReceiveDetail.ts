
import {SecurityUser} from "../security/User";
import {GoodsReceiveHeader} from "./GoodsReceiveHeader";
import {ItemLink} from "../item/ItemLink";
import {WarehouseLocation} from "../warehouse/Location";
/**
 * Created by Benja on 5/6/2017.
 */

export class GoodsReceiveDetail {
  public id: number;
  public lineNumber: number;
  public goodsreceiveHeader: GoodsReceiveHeader;
  public itemLink: ItemLink;
  public palletNo: string;
  public warehouseLocation: WarehouseLocation;
  public quantity: number;
  public grossWeight: number;
  public boxWeight: number;
  public nettWeight: number;
  public qtyPallets: number;
  public cubeSize: number;
  public printLabel: boolean;
  public reprintLabel: boolean;

  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;

  constructor() {
    this.createDate = new Date();
  }
}
