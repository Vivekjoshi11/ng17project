import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17project';
  users = [
    {name:"ramesh",
      isSingle: true,
      salary:10000
    },
    {name:"vicky",
      isSingle: true,
      salary:500000
    },
    {name:"jack",
      isSingle: false,
      salary:100000
    }
  ]
}
