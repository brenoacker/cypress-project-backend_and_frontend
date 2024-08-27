export const objectSchema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        data: {
          type: ['object', 'null'],
          properties: {
            color: { type: 'string' },
            capacity: { type: 'string' },
            "capacity GB": { type: 'integer' },
            price: { type: 'number' },
            generation: { type: 'string' },
            year: { type: 'integer' },
            "CPU model": { type: 'string' },
            "Hard disk size": { type: 'string' },
            "Strap Colour": { type: 'string' },
            "Case Size": { type: 'string' },
            Color: { type: 'string' },
            Description: { type: 'string' },
            "Screen size": { type: 'number' },
            Generation: { type: 'string' },
            Price: { type: ['number', 'string'] }
          },
          additionalProperties: true
        }
      },
      required: ['id', 'name'],
      additionalProperties: false
    }
  };
  
export const objectByIdSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    data: {
      type: "object",
      properties: {
        year: { type: "number" },
        price: { type: "number" },
        "CPU model": { type: "string" },
        "Hard disk size": { type: "string" }
      },
      required: ["year", "price", "CPU model", "Hard disk size"]
    }
  },
  required: ["id", "name", "data"]
};