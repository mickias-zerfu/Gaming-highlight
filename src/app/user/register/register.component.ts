import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alertMsg = "Please wait your account is being created";
  showAlert = false;
  alertColor = 'blue'
  name = new FormControl('', [
    Validators.required, Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  age = new FormControl('', [
    Validators.required, Validators.min(9)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm')
  ])
  confirm_Password = new FormControl('', [
    Validators.required,

  ])
  phoneNumber = new FormControl('', [
    Validators.required])
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_Password: this.confirm_Password,
    phoneNumber: this.phoneNumber
  });
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    this.showAlert = true;
    this.alertMsg = " Your account is created please return to login";
    this.alertColor = 'blue'
  }
}
