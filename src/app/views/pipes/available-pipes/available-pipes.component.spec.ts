import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePipesComponent } from './available-pipes.component';

describe('AvailablePipesComponent', () => {
  let component: AvailablePipesComponent;
  let fixture: ComponentFixture<AvailablePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
