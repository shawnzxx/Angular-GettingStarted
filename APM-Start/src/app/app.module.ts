import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';



//NgModule is our root module, which includes import other moduels(components) and declare selector components
@NgModule({
  //all external modules other components may need to use
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  //all our internal classes
  //The set of components, directives, and pipes (declarables) that belong to AppModule.
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  //define bootstrap components, these components will init inside index.html use as directly tag
  bootstrap: [AppComponent]
})

//Export everything above as a AppModule
export class AppModule { }
