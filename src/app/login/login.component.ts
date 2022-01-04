import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  buttonPressed: boolean = false;
  @Input() isLoggedIn: boolean = false;
  @Output() isLoggedInChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  formValue:any;

  constructor() { }

  ngOnInit(): void {
  }

  wantsLogin() {
    this.buttonPressed = true;    
  }

  logout() {
    this.isLoggedIn = false;
    this.buttonPressed = false;
    this.isLoggedInChange.emit(this.isLoggedIn);
  }

  validateUser(form: NgForm){
    this.formValue = form.value;
    // console.log(this.formValue.username);
    if(this.formValue.username == "test" && this.formValue.password == "123"){
      console.log("Condition reached");
      this.isLoggedIn = true;     
        this.isLoggedInChange.emit(this.isLoggedIn);
    }
  }

}
