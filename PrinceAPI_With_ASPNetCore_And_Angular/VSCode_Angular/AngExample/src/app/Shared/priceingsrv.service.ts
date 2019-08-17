import { Injectable } from '@angular/core';
import {PriceDetails} from '../Shared/PriceModel';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PriceingsrvService {

  
  formData:PriceDetails;
  readonly rootURL = 'http://localhost:51863/api';
  list: PriceDetails[];

  constructor(private http:HttpClient) { }
//----------Display Prices-------------//
  DisplayPrices(){
    return this.http.get(this.rootURL+'/Prices')
    .toPromise()
    .then(res=>this.list = res as PriceDetails[] )
  }

//------------Add Price details----//
  AddPrice(){
    return this.http.post(this.rootURL+'/Prices',this.formData)
  }
  //---update Price Details--------//
  UpdatePriceDetail(){
    return this.http.put(this.rootURL+'/Prices/'+this.formData.PId,this.formData)
  }
  //---Delete--------//
  DeletePriceDetail(id){
    return this.http.delete(this.rootURL+'/Prices/'+id);
  }

 
}
