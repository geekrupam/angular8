import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEntriesComponent } from './click-entries.component';

describe('ClickEntriesComponent', () => {
  let component: ClickEntriesComponent;
  let fixture: ComponentFixture<ClickEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
