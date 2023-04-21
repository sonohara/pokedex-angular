import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDatailComponent } from './pokemon-datail.component';

describe('PokemonDatailComponent', () => {
  let component: PokemonDatailComponent;
  let fixture: ComponentFixture<PokemonDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
