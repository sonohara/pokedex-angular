import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgmComponent } from './bgm.component';

describe('BgmComponent', () => {
  let component: BgmComponent;
  let fixture: ComponentFixture<BgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
