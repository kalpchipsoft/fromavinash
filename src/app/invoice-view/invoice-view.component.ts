import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetInvoceDataService } from '../get-invoce-data.service';
@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {
  ViewData : any = []; 
  productID: string;
  constructor(private UpdateInvoice : GetInvoceDataService, private route: ActivatedRoute){
    this.productID = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this.UpdateInvoice.viewData(this.productID).subscribe(data =>{
      this.ViewData = data;
      console.log(this.ViewData);
    });
  }

}
