import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReposComponent } from './show-repos.component';

describe('ShowReposComponent', () => {
  let component: ShowReposComponent;
  let fixture: ComponentFixture<ShowReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
