import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-con-expo-2023",
  templateUrl: "./home.component.html",
  styles: [`
    .largegreenbg {
      background-color: #0376cd;
    }
  `],
})
export class ConExpo2023Component implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('IAHSP 2023 Educational Conference and EXPO');
  }

  ngOnInit(): void {

  }
}
