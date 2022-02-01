import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalAmount= 0;
  onNewItem(itemData: {total: number}){
    this.totalAmount = itemData.total;
    console.log("New Total: " + this.totalAmount);
  }
}
