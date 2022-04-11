import {SecurityUser} from "../security/User";

export class ItemGroup {
  public id: number;
  public description: string;
  public createUser: SecurityUser;
  public createDate: Date;
}
