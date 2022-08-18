"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagmaApi = void 0;
class DatagmaApi {
    constructor() {
        this.name = 'datagmaApi';
        this.displayName = 'Datagma API';
        this.documentationUrl = 'datagma';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.DatagmaApi = DatagmaApi;
//# sourceMappingURL=DatagmaApi.credentials.js.map