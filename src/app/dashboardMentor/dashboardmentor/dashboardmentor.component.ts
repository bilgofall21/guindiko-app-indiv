import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardmentor',
  templateUrl: './dashboardmentor.component.html',
  styleUrls: ['./dashboardmentor.component.css']
})
export class DashboardmentorComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
