import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  list = new Array<string>();

  addElement(ele: string): void {
    this.list.push(ele);
  }

  removeElement(ind: number): void {
    this.list = this.list.length == 1 ? [] :this.list.splice(ind, 1);
  }

  callChange(isChecked: boolean, ele): void {
    if (isChecked) {
      ele.style = 'text-decoration: line-through';
    }
  }
}
