import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ListData',
  templateUrl: './ListData.component.html',
  styleUrls: ['./ListData.component.css']
})
export class ListDataComponent implements OnInit {

  moListData : any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetValues();
  }

  GetValues(){
    this.http.get("http://localhost:5000/api/values").subscribe(response=>{
      this.moListData=response;
    },error=>{
      console.log(error);
    });
  }
}
