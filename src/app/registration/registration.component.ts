import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  addressForm:FormGroup | undefined;
  regForm=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)
  })
  addresses: any;
addressGroups: any;
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      addresses: this.fb.array([]),
    });
  }
  onSubmit(){
    console.log(this.regForm.value);
  }
 
  addAddress() {
    const addressGroup = this.fb.group({
      street: '',
      city: '',
    });
    this.addresses.push(addressGroup);
    
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }
}
