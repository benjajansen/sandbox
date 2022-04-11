import {AdminCountry} from "../admin/Country";
import {FileLink} from "../file/fileLink";
/**
 * Created by Benja on 5/6/2017.
 */

export class AdminCompany {
  public id: number;
  public regName: string;
  public tradeName: string;
  public regNo: string;
  public vatNo: string;
  public telNo: string;
  public faxNo: string;
  public webSite: string;
  public street1: string;
  public street2: string;
  public street3: string;
  public street4: string;
  public streetPostalCode: string;
  public box1: string;
  public box2: string;
  public box3: string;
  public box4: string;
  public boxPostalCode: string;
  public country: AdminCountry;
  public bankName: string;
  public bankBranchNo: string;
  public bankAccName: string;
  public bankAccNo: string;
  public logo: FileLink;
  public headerColour: string;
  public hFontColour: string;
  public bodyColour: string;
  public bFontColour: string;
  public tempPrefix: string;

  constructor() {
    this.tradeName = "";
    this.regName = "";
    this.regNo = "";
    this.vatNo = "";
    this.telNo = "";
    this.faxNo = "";
    this.webSite = "";
    this.street1 = "";
    this.street2 = "";
    this.street3 = "";
    this.street4 = "";
    this.streetPostalCode = "";
    this.box1 = "";
    this.box2 = "";
    this.box3 = "";
    this.box4 = "";
    this.boxPostalCode = "";
    this.bankName = "";
    this.bankBranchNo = "";
    this.bankAccNo = "";
    this.bankAccName = "";
    this.headerColour = "";
    this.hFontColour = "";
    this.bodyColour = "";
    this.bFontColour = "";
    this.tempPrefix = "";
  }
}
