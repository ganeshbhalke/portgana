import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portgana';




ngAfterViewInit(){

gsap.from('.hero h1',{
  y:100,
  opacity:0,
  duration:1
});

gsap.from('.hero h2',{
  y:100,
  opacity:0,
  delay:.3,
  duration:1
});

}
}
