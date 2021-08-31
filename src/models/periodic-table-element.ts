import { pTableData } from './pTableData';

export interface ElementSummary {
    xpos: number;
    ypos: number;
    name: string;
    number: number;
    symbol?: string;
}

export class PeriodicTableElement {

    name: string;
    appearance: string;
    atomic_mass: number;
    boil: number;
    category: string;
    color: string;
    density: number;
    discoveredBy: string;
    melt: number;
    molarHeat: number;
    namedBy: string;
    number: number;
    period: number;
    phase: string;
    source: string;
    spectralImg: string;
    summary: string;
    symbol: string;
    xpos: number;
    ypos: number;
    shells: [];
    electronConfiguration: string;
    electronAffinity: number;
    electronegativityPauling: number;
    ionizationEnergies: number[];

    convertDictionary() {
        const elementDict: { [key: string]: {} } = {};
        const p = pTableData().elements;
        console.log('convert', p);
        const e = p.find(f => f.name === 'Hydrogen');
        p.forEach((ele, i) => {
            elementDict[ele.name] = ele;
        });
        console.log(elementDict);
        console.log(elementDict.Oxygen);
        return elementDict;
    }

    getTableView() {
        const elementDict: { [key: string]: ElementSummary } = {};
        let pTableDict = {};
        const p = pTableData().elements;
        p.forEach((ele, i) => {
                elementDict[ele.symbol] = {
                    name: ele.name,
                    xpos: ele.xpos,
                    ypos: ele.ypos,
                    number: ele.number
                };
                pTableDict = {... elementDict };
        });
        console.log('pTableDict', pTableDict);
        return pTableDict;
    }
}