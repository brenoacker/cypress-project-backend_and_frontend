import * as urls from 'cypress/fixtures/urls.json';	
import httpRequests from 'cypress/support/requests/httpRequests';
import CommonHeaders from 'cypress/support/headers/commonHeaders';
import CellphonesPayloads from 'cypress/support/payloads/cellphones.payloads';

describe('Register a new cellphone', () => {
    let cellphoneId: string;
    const objectsUrl = urls.api_restful_dev;
    const newCellphonePayload = CellphonesPayloads.postCellphonePayload();

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

    it('should delete the registered cellphone', () => {
        cy.log('Making a DELETE request to the /objects/{id} endpoint')
        httpRequests.delete(objectsUrl + '/objects/' + cellphoneId, CommonHeaders.default()).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body content')
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.eq(`Object with id = ${cellphoneId} has been deleted.`);
        });
    });

});