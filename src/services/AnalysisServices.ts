import axios, { AxiosResponse } from "axios";
import $api from "../http";
import { IAnalysis } from "../models/IAnalysis";

export default class AnalysisServices {

    static async baseAnalysis(): Promise<AxiosResponse<IAnalysis>>{
        return axios.get<IAnalysis>('http://185.177.219.117:8900/analyze');
    };

    static async smartAnalysisDatabase(object: string, 
        date: [Date | null, Date | null], work: string): Promise<AxiosResponse<IAnalysis>> {
            return $api.post<IAnalysis>('/afk', {object, date, work})
    };

    static async selectAnalysis(id: string): Promise<AxiosResponse<IAnalysis>> {
        return $api.get<IAnalysis>('/e' + '/' + id);
    };

    static async saveAnalysis(analysis: IAnalysis): Promise<AxiosResponse<string>> {
        return $api.post<string>('/test', {analysis});
    }
};