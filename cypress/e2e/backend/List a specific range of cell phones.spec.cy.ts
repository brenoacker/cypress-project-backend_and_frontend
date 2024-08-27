import CommonHeaders from 'cypress/support/headers/commonHeaders';
import * as urls from 'cypress/fixtures/urls.json'
import { objectSchema } from 'cypress/support/validators/jsonSchemas/objectsEndpoint';
import jsonSchemaValidator from 'cypress/support/validators/jsonSchemas/jsonSchemaValidator';
import HttpRequests from 'cypress/support/requests/httpRequests';

describe('List a specific range of cell phones', () => {
    const objectsUrl = urls.api_restful_dev;

    it('should return a specific range of cell phones', () => {
        cy.log('Making a GET request to the /objects?id{id} endpoint')
        HttpRequests.get(objectsUrl + '/objects?id=3&id=5&id=10', CommonHeaders.default()).then((response) => {
            cy.log('Validating status code')
            expect(response.status).to.eq(200);
            cy.log('Validating response body with JSON schema')
            jsonSchemaValidator(objectSchema, response);
            cy.log('Validating response body length')
            expect(response.body).to.have.length(3);
            cy.log('Validating response body content')
            expect(response.body[0].id).to.eq("3");
            expect(response.body[1].id).to.eq("5");	
            expect(response.body[2].id).to.eq("10");

        });
    });
});