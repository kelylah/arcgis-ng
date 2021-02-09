import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArcGIS&Angular_726';

  // Set our map properties
  mapCenter = [-105.0, 39.64];
  basemapType = 'streets-vector';
  mapZoomLevel = 11;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
