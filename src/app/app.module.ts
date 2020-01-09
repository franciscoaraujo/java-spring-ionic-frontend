import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Definicao de classe sem corpo. 
 */
@NgModule({//esse decorator faz essa classe ser exportadas
  declarations: [//paginas que estao no projeto app
    MyApp,
    HomePage
  ],

  imports: [//modulos importados (A aplicacao Angular eh conjunto de modulos, e os modulos tem uma estrutura hierarquica)
    BrowserModule,//basico de uma setrutura de uma aplicacao Angular
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],//indicando como a aplicacao irar iniciar

  entryComponents: [//quando o components for uma pagina e nao apenas um componente, o que for declarado la em cima tem que esta aqui tambem
    MyApp,
    HomePage
  ],

  providers: [//Classe que tem objetos injetados e será uma instancia unica para esse modulo
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
//Essa classe pode ser importado pra outros arquivos
export class AppModule {}
