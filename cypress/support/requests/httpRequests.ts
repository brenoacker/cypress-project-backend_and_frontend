import CommonHeaders from 'cypress/support/headers/commonHeaders';

export default new class HttpRequests {
   public get(url: string, headers: object = CommonHeaders.default()): Cypress.Chainable {
    cy.log('Making a PATCH request to the /objects/{id} endpoint')
    cy.log('url: ' + url)
    cy.log('headers: ' + JSON.stringify(headers))
    return cy.request({ method: 'GET', url: url, headers: headers});
  }
  public post(url: string, headers: object = CommonHeaders.default(), body?: object): Cypress.Chainable {
    return cy.request({ method: 'POST', url: url, body: body, headers: headers});
  }
  public put(url: string, headers: object = CommonHeaders.default(), body?: object): Cypress.Chainable {
    return cy.request({ method: 'PUT', url: url, body: body, headers: headers});
  }
  public patch(url: string, headers: object = CommonHeaders.default(), body?: object): Cypress.Chainable {
    cy.log('Making a PATCH request to the /objects/{id} endpoint')
    cy.log('url: ' + url)
    cy.log('headers: ' + JSON.stringify(headers))
    cy.log('body: ' + JSON.stringify(body))
    return cy.request({ method: 'PATCH', url: url, body: body, headers: headers});
  }
  public delete(url: string, headers: object, body?: object): Cypress.Chainable {
    return cy.request({ method: 'DELETE', url, body: body, headers: headers});
  }
}