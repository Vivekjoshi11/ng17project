import { Component } from '@angular/core';
import { CpunterService } from '../../services/cpunter.service';

@Component({
  selector: 'app-b2',
  standalone: true,
  imports: [],
  templateUrl: './b2.component.html',
  styleUrl: './b2.component.css'
})
export class B2Component {
  constructor(public countService:CpunterService){}
}
