import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardmentore',
  templateUrl: './dashboardmentore.component.html',
  styleUrls: ['./dashboardmentore.component.css']
})
export class DashboardmentoreComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
