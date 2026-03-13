import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { NewArrivalsSection } from "./components/new-arrivals-section/new-arrivals-section";
import { TopSellersSection } from "./components/top-sellers-section/top-sellers-section";

@Component({
  selector: 'app-landing',
  imports: [HeroSection, NewArrivalsSection, TopSellersSection],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
