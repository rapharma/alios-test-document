// cpf.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CpfState } from '../document/store/cpf';
import { cpf_data } from 'src/app/data/cpf-data';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  verifyCpf(cpf: string): Observable<CpfState> {
    const cleanCpf = cpf.replace(/\D/g, '');
    const isValidCpf = this.validateCPF(cleanCpf);

    const invalid = {
      name: 'CPF não é válido',
      status: 'Irregular',
      app_account: 'Aplicação não encontrada',
      bank_account: 'Conta não encontrada',
    };

    if (!isValidCpf) {
      return of(invalid);
    }

    const [firstItem] = cpf_data;

    const result = {
      ...firstItem
    };

    return of(result);
  }

  validateCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9, 10].forEach(function (j) {
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
        soma += parseInt(e) * ((j + 2) - (i + 1));
      });
      r = soma % 11;
      r = (r < 2) ? 0 : 11 - r;
      if (r.toString() !== cpf.substring(j, j + 1)) result = false;

    });
    return result;
  }

}
