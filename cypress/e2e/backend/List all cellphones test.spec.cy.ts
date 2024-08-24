import * as urls from 'cypress/fixtures/urls.json'
import { objectSchema } from 'cypress/support/validators/jsonSchemas/objectsEndpoint';
import commonHeaders from 'cypress/support/headers/commonHeaders';
import jsonSchemaValidator from 'cypress/support/validators/jsonSchemas/jsonSchemaValidator';

describe('List all cellphones test', () => {
    const objectsUrl = urls.api_restful_dev;

    it('should return all cellphones', () => {
        cy.log('Making a GET request to the /objects endpoint')
        cy.request({
            method: 'GET',
            url: `${objectsUrl}/objects`,
            headers: commonHeaders,
            failOnStatusCode: false
            }).then((response) => {
                cy.log('Validating status code')
                expect(response.status).to.eq(200);
                cy.log('Validating response body with JSON schema')
                jsonSchemaValidator(objectSchema, response);
            });
    });
});