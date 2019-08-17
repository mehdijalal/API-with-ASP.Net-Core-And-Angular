import { Component, OnInit } from '@angular/core';
import {PriceingsrvService} from '../../Shared/priceingsrv.service';
import { ToastrService } from 'ngx-toastr';
import {PriceDetails} from '../../Shared/PriceModel';
import { NgForm } from '@angular/forms';

//import { $ } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-pricemng',
  templateUrl: './ListPrice.component.html',
  styles: []
})
export class ListPriceComponent implements OnInit {

  constructor(private service:PriceingsrvService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.DisplayPrices();
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

  ShowForm(){
    $('#PriceForm').removeClass('HideMe');
    $('#AddBtn').addClass('HideMe');
    $('#HideBtn').removeClass('HideMe');
    this.resetForm();
  }
  HideForm(){
    $('#PriceForm').addClass('HideMe');
    $('#AddBtn').removeClass('HideMe');
    $('#HideBtn').addClass('HideMe');
    this.resetForm();
  }

  FillForm(pd:PriceDetails){
    $('#PriceForm').removeClass('HideMe');
    $('#AddBtn').addClass('HideMe');
    $('#HideBtn').removeClass('HideMe');
    this.service.formData=Object.assign({},pd);
  }

  DeleteRecord(PId){
    if(confirm('Are you sure to delete')==true){
     this.service.DeletePriceDetail(PId)
     .subscribe(
       res=>{
         this.service.DisplayPrices();
         this.toastr.warning('Package Deleted Success','Price');
       },
       err=>{
         console.log(err);
       })
    }
   }

}
