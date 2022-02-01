import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  //  items = [
  //  {desc: 'Car Insurance', amount: -600},
  //  {desc: 'Internet', amount: -30},
  // {desc: 'Wage', amount: 1200}
  //  ];

  @Output() itemCreated = new EventEmitter<{total: number}>();

  items = [] as any;
  totalAmount = 0;

  amountBinding!: string;
  descBinding!: string;
  showAlert = false;
  

  constructor() { }

  onAddItem(){
    this.items.push({desc: this.descBinding, amount: +this.amountBinding})

    this.totalAmount += +this.amountBinding;
    this.itemCreated.emit({total: this.totalAmount});

    this.amountBinding = "";
    this.descBinding = "";

    this.showAlert= true;
    setInterval(() =>{this.showAlert = false}, 5000)
  }

  ngOnInit(): void {
  }

}

