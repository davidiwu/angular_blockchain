import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchblockComponent } from './searchblock.component';

describe('SearchblockComponent', () => {
  let component: SearchblockComponent;
  let fixture: ComponentFixture<SearchblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
