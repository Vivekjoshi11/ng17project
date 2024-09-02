import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpunterService {

  private count = 0

  getCounter(){
    return this.count
  }

  incrementCounter(){
    this.count = this.count+1
  }
}
