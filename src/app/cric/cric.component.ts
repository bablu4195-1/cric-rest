import { Component, OnInit } from '@angular/core';
import { Names } from '../cric.model';
import { GenderfilterPipe } from '../genderfilter.pipe';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-cric',
  templateUrl: './cric.component.html',
  styleUrls: ['./cric.component.css'],
  providers: [GenderfilterPipe]
})
export class CricComponent implements OnInit {
   names: Names[] = [];
   sortednames: any;
   gender: any;
   searchKey: any;
  constructor(public restapi: RestApiService) { }

  ngOnInit(): void {
    this.restapi.getNames().subscribe((data:any) => {
      console.log(data);
      this.names = data;
      this.sortednames = this.names.sort((a:any,b:any) => {return a.start_date - b.start_date;});
    });
  }
  
  Search(){
   if(this.searchKey == ""){
      this.ngOnInit();
    }
    else{
      this.names = this.names.filter(res => {
        return res.name.toLowerCase().match(this.searchKey.toLowerCase());
      });
    }
  }
  
  // sortByGender(){
  //   this.gender = this.names.filter(res => {
  //     if(res.gender === "men"){
  //       return res.gender
  //     }
  //     else {
  //       return res.gender === "women"
  //     }
  //   })
  // }
}
