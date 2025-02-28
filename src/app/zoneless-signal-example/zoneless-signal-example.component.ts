import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Observable, delay, of, Subscription } from 'rxjs';

@Component({
  styleUrls: ['./zoneless-signal-example.component.css'],
  selector: 'app-zoneless-signal-example',
  template: ` <p>{{ data() }}</p> `,
})
export class ZonelessSignalExampleComponent implements OnInit, OnDestroy {
  // Using a signal to store the data fetched from the observable
  data = signal('Loading...'); // Initialize the signal with a default value

  // Observable to fetch data
  data$: Observable<string>;

  // Subscription to manage the observable
  private subscription: Subscription | undefined;

  // Constructor runs before ngOnInit, so we can initialize the
  // signal here and fetch the data in ngOnInit
  constructor() {
    this.data$ = this.fetchData();
  }

  ngOnInit(): void {
    this.subscription = this.data$.subscribe((value) => {
      // Update the signal, triggering change detection
      this.data.set(value);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      // Clean up the subscription to avoid memory leaks
      this.subscription.unsubscribe();
    }
  }

  // Simulate an asynchronous data fetch with a delay
  fetchData(): Observable<string> {
    return of('Data fetched from Observable!').pipe(delay(3000));
  }
}
