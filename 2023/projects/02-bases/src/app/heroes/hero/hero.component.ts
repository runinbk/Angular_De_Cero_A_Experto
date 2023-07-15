import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "iroman";
  public ege: number = 40;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.ege}`;
  }

  changeHero(): void {
    this.name = "Spiderman"
  }

  changeEge(): void {
    this.ege = 25
  }

  reset(): void {
    this.name = "iroman",
      this.ege = 40
  }

}
