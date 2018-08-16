import { Component} from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  selector: 'gi-header'
})

export class HeaderComponent {

  loginState: boolean = false;

  constructor(
    private auth: AuthService
  ){}
  
  login(){
    this.auth.login();
    this.loginState = true;
  }
  logout(){
    this.auth.logout();
    this.loginState = false;
  }
}