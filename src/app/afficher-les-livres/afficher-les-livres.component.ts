import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre.model';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-afficher-les-livres',
  templateUrl: './afficher-les-livres.component.html',
  styleUrls: ['./afficher-les-livres.component.scss']
})
export class AfficherLesLivresComponent implements OnInit {
@Input() pLivre?:Livre
  constructor(private LivreService: LivresService) 
   {
    
   }
   

  ngOnInit(): void {
  }

}
