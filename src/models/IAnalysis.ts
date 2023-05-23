import { IAnalysisResult } from "./IAnalysisResult";

export interface IAnalysis {
    result: IAnalysisResult[] | undefined,
    type: string | undefined;
    _id: string;
    date: string;
};