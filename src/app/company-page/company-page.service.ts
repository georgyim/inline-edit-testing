import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../entities/company';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyPageService {

  constructor(private http: HttpClient) {
  }

  public getCompany(id): Observable<Company> {
    return this.http.get<Company[]>('./assets/company-mock-data/companies.json')
      .pipe(
        map((companies: Company[]) => companies.find((company: Company) => company.id === id))
      );
  }
}
