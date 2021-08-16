import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  myid:any;
  myform:any;
  ngOnInit()
  {
    this.myform=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    phonenumber:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    pincode:new FormControl('')

    });
  
    
    this.display();
  }
  
  
  
  display()
  {
    return localStorage.getItem('formdata');
  }
  onSubmit()
  {
    localStorage.setItem("formdata",JSON.stringify(this.myform.value))
  }
  removeItem()
  {
    localStorage.removeItem('formdata');
  }
  removeAll()
  {
    localStorage.clear();
  }
  update()
  {
    localStorage.setItem("formdata",JSON.stringify(this.myform.value)) 
  }
  
  
   
  }
  
 

