import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';
import { CreeLivreComponent } from './cree-livre/cree-livre.component';
import { LivresService } from './livres.service';

const routes: Routes = 
  [
     {path: '_ListeLivre', component: AfficherLesLivresComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
