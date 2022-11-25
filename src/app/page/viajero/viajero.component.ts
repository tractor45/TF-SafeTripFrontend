import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viajero',
  templateUrl: './viajero.component.html',
  styleUrls: ['./viajero.component.css']
})
export class ViajeroComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
