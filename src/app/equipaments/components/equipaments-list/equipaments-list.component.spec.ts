import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentsListComponent } from './equipaments-list.component';

describe('EquipamentsListComponent', () => {
  let component: EquipamentsListComponent;
  let fixture: ComponentFixture<EquipamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
