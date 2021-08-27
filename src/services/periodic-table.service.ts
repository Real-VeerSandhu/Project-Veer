import { Injectable } from '@angular/core';
import { PeriodicTableElement } from 'src/models/periodic-table-element';
import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';

@Injectable()
export class PeriodicTableService {

    collectionName = 'periodic-table';

    constructor(private db: FirestoreService) { }

    async createElement(data: PeriodicTableElement) {
        try {
            const r = await this.db.add(this.collectionName, data);
            console.log('documentRefrence', r);
        } catch (error) {
            console.log('error occured', error);
        }
    }
    async createPTable(data: any) {
        try {
            await this.db.set(`${this.collectionName}/periodicTable`, data);
            console.log('document created');
        } catch (error) {
            console.log('error occured', error);
        }
    }
    getPTable() {
        return this.db.docWithInjectedId$(`${this.collectionName}/periodicTable`);
    }
    getElementBySymbol(symbol: string): Observable<PeriodicTableElement[]> {
        return this.db.colWithIdsInjected$(this.collectionName, ref => ref.where('symbol', '==', symbol).limit(1));
    }
    eleQuery(protons: number): Observable<PeriodicTableElement[]> {
        return this.db.colWithIdsInjected$(this.collectionName, ref => ref
            .where('number', '==', protons)
            .limit(1));
    }
}
