import { Component, OnInit } from '@angular/core';
import { GetInvoceDataService } from '../get-invoce-data.service';
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-pending-invoice-list',
  templateUrl: './pending-invoice-list.component.html',
  styleUrls: ['./pending-invoice-list.component.css']
})

export class PendingInvoiceListComponent implements OnInit {
  records: any = [];
  constructor(private UpdateInvoice: GetInvoceDataService, private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.chosen').chosen();
     
      
    })
    this.UpdateInvoice.getData().subscribe(data => {
      this.records = data;
      console.log(this.records);
    });
  }

  OpenDivAdvanceSearch() {
    $('[id$=hdnAdvance]').val('1');
    $('[id$=divAdvanceSearch]').css('display', 'block');
    $('[id$=divSearchButton]').css('display', 'none');
    $('[id$=divSearch]').css('display', 'none');
    $(".chosen-container").css({ "width": "100%", "height": "35px" });
    $(".chosen-single").css({ "line-height": "33px", "height": "33px" });
    $(".chosen-single > div").css("top", "4px");
    $('.chosen').trigger('chosen:updated');
  }


}

