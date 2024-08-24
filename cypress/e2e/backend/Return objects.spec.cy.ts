import * as urls from 'cypress/fixtures/urls.json'

describe('Get Objects', () => {
    const envURL = urls.api_restful_dev + '/objects';
    // can be validated with json schema
    it('should return objects', () => {
        // cy.request('GET', `https://api-restful-api.dev/objects`)
        //     .then((response) => {
        //         expect(response.status).to.eq(200);
        //         expect(response.body[0]).to.have.property('id');
        //         expect(response.body[0]).to.have.property('name');
        //         expect(response.body[0]).to.have.property('data');
        //     });

        cy.request({
                method: 'GET',
                url: `https://api-restful-api.dev/objects`,
                // headers: {"Accept-Encoding": "gzip, deflate, br"},
                failOnStatusCode: false
        })
    });
});