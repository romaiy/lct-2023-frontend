import { Stack } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import AnalysisServices from "../../services/AnalysisServices";


const CurrentAnalysisPage = () => {
    const { AStore } = useContext(Context);
    const [analysis, setAnalysis] = useState<boolean>();
    const {id} = useParams();
    
    useEffect(() => {
        let isCancelled = false;
        if (id === '0') {
            setAnalysis(AStore.currentBaseAnalysis || AStore.currentSmartAnalysis)
        } else {
            try {
                AStore.setBaseLoading(true);
                AnalysisServices.selectAnalysis(id ? id : '1').then((response) => {
                    if (!isCancelled) { 
                        setAnalysis(response.data.test);
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
            {analysis &&
            <Wrapper>
                <Stack>

                </Stack>
                <></>
            </Wrapper>
            }
        </div>
    );
};

export default CurrentAnalysisPage;