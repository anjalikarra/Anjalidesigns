import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FashionComponent } from './fashion/fashion.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FooterComponent } from './footer/footer.component';
import { WomenswearComponent } from './fashion/womenswear/womenswear.component';
import { MenswearComponent } from './fashion/menswear/menswear.component';
import { KidswearComponent } from './fashion/kidswear/kidswear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FashionComponent,
    JewelleryComponent,
    FootwearComponent,
    FooterComponent,
    WomenswearComponent,
    MenswearComponent,
    KidswearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
