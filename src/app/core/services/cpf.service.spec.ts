import { TestBed } from '@angular/core/testing';
import { CpfService } from './cpf.service';

describe('CpfService', () => {
  let service: CpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('verifyCpf', () => {
    it('should return invalid object for invalid cpf', (done: DoneFn) => {
      service.verifyCpf('123').subscribe(value => {
        expect(value).toEqual({
          name: 'Nome não encontrado',
          status: 'Irregular',
          app_account: 'Aplicação não encontrada',
          bank_account: 'Conta não encontrada',
        });
        done();
      });
    });
  });

  describe('validateCPF', () => {
    it('should return false for invalid cpf', () => {
      expect(service['validateCPF']('12345678901')).toBeFalse();
    });

    it('should return true for valid cpf', () => {
      expect(service['validateCPF']('29796409054')).toBeTrue();
    });
  });
});
