import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [],
  templateUrl: './user-select.component.html',
  styleUrl: './user-select.component.css',
})
export class UserSelectComponent {
  constructor(private _auth: AuthService) {}

  handleSelect(event: any) {
    this._auth.selectUser(event.target.value);
  }
}
