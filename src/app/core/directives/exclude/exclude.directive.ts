import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserType } from '../../services/features/models/FeatureSet.type';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Directive({
  selector: '[nrlExclude]',
  standalone: true,
})
export class ExcludeDirective {
  @Input({ required: true }) nrlExclude: UserType[] = []; // exclude all but for the types in this list

  private _sub!: Subscription;

  constructor(
    private _host: ViewContainerRef,
    private _el: TemplateRef<unknown>,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this._sub = this._auth.user$.subscribe((data) => {
      let show = !this.nrlExclude.includes(data.type);
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
