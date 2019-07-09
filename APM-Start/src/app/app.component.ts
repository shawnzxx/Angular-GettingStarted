import { Component } from "@angular/core";

@Component({
    //define html directive
    selector: 'pm-root',
    templateUrl: './app.component.html'
})

//since this is our application component so we follow the conventions
export class AppComponent{
    pageTitle: string = 'Shawn zhang project management tools';
}