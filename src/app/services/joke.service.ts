import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  // http:HttpClient
  // constructor(http:HttpClient) { 
  //   this.http = http
  // }
 
  // private http = inject(HttpClient)
  
   constructor(private http:HttpClient){

  }

  getJoke(){
    // this.http.get("https://api.chucknorris.io/jokes/63pymsysqiexzldn5-wdzq").subscribe(data=>{
    //   console.log(data);
    // })
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
    
  }
}
