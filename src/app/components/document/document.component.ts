import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { verifyCpf } from 'src/app/core/document/actions/action';
import { AppState } from 'src/app/core/document/models/app-state';
import { PersonState } from 'src/app/core/document/models/person';
import { CpfService } from 'src/app/core/services/cpf.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  ngOnInit(): void {
  }

  cpf: string = '';
  name: string = '';
  status: string = '';
  app_account: string = '';
  bank_account: string = '';
  loading: boolean = false;
  error: string | null = null;
  personState$: Observable<PersonState>;

  constructor(private store: Store<AppState>, private cpfService: CpfService) {
    this.personState$ = this.store.select('cpf');
  }

  verifyCpf(cpf: string): void {
    this.store.dispatch(verifyCpf({ cpf }));
  }
}
