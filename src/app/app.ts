import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Landing } from './features/landing/landing';
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Landing, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
