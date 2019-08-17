import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PriceingsrvService} from '../../Shared/priceingsrv.service';
import {PriceDetails} from '../../Shared/PriceModel';

@Component({
  selector: 'app-pricedetails',
  templateUrl: './pricedetails.component.html',
  styles: []
})
export class PricedetailsComponent implements OnInit {

  constructor(private service:PriceingsrvService, private toastr:ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.reset();
    }else{
      this.service.formData={
        PId:0,
        MonthlyPrice:0,
        NumberOfUsers:0,
        Data:'',
        AdditionalSupport:''
      }
    }
  }

  SubmitForm(form:NgForm){
    //------Insert Record-----//
    if(this.service.formData.PId==0){
      this.insertRecord(form);
    }
    //---------Update Record---------//
    else{
      this.UpdateRecord(form);
      this.resetForm();
    }
      
  }

  insertRecord(form:NgForm){
    //form.value;
    this.service.AddPrice().subscribe(
      //if success
      res=>{
        this.resetForm(form);
        this.toastr.success('Form submitted successfully','Price');
        this.service.DisplayPrices();

      },
      err=>{
        //if failed
        console.log(err);
      }
    )
  }

  UpdateRecord(form:NgForm){
    //form.value;
    this.service.UpdatePriceDetail().subscribe(
      //if success
      res=>{
        this.resetForm(form);
        this.toastr.success('Form submitted successfully','Price update');
        this.service.DisplayPrices();
      },
      err=>{
        //if failed
        console.log(err);
      }
    )
  }
}
