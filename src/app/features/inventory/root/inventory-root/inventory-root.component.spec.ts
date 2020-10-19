import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRootComponent } from './inventory-root.component';

describe('InventoryRootComponent', () => {
  let component: InventoryRootComponent;
  let fixture: ComponentFixture<InventoryRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
