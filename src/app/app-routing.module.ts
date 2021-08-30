import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { KidswearComponent } from './fashion/kidswear/kidswear.component';
import { MenswearComponent } from './fashion/menswear/menswear.component';
import { WomenswearComponent } from './fashion/womenswear/womenswear.component';
import { FooterComponent } from './footer/footer.component';
import { FootwearComponent } from './footwear/footwear.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'fashion',component:FashionComponent,children:[
    {path:'womenswear',component:WomenswearComponent},
    {path:'menswear',component:MenswearComponent},
    {path:'kidswear',component:KidswearComponent}
  ]},
  {path:'jewellery',component:JewelleryComponent},
  {path:'footwear',component:FootwearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
