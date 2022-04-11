import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }


  calcul(list : any , atribut : string ,value : any){
    let nb = 0
     for(let i in list )
     {
       if(list[i][atribut] == value)
       nb ++
     }
     return nb;
   }

}
