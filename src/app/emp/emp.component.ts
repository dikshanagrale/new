import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  
})
export class EmpComponent 
{
  No:number;
  Name:string;
  Address:string;
 
  constructor() 
   {
      this.No=1;
      this.Name="DIKSHA";
      this.Address="USA" 
   }

  
  

}
