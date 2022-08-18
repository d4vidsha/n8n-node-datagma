"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datagma = void 0;
class Datagma {
    constructor() {
        this.description = {
            displayName: 'Datagma',
            name: 'datagma',
            icon: 'file:datagma.png',
            group: ['transform'],
            version: 1,
            description: 'Consume Datagma API',
            defaults: {
                name: 'Datagma',
                color: '#1A82e2',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'datagmaApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    options: [
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                    ],
                    default: 'contact',
                    required: true,
                    description: 'Resource to consume',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Find',
                            value: 'get',
                            description: 'Find email',
                        },
                        {
                            name: 'Enrich',
                            value: 'enrich',
                            description: 'Enrich contact',
                        },
                    ],
                    default: 'enrich',
                    description: 'The operation to perform.',
                },
                {
                    displayName: 'First Name',
                    name: 'fname',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'get',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'First name of associated person. Alternatively, use full name field.',
                },
                {
                    displayName: 'Last Name',
                    name: 'lname',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'get',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Last name of associated person. Alternatively, use full name field.',
                },
                {
                    displayName: 'Company',
                    name: 'company',
                    type: 'string',
                    required: true,
                    displayOptions: {
                        show: {
                            operation: [
                                'get',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Company name of the associated person.',
                },
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: {
                        show: {
                            operation: [
                                'get',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    options: [
                        {
                            displayName: 'Full Name',
                            name: 'fullName',
                            type: 'string',
                            default: '',
                            description: 'If first name and last name are not provided, you can specify a full name here.',
                        },
                    ],
                },
                {
                    displayName: 'Data',
                    name: 'data',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'You can submit a professional email address or a LinkedIn profile URL to get info about a person and his company. A successful person response costs two credits. You can also submit a company name, a website, or a Siren if you only want information about the company with this parameter. Note: If you don\'t have an email address or Linkedin Profile, and if you still want information about the person, you can use the couple Full Name + Company Name, see below)',
                },
                {
                    displayName: 'Company Keyword',
                    name: 'companyKeyword',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'When you are looking for company informations using the data parameter. If you think several companies with the same name exist, you can submit us a keyword (like a part of the address, the name of the founder, or the industry), and our AI will pick the most probable company.',
                },
                {
                    displayName: 'First Name',
                    name: 'fname',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Replace the data parameter if you don\'t use it. (Must be used with Last Name and Company).',
                },
                {
                    displayName: 'Last Name',
                    name: 'lname',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Replace the data parameter if you don\'t use it. (Must be used with First Name and Company).',
                },
                {
                    displayName: 'Company',
                    name: 'company',
                    type: 'string',
                    required: false,
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Replace the data parameter if you don\'t fill it. (Must be used with firstName and lastName).',
                },
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: {
                        show: {
                            operation: [
                                'enrich',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    options: [
                        {
                            displayName: 'Full Name',
                            name: 'fullName',
                            type: 'string',
                            default: '',
                            description: 'Instead of input firstname, lastname. You can input full name here',
                        },
                        {
                            displayName: 'Company Premium',
                            name: 'companyPremium',
                            type: 'boolean',
                            default: '',
                            description: 'To get the LinkedIn information about the enriched person\'s company.',
                        },
                        {
                            displayName: 'Company Full',
                            name: 'companyFull',
                            type: 'boolean',
                            default: '',
                            description: 'To get financial information about the company of the enriched person.',
                        },
                        {
                            displayName: 'Company French',
                            name: 'companyFrench',
                            type: 'boolean',
                            default: '',
                            description: 'To get the information of the SIREN directory if the company is French.',
                        },
                        {
                            displayName: 'Person Full',
                            name: 'personFull',
                            type: 'boolean',
                            default: '',
                            description: 'To get the full profile of the person(education, past experiences...).',
                        },
                        {
                            displayName: 'Phone',
                            name: 'phone',
                            type: 'boolean',
                            default: '',
                            description: 'Direct dial phone. In beta. Only for non-European customers that target non-European prospects.',
                        },
                        {
                            displayName: 'Company Phone',
                            name: 'companyPhone',
                            type: 'boolean',
                            default: '',
                            description: 'Give you the phone number of the office of your prospect, or the HQ phone if the prospect\'s location is unknown',
                        },
                        {
                            displayName: 'Deep Traffic',
                            name: 'deepTraffic',
                            type: 'boolean',
                            default: '',
                            description: 'Give you information about the website\'s traffic, (Traffic by country, similar websites, traffic by sources... )',
                        },
                        {
                            displayName: 'Company Employees',
                            name: 'companyEmployees',
                            type: 'boolean',
                            default: '',
                            description: 'To get company employees.',
                        },
                        {
                            displayName: 'Employee Title',
                            name: 'employeeTitle',
                            type: 'string',
                            default: '',
                            description: 'It only work when companyEmployees turn on.',
                        },
                        {
                            displayName: 'Max employees to return',
                            name: 'maxEmployeesReturn',
                            type: 'number',
                            default: '',
                            description: 'It only work when companyEmployees turn on. Tell me how many employees you want to get back',
                        },
                        {
                            displayName: 'Employee Country',
                            name: 'employeeCountry',
                            type: 'string',
                            default: '',
                            description: 'Narrow down finding employee/person in specific country',
                        },
                        {
                            displayName: 'Debug',
                            name: 'debug',
                            type: 'string',
                            default: '',
                            description: 'By defaut Datagma filters what we consider junk results, thanks to the debug mode, you can access to this junk result',
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        let responseData;
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        const source = 'n8n';
        const credentials = await this.getCredentials('datagmaApi');
        for (let i = 0; i < items.length; i++) {
            if (resource === 'contact') {
                if (operation === 'get') {
                    const fname = this.getNodeParameter('fname', i);
                    const lname = this.getNodeParameter('lname', i);
                    const company = this.getNodeParameter('company', i);
                    const additionalFields = this.getNodeParameter('additionalFields', i);
                    const options = {
                        headers: {
                            'Accept': 'application/json',
                        },
                        method: 'GET',
                        qs: {
                            apiId: credentials.apiKey,
                            firstName: fname,
                            lastName: lname,
                            fullName: additionalFields.fullName,
                            company,
                            source,
                        },
                        uri: `https://gateway.datagma.net/api/ingress/v2/findEmail`,
                        json: true,
                    };
                    responseData = await this.helpers.request(options);
                    returnData.push(responseData);
                }
                if (operation === 'enrich') {
                    const data = this.getNodeParameter('data', i);
                    const companyKeyword = this.getNodeParameter('companyKeyword', i);
                    const fname = this.getNodeParameter('fname', i);
                    const lname = this.getNodeParameter('lname', i);
                    const company = this.getNodeParameter('company', i);
                    const additionalFields = this.getNodeParameter('additionalFields', i);
                    const options = {
                        headers: {
                            'Accept': 'application/json',
                        },
                        method: 'GET',
                        qs: {
                            apiId: credentials.apiKey,
                            data,
                            companyKeyword,
                            firstName: fname,
                            lastName: lname,
                            fullName: additionalFields.fullName,
                            company,
                            companyPremium: additionalFields.companyPremium,
                            companyFull: additionalFields.companyFull,
                            companyFrench: additionalFields.companyFrench,
                            personFull: additionalFields.personFull,
                            phone: additionalFields.phone,
                            companyPhone: additionalFields.companyPhone,
                            deepTraffic: additionalFields.deepTraffic,
                            companyEmployees: additionalFields.companyEmployees,
                            employeeTitle: additionalFields.employeeTitle,
                            maxEmployeesReturn: additionalFields.maxEmployeesReturn,
                            employeeCountry: additionalFields.employeeCountry,
                            debug: additionalFields.debug,
                            source,
                        },
                        uri: `https://gateway.datagma.net/api/ingress/v2/full`,
                        json: true,
                    };
                    responseData = await this.helpers.request(options);
                    returnData.push(responseData);
                }
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Datagma = Datagma;
//# sourceMappingURL=Datagma.node.js.map