import { Component } from '@angular/core';
import { CpunterService } from '../../services/cpunter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

 constructor(public countService:CpunterService){}

 // if you use public so you can use it directly to ui otherwise if use private so you have to use another method to access it

  // getCount(){
  //   return this.countService.getCounter()
  // }
}
