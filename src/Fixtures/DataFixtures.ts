import { test } from './CustomFixtures';
import { CsvHelper } from './Utilities/CSVHelper';

type DataFixture={
    testData:Record<string,string>[];
}

export const customdatatest=test.extend<DataFixture>({
    testData:async({},use)=>{
        const testData=CsvHelper.readCsv('./src/NegativeCredentials.csv');
        await use(testData);
    }
})