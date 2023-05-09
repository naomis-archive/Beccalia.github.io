import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assets } from 'src/interfaces/Assets';
import { Portrait } from 'src/interfaces/Portrait';
import { Pose } from 'src/interfaces/Pose';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  private _data: Assets;
  constructor(private http: HttpClient) {
    this._data = {
      portraits: [],
      poses: [],
    };
  }

  public fetchPortraits(): Observable<Portrait[]> {
    if (this._data.portraits.length) {
      return of(this._data.portraits);
    }
    const portraits = this.http.get<Portrait[]>(
      'https://asset-list.naomi.lgbt/json/beccalia/portraits.json'
    );
    portraits.subscribe((portraits) => (this._data.portraits = portraits));
    return portraits;
  }

  public fetchPoses(): Observable<Pose[]> {
    if (this._data.poses.length) {
      return of(this._data.poses);
    }
    const poses = this.http.get<Pose[]>(
      'https://asset-list.naomi.lgbt/json/beccalia/poses.json'
    );
    poses.subscribe((poses) => (this._data.poses = poses));
    return poses;
  }
}
