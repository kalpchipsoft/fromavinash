import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingInvoiceListComponent } from './pending-invoice-list/pending-invoice-list.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceLoginComponent } from './invoice-login/invoice-login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'login', component: InvoiceLoginComponent },
  { path: '', component: PendingInvoiceListComponent},
  { path: 'view/:id', component: InvoiceViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
