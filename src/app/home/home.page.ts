import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, SegmentCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  onChangeSegment(event: any) {
    const { value } = event.detail;
    this.router.navigate([value]);
  }
}
