import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent {

  constructor(private authService: AuthService) {}

  isUserLoggedIn$ = this.authService.loggedIn$;

  @Output() eventCloseNav = new EventEmitter<void>();

  onClickClose(): void {
    this.eventCloseNav.emit();
  }

  logOut(): void {
    this.authService.logOut();
    this.eventCloseNav.emit();
  }
  
}
