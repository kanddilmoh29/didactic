import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lore-scroll-menu',
  templateUrl: './scroll-menu.component.html',
  styleUrls: ['./scroll-menu.component.scss']
})
export class ScrollMenuComponent implements OnInit {

  constructor() { }

  middleTitles = [
      'React'
    , 'Javascript'
    , 'Angular'
    , 'Typescript'
    , 'TSLint'
    , 'RxJs'
    , 'Reduce'
    , 'Accessebility'
    , 'Wedget'
    , 'Wedget'
    , 'Wedget'
    , 'Material'
  ];

  @ViewChild('widgetsContent', { read: ElementRef, static: false }) public widgetsContent: ElementRef<any>;

  ngOnInit() {
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

}
