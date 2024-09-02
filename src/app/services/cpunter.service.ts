import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpunterService {

  // private count = 0
  private count = signal(0)   // for signal method
   doubleCount:  Signal<number> = computed(()=> this.count()*2);


  constructor(){
    effect(()=>{
      console.log("count:", this.count(),"double count:", this.doubleCount)
    })
  }
  getCounter(){
    return this.count()
  }

  incrementCounter(){
    // this.count.set(this.count()+1)
    this.count.update((oldvalue)=>{
      return oldvalue+1
    })
    // this.count = this.count +1
  }
}
