const DTRProcess =
{
    "ResponseInfo": null,
    "ProcessInstances": [
        {
            "id": "7e721bd1-24ac-4daa-b616-dc32c4241b12",
            "tenantId": "pb.amritsar",
            "businessService": "DTR",
            "businessId": "PB-DTR-2023-04-04-000032",
            "action": "APPLY",
            "moduleName": "death-services",
            "state": {
                "auditDetails": null,
                "uuid": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                "tenantId": "pb",
                "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": true,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4a239152-b979-4e3a-aa5d-2c1441f14ad6",
                        "tenantId": "pb",
                        "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                        "action": "REJECT",
                        "nextState": "a1e8b906-a90c-4428-85b8-6044f424afb7",
                        "roles": [
                            "EMPLOYEE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e44581c4-c221-4978-8e34-7e483ed7672f",
                        "tenantId": "pb",
                        "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                        "action": "APPROVE",
                        "nextState": "61b187d3-09fb-4221-942c-c75dd938b203",
                        "roles": [
                            "EMPLOYEE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "Applying for birth registration",
            "documents": null,
            "assigner": {
                "id": 12002,
                "userName": "qaSuperuser1",
                "name": "xyz",
                "type": "EMPLOYEE",
                "mobileNumber": "******6136",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "Super User",
                        "code": "SUPERUSER",
                        "tenantId": "pb"
                    },
                    {
                        "id": null,
                        "name": "Super User",
                        "code": "SUPERUSER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "d39db015-746a-40b7-95ab-6e8b36de40ff"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e44581c4-c221-4978-8e34-7e483ed7672f",
                    "tenantId": "pb",
                    "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                    "action": "APPROVE",
                    "nextState": "61b187d3-09fb-4221-942c-c75dd938b203",
                    "roles": [
                        "EMPLOYEE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4a239152-b979-4e3a-aa5d-2c1441f14ad6",
                    "tenantId": "pb",
                    "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                    "action": "REJECT",
                    "nextState": "a1e8b906-a90c-4428-85b8-6044f424afb7",
                    "roles": [
                        "EMPLOYEE"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -11141535691,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                "createdTime": 1680613738297,
                "lastModifiedTime": 1680613738297
            },
            "rating": 0,
            "escalated": false
        }
    ],
    "totalCount": 0
}

module.exports = DTRProcess;