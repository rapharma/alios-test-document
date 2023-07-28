import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { verifyCpf } from 'src/app/core/document/actions/action';
import { AppState } from 'src/app/core/document/models/app-state';
import { PersonState } from 'src/app/core/document/models/person';
import { CpfService } from 'src/app/core/services/cpf.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
  }

}
