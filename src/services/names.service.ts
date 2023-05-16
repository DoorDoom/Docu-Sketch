import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconNames } from 'src/classes/icon-names';
import data from '../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  icons:string[]=[];
  data:IconNames={} as IconNames;

  constructor(public library: FaIconLibrary) {
    this.icons=JSON.parse(data);
  }

  getName():string{
    let num=Math.floor(Math.random() * (this.icons.length - 1));
    return this.icons[num]; 
  }
}
