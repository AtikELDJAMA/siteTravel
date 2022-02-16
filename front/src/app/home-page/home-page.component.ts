import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { VolsService } from '../services/vols.service';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm! : FormGroup;

  ELEMENT_DATA: any = [];
  dataSource : any;
  router: any;
  constructor(private volsService: VolsService,private formBuilder: FormBuilder,) { }

  displayedColumns: string[] = ['date','villeDepart' ,'villeArrive','departure_icaoCode', 'departure_terminal', 'departure_gate', 'departure_scheduledTime', 'arrival_iataCode','arrival_icaoCode', 'arrival_terminal', 'arrival_gate', 'arrival_scheduledTime', 'aircraft_modelText', 'airline_name', 'flight_number', 'flight_iataNumber', 'flight_icaoNumber',];

  //** Get All Vols */
  getAll(){
    this.volsService.getAllVols().subscribe((response: any) => {
      response.forEach((vol: any) => {
        this.ELEMENT_DATA.push(vol);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

      });
      console.log('this all vols ', this.ELEMENT_DATA);
    });
  }
  //** filter */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //** Search Method */
  search(){
    console.log(this.searchForm.value);
    if(this.searchForm.valid){
      this.volsService.searchVols(this.searchForm.value.date, this.searchForm.value.villeDepart, this.searchForm.value.villeArrive).subscribe((res: any)=>{
       console.log(res);
       
        res.forEach((vol: any) => {
          this.ELEMENT_DATA.push(vol);
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        }); 
      });
    }
  }

// init
  ngOnInit(): void {
    // this.getAll();
    // FormBuilder!
    this.searchForm = this.formBuilder.group({
      villeDepart : ['', Validators.required],
      villeArrive : ['', Validators.required],
      date : ['', Validators.required],
    });

  }

  

}
