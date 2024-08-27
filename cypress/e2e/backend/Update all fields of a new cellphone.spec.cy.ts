import * as urls from 'cypress/fixtures/urls.json';	
import httpRequests from 'cypress/support/requests/httpRequests';
import CommonHeaders from 'cypress/support/headers/commonHeaders';

describe('Update all fields of a new cellphone', () => {
    let cellphoneId: string;
    const objectsUrl = urls.api_restful_dev;
    const newCellphonePayload =  {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
      }

    it('should register a new cellphone', () => {
        cy.log('Making a POST request to the /objects endpoint')
        httpRequests.post(objectsUrl + '/objects', CommonHeaders.default(), newCellphonePayload).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body content')
            cy.log('Validating property id, name, data, year, price, CPU model, Hard disk size')
            expect(response.body).to.have.property('id');
            cellphoneId = response.body.id;
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('year');
            expect(response.body.data).to.have.property('price');
            expect(response.body.data).to.have.property('CPU model');
            expect(response.body.data).to.have.property('Hard disk size');
            expect(response.body.name).to.eq(newCellphonePayload.name);
            expect(response.body.data.year).to.eq(newCellphonePayload.data.year);
            expect(response.body.data.price).to.eq(newCellphonePayload.data.price);
            expect(response.body.data['CPU model']).to.eq(newCellphonePayload.data['CPU model']);
            expect(response.body.data['Hard disk size']).to.eq(newCellphonePayload.data['Hard disk size']);
            cy.log('Validating property createdAt')
            expect(response.body.createdAt).to.not.be.null;
        });
    });

    it('should update all fields in the registered cellphone', () => {
        const updateCellphonePayload = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2021,
               "price": 2849.99,
               "CPU model": "Intel Core i7",
               "Hard disk size": "512 Gb"
            }
          }
        cy.log('Making a PUT request to the /objects/{id} endpoint')
        httpRequests.put(objectsUrl + '/objects/' + cellphoneId, CommonHeaders.default(), updateCellphonePayload).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body content')
            cy.log('Validating property id, name, data, year, price, CPU model, Hard disk size')
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('year');
            expect(response.body.data).to.have.property('price');
            expect(response.body.data).to.have.property('CPU model');
            expect(response.body.data).to.have.property('Hard disk size');
            expect(response.body.name).to.eq(updateCellphonePayload.name);
            expect(response.body.data.year).to.eq(updateCellphonePayload.data.year);
            expect(response.body.data.price).to.eq(updateCellphonePayload.data.price);
            expect(response.body.data['CPU model']).to.eq(updateCellphonePayload.data['CPU model']);
            expect(response.body.data['Hard disk size']).to.eq(updateCellphonePayload.data['Hard disk size']);
            cy.log('Validating property updatedAt')
            expect(response.body.updatedAt).to.not.be.null;
        });
    });
});