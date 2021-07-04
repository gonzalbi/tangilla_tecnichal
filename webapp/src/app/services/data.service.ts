import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class DataService {
    constructor (private http : HttpClient){
    }

    private synonims = new BehaviorSubject<any>("")
    currentSynonims = this.synonims.asObservable();
    
    changeSynonims(newSynonims : string){
        this.synonims.next(newSynonims)
    }

    getSynonyms(text : string){
        return this.http.post('/api/findSynonims',{text : text});
    }
}