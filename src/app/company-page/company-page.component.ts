import { Component, OnInit } from '@angular/core';
import { CompanyPageService } from './company-page.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Company } from '../entities/company';
import { Contact } from '../entities/contact';
import { ContactType } from '../entities/contact-type';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: [ './company-page.component.scss' ]
})
export class CompanyPageComponent implements OnInit {


  public company: Company;
  public types: typeof ContactType = ContactType;
  public displayedColumns: string[] = [ 'phone', 'type' ];
  public dataSource;

  public contactForm: FormGroup;

  constructor(public companyPageService: CompanyPageService, private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.companyPageService.getCompany(+params.get('id')))
      )
      .subscribe((company: Company) => {
        this.company = company;

        this.contactForm = this.fb.group({
          contacts: this.fb.array(this.company.contacts.map((el: Contact) => this.fb.group({ ...el })))
        });
        this.dataSource = (this.contactForm.get('contacts') as FormArray).controls;
      });
  }

  save() {
    this.company.contacts = this.contactForm.getRawValue().contacts;
    console.log(this.company);
  }

}
