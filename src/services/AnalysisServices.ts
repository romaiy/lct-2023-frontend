import { AxiosResponse } from "axios";
import $api from "../http";
import { IAnalysis } from "../models/IAnalysis";

export default class AnalysisServices {

    static async baseAnalysis(): Promise<AxiosResponse<IAnalysis[]>>{
        return $api.get<IAnalysis[]>('/sss');
    }

    static async smartAnalysisDatabase(object: string, 
        date: [Date | null, Date | null], work: string): Promise<AxiosResponse<IAnalysis>> {
            return $api.post<IAnalysis>('/afk', {object, date, work})
    };

    static async selectAnalysis(id: string): Promise<AxiosResponse<IAnalysis>> {
        return $api.get<IAnalysis>('/e' + '/' + id);
    }

};