import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichKhamBenhComponent } from './lich-kham-benh.component';

describe('LichKhamBenhComponent', () => {
  let component: LichKhamBenhComponent;
  let fixture: ComponentFixture<LichKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
