import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  
})
export class DeptComponent 
 {
  depts=[];
  constructor() 
  {
      this.depts =
      
      [
        {"DNo":10,"DName":"B1", "DAddress":"pune1"},
        {"DNo":20,"DName":"B2", "DAddress":"pune2"},
        {"DNo":30,"DName":"B3", "DAddress":"pune3"},
      ]            
  }

  Dosomething()
  {
    this.depts.push({"DNo":50,"DName":"B4", "DAddress":"C4"});
    // this.depts.push({"DNo":60,"DName":"B4", "DAddress":"C4"});
    //this.depts.splice(0,1);
  }
Removeme()
{
  this.depts.splice(0,1);
}
  

}
