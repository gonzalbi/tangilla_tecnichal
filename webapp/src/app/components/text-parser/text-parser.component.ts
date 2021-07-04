import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-text-parser',
  templateUrl: './text-parser.component.html',
  styleUrls: ['./text-parser.component.css']
})
export class TextParserComponent implements OnInit {
  
  constructor(public data : DataService) {
   }

  ngOnInit(): void {

  }

  getText(text :string) :void {
    this.data.getSynonyms(text).subscribe((res : any) => {
      this.data.changeSynonims(res)
    })
  }

  clearTable() : void {
    this.data.changeSynonims('')
  }

}
