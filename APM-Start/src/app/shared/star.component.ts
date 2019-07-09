import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    //input function will receive data from container componnet
    //this consider as data change
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = 75 / 5 * this.rating;
    }
    onClick(): void {
        let message = `The rating you clicked rate is ${this.rating}`;
        this.ratingClicked.emit(message);
    }
}