/**
 * Created by Ben on 24 Jul 2017.
 */

export class SalesOrderDetailPackage{
  public id: number;
  public salesOrder: number;
  public type: string;
  public item: string;
  public pickingOrder: string;
  public quantity: number;

  constructor() {
    this.salesOrder = 0;
    this.type = "";
    this.item = "";
    this.pickingOrder = "";

  }
}
