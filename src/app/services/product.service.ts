import { Observable } from 'rxjs';
import { Injectable, Signal, signal } from '@angular/core';
import { HttpService } from './http.service';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Citations } from '../interfaces/citations.model';
import { environment } from 'src/environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';
import { CitationsDetails } from '../interfaces/citations.details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpService) { }

  private productUrl = `https://${environment.productBaseUrl}/api/citations/redistributions`;
  private productDetailsUrl = `https://${environment.productBaseUrl}/api/citations/`;

  // Signal stream of products
  products = toSignal(this.getProducts$());
  productDetails = signal<any | undefined>(undefined);

  //observable stream of products
  getProducts$(): Observable<Array<Citations>> {
    return this.http.get<{ results: Array<Citations> }>(this.productUrl)
      .pipe( map(data => data.results.filter(item => item.distribution === 'PUBLIC')),
        map(data => data.sort((a, b) => new Date(b.redistributedDate).getTime() - new Date(a.redistributedDate).getTime())),
        tap(data => this.logger(data)),
        shareReplay(1)
      );
  }
  getProductDetails$(id: number): Observable<CitationsDetails> {
    return this.http.getById<CitationsDetails>(this.productDetailsUrl, id)
      .pipe(tap(data => {
        this.productDetails.set(data);
        this.logger(data);
      }),
        shareReplay(1));
  }

  logger(data: any): void {
    // To Do: replace with a logger service
    console.info(JSON.stringify(data));
  }

}

