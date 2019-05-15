import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  submitted:boolean = false;
  success:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      //ถ้า validators มากกว่า 1 ต้องใช้ compose
      //  emails:['',Validators.compose([Validators.required,Validators.email])],
      emails:['',[Validators.required,Validators.email]],
      tel:['',Validators.required]
    })
  }

  //getter to access form field

  get f(){ return this.contactForm.controls }


  onSubmit()
  {
    this.submitted = true

    //stop is form is invalid
    if(this.contactForm.invalid){
      return;
    }
    alert("Success"+JSON.stringify(this.contactForm.value))
  }

}
