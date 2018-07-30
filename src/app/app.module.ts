import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { GetInvoceDataService } from './get-invoce-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendingInvoiceListComponent } from './pending-invoice-list/pending-invoice-list.component';
import { MasterHeaderComponent } from './master-header/master-header.component';
import { MasterFooterComponent } from './master-footer/master-footer.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceLoginComponent } from './invoice-login/invoice-login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PendingInvoiceListComponent,
    MasterHeaderComponent,
    MasterFooterComponent,
    InvoiceViewComponent,
    InvoiceLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetInvoceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
