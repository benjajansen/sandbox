import {SecurityUser} from "../security/User";
import {ItemUnitOfMeasure} from "./UnitOfMeasure";
import {ItemGroup} from "./Group";
import {ItemCategory} from "./Category";

export class ItemMaster {
  public id: number;
  public code: string;
  public description: string;
  public measure: ItemUnitOfMeasure;
  public cubeSize: number;
  public group: ItemGroup;
  public category: ItemCategory;
  public comments: string;
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
