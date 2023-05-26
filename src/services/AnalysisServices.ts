import axios, { AxiosResponse } from "axios";
import $api from "../http";
import { IAnalysis } from "../models/IAnalysis";

export default class AnalysisServices {

    static async baseAnalysis(): Promise<AxiosResponse<IAnalysis>>{
        return axios.get<IAnalysis>('http://185.177.219.117:8900/analyze');
    };

    static async smartAnalysisDatabase(obj: string, 
        date: [Date | null, Date | null], work: string): Promise<AxiosResponse<IAnalysis>> {
            return $api.post<IAnalysis>('http://185.177.219.117:8900/analyze/criterized', {obj, date, work})
    };

    static async smartAnalysisUrl(object: string, 
        date: [Date | null, Date | null], work: string, url: string): Promise<AxiosResponse<IAnalysis>> {
            return $api.post<IAnalysis>('/afk', {object, date, work, url})
    };

    static async selectAnalysis(id: string): Promise<AxiosResponse<IAnalysis>> {
        return $api.get<IAnalysis>('http://185.177.219.117:8900/analyze' + '/' + id);
    };

    static async saveAnalysis(analysis: IAnalysis): Promise<AxiosResponse<string>> {
        return $api.post<string>('http://185.177.219.117:8900/analyze/update', analysis);
    };

    static async fileExport(name: string, type:string, id: string): Promise<AxiosResponse<Blob>> {
        return $api.get<Blob>(`http://185.177.219.117:8900/${type.substring(1)}byid/${id}/${name}`, {responseType: 'blob'});
    };

    static async setWorktypes() : Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>(`http://185.177.219.117:8900/worktypes`);
    };

    static async setObjcategories() : Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>(`http://185.177.219.117:8900/objcategories`);
    };
};