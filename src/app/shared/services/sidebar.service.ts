import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Menus',
      type: 'header'
    },
    {
      title: 'Orders',
      icon: 'fa fa-bookmark',
      active: false,
      route: 'orders'      
    },
    {
      title: 'Customers',
      icon: 'fa fa-user-friends',
      active: false,
      route:  'customers'
    },
    {
      title: 'Recipes',
      icon: 'fa fa-lemon',
      active: false,
      route: 'recipes'
    },
    {
      title: 'Products',
      icon: 'fa fa-seedling',
      active: false,
      route: 'products'
    },
    {
      title: 'Hours',
      icon: 'fa fa-chart-pie',
      active: false,
      route: 'hours'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
