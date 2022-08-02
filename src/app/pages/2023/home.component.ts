import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { fsList } from "./shared/data";

@Component({
  selector: "app-con-expo-2023",
  templateUrl: "./home.component.html",
  styles: [`
    h1, h2, h3, h4, h5, li, p {
      color: #2D2926;
    }
    h1, h2, h3, h4, h5 {
      font-weight: 500;
    }
    .largegreenbg {
      background-color: #0376cd;
    }
  `],
})
export class ConExpo2023Component implements OnInit {

  fss = fsList;

  constructor(private titleService: Title) {
    this.titleService.setTitle('IAHSP 2023 Educational Conference and EXPO');
  }

  ngOnInit(): void {

  }
}
