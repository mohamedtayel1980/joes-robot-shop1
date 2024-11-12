import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
credentials:IUserCredentials={email:'',password:''};
signInError:boolean=false;
  constructor(private userService:UserService,private router:Router) { }


  signIn() {
    this.signInError=false;
    console.log('Sign-in credentials:', this.credentials);
    this.userService.signIn(this.credentials).subscribe({
      next: () => {
        console.log('Sign-in successful');
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        this.signInError=true;
        console.error('Sign-in failed:', err);
      }
    });
  }
}


