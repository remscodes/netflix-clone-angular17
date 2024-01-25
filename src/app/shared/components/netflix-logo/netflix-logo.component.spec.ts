import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetflixLogoComponent } from './netflix-logo.component';

describe('NetflixLogoComponent', () => {
  let component: NetflixLogoComponent;
  let fixture: ComponentFixture<NetflixLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetflixLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
