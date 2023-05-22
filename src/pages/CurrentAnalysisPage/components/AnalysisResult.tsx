import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import { IAnalysis } from "../../../models/IAnalysis";
import Example from "./ResultTable";

const AnalysisResult = ({result}: IAnalysis) => {
    
    return (
        <BlockWrapper>
            Рекомендуемые работы
            {result && <Example result={result}/>}
        </BlockWrapper>
    );
};

export default AnalysisResult;