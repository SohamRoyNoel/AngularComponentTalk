import { Component, OnInit, Input } from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  // property : an alies to let angular know that "serverElement" is the alies of real array "element" (Parent-> Child)
  @Input("serverElement") element: {
    type: String;
    name: String;
    content: String;
  };

  constructor() {}

  ngOnInit(): void {}
}
