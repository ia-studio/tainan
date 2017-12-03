import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AacComponent } from './aac.component';

describe('AacComponent', () => {
  let component: AacComponent;
  let fixture: ComponentFixture<AacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
