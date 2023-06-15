import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [{path:'',component:AdminDashboardComponent,
children:[{path:'home', component:HomeComponent},
{path:'about',component:ServicesComponent},
{path:'footer',component:FooterComponent},
{path:'contact',component:ContactsComponent},
{path:'services',component:ServicesComponent},
{path:'header',component:HeaderComponent},
{path:'todo',component:TodoComponent},
{path:'privacypolicy',component:PrivacypolicyComponent},
{path:'cart',component:CartComponent},
{path:'',redirectTo:'/admin/home',pathMatch:'full'}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
