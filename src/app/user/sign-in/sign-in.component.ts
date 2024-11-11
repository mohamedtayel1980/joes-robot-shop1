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

  constructor(private userService:UserService,private router:Router) { }


  signIn() {
    console.log('Sign-in credentials:', this.credentials);
    this.userService.signIn(this.credentials).subscribe({
      next: () => {
        console.log('Sign-in successful');
        this.router.navigate(['/catalog']);
      },
      error: (err) => console.error('Sign-in failed:', err)
    });
  }
}


