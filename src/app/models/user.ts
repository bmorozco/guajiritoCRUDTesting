import {Address} from './address';
import {Company} from './company';
import {Geo} from './geo';

export interface User {
  id: string;
  'name': string;
  'username': string;
  'email': string;
  'address': Address;
  'company': Company;
  'phone': string;
  'website': string;
  'geo': Geo;
}
