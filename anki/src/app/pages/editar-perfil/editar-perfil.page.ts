import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  private _formEditCard: FormGroup

  constructor() { }

  ngOnInit() {
  }

  private get errorControl() {
    return this._formEditCard.controls
  }
}
