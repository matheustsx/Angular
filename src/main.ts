import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//Arquivo de entrada principal que inicializa o módulo principal da aplicação
//No arquivo main.ts eu configuro qual o componente principal da aplicação.
//