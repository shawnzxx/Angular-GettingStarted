import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';


//NgModule is our root module, which includes import other moduels(components) and declare selector components
@NgModule({
  //all external modules other components may need to use
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  //all our internal classes
  //The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe,
    StarComponent
  ],
  //define bootstrap components, this component should have the selector we used in index.html
  bootstrap: [AppComponent]
})

//1: everything in angular follows: we define angular modules by class
export class AppModule { }
