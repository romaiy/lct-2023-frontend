import { makeAutoObservable } from "mobx";
import { IAnalysis } from "../models/IAnalysis";

export default class HistoryStore {
    history = {} as IAnalysis[] | undefined;

    constructor() {
        makeAutoObservable(this);
        this.history = [
            {type: 'base', _id: '1', result: [], date: '19.05.2023, 19:06'},
            {type: 'smartDB', _id: '2', result: [], date: '19.05.2023, 19:06'},
            {type: 'base', _id: '3', result: [], date: '19.05.2023, 19:06'},
            {type: 'base', _id: '4', result: [], date: '19.05.2023, 19:06'},
        ];
    }

    setHistory(history: IAnalysis[]) {
        this.history = history;
    }
}