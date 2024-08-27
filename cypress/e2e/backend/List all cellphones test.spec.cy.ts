import * as urls from 'cypress/fixtures/urls.json'
import { objectSchema } from 'cypress/support/validators/jsonSchemas/objectsEndpoint';
import jsonSchemaValidator from 'cypress/support/validators/jsonSchemas/jsonSchemaValidator';
import HttpRequests from 'cypress/support/requests/httpRequests';
import CommonHeaders from 'cypress/support/headers/commonHeaders';

describe('List all cellphones test', () => {
    const objectsUrl = urls.api_restful_dev;

    it('should return all cellphones', () => {
        cy.log('Making a GET request to the /objects endpoint')
        HttpRequests.get(objectsUrl + '/objects', CommonHeaders.default()).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body with JSON schema')
            jsonSchemaValidator(objectSchema, response);
        });
    });
});