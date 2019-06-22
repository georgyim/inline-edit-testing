import { Component, OnInit } from '@angular/core';
import { CompanyListService } from './company-list.service';
import { Company } from '../entities/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: [ './company-list.component.scss' ]
})
export class CompanyListComponent implements OnInit {

  public displayedColumns: string[] = [ 'id', 'name'];
  public dataSource: Company[];

  constructor(public companyListService: CompanyListService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  public getCompanies() {
    this.companyListService.getCompanies()
      .subscribe((companies: Company[]) => {
        this.dataSource = [...companies];
      });
  }
}
