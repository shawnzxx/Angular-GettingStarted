import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';



//NgModule is our root module, which includes import other moduels(components) and declare selector components
@NgModule({
  //all external modules other components may need to use
  imports: [
    //BrowserModule register critical application service providers, such as error handlling
    //it import and export CommonModule which declare an export directvie like ng-if and ng-for
    BrowserModule,
    //include two way binding [(ngModule)]
    FormsModule,
    HttpClientModule,
    //each feature modules in here
    ProductModule,
    //becareful the routing sequence, app routing should be always at last, since it includes ** route
    AppRoutingModule
  ],
  //list components that belong to this module
  //The set of components, directives, and pipes (declarables) that belong to AppModule.
  declarations: [
    AppComponent, //--this is our root component
    WelcomeComponent
  ],
  //define start up components, start up component should contain selector directive 
  //which used inside the index.html
  bootstrap: [AppComponent]
})

//Export everything above as a AppModule
export class AppModule { }
