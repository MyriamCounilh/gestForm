import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   nombre: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);
   form: FormGroup;
   listElement: Array<string>;

   constructor() { 
      this.form = new FormGroup({nombre: this.nombre});
      this.listElement = new Array();      
   }

  ngOnInit(): void {
   
  }

  createElement() {
   this.listElement = new Array();
   const numberElements = this.form.value.nombre;
   for (let i = 0; i < numberElements; i++) {
      this.listElement.push(this.numberToString(this.getRandom(2000) - 1000));
   }      
  } 

  getRandom(max: number): number {
   return Math.floor(Math.random() * Math.floor(max));
  }

  numberToString(number: number): string {
   if ((number % 3 === 0) && (number % 5 === 0)) {
      return "Gestform";
   } else if (number % 5 === 0) {
      return "Forme";
   } else if (number % 3 === 0) {
      return "Geste";
   }
   return `${number}`;
  }

}
