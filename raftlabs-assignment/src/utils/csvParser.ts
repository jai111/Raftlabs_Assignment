import { parse } from 'papaparse';

export const parseCsvFile = async <T>(file: any): Promise<T[]> => new Promise((resolve, _) => {
    parse<T>(file, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete(results) {
            resolve(results.data);
        },
    });
});
