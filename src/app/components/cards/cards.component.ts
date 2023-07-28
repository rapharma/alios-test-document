import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/document/models/app-state';
import { PersonState } from 'src/app/core/document/models/person';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() person = {} as PersonState;
  personState$: Observable<PersonState> = new Observable<PersonState>;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.personState$ = this.store.select('person');
  }

}
