import { ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';
import { ChildComponent } from './child.component';


describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit method should display an alert', () => {
    spyOn(window, 'alert');
    component.submit();
    expect(window.alert).toHaveBeenCalledWith('Hello');
  });

  it('should display alert on button click', fakeAsync(() => {
    spyOn(window, 'alert');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(window.alert).toHaveBeenCalledWith('Hello');
  }));

});