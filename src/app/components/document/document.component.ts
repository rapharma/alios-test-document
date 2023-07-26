import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { checkCpf } from 'src/app/core/document/actions/actions';
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
  loading: boolean = false;
  error: string | null = null;

  constructor(private store: Store<AppState>, private cpfService: CpfService) {}

  onCheckCpf() {
    this.loading = true;
    this.error = null;

    this.cpfService.checkCpf(this.cpf)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (result) => {
          this.loading = false;
          this.name = result.name;
          this.status = result.status;

          // update the CPF state
          this.store.dispatch(checkCpf({ cpf: this.cpf }));
        },
        error: (error) => {
          this.loading = false;
          this.error = 'Failed to check CPF.';
        }
      });
  }
}
