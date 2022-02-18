import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, switchMap, map, tap, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssetsApi {
  public all(searchString: string): Observable<string[]> {
    return of([
      'Сбербанк',
      'Яндекс',
      'Русал',
      'Тинькофф',
      'Северсталь',
      'Aлроса',
      'Газпром',
      'Газпром нефть',
      'FXUS',
      'FXCN',
      'FXFA',
    ]).pipe(
      delay(1000),
      debounceTime(2000),
      map((assetsNameList) =>
        assetsNameList.filter((assetName) =>
          assetName.toLowerCase().includes(searchString)
        )
      ),
      tap((assets) => console.log('Sending search request back:', assets))
    );
  }
}
