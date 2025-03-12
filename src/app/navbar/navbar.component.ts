import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    username  = "GuestUser";
  constructor(private router: Router) {}

  // ngOninit(){
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
