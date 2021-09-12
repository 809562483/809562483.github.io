import { Component, OnInit } from '@angular/core';
import { PreloadStrategyService } from 'src/app/preload-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private preload: PreloadStrategyService) { }

  ngOnInit(): void {
  }
  click() {
    console.log(this.preload.preloadModules)
  }
}
