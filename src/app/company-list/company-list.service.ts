import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from '../entities/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyListService {

  constructor(private http: HttpClient) {
  }

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('./assets/company-mock-data/companies.json');
  }

}
