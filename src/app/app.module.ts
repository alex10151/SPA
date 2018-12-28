import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../material-module';
import { TomoComponent } from './tomo/tomo.component';
import { CtScanComponent } from './ct-scan/ct-scan.component';
import { CtReconComponent } from './ct-recon/ct-recon.component';
import { PetScanComponent } from './pet-scan/pet-scan.component';
import { PetReconComponent } from './pet-recon/pet-recon.component';
import { TableItemComponent } from './table-item/table-item.component';
import { CtWebComponent } from './ct-web/ct-web.component';
import { PetWebComponent } from './pet-web/pet-web.component';

@NgModule({
  declarations: [
    AppComponent,
    TomoComponent,
    CtScanComponent,
    CtReconComponent,
    PetScanComponent,
    PetReconComponent,
    TableItemComponent,
    CtWebComponent,
    PetWebComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
