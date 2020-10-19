import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRootPageComponent } from './login-root-page.component';

describe('LoginRootPageComponent', () => {
  let component: LoginRootPageComponent;
  let fixture: ComponentFixture<LoginRootPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRootPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
