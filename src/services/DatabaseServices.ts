import { AxiosResponse } from "axios";
import $api from "../http";

export default class DatabaseServices {
    
    static fetchDatabase(): Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>('http://185.177.219.117:8005/list');
    };

    static async databaseExport(name: string): Promise<AxiosResponse<Blob>> {
        return $api.get<Blob>(`http://185.177.219.117:8005/file/${name}`, {responseType: 'blob'});
    };
};
