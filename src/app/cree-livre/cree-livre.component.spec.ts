import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeLivreComponent } from './cree-livre.component';

describe('CreeLivreComponent', () => {
  let component: CreeLivreComponent;
  let fixture: ComponentFixture<CreeLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
