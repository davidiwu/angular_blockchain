import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockdetailComponent } from './blockdetail.component';

describe('BlockdetailComponent', () => {
  let component: BlockdetailComponent;
  let fixture: ComponentFixture<BlockdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
