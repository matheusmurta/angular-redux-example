import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentItemComponent } from './equipament-item.component';

describe('EquipamentItemComponent', () => {
  let component: EquipamentItemComponent;
  let fixture: ComponentFixture<EquipamentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
