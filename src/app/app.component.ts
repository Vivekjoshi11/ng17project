import { Component, isSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CommonModule } from '@angular/common';
import { User } from '../models/users';
import { JokeComponent } from './component/joke/joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17project';
  users = [
    {name:"ramesh",
      isSingle: true,
      salary:10000,
    },
    // {name:"vicky",
    //   isSingle: true,
    //   salary:500000
    // },
    // {name:"jack",
    //   isSingle: false,
    //   salary:100000
    // }
  ]
  recevedData(e:User){
    console.log(e);
    const userIndex = this.users.findIndex(user=>user.name == e.name)
    this.users[userIndex].salary = e.newSalary
  }

  clear(){
    this.users = []
  }
}
