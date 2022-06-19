import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preview_card';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'iconEtherium',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icon-ethereum.svg')
    );
    iconRegistry.addSvgIcon(
      'iconClock',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icon-clock.svg')
    );
  }
}
