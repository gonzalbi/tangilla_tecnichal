import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-synonym-table',
  templateUrl: './synonym-table.component.html',
  styleUrls: ['./synonym-table.component.css']
})
export class SynonymTableComponent implements OnInit {

  tableData:Array<any> = [];

  constructor(private data : DataService) { 
    
  }

  ngOnInit(): void {
    this.data.currentSynonims.subscribe(message => this.tableData = message)
  }

}
