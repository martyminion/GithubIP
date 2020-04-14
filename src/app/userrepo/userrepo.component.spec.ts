import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrepoComponent } from './userrepo.component';

describe('UserrepoComponent', () => {
  let component: UserrepoComponent;
  let fixture: ComponentFixture<UserrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
