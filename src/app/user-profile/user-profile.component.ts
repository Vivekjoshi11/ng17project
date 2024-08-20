import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import   
 { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {


  @Input() name = ""

  // name:string = "vivek"
  // job:string = " software Engineer"
  // salary:number = 120000
  // isButtonDisabled = true
  // inputVal = "test"


  // users = [
  //   {name:"ramesh",
  //     isSingle: true,
  //     salary:10000
  //   },
  //   {name:"vicky",
  //     isSingle: true,
  //     salary:500000
  //   },
  //   {name:"jack",
  //     isSingle: false,
  //     salary:100000
  //   }
  // ]

  // onchange(e:Event){
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputVal = value
  //  console.log(value)
  // }

};
