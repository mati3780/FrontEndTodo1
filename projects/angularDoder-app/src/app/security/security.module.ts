import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);

import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    ForbiddenComponent,
    RedirectComponent,
    UnauthorizedComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ForbiddenComponent,
    RedirectComponent,
    UnauthorizedComponent
  ]

})
export class SecurityModule { }
