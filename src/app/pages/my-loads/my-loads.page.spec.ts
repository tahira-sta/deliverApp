import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyLoadsPage } from './my-loads.page';

describe('MyLoadsPage', () => {
  let component: MyLoadsPage;
  let fixture: ComponentFixture<MyLoadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLoadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
