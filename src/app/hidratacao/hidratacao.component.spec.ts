import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacaoComponent } from './hidratacao.component';

describe('HidratacaoComponent', () => {
  let component: HidratacaoComponent;
  let fixture: ComponentFixture<HidratacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidratacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidratacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
