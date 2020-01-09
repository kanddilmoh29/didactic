import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lore-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  hideInput: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showHideInput() {
    this.hideInput = !this.hideInput;
  }

}
