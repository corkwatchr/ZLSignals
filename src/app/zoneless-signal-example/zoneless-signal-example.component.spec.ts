import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessSignalExampleComponent } from './zoneless-signal-example.component';

describe('ZonelessSignalExampleComponent', () => {
  let component: ZonelessSignalExampleComponent;
  let fixture: ComponentFixture<ZonelessSignalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessSignalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessSignalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
