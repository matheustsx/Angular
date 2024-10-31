import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}


// template: `
//  <h1>Oi teste</h1>
//`
//Além do templateUrl, posso adicionar o meu HTML dentro do próprio componente.
//Sempre tenho que ter um template vinculado ao componente, seja ele no próprio componente ou fora dele.
// standalone: true, -> comportamento dos modulos do Angular
//Tem duas opções: pode criar um componente standalone ou criar um atrelado ao NgModule
//