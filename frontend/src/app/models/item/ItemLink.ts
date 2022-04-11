import {SecurityUser} from "../security/User";
import {ItemMaster} from "./ItemMaster";
import {Debtor} from "../debtor/Debtor";
import {SystemPickMethod} from "../system/PickMethod";

export class ItemLink {
  public id: number;
  public item: ItemMaster;
  public debtor: Debtor;
  public alternativeCode: string;
  public pickMethod: SystemPickMethod;
  public comments: string;
  public minQty: number;
  public maxQty: number;
  public reorderQty: number;
  public expiryDate: boolean;
  public bestBefore: boolean;
  public onOrderQuantity: number;
  public receivedQuantity: number;
  public receivedNettWeight: number;
  public receivedPallets: number;
  public issuedQuantity: number;
  public issuedNettWeight: number;
  public issuedPallets: number;
  public onHandQuantity: number;
  public onHandNettWeight: number;
  public onHandPallets: number;
  public suspend: boolean;
  public suspendDate: Date;
  public createDate: Date;
  public createUser: SecurityUser;
  public modDate: Date;
  public modUser: SecurityUser;
}
