import { Component, OnInit } from '@angular/core';
import { NamesService } from 'src/services/names.service';

import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Observable, delay, from, fromEvent, of, tap, timeout, timer } from 'rxjs';

library.add(fas);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'test-DocuSketch';

  faIcon = findIconDefinition({ prefix: 'fas', iconName: 'user' });
  button = document.querySelector('#button')!;

  buttonObserver$:Observable<Event|number>;
  
  constructor(public nameService: NamesService) {
    this.buttonObserver$=timer(2000);
  }

  ngOnInit(): void {
    this.button = document.querySelector('#button')!;
    this.buttonObserver$=fromEvent( this.button, 'click').pipe(delay(3000),tap(_ => this.change()));
  }

  change=()=>{
    this.faIcon = findIconDefinition(
      { prefix: 'fas', iconName: (this.nameService.getName() as IconName) });
    this.nameService.getName;
  }
}
