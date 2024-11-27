import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IncludeDirective } from './core/directives/include/include.directive';
import { ExcludeDirective } from './core/directives/exclude/exclude.directive';
import { AuthService } from './core/services/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { UserSelectComponent } from './components/user-select/user-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    IncludeDirective,
    ExcludeDirective,
    HeaderComponent,
    UserSelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'feature-flags';

  constructor(public auth: AuthService) {}
}
