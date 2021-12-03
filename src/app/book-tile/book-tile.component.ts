import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.scss']
})
export class BookTileComponent implements OnInit {

  @Input() content!: Book;

  @Output() detailClicked = new EventEmitter<Book>();

  titleColor = 'purple';

  constructor() { }

  onClick(event: MouseEvent) {
    this.detailClicked.emit(this.content);
  }

  ngOnInit(): void {
  }

}
