import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // property : an alies to let angular know that "serverElement" is the alies of real array "element" (Parent-> Child)
  serverElements = [
    // { type: "server", name: "TestServer", content: "Just A Test" }
  ];

  // CHild to Parent
  // create a listner on app.component.html (custom)
  // receive it by a listner at cockpit.component.html &&& event is emmited
  // data pushed by app.ts
  onAddServer(serverData: { serverName: String; serverContent: String }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(serverData: { serverName: String; serverContent: String }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log("Cat");
  }
}
