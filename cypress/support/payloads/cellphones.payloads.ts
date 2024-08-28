export default class CellphonesPayloads {
    static postCellphonePayload() {
        return {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
          }
    }
    static putCellphonePayload() {
        return {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2021,
               "price": 2849.99,
               "CPU model": "Intel Core i7",
               "Hard disk size": "512 Gb"
            }
          }
    }
    static patchCellphonePayload() {
        return {
            "name": "Apple MacBook Pro 17"
        }
    }
}