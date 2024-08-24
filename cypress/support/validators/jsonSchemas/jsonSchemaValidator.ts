const Ajv = require('ajv');
const ajv = new Ajv();

export default function jsonSchemaValidator(jsonSchema: object, response) {
    const validate = ajv.compile(jsonSchema);
    const valid = validate(response.body);
    expect(valid.errors, `Encountered errors: ${valid.errors}`).to.be.undefined;
}