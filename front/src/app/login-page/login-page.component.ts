import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup ;
  username: string= "";
  password: string = "";
  isLoggedin : boolean = true;
  invaliduserName = false;
  userNameErrorMessage = "";
  invalid: boolean = false;
  submitted = false;
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    public router: Router,) { }

  ngOnInit(): void {
    // the form group
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Login method
  login() {
    if(this.loginForm!= undefined){
      if (this.loginForm.valid) {
        console.log(this.loginForm.value.username, this.loginForm.value.password);
        
        this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: any) => {
        
          this.submitted = true;
          this.invaliduserName = false;
          
          this.isLoggedin = false;
          this.router.navigate(['/home-page']);
        }, (error: any) => {
          console.log(error);
          this.submitted = true;
            this.invalid = true;
            this.invaliduserName = true;
            this.userNameErrorMessage = "Le nom d'utilisateur que vous avez essayé d'atteindre n'existe pas dans notre système";
        });
      }
    }
  }
}
