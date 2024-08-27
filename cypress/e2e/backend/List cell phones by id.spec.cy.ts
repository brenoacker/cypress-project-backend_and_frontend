import * as urls from 'cypress/fixtures/urls.json'
import { objectByIdSchema } from 'cypress/support/validators/jsonSchemas/objectsEndpoint';
import jsonSchemaValidator from 'cypress/support/validators/jsonSchemas/jsonSchemaValidator';
import HttpRequests from 'cypress/support/requests/httpRequests';
import CommonHeaders from 'cypress/support/headers/commonHeaders';

describe('List cell phones by id', () => {
    const objectsUrl = urls.api_restful_dev;
    const cellphoneId = 7;

    it('should return the list of cell phone by id', () => {
        cy.log('Making a GET request to the /objects/{id} endpoint')
        HttpRequests.get(objectsUrl + '/objects/' + cellphoneId, CommonHeaders.default()).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body with JSON schema')
            jsonSchemaValidator(objectByIdSchema, response);
            cy.log('Validating response body content')
            expect(response.body.id).to.eq(cellphoneId.toString());
        });
    });
});