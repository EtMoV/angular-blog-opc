import { Component } from "@angular/core";

import { Post } from "./Post";
import { loremIpsum } from "./loremIpsum";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Le blog OPC sur Angular";
  posts = [
    new Post("Mon premier post", loremIpsum),
    new Post("Mon deuxième post", loremIpsum),
    new Post("Encore un post", loremIpsum)
  ];
}
