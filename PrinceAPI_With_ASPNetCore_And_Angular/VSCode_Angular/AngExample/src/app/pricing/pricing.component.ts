import { Component, OnInit } from '@angular/core';
import {PriceingsrvService} from '../Shared/priceingsrv.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styles: []
})
export class PricingComponent implements OnInit {

  constructor(private service:PriceingsrvService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.DisplayPrices();
  }

}
