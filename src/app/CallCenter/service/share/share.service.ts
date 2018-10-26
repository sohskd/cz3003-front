import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  address;
  location;

  constructor() {
    this.address = 'Orchard MRT';
  }

  saveAddress(add) {
    this.address = add;
  }

  getAddress() {
    return this.address;
  }

  saveLocation(loc) {
    this.location = loc;
  }

  getLocation() {
    return this.location;
  }
}
