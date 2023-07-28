import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { verifyCpf } from 'src/app/core/document/actions/action';
import { AppState } from 'src/app/core/document/models/app-state';
import { PersonState } from 'src/app/core/document/models/person';
import { CpfService } from 'src/app/core/services/cpf.service';

@Component({
  selector: 'app-consult-document',
  templateUrl: './consult-document.component.html',
  styleUrls: ['./consult-document.component.scss']
})
export class ConsultDocumentComponent implements OnInit {

  titleStatus = 'Situação cadastral do CPF';
  subTitleStatus = 'Consulta na Receita Federal';

  titleApp = 'Conta aplicação';
  subTitleAccounts = 'Cooperativa Viacredi';

  titleAccount = 'Conta corrente';


  ngOnInit(): void {
  }

}
