import { makeAutoObservable } from "mobx";
import AnalysisServices from "../services/AnalysisServices";

export default class AnalysisStore {
    isBaseLoading = false;
    isSmartLoading = false;
    currentBaseAnalysis = false;
    currentSmartAnalysis = false;

    constructor() {
        makeAutoObservable(this);
    }

    setBaseLoading(isLoading: boolean) {
        this.isBaseLoading = isLoading;
    };

    setSmartLoading(isLoading: boolean) {
        this.isSmartLoading = isLoading;
    };

    setCurrentBaseAnalysis(analysis: boolean) {
        this.currentBaseAnalysis = analysis;
    }

    setCurrentSmartAnalysis(analysis: boolean) {
        this.currentSmartAnalysis = analysis;
    }

    async baseAnalysis() {
        this.setBaseLoading(true);
        try {
            const response = await AnalysisServices.baseAnalysis();
            console.table(response.data);
        } catch (e: any) {
            console.log(e.response?.data?.message);
            this.setCurrentBaseAnalysis(true);
        } finally {
            this.setBaseLoading(false);
            
        }
    }

    async smartAnalysisDatabase(object: string, 
        date: [Date | null, Date | null], work: string) {
        this.setSmartLoading(true);
        try {
            const response = await AnalysisServices.smartAnalysisDatabase(object, date, work);
            console.table(response.data);
        } catch (e: any) {
            console.log(e.response?.data?.message);
            this.setCurrentSmartAnalysis(true);
        } finally {
            this.setSmartLoading(false);
        }
    }

};