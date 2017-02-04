import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts = [
            {id: 1, name: "Paul S. Paul", value: '518-479-0963'},
            {id: 2, name: "Allen J. White", value: '530-342-5427'},
            {id: 3, name: "Albert S. Petterson", value: '404-429-9730'},
            {id: 4, name: "Robin J. Sylvester", value: '606-374-0089'},
            {id: 5, name: "Travis M. Fu", value: '908-333-4381'},
            {id: 6, name: "Michael B. Price", value: '605-654-1770'},
        ];
        return {contacts};
    }
}
