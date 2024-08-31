import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  joke = "loading"
  constructor(private jokeService:JokeService){}

  ngOnInit(){
    this.getAnotherJoke()
  }
  // ngOnInit(){
  //     this.jokeService.getJoke().subscribe((data:any)=>{
  //       this.joke = data.value;
  //     })
  // }
  // getAnotherJoke(){
  //   this.jokeService.getJoke().subscribe((data:any)=>{
  //     this.joke = data.value;
  //   }, (err)=>{
  //     console.log("Error Ocures", err)
  //   })
  // }
  getAnotherJoke(){
   this.jokeService.getJoke().subscribe({
    next: (data:any)=> this.joke = data.value,
    error:(error)=> console.log("error",error)
   })
  }

}
