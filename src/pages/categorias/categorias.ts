import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items : CategoriaDTO[];

  bucketUrl: String = API_CONFIG.bucketBaseUrl;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public categoriaService: CategoriaService)  {
  }

  ionViewDidLoad() {

    this.categoriaService.findAll().subscribe(response => {//Arrow function
        console.log(response);
        this.items = response;

    }, 
       error =>{ 
         //TODO..
      });

  }

}
