import { Component, Input } from "@angular/core";
@Component({
    selector: 'app-income-display',
    templateUrl: './income-display.component.html',
    styleUrls: ['./income-display.component.css']

})
export class IncomeDisplay {
    @Input() totalAmount = 10;
}