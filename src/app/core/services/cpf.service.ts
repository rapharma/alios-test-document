// cpf.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface CpfData {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class CpfService {
  private cpfData: CpfData = {
    '11111111111': 'João da Silva',
    '22222222222': 'Maria Oliveira',
  };

  checkCpf(cpf: string): Observable<{ name: string; status: string }> {
    const cleanCpf = cpf.replace(/\D/g, ''); // Remove all non-digit characters
    const isValidCpf = /^\d{11}$/.test(cleanCpf);

    if (!isValidCpf) {
      return of({ name: 'CPF not valid', status: 'Not Regular' });
    }

    const name = this.cpfData[cleanCpf] || 'CPF not found';
    const status = name !== 'CPF not found' ? 'Regular' : 'Not Regular';
    return of({ name, status });
  }
}
