import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {
  let service: MeuServicoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MeuServicoService]
    });
    service = TestBed.inject(MeuServicoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable', () => {
    service.recuperarCadastro('mockId')
      .subscribe((result: Array<any>) => {
        expect(result.length).toBe(2);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
      });
  
    const req = httpMock.expectOne(`${service.baseUrl}/single/mockId`);
    expect(req.request.url).toBe(`${service.baseUrl}/single/mockId`);
  
    req.flush([1,2]);
  });
});
