import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAnimalsComponent } from './more-animals.component';

describe('MoreAnimalsComponent', () => {
  let component: MoreAnimalsComponent;
  let fixture: ComponentFixture<MoreAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
