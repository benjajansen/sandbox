import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule, MatTabsModule, MatTooltipModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {PhotoList} from "./components/photo/photo-list.component";
import {PhotoService} from "./services/photo.service";
import {SidePanel} from "./components/navigation/side-panel.component";
import {NavBar} from "./components/navigation/nav-bar.component";
import {Register} from "./components/security/registerUser/register.component";
import {RegisterService} from './services/register.service';
import {LoginService} from "./services/login.service";
import {LoginComponent} from "./components/security/login/login.component";
import {MyAlbum} from "./components/photo/my-album.component";
import {SecurityService} from "./services/security.service";
import {AddPhoto} from "./components/photo/add-photo.component";
import {FileService} from "./services/file.service";
import {DebtorService} from "./services/debtor.service";
import {DebtorComponent} from "./components/debtor/debtor/debtor.component";
import {CreditorComponent} from "./components/creditor/creditor/creditor.component";
import {CreditorService} from "./services/creditor.service";
import {ModalComponent} from "./components/tools/modal.component";
import {SecondNavBar} from "./components/navigation/secondary-nav-bar.component";
import {SystemBEELevelComponent} from "./components/system/beeLevel/beeLevel.component";
import {SystemPaymentMethodComponent} from "./components/system/paymentMethod/paymentMethod.component";
import {SystemService} from "./services/system.service";
import {AdminService} from "./services/admin.service";
import {AdminBranchComponent} from "./components/admin/branch/branch.component";
import {ArraySortPipe} from "./components/tools/sort.component";
import {InlineEdit} from "./components/tools/inline-edit/inline-edit.component";
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
import {ItemMasterComponent} from "./components/item/item/itemMaster.component";
import {ItemUnitOfMeasureComponent} from "./components/item/unitOfMeasure/unitOfMeasure.component";
import {ItemCategoryComponent} from "./components/item/category/category.component";
import {ItemGroupComponent} from "./components/item/group/group.component";
import {ItemService} from "./services/item.service";
import {ItemLinkComponent} from "./components/item/link/itemLink.component";
import {DebtorCostCentreComponent} from "./components/debtor/costCentre/costCentre.component";
import {SalesOrderService} from "./services/salesOrder.service";
import {SalesOrderDetailComponent} from "./components/salesOrder/salesOrderDetail.component";
import {AdminCompanyComponent} from "./components/admin/company/company.component";
import {UploadFileService} from "./services/uploadFile.service";
import {FileUploadComponent} from "./components/tools/file-upload/file-upload.component";
import {ChangePasswordComponent} from "./components/security/changePassword/changePassword.component";
import {PageDividerComponent} from "./components/tools/pageElements/page-divider.component";
import {InputComponent} from "./components/tools/input/input.component";
import {SystemPickMethodComponent} from "./components/system/pickMethod/pickMethod.component";
import {SalesOrderHeaderComponent} from "./components/salesOrder/salesOrderHeader.component";
import {WarehouseComponent} from "./components/warehouse/warehouse/warehouse.component";
import {WarehouseZoneComponent} from "./components/warehouse/zone/zone.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    Register,
    ChangePasswordComponent,
    LoginComponent,
    MyAlbum,
    AddPhoto,
    DebtorComponent,
    DebtorBusinessTypeComponent,
    DebtorBusinessUnitComponent,
    DebtorCategoryComponent,
    DebtorTypeOfOrganisationComponent,
    DebtorCostCentreComponent,
    CreditorComponent,
    CreditorClassificationComponent,
    CreditorGroupComponent,
    ItemMasterComponent,
    ItemLinkComponent,
    ItemGroupComponent,
    ItemCategoryComponent,
    ItemUnitOfMeasureComponent,
    SalesOrderHeaderComponent,
    SalesOrderDetailComponent,
    ModalComponent,
    SecondNavBar,
    SystemBEELevelComponent,
    SystemBEETypeComponent,
    SystemPaymentMethodComponent,
    SystemPaymentTermComponent,
    SystemPaymentTypeComponent,
    SystemPickMethodComponent,
    SystemSettleDiscMethodComponent,
    SystemTitleComponent,
    SystemTradeLevelComponent,
    AdminBranchComponent,
    AdminCityTownComponent,
    AdminCountryComponent,
    AdminProvinceComponent,
    WarehouseComponent,
    WarehouseZoneComponent,
    AdminCompanyComponent,
    ArraySortPipe,
    InlineEdit,
    InputComponent,
    PageDividerComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService,
    SecurityService,
    UploadFileService,
    FileService,
    DebtorService,
    CreditorService,
    SystemService,
    AdminService,
    ItemService,
    SalesOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
