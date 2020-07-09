import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupOnroutePage } from './popup-onroute.page';

describe('PopupOnroutePage', () => {
  let component: PopupOnroutePage;
  let fixture: ComponentFixture<PopupOnroutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupOnroutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupOnroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
