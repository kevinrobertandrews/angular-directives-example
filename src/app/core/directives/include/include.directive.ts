import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserType } from '../../services/features/models/FeatureSet.type';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[nrlInclude]',
  standalone: true,
})
export class IncludeDirective {
  @Input({ required: true }) nrlInclude: UserType[] = [];

  private _sub!: Subscription;

  constructor(
    private _host: ViewContainerRef,
    private _el: TemplateRef<unknown>,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this._sub = this._auth.user$.subscribe((data) => {
      let show = this.nrlInclude.includes(data.type);
      if (show) {
        this._host.clear();
        this._host.createEmbeddedView(this._el);
      } else {
        this._host.clear();
      }
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
