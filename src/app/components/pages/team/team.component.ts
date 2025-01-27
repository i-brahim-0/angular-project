import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teams = [
    {
      img: 'assets/images/t1.jpg',
      name: 'Fletch Skinner',
      about: 'Water Color Painter',
    },
    {
      img: 'assets/images/t2.jpg',
      name: 'Niles Peppertrout',
      about: 'House Painter',
    },
    {
      img: 'assets/images/t3.jpg',
      name: 'Benjamin Evalent',
      about: 'Wood Painter',
    },
    {
      img: 'assets/images/t4.jpg',
      name: 'Gunther Beard',
      about: 'Color Painter',
    },
  ];
}
