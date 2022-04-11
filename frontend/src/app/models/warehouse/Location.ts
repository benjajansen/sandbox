import {SecurityUser} from "../security/User";
import {WarehouseZone} from "./Zone";


export class WarehouseLocation {
  public id: number;
  public identifier: string;
  public description: string;
  public zone: WarehouseZone;
  public pickSeq: number;
  public putAway: number;
  public locationHold: boolean;
  public cubeSize: number;
  public createDate: Date;
  public createUser: SecurityUser;
}
