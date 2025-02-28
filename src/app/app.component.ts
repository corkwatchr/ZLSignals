import { Component } from '@angular/core';
import { ZonelessSignalExampleComponent } from './zoneless-signal-example/zoneless-signal-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZonelessSignalExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ZLSignals';
}
