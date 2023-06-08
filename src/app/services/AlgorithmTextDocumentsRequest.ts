import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlgorithmTextDocuments } from '../model/AlgorithmTextDocuments';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmTextDocumentsRequest {

  private baseUrl: string = "http://localhost:5000"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  public runAlgorithm(algorithmParameters: AlgorithmTextDocuments): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, algorithmParameters, this.httpOptions);
  }
}
