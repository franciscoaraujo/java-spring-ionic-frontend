import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credencias.dto';
import { AuthService } from '../../services/auth.service';



@IonicPage()
@Component({//isso faz com que a classe seja um controlador da view
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  creds : CredenciaisDTO = {
    email: "", senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    public auth: AuthService) {}
  
  ionViewWillEnter() {//quando a pagina entrar desabilita o menu
      this.menu.swipeEnable(false);
    }
  
  ionViewDidLeave() {//quando a pagina sair habilita o menu
      this.menu.swipeEnable(true);
    }

  login(){
    //this.navCtrl.push("CategoriasPage");//fazndo implhamento/
    this.auth.authenticate(this.creds).subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot("CategoriasPage");//em empilhamento    
    },
     error =>{}
    );
    
  }

}
