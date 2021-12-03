import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchTerm: string = '';

  title = 'julian jandls demo application';

  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ]

  onSearch(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.searchTerm = inputEl.value;
    console.log(this.searchTerm);
  }

  onDetailClicked(book: Book) {
    console.log("detail was clicked", book);
  }

}
