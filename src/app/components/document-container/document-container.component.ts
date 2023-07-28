import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { verifyCpf } from 'src/app/core/document/actions/action';
import { AppState } from 'src/app/core/document/models/app-state';
import { PersonState } from 'src/app/core/document/models/person';

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {

  ngOnInit(): void {
  }

  // cpf: string = '';
  // name: string = '';
  // status: string = '';
  // app_account: string = '';
  // bank_account: string = '';
  // loading: boolean = false;
  // error: string | null = null;
  cpfValue: string = ''

  constructor(private store: Store<AppState>) {}

  verifyCpf(cpf: string): void {
    this.store.dispatch(verifyCpf({ cpf }));
  }

  onInputChange(cpf: string) {
    this.cpfValue = cpf.replace(/\D/g, '');
    this.cpfValue = this.formatCPF(cpf);
  }

  formatCPF(cpf: string): string {
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return cpf;
  }

  numericOnly(event: KeyboardEvent): boolean {
    const char = event.key;
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      this.cpfValue = '';
    }
    return true;
  }
  
  
}
