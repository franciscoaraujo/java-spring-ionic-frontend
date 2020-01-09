import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/erro-interceptor';

/**
 * Definicao de classe sem corpo. 
 */
@NgModule({//esse decorator faz essa classe ser exportadas
  declarations: [//paginas que estao no projeto app
    MyApp
    
  ],

  imports: [//modulos importados (A aplicacao Angular eh conjunto de modulos, e os modulos tem uma estrutura hierarquica)
    BrowserModule,//basico de uma setrutura de uma aplicacao Angular
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],//indicando como a aplicacao irar iniciar

  entryComponents: [//quando o components for uma pagina e nao apenas um componente, o que for declarado la em cima tem que esta aqui tambem
    MyApp
    
  ],

  providers: [//Classe que tem objetos injetados e será uma instancia unica para esse modulo
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider
    
  ]
})
//Essa classe pode ser importado pra outros arquivos
export class AppModule {}
