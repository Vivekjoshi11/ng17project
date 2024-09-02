import { Component } from '@angular/core';
import { CpunterService } from '../../services/cpunter.service';
import { B2Component } from "../b2/b2.component";

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  // providers: [CpunterService],       // for this saperate instance it get so change will be here in this file only
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  constructor(public countService:CpunterService){}

}
