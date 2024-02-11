import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alexis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() : void {
    this.name = 'Ruby';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro', 'Fernando', 'Alexis', 'Ruby', 'Chuy', 'Tania', 'Martha'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando'

  }

  deleteClient(): void {
    this.clients.shift();
  }
}
