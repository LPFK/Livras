import { Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

private  _ListeLivre: Livre[]=[]
ajouterLivre(pLivre:Livre)
{
  this._ListeLivre.push(pLivre);
}
lister():Livre[]
{
  return this._ListeLivre;
}
recharger(pListeLivre:Livre[])
{
  this._ListeLivre = pListeLivre;
}


  constructor() 
  { 

  }
}
