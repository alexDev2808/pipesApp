import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'ALEXIS';
  public nameUpper: string = 'alexis';
  public nameTitle: string = 'aLEXis';

  public customDate: Date = new Date();

}
