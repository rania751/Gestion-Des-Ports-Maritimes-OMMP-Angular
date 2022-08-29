import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortsService {
  PortUrl: string = 'http://localhost:8085/api/ports';


  constructor(private httpClientport: HttpClient) { }

  addPort(Port: any) {
    return this.httpClientport.post(this.PortUrl , Port);
  }
  
  editPort(Port: any, id: number) {
    return this.httpClientport.put(this.PortUrl  + '/' + Port.id, Port);
  }

  getAllPortes() {
    return this.httpClientport.get(this.PortUrl);
  }

  getPortById(id: any) {
    return this.httpClientport.get(this.PortUrl + '/' + id);
  }

  deletePort(id: any) {
    return this.httpClientport.delete(this.PortUrl + '/' + id);
  }
  getEmplByPort(id:any){
    return this.httpClientport.get(this.PortUrl + '/list'+'/'+id)
  }

}
