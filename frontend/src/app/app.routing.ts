import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import {Register} from "./components/security/registerUser/register.component";
import {LoginComponent} from "./components/security/login/login.component";
import {MyAlbum} from "./components/photo/my-album.component";
import {AddPhoto} from "./components/photo/add-photo.component";
import {DebtorComponent} from "./components/debtor/debtor/debtor.component";
import {CreditorComponent} from "./components/creditor/creditor/creditor.component";
import {SystemBEELevelComponent} from "./components/system/beeLevel/beeLevel.component";
import {SystemPaymentMethodComponent} from "./components/system/paymentMethod/paymentMethod.component";
import {AdminBranchComponent} from "./components/admin/branch/branch.component";
import {SystemPaymentTypeComponent} from "./components/system/paymentType/paymentType.component";
import {SystemBEETypeComponent} from "./components/system/beeType/beeType.component";
import {SystemPaymentTermComponent} from "./components/system/paymentTerm/paymentTerm.component";
import {SystemSettleDiscMethodComponent} from "./components/system/settleDiscMethod/settleDiscMethod.component";
import {SystemTitleComponent} from "./components/system/title/title.component";
import {SystemTradeLevelComponent} from "./components/system/tradeLevel/tradeLevel.component";
import {CreditorClassificationComponent} from "./components/creditor/classification/classification.component";
import {CreditorGroupComponent} from "./components/creditor/group/group.component";
import {DebtorBusinessTypeComponent} from "./components/debtor/businessType/businessType.component";
import {DebtorBusinessUnitComponent} from "./components/debtor/businessUnit/businessUnit.component";
import {DebtorCategoryComponent} from "./components/debtor/category/category.component";
import {DebtorTypeOfOrganisationComponent} from "./components/debtor/typeOfOrganisation/typeOfOrganisation.component";
import {AdminCityTownComponent} from "./components/admin/cityTown/cityTown.component";
import {AdminCountryComponent} from "./components/admin/country/country.component";
import {AdminProvinceComponent} from "./components/admin/province/province.component";
import {ItemCategoryComponent} from "./components/item/category/category.component";
import {ItemMasterComponent} from "./components/item/item/itemMaster.component";
import {ItemGroupComponent} from "./components/item/group/group.component";
import {ItemUnitOfMeasureComponent} from "./components/item/unitOfMeasure/unitOfMeasure.component";
import {ItemLinkComponent} from "./components/item/link/itemLink.component";
import {DebtorCostCentreComponent} from "./components/debtor/costCentre/costCentre.component";
import {AdminCompanyComponent} from "./components/admin/company/company.component";
import {ChangePasswordComponent} from "./components/security/changePassword/changePassword.component";
import {SystemPickMethodComponent} from "./components/system/pickMethod/pickMethod.component";
import {SalesOrderHeaderComponent} from "./components/salesOrder/salesOrderHeader.component";
import {WarehouseComponent} from "./components/warehouse/warehouse/warehouse.component";
import {WarehouseZoneComponent} from "./components/warehouse/zone/zone.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-album',
    component: MyAlbum
  },
  {
    path: 'add-photo',
    component: AddPhoto
  },
  {
    path: 'debtor',
    component: DebtorComponent
  },
  {
    path: 'debtorBusinessType',
    component: DebtorBusinessTypeComponent
  },
  {
    path: 'debtorBusinessUnit',
    component: DebtorBusinessUnitComponent
  },
  {
    path: 'debtorCategory',
    component: DebtorCategoryComponent
  },
  {
    path: 'debtorTypeOfOrganisation',
    component: DebtorTypeOfOrganisationComponent
  },
  {
    path: 'debtorCostCentre',
    component: DebtorCostCentreComponent
  },
  {
    path: 'creditor',
    component: CreditorComponent
  },
  {
    path: 'creditorClassification',
    component: CreditorClassificationComponent
  },
  {
    path: 'creditorGroup',
    component: CreditorGroupComponent
  },
  {
    path: 'itemMaster',
    component: ItemMasterComponent
  },
  {
    path: 'itemLink',
    component: ItemLinkComponent
  },
  {
    path: 'itemCategory',
    component: ItemCategoryComponent
  },
  {
    path: 'itemGroup',
    component: ItemGroupComponent
  },
  {
    path: 'itemUnitOfMeasure',
    component: ItemUnitOfMeasureComponent
  },
  {
    path: 'salesOrder',
    component: SalesOrderHeaderComponent
  },
  {
    path: 'systemBEELevel',
    component: SystemBEELevelComponent
  },
  {
    path: 'systemBEEType',
    component: SystemBEETypeComponent
  },
  {
    path: 'systemPaymentMethod',
    component: SystemPaymentMethodComponent
  },
  {
    path: 'systemPaymentTerm',
    component: SystemPaymentTermComponent
  },
  {
    path: 'systemPaymentType',
    component: SystemPaymentTypeComponent
  },
  {
    path: 'systemPickMethod',
    component: SystemPickMethodComponent
  },
  {
    path: 'systemSettleDiscMethod',
    component: SystemSettleDiscMethodComponent
  },
  {
    path: 'systemTitle',
    component: SystemTitleComponent
  },
  {
    path: 'systemTradeLevel',
    component: SystemTradeLevelComponent
  },
  {
    path: 'adminBranch',
    component: AdminBranchComponent
  },
  {
    path: 'adminCityTown',
    component: AdminCityTownComponent
  },
  {
    path: 'adminCountry',
    component: AdminCountryComponent
  },
  {
    path: 'adminProvince',
    component: AdminProvinceComponent
  },
  {
    path: 'adminWarehouse',
    component: WarehouseComponent
  },
  {
    path: 'adminZone',
    component: WarehouseZoneComponent
  },
  {
    path: 'adminCompany',
    component: AdminCompanyComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
