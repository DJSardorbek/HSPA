import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Property : any = [{
    "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 12000,

  },
 {
  "Id" : 1,
  "Name" : "Birla House",
  "Type" : "House",
  "Price" : 12000,
 },
{
  "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 12000,
},
{
  "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 12000,
},
{
  "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 12000,
}]

}
