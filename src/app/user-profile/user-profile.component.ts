import { booleanAttribute, Component, EventEmitter, input, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import   
 { CommonModule } from '@angular/common';
import { User } from '../../models/users';
import { CountryCodePipe } from "../pipes/country-code.pipe";

 function formatName(value:string){
 return "Hi "+ value
 }
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,
    CommonModule, CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {


  // @Input() name = ""
  @Input({alias:"userName"}) name ="";
  // @Input({alias:"userName", transform:formatName}) name ="";   // alias is used when our variable is in other file is different 
  // and here transform is the built in angular format which will transform it's variable name and here it will go to that function
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  //this transform function will convert string into that perticular data type
  @Input({transform:numberAttribute}) salary!:number;
  @Output() myEvent = new EventEmitter<User>()  // this will used to send data from child to parent here parent is app and child is user-profile
  sendData(){
    this.myEvent.emit({name:this.name, newSalary:250000});
  }
bgColor = "blue";

  
  // name:string = "vivek"
  // job:string = " software Engineer"
  // salary:number = 120000
  // isButtonDisabled = true
  // inputVal = "test"
  // phoneno = 1345678920


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
