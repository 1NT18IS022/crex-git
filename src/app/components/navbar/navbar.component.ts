import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Console } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private service: ApiserviceService) { }

  isLoggedIn() { 
    var val=this.service.isloggedIn();
    console.log("logged in value:",val); 
    return val; ;
  }
  
}
