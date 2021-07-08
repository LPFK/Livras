import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livre } from '../livre.model';
import { LivresService } from '../livres.service';


@Component({
  selector: 'app-cree-livre',
  templateUrl: './cree-livre.component.html',
  styleUrls: ['./cree-livre.component.scss']
})
export class CreeLivreComponent implements OnInit {
  fTitre = new FormControl('',[Validators.required]);
  fAuteur = new FormControl('',[Validators.required]);
  fDate = new FormControl('',[Validators.required]);
  fType = new FormControl('',[Validators.required]);
  form = new FormGroup({

    Titre:this.fTitre,
    Auteur:this.fAuteur,
    Date:this.fDate,
    Type:this.fType
  })
  constructor(private LivreService: LivresService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const newLivre = new Livre(
      this.form.value['Titre'],
      this.form.value['Auteur'],
      this.form.value['Date'],
      this.form.value['Type'],
    )
  }

}
