import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  constructor() {}

  @Output() customServerCreatedEvent = new EventEmitter<{
    serverName: String;
    serverContent: String;
  }>();

  @Output("aliesBPUsingOutput") customBlueprintCreatedEvent = new EventEmitter<{
    serverName: String;
    serverContent: String;
  }>();

  newServerName = "";
  newServerContent = "";

  ngOnInit(): void {}

  onAddServer() {
    this.customBlueprintCreatedEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerName
    });
  }

  onAddBlueprint() {
    this.customServerCreatedEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
