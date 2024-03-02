import { ChangeDetectionStrategy, Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  title = 'ng-final';

  public data:any = of([1,2,3,4,5]);

  public cities:string[] = ['',''];
  public city:string = "";

  add(){
    this.cities.push("123");
  }

  ngDoCheck(): void {
    console.log("Change detected");
  }

}
