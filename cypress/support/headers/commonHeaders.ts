class CommonHeaders {
    default() {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate',
        };
    }
}
export default new CommonHeaders();