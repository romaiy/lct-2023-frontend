import { Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import { IAnalysis } from "../../models/IAnalysis";
import { IAnalysisResult } from "../../models/IAnalysisResult";
import AnalysisServices from "../../services/AnalysisServices";
import AnalysisResult from "./components/AnalysisResult";
import FileExport from "./components/FileExport";
import InfoBlock from "./components/InfoBlock";
import ModalEdit from "./components/ModalEdit";


const CurrentAnalysisPage: FC = () => {
    const { AStore } = useContext(Context);
    const [analysisResult, setAnalysisResult] = useState<IAnalysis>();
    const [result, setResult] = useState<IAnalysisResult[]>();
    const [works, setWorks] = useState<string[]>();
    const [opened, { open, close }] = useDisclosure(false);
    const {id} = useParams();
    
    useEffect(() => {
        let isCancelled = false;
        if (id === '0') {
            setAnalysisResult(AStore.currentBaseAnalysis || AStore.currentSmartAnalysis);
            setResult(AStore.currentBaseAnalysis?.result || AStore.currentSmartAnalysis?.result);
        } else {
            try {
                AStore.setBaseLoading(true);
                AnalysisServices.selectAnalysis(id ? id : '1').then((response) => {
                    if (!isCancelled) { 
                        setAnalysisResult(response.data);
                        setResult(response.data.result);
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
    }, []);

    useEffect(() => {
        setAnalysisResult((item) => ({...item!, result}))
    }, [result])

    const handleAdressDelete = (adress:string) => {
        setResult((item) => {
            return item?.filter(result => result.adress != adress)
        });
    };

    const handleSetWorks = (works: string[]) => {
        setWorks(works);
    }

    return (
        <div>
            
            {analysisResult &&
            <Wrapper>
                <Stack spacing={24}>
                    <InfoBlock type={analysisResult.type!}/>
                    <AnalysisResult 
                        open={open} 
                        handleAdressDelete={handleAdressDelete} 
                        {...analysisResult}
                        handleSetWorks={handleSetWorks}
                    />
                    <Modal
                        size={508}
                        lockScroll={false}
                        trapFocus={false}
                        style={{zIndex: 10000000, position: 'absolute'}} 
                        opened={opened} onClose={close} 
                        centered
                        withCloseButton={false}
                    >
                        <ModalEdit works={works}/>
                    </Modal>
                </Stack>
                <FileExport/>
            </Wrapper>
            }
        </div>
    );
};

export default CurrentAnalysisPage;