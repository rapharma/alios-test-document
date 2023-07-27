import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { verifyCpf } from 'src/app/core/document/actions/action';
import { AppState } from 'src/app/core/document/store/app-state';
import { CpfState } from 'src/app/core/document/store/cpf';
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
  cpfState$: Observable<CpfState>;

  constructor(private store: Store<AppState>, private cpfService: CpfService) {
    this.cpfState$ = this.store.select('cpf');
  }

  verifyCpf(cpf: string): void {
    this.store.dispatch(verifyCpf({ cpf }));
  }
}
