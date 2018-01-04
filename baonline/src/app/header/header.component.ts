import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerItems = {
    pageTitle: "Ben Akehurst Online",
    aboutPage: "About",
    webPage: "Web",
    mediaPage: "Media",
    resumePage: "Resume"
  }
}
