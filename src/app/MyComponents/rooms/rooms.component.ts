import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {
  hotelName: string = "Silverline";
  numberOfRooms: number = 10;
  //constructor() {}

  ngOnInit(): void {}
}
