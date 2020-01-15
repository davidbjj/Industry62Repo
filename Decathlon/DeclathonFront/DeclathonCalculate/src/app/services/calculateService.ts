import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Declathon } from './calculate-model';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class calculateService {

  private apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = 'http://localhost:8080';
   }

  isLoading = new Subject<boolean>();
  isValid = new Subject<boolean>();

  getTableData() {
    return [
      { name: '100 meters', code: '100m' },
      { name: 'Long Jump', code: 'longJump' },
      { name: 'Shot Put', code: 'shotPut' },
      { name: 'High Jump', code: 'highJump' },
      { name: '400 meters', code: '400m' },
      { name: '110 meters Hurdles', code: '110mHurdles' },
      { name: 'Discus Throw', code: 'discusThrow' },
      { name: 'Pole Vaults', code: 'poleVault' },
      { name: 'Javalin Throw', code: 'javalinThrow' },
      { name: '1500 meters', code: '1500m' }
    ];
  }


  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  public getResult(sportName: string, mark: number) {
   return this.httpClient.get<calculateService>(`${this.apiURL}/sport/${sportName}/${mark}`);
 }
}
