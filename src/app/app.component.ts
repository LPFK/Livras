import { Component } from '@angular/core';
import { Livre } from './livre.model';
import { LivresService } from './livres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Livras';
  ListeLivre!: Livre[];
  constructor(private LivreService: LivresService)
  {
    LivreService.ajouterLivre(new Livre('Metro 2033','Dmitry Glukhovsky','2005','Dystopie')),
    LivreService.ajouterLivre(new Livre('Dune','Frank Herbert','1965','Science Fiction')),
    LivreService.ajouterLivre(new Livre('Le Meilleur des mondes','Aldous Huxley','1932','Dystopie'))
    this.ListeLivre = LivreService.lister()
  }
}

      