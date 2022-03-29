import { Component, OnInit } from '@angular/core';
import { Pattern } from 'src/app/models/pattern.model';
//DATA
import { CREACIONALES } from '../../data/mock-creacionales';

@Component({
  selector: 'app-creacionales',
  templateUrl: './creacionales.component.html',
  styleUrls: ['./creacionales.component.css']
})
export class CreacionalesComponent implements OnInit {

  creacionalesList: Pattern[] = [];

  constructor() { }

  ngOnInit(): void {
    this.creacionalesList = CREACIONALES;
  }

}
