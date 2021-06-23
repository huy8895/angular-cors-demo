import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {ProvinceReqDto} from "./provinceReqDto";
import {Province} from "./province";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cors-demo';

  constructor(private http: HttpClient) {
  }

  dto: ProvinceReqDto = {
    search_value: '',
    page_size: '10',
    page_index: '0'
  };

  onSubmit() {
    this.getListProvince(this.dto).subscribe(
      value => {
        console.log(value)
      }
    )
  }

  getListProvince(dto: ProvinceReqDto): Observable<Province> {
    return this.http.post<Province>(environment.apiDev, dto);
  }
}
