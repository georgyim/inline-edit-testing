import { ContactTypes } from './contact-types';

export class ContactType {

  public static ACTIVE: ContactType = new ContactType(ContactTypes.ACTIVE, 'Активный');

  public static INACTIVE: ContactType = new ContactType(ContactTypes.INACTIVE, 'Неактивный');

  public static values: ContactType[] = [
    ContactType.ACTIVE,
    ContactType.INACTIVE
  ];

  constructor(public id: ContactTypes, public descr: string) {
  }

  public static findById(id: ContactTypes) {
    return ContactType.values.find((contactType: ContactType) => contactType.id === id);
  }
}

