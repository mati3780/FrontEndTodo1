import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityModule } from './security/security.module';
import { RedirectComponent } from './security/components/redirect/redirect.component';
import { UnauthorizedComponent } from './security/components/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './security/components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
	{
		path: 'redirect',
		component: RedirectComponent
	},
	{
		path: 'unauthorized',
		component: UnauthorizedComponent
	},
	{
		path: 'forbidden',
		component: ForbiddenComponent
	},
	{
		path: '',
		component: HomeComponent,
		data: {
			header: {
				title: 'Home',
				subtitle: ''
			},
			breadcrumb: "Home"
		}
	},
	{		
		path: 'products',
		component: ProductsComponent,
		data: {
			header: {
				title: 'Products',
				subtitle: 'List'
			},
			breadcrumb: 'Products'
		}
	},
	{
		path: 'about',
		component: AboutComponent,
		data: {
			header: {
				title: 'About',
				subtitle: ''
			},
			breadcrumb: "About"
		}
	},
	{
		path: 'notfound',
		component: NotFoundComponent
	},
	{	//NEEDS TO STAY AT THE END!
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SecurityModule
  ],
  exports: [
    RouterModule,
    SecurityModule
  ]
})
export class AppRoutingModule { }
