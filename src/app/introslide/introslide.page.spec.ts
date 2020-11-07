import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroslidePage } from './introslide.page';

describe('IntroslidePage', () => {
  let component: IntroslidePage;
  let fixture: ComponentFixture<IntroslidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroslidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
