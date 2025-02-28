import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Observable, delay, of, Subscription } from 'rxjs';

@Component({
  styleUrls: ['./zoneless-signal-example.component.css'],
  selector: 'app-zoneless-signal-example',
  template: ` <p>{{ data() }}</p> `,
})
export class ZonelessSignalExampleComponent implements OnInit, OnDestroy {
  data = signal('Loading...');
  data$: Observable<string>;
  private subscription: Subscription | undefined;

  constructor() {
    this.data$ = this.fetchData();
  }

  ngOnInit(): void {
    this.subscription = this.data$.subscribe((value) => {
      this.data.set(value); // Update the signal, triggering change detection
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchData(): Observable<string> {
    return of('Data fetched from Observable!').pipe(delay(3000));
  }
}
