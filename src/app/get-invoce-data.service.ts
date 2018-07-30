import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute,Router  } from '@angular/router';

declare var $:any;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', })
};

var params={
  "ExternalPersonId": 1,
  "Status": 43
}

@Injectable({
  providedIn: 'root'
})
export class GetInvoceDataService {

  constructor(private http : HttpClient,private myRoute: Router) { 
  }
  getData(){
    return this.http.post('http://testxamerinservices.mycii.in/Invoice/GetPendingInvoiceListExternal', params)
  }

  viewData(id){
    var ViewData={
      "RequestId": id
    }
    return this.http.post('http://testxamerinservices.mycii.in/Invoice/InvoiveView',ViewData)
  }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }


}
