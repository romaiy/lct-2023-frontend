import { AxiosResponse } from "axios";
import $api from "../http";
import { IAnalysis } from "../models/IAnalysis";

export default class HistoryServices {
    static fetchHistory(): Promise<AxiosResponse<IAnalysis[]>> {
        return $api.get<IAnalysis[]>('http://185.177.219.117:8900/history');
    };
};
