import {SecurityUser} from "../security/User";
import {DebtorBusinessType} from "./BusinessType";
import {DebtorTypeOfOrganisation} from "./TypeOfOrganisation";
import {DebtorCategory} from "./Category";
import {DebtorBusinessUnit} from "./BusinessUnit";
import {DebtorParameter} from "./Parameter";
import {AdminBranch} from "../admin/Branch";
import {AdminCountry} from "../admin/Country";
import {AdminProvince} from "../admin/Province";
import {AdminCityTown} from "../admin/CityTown";
import {SystemTitle} from "../system/Title";
import {SystemPaymentTerm} from "../system/PaymentTerm";
import {SystemPaymentMethod} from "../system/PaymentMethod";
import {SystemPaymentType} from "../system/PaymentType";
/**
 * Created by Benja on 5/6/2017.
 */

export class Debtor {
  public id: number;
  public accNo: string;
  public tradeName: string;
  public regName: string;
  public parent: Debtor;
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
  public busUnit: DebtorBusinessUnit;
  public category: DebtorCategory;
  public typeOrg: DebtorTypeOfOrganisation;
  public busType: DebtorBusinessType;
  public branch: AdminBranch;
  public country: AdminCountry;
  public province: AdminProvince;
  public city: AdminCityTown;
  public accSName: string;
  public accFName: string;
  public accTitle: SystemTitle;
  public accCellNo: string;
  public accEmail: string;
  public oppSName: string;
  public oppFName: string;
  public oppTitle: SystemTitle;
  public oppCellNo: string;
  public oppEmail: string;
  public bankName: string;
  public bankBranchNo: string;
  public bankAccNo: string;
  public bankAccName: string;
  public payTerm: SystemPaymentTerm;
  public payMethod: SystemPaymentMethod;
  public payType: SystemPaymentType;
  public arrearsInt: boolean;
  public intPerc: number;

  public startDayTime: number;
  public endDayTime: number;
  public saturday: boolean;
  public sunday: boolean;
  public holidays: boolean;
  public backOrder: boolean;

  public insured: boolean;
  public orderReq: boolean;
  public creditRef: string;
  public creditExpDate: Date;
  public creditAmount: number;
  public creditAvail: number;
  public suspend: boolean;
  public suspendDate: Date;
  public createUser: SecurityUser;
  public createDate: Date;



  constructor() {
    this.accNo = "";
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
    this.accSName = "";
    this.accFName = "";
    this.accCellNo = "";
    this.accEmail = "";
    this.oppSName = "";
    this.oppFName = "";
    this.oppCellNo = "";
    this.oppEmail = "";
    this.bankName = "";
    this.bankBranchNo = "";
    this.bankAccNo = "";
    this.bankAccName = "";
    this.arrearsInt = false;
    this.intPerc = 0;

    this.startDayTime = 0;
    this.endDayTime = 0;
    this.saturday = false;
    this.sunday = false;
    this.holidays = false;
    this.backOrder = false;

    this.insured = false;
    this.orderReq = false;
    this.creditRef = "";
    this.creditAmount = 0;
    this.creditAvail = 0;
    this.suspend = false;
    this.createDate = new Date();
  }
}
