import { Stack } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import { IAnalysis } from "../../models/IAnalysis";
import AnalysisServices from "../../services/AnalysisServices";
import AnalysisResult from "./components/AnalysisResult";
import FileExport from "./components/FileExport";
import InfoBlock from "./components/InfoBlock";


const CurrentAnalysisPage = () => {
    const { AStore } = useContext(Context);
    const [analysisResult, setAnalysisResult] = useState<IAnalysis>();
    const {id} = useParams();
    
    useEffect(() => {
        let isCancelled = false;
        if (id === '0') {
            setAnalysisResult(AStore.currentBaseAnalysis || AStore.currentSmartAnalysis);
        } else {
            try {
                AStore.setBaseLoading(true);
                AnalysisServices.selectAnalysis(id ? id : '1').then((response) => {
                    if (!isCancelled) { 
                        setAnalysisResult(response.data);
                    }
                });
            } catch (e) {
                console.log(e);
            } finally {
                AStore.setBaseLoading(false);
            };
        }
        return () => {
            isCancelled = true;
        }
    }, [])

    return (
        <div>
            {analysisResult &&
            <Wrapper>
                <Stack spacing={24}>
                    <InfoBlock {...analysisResult}/>
                    <AnalysisResult {...analysisResult}/>
                </Stack>
                <FileExport/>
            </Wrapper>
            }
        </div>
    );
};

export default CurrentAnalysisPage;