import { Component, VERSION } from "@angular/core";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  onClick(): void {
    this.log.push(this.count);
  }
  employeeDetail : string[] = [""];
  count:number = 0;
  log:number[]=[];
}
