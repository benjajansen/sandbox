/**
 * Created by Ben on 24 Jul 2017.
 */

export class GoodsIssueDetailPackage{
  public id: number;
  public salesOrder: number;
  public item: string;
  public pickingOrder: string;
  public quantity: number;

  constructor() {
    this.salesOrder = 0;
    this.item = "";
    this.pickingOrder = "";

  }
}
