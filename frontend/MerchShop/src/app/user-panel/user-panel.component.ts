import { Component, OnInit } from '@angular/core';
import { RequestService } from '../core/request.service';
import jwt_decode from 'jwt-decode';
import { getUTCdate } from '../core/helpers/dateHelpers';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  user: any;
  userId: string = '';
  userOrders: any;
  displayedColumns: string[] = ['id','date', 'value', 'pointsValue'];
  constructor(private reqS: RequestService) { }

  ngOnInit(): void {
    const token: any= localStorage.getItem("jwt");
    if(token){
      const tokenObject = this.decodeToken(token);
      this.userId = tokenObject.id;
    }
  }
  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  convertUTCdate(date: any) {
    return getUTCdate(date);
  }

}
