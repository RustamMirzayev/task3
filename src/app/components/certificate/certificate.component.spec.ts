import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertifikatComponent } from './certificate.component';

describe('SertifikatComponent', () => {
  let component: SertifikatComponent;
  let fixture: ComponentFixture<SertifikatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SertifikatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SertifikatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
