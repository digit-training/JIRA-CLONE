const PGRProcess =
{
    "ResponseInfo": null,
    "ProcessInstances": [
        {
            "id": "1a66a232-33ed-4250-a454-53914e85a8c6",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-26-004215",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 79773,
                "userName": "8808703363",
                "name": "Ajeet",
                "type": "CITIZEN",
                "mobileNumber": "******3363",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "88bf4297-0a7d-4132-aba0-258245bf4f66"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -4425880647,
            "businesssServiceSla": -3994180647,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "88bf4297-0a7d-4132-aba0-258245bf4f66",
                "lastModifiedBy": "88bf4297-0a7d-4132-aba0-258245bf4f66",
                "createdTime": 1687760852332,
                "lastModifiedTime": 1687760852332
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f7b1f891-0873-4135-9303-36d2ec812c0d",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-21-004214",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12153,
                "userName": "9999999999",
                "name": "Shivam Sharma",
                "type": "CITIZEN",
                "mobileNumber": "******9999",
                "emailId": "S*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "5e5070d3-96ff-4009-b018-305a682dec53"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -4836415818,
            "businesssServiceSla": -4404715818,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "lastModifiedBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "createdTime": 1687350317161,
                "lastModifiedTime": 1687350317161
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3b79b076-aaaa-445c-85d9-3607af108767",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-21-004213",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12153,
                "userName": "9999999999",
                "name": "Shivam Sharma",
                "type": "CITIZEN",
                "mobileNumber": "******9999",
                "emailId": "S*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "5e5070d3-96ff-4009-b018-305a682dec53"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -4850293587,
            "businesssServiceSla": -4418593587,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "lastModifiedBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "createdTime": 1687336439392,
                "lastModifiedTime": 1687336439392
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "ac897aa2-98ef-4566-a5b0-341e5e8a155c",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-21-004212",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12153,
                "userName": "9999999999",
                "name": "Shivam Sharma",
                "type": "CITIZEN",
                "mobileNumber": "******9999",
                "emailId": "S*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "5e5070d3-96ff-4009-b018-305a682dec53"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -4851665762,
            "businesssServiceSla": -4419965762,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "lastModifiedBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "createdTime": 1687335067217,
                "lastModifiedTime": 1687335067217
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "309c1132-27c7-4169-b461-de9aa32e7b1f",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-21-004211",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12153,
                "userName": "9999999999",
                "name": "Shivam Sharma",
                "type": "CITIZEN",
                "mobileNumber": "******9999",
                "emailId": "S*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "5e5070d3-96ff-4009-b018-305a682dec53"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -4856645201,
            "businesssServiceSla": -4424945201,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "lastModifiedBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "createdTime": 1687330087778,
                "lastModifiedTime": 1687330087778
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3da9f3cb-5213-49a5-ac23-dcc09b28a11e",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-06-05-004210",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -6214747030,
            "businesssServiceSla": -5783047030,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1685971985949,
                "lastModifiedTime": 1685971985949
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "5ac7312c-0cf7-4fe0-908f-9963359682a8",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-05-17-004209",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -7860950576,
            "businesssServiceSla": -7429250576,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1684325782403,
                "lastModifiedTime": 1684325782403
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f0d1a16d-daad-405e-8ba5-ac4ec22d10e1",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-05-17-004208",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -7864715708,
            "businesssServiceSla": -7433015708,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1684322017271,
                "lastModifiedTime": 1684322017271
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "80156182-6d38-464f-b52d-fc8bf7070056",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-05-17-004207",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -7867284295,
            "businesssServiceSla": -7435584295,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1684319448684,
                "lastModifiedTime": 1684319448684
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "a13154ce-aae3-4d17-84f2-75010ad10dbe",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-05-17-004206",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -7867308496,
            "businesssServiceSla": -7435608496,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1684319424483,
                "lastModifiedTime": 1684319424483
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "0d6b56f2-e536-4c85-8d5d-1ee8d461c27e",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-05-17-004205",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -7867364483,
            "businesssServiceSla": -7435664483,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1684319368496,
                "lastModifiedTime": 1684319368496
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "0ecaec65-2032-4b30-814b-ae1a32fd26cb",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-04-28-004204",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -9508869470,
            "businesssServiceSla": -9077169470,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1682677863509,
                "lastModifiedTime": 1682677863509
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "e1a84bd0-7978-423d-8990-973957866045",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-27-004202",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -12285103348,
            "businesssServiceSla": -11853403348,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1679901629631,
                "lastModifiedTime": 1679901629631
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "29e04456-2d95-46ef-83c5-ce10ac3a276d",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-27-004201",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -12286832111,
            "businesssServiceSla": -11855132111,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1679899900868,
                "lastModifiedTime": 1679899900868
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "63d34f44-e5e8-4cc0-bf23-2efac09a3fc6",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-27-004200",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -12287633583,
            "businesssServiceSla": -11855933583,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1679899099396,
                "lastModifiedTime": 1679899099396
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3adef058-3282-4db0-a922-b59c481692e6",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-20-004199",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": [
                {
                    "id": "66b985b9-f925-4011-98c7-9f9fbb27f449",
                    "tenantId": "pb.amritsar",
                    "documentType": "PHOTO",
                    "fileStoreId": "85becf5f-00cf-451a-bc9c-41dfe8bd3f8f",
                    "documentUid": "",
                    "auditDetails": {
                        "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "createdTime": 1679286123482,
                        "lastModifiedTime": 1679286123482
                    }
                }
            ],
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -12900609497,
            "businesssServiceSla": -12470727509,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1679286123482,
                "lastModifiedTime": 1679286123482
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3e74a181-7329-42c1-a86d-64972d02047e",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-17-004198",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13147209370,
            "businesssServiceSla": -12715509370,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1679039523609,
                "lastModifiedTime": 1679039523609
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "acdefb7f-af37-4782-86f0-d6a4003b5a57",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-17-004197",
            "action": "REOPEN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13150726276,
            "businesssServiceSla": -12719322000,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1679036006703,
                "lastModifiedTime": 1679036006703
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "fceb74fd-8d49-4209-9c0e-071745c2eaaa",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-16-004196",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 12035,
                    "userName": "QAPGRLME",
                    "name": "LME",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7679",
                    "emailId": "t***@g*******m",
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13223787200,
            "businesssServiceSla": -12792173912,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1678962945779,
                "lastModifiedTime": 1678962945779
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "d5b2f649-307d-4bcc-bc50-1678a519d274",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-16-004195",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13244889923,
            "businesssServiceSla": -12813189923,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1678941843056,
                "lastModifiedTime": 1678941843056
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "2ca253aa-9ee0-43ef-bb30-5fab17403c5b",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-13-004194",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13477056910,
            "businesssServiceSla": -13045356910,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1678709676069,
                "lastModifiedTime": 1678709676069
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "59be7ab6-a3fd-47b8-9c93-f598d79dc45a",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-13-004193",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13477716468,
            "businesssServiceSla": -13046595527,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1678709016511,
                "lastModifiedTime": 1678709016511
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "eea395db-7ed0-4de0-83d1-16695f3c2958",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-13-004189",
            "action": "REJECT",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "REJECTED",
                "applicationStatus": "REJECTED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "fdd5e85a-1a0b-4c25-827a-55956f23e8b9",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "RATE",
                        "nextState": "2f5239cc-eb40-4f8c-8d14-f8946f0890ed",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c4b48f2-d631-411f-9349-97a708e8cd72",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "CANCEL",
                        "nextState": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                        "roles": [
                            "CITIZEN",
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "d9948bf3-0546-4832-88f0-45349e39d659",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b3559e6a-68c9-4091-8e17-958b4d3117d1",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "COMMENT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "rejecting",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "7c4b48f2-d631-411f-9349-97a708e8cd72",
                    "tenantId": "pb",
                    "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "action": "CANCEL",
                    "nextState": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                    "roles": [
                        "CITIZEN",
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13478948134,
            "businesssServiceSla": -13066769918,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1678707784845,
                "lastModifiedTime": 1678707784845
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "cb276503-db46-46a6-acd3-eee7a0e7a40a",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-13-004191",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13479824654,
            "businesssServiceSla": -13049206418,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1678706908325,
                "lastModifiedTime": 1678706908325
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "6a414882-c1c9-40a2-b1b1-3a8329298339",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-12-004188",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12153,
                "userName": "9999999999",
                "name": "Shivam Sharma",
                "type": "CITIZEN",
                "mobileNumber": "******9999",
                "emailId": "S*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "5e5070d3-96ff-4009-b018-305a682dec53"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13545304873,
            "businesssServiceSla": -13113604873,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "lastModifiedBy": "5e5070d3-96ff-4009-b018-305a682dec53",
                "createdTime": 1678641428106,
                "lastModifiedTime": 1678641428106
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "fb4e0e86-0780-4786-bc02-ca7cc049f707",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-10-004187",
            "action": "REJECT",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "REJECTED",
                "applicationStatus": "REJECTED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "d9948bf3-0546-4832-88f0-45349e39d659",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b3559e6a-68c9-4091-8e17-958b4d3117d1",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "COMMENT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c4b48f2-d631-411f-9349-97a708e8cd72",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "CANCEL",
                        "nextState": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                        "roles": [
                            "CITIZEN",
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "fdd5e85a-1a0b-4c25-827a-55956f23e8b9",
                        "tenantId": "pb",
                        "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "action": "RATE",
                        "nextState": "2f5239cc-eb40-4f8c-8d14-f8946f0890ed",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "comment comment comment comment comment comment comment comment comment vcomment vcomment comment comment comment comment comment vvvvcomment comment vcomment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment vcomment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment ",
            "documents": [
                {
                    "id": "374c29bc-606f-4c5c-bcb9-b22d9fb60e66",
                    "tenantId": "pb.amritsar",
                    "documentType": "PHOTO",
                    "fileStoreId": "8f81fb1c-2cb7-42e9-8d9f-8d6594153a51",
                    "documentUid": "",
                    "auditDetails": {
                        "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "createdTime": 1678449971058,
                        "lastModifiedTime": 1678449971058
                    }
                }
            ],
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "7c4b48f2-d631-411f-9349-97a708e8cd72",
                    "tenantId": "pb",
                    "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "action": "CANCEL",
                    "nextState": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                    "roles": [
                        "CITIZEN",
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13736761921,
            "businesssServiceSla": -13305533845,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1678449971058,
                "lastModifiedTime": 1678449971058
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "2f17baa3-1975-4c3e-8039-0d1a6d74cfae",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-03-06-004185",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "Test",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 32563,
                    "userName": "QASV",
                    "name": "Supervisor",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8989",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Supervisor",
                            "code": "SUPERVISOR",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "8d1dfdc5-13e8-4800-89f9-de284089da9c"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -13841718675,
            "businesssServiceSla": -13647397394,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1678345014304,
                "lastModifiedTime": 1678345014304
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f59b6140-ab80-486e-9472-ef9c1067c5a9",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-14-004184",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12120,
                "userName": "7878787878",
                "name": "Rahul",
                "type": "CITIZEN",
                "mobileNumber": "******7878",
                "emailId": "s**********@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "94511af9-c533-482d-8a4f-4845d2bc4ea8"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -15831445437,
            "businesssServiceSla": -15399745437,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "lastModifiedBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "createdTime": 1676355287542,
                "lastModifiedTime": 1676355287542
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "b376ce2c-f2e1-4dc2-8375-82dda5ea9cd7",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004183",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16168794937,
            "businesssServiceSla": -15737094937,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1676017938042,
                "lastModifiedTime": 1676017938042
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "9c7dcd60-fd2a-40c3-bb74-b3d6c9429c06",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004182",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16170956826,
            "businesssServiceSla": -15739256826,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1676015776153,
                "lastModifiedTime": 1676015776153
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "4aa0a9e9-c495-4acc-bafb-ca7f632a4c7c",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004180",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": [
                {
                    "id": "55bed383-b13f-4101-bbf2-8b5b7e9f09b8",
                    "tenantId": "pb.amritsar",
                    "documentType": "PHOTO",
                    "fileStoreId": "a471aac8-48ff-4322-b4d2-dff0c0b8ef2c",
                    "documentUid": "",
                    "auditDetails": {
                        "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                        "createdTime": 1676012124858,
                        "lastModifiedTime": 1676012124858
                    }
                }
            ],
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 4449,
                    "userName": "LME_DPT_6",
                    "name": "LME DPT 6",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******9404",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "1a53d2fe-9b10-4cc7-a6bd-d34443e26c59"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16174608121,
            "businesssServiceSla": -15743773111,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1676012124858,
                "lastModifiedTime": 1676012124858
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f85c8176-e4e3-497d-8dc0-7b5cca3ad20f",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004181",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16175304053,
            "businesssServiceSla": -15743604053,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1676011428926,
                "lastModifiedTime": 1676011428926
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "8a575731-085a-463d-9a50-3029076c2eec",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004179",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16177694647,
            "businesssServiceSla": -15746412485,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1676009038332,
                "lastModifiedTime": 1676009038332
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "982ce971-16a6-4258-9378-4cdb08b3edc2",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-10-004178",
            "action": "REASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 4449,
                    "userName": "LME_DPT_6",
                    "name": "LME DPT 6",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******9404",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "1a53d2fe-9b10-4cc7-a6bd-d34443e26c59"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16178464388,
            "businesssServiceSla": -15747619575,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1676008268591,
                "lastModifiedTime": 1676008268591
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "424a16d9-ce87-4ebf-b490-aceec84d5330",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-02-07-004177",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -16423683939,
            "businesssServiceSla": -15991983939,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1675763049040,
                "lastModifiedTime": 1675763049040
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "db95ea62-c06b-4210-aa54-5b269ac7e83b",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-24-004172",
            "action": "REASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORREASSIGNMENT",
                "applicationStatus": "PENDINGFORREASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "74db5b30-5830-497e-b56c-77344e1dc469",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ee021d53-78b9-4b73-a5b3-bd9f7f16c787",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "COMMENT",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ec32a3ab-4a50-4271-80d2-5190a53c4b71",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cdd962f0-6ec3-492d-a6a8-54cefa7a9984",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "REASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "Not able to do",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": [
                {
                    "id": 1602,
                    "userName": "QACSRGRO",
                    "name": "QACSRGRO",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8745",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Grievance Routing Officer",
                            "code": "GRO",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb"
                        },
                        {
                            "id": null,
                            "name": "Customer Support Representative",
                            "code": "CSR",
                            "tenantId": "pb"
                        },
                        {
                            "id": null,
                            "name": "Customer Support Representative",
                            "code": "CSR",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "eef8802e-45df-4f6f-9449-d9b0a21d615a"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "74db5b30-5830-497e-b56c-77344e1dc469",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "cdd962f0-6ec3-492d-a6a8-54cefa7a9984",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "REASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "ec32a3ab-4a50-4271-80d2-5190a53c4b71",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -17110738291,
            "businesssServiceSla": -17219731406,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1675075994688,
                "lastModifiedTime": 1675075994688
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "8535f246-44db-4ba2-a0e6-b7ee2fb8521d",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-30-004174",
            "action": "REASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORREASSIGNMENT",
                "applicationStatus": "PENDINGFORREASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "74db5b30-5830-497e-b56c-77344e1dc469",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ec32a3ab-4a50-4271-80d2-5190a53c4b71",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cdd962f0-6ec3-492d-a6a8-54cefa7a9984",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "REASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ee021d53-78b9-4b73-a5b3-bd9f7f16c787",
                        "tenantId": "pb",
                        "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "action": "COMMENT",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "Unable to resolve this",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": [
                {
                    "id": 1602,
                    "userName": "QACSRGRO",
                    "name": "QACSRGRO",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8745",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Grievance Routing Officer",
                            "code": "GRO",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb"
                        },
                        {
                            "id": null,
                            "name": "Customer Support Representative",
                            "code": "CSR",
                            "tenantId": "pb"
                        },
                        {
                            "id": null,
                            "name": "Customer Support Representative",
                            "code": "CSR",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "eef8802e-45df-4f6f-9449-d9b0a21d615a"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "74db5b30-5830-497e-b56c-77344e1dc469",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "cdd962f0-6ec3-492d-a6a8-54cefa7a9984",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "REASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "ec32a3ab-4a50-4271-80d2-5190a53c4b71",
                    "tenantId": "pb",
                    "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -17110775916,
            "businesssServiceSla": -16682483437,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1675075957063,
                "lastModifiedTime": 1675075957063
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "551f9c91-dfbd-4482-8f60-21ff9d850e8b",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-16-004165",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 12035,
                    "userName": "QAPGRLME",
                    "name": "LME",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7679",
                    "emailId": "t***@g*******m",
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -17379938092,
            "businesssServiceSla": -17900358626,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1674806794887,
                "lastModifiedTime": 1674806794887
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "2fc10279-6789-4913-a132-330db14f2dda",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-23-004171",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 12035,
                    "userName": "QAPGRLME",
                    "name": "LME",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7679",
                    "emailId": "t***@g*******m",
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -17701592768,
            "businesssServiceSla": -17269969195,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1674485140211,
                "lastModifiedTime": 1674485140211
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "cc88f8c6-4b00-4b91-984e-0f50d7ed46d8",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-16-004166",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 32563,
                    "userName": "QASV",
                    "name": "Supervisor",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8989",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Supervisor",
                            "code": "SUPERVISOR",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "8d1dfdc5-13e8-4800-89f9-de284089da9c"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -17728846154,
            "businesssServiceSla": -17884368394,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1674457886825,
                "lastModifiedTime": 1674457886825
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "6f35aaf8-856f-4fbf-b037-ac0fc0825908",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-12-004164",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -18671797872,
            "businesssServiceSla": -18240097872,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1673514935107,
                "lastModifiedTime": 1673514935107
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "b5491da7-2c55-448b-bda4-2d1382a75736",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-12-004163",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -18671834559,
            "businesssServiceSla": -18240134559,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1673514898420,
                "lastModifiedTime": 1673514898420
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "aa756bac-3b7a-41ed-ad50-fd60ab2cdac3",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-11-004162",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -18767478204,
            "businesssServiceSla": -18335778204,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1673419254775,
                "lastModifiedTime": 1673419254775
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "b192575f-0ce0-460a-ae52-a9a13732d291",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-09-004161",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12024,
                "userName": "QAPGRCSR",
                "name": "QA CSR",
                "type": "EMPLOYEE",
                "mobileNumber": "******9788",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Customer Support Representative",
                        "code": "CSR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c7f34f4b-baca-42ea-80a4-d81a781ae80e"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -18943249310,
            "businesssServiceSla": -18511549310,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "lastModifiedBy": "c7f34f4b-baca-42ea-80a4-d81a781ae80e",
                "createdTime": 1673243483669,
                "lastModifiedTime": 1673243483669
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "e93c24b2-075a-478e-8e67-98bbb0f21d1f",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-05-004160",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": [
                {
                    "id": "b5eb5483-a052-499c-b7e6-f39419465fb7",
                    "tenantId": "pb.amritsar",
                    "documentType": "PHOTO",
                    "fileStoreId": "a7f6f854-7fe7-448a-ad2a-599036b94877",
                    "documentUid": "",
                    "auditDetails": {
                        "createdBy": "ac5f3986-9748-4ab9-9897-1b510ae66515",
                        "lastModifiedBy": "ac5f3986-9748-4ab9-9897-1b510ae66515",
                        "createdTime": 1672911842551,
                        "lastModifiedTime": 1672911842551
                    }
                }
            ],
            "assigner": {
                "id": 77450,
                "userName": "9898765678",
                "name": "rushi",
                "type": "CITIZEN",
                "mobileNumber": "******5678",
                "emailId": "k******************@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "ac5f3986-9748-4ab9-9897-1b510ae66515"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -19274890428,
            "businesssServiceSla": -18843190428,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "ac5f3986-9748-4ab9-9897-1b510ae66515",
                "lastModifiedBy": "ac5f3986-9748-4ab9-9897-1b510ae66515",
                "createdTime": 1672911842551,
                "lastModifiedTime": 1672911842551
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3c6a0170-59fd-47ae-a10f-01d4cf0b483d",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-05-004159",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "resolved comlaints",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -19275015818,
            "businesssServiceSla": -18843449505,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1672911717161,
                "lastModifiedTime": 1672911717161
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "6eebf41e-a982-420d-ba61-ee92a5e594ca",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2023-01-05-004158",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "resolved",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -19275298380,
            "businesssServiceSla": -18843743107,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1672911434599,
                "lastModifiedTime": 1672911434599
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "98bd72a9-1846-4026-910c-61285d1f4ed1",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-30-004146",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "gafdsg?",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -19379458708,
            "businesssServiceSla": -21947508188,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1672807274271,
                "lastModifiedTime": 1672807274271
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "e34d2aa5-35b9-456b-ae66-15452bcfb82e",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-12-05-004150",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12120,
                "userName": "7878787878",
                "name": "Rahul",
                "type": "CITIZEN",
                "mobileNumber": "******7878",
                "emailId": "s**********@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "94511af9-c533-482d-8a4f-4845d2bc4ea8"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -21960869405,
            "businesssServiceSla": -21529169405,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "lastModifiedBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "createdTime": 1670225863574,
                "lastModifiedTime": 1670225863574
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "99eaf938-9626-4014-9143-2d0c7db0e668",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-12-05-004149",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12120,
                "userName": "7878787878",
                "name": "Rahul",
                "type": "CITIZEN",
                "mobileNumber": "******7878",
                "emailId": "s**********@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "94511af9-c533-482d-8a4f-4845d2bc4ea8"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -21961177324,
            "businesssServiceSla": -21529477324,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "lastModifiedBy": "94511af9-c533-482d-8a4f-4845d2bc4ea8",
                "createdTime": 1670225555655,
                "lastModifiedTime": 1670225555655
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "1678bd8e-2597-4fa4-b634-8b8bed539e7a",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-11-004140",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "ABC",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 3689,
                    "userName": "LME_DPT_3",
                    "name": "LME DPT Three",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7092",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "c9348d43-04af-4d12-83ee-e75ca6148679"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -21961755236,
            "businesssServiceSla": -23611436950,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1670224977743,
                "lastModifiedTime": 1670224977743
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "c97698b9-43e1-4ddf-bce4-2ab59e873c7e",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-12-05-004148",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -21962097835,
            "businesssServiceSla": -21530833415,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1670224635144,
                "lastModifiedTime": 1670224635144
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "3809b108-cc91-4a98-9614-790f2e5697d5",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-12-05-004147",
            "action": "APPLY",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGFORASSIGNMENT",
                "applicationStatus": "PENDINGFORASSIGNMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGN",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "ASSIGNEDBYAUTOESCALATION",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "REJECT",
                        "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "roles": [
                            "GRO",
                            "DGRO"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                        "tenantId": "pb",
                        "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "action": "COMMENT",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 26368,
                "userName": "8208110238",
                "name": "COMMON_OWNER",
                "type": "CITIZEN",
                "mobileNumber": "******0238",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "96679ee1-0206-4ea4-90ee-e2af102fab05"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGN",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "ASSIGNEDBYAUTOESCALATION",
                    "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                    "tenantId": "pb",
                    "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                    "action": "REJECT",
                    "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                    "roles": [
                        "GRO",
                        "DGRO"
                    ],
                    "active": null
                }
            ],
            "stateSla": -21967555334,
            "businesssServiceSla": -21535855334,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "96679ee1-0206-4ea4-90ee-e2af102fab05",
                "lastModifiedBy": "96679ee1-0206-4ea4-90ee-e2af102fab05",
                "createdTime": 1670219177645,
                "lastModifiedTime": 1670219177645
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "99406805-06d6-4e59-b3b0-5ade3f8726fc",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-30-004145",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 41370,
                "userName": "JK1",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******8888",
                "emailId": "D****@d*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "LOA Creator",
                        "code": "LOA_CREATOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "NoC counter employee",
                        "code": "NOC_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Finance Report View",
                        "code": "EGF_REPORT_VIEW",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Field Inspector",
                        "code": "BPA_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "EGF Bill Creator",
                        "code": "EGF_BILL_CREATOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PT Counter Employee",
                        "code": "PT_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Fire Noc Department Approver",
                        "code": "FIRE_NOC_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Counter Employee",
                        "code": "CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Admin of a ULB",
                        "code": "CITY_ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "WS Counter Employee",
                        "code": "WS_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Any User",
                        "code": "ANONYMUS",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Works Administrator",
                        "code": "WORKS_ADMINISTRATOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Property Tax Receipt Cancellator",
                        "code": "CR_PT",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Administrator",
                        "code": "FSM_ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.jalandhar"
                    },
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPAREG Employee",
                        "code": "BPAREG_EMPLOYEE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Commissioner",
                        "code": "COMMISSIONER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Creator",
                        "code": "TL_CREATOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "EGF Bill Approver",
                        "code": "EGF_BILL_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPAREG doc verifier",
                        "code": "BPAREG_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Structural Engineer",
                        "code": "BPA_STRUCTURALENGINEER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Redressal Officer",
                        "code": "RO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Collection Report Viewer",
                        "code": "COLL_REP_VIEW",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Super User",
                        "code": "SUPERUSER",
                        "tenantId": "pb"
                    },
                    {
                        "id": null,
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Universal Collection Employee",
                        "code": "UC_EMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Services verifier",
                        "code": "BPA_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PT Counter Approver",
                        "code": "PT_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "State Administrator",
                        "code": "STADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grievance Officer",
                        "code": "GO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Counter Employee",
                        "code": "SW_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Clerk",
                        "code": "SW_CLERK",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "WS Clerk",
                        "code": "WS_CLERK",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "NoC Doc Verifier",
                        "code": "NOC_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "WS Document Verifier",
                        "code": "WS_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Employee Report Viewer",
                        "code": "FSM_REPORT_VIEWER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "AssetCreator",
                        "code": "AssetCreator",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Document Verifier",
                        "code": "SW_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Architect",
                        "code": "BPA_ARCHITECT",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Approver",
                        "code": "TL_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Administrator",
                        "code": "PGR-ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Field Employee",
                        "code": "FEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PTIS Admin",
                        "code": "PTIS_ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA Supervisor",
                        "code": "BPA_SUPERVISOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Payment Collector",
                        "code": "FSM_COLLECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPAREG Approver",
                        "code": "BPAREG_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Employee Application Editor",
                        "code": "FSM_EDITOR_EMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL doc verifier",
                        "code": "TL_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Employee Application Viewer",
                        "code": "FSM_VIEW_EMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Employee",
                        "code": "EMPLOYEE",
                        "tenantId": "pb.nawanshahr"
                    },
                    {
                        "id": null,
                        "name": "PTIS Master",
                        "code": "PTIS_MASTER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Desluding Operator",
                        "code": "FSM_DSO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Admin",
                        "code": "TL_ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Field Inspector",
                        "code": "SW_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "NoC counter Approver",
                        "code": "NOC_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "HRMS Admin",
                        "code": "HRMS_ADMIN",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "WS Approver",
                        "code": "WS_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Super User",
                        "code": "SUPERUSER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "FSM Employee Dashboard Viewer",
                        "code": "FSM_DASHBOARD_VIEWER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "90fed312-d88a-4a8a-b411-fe682e5b28cd"
            },
            "assignes": [
                {
                    "id": 12035,
                    "userName": "QAPGRLME",
                    "name": "LME",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7679",
                    "emailId": "t***@g*******m",
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "Auto Escalation Employee",
                            "code": "AUTO_ESCALATE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22342788986,
            "businesssServiceSla": -21947548902,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1669843943993,
                "lastModifiedTime": 1669843943993
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "ee76d3b8-c129-4eae-9e20-5b076f9b7a64",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-01-004127",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 78165,
                    "userName": "EMP-107-002761",
                    "name": "nbnb",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******9875",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "07669966-f34d-408d-b738-93b13bf3cca0"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22485243798,
            "businesssServiceSla": -24470447485,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1669701489181,
                "lastModifiedTime": 1669701489181
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "6ffb1791-299b-417c-bf79-83c369444481",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-28-004144",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 78165,
                    "userName": "EMP-107-002761",
                    "name": "nbnb",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******9875",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "07669966-f34d-408d-b738-93b13bf3cca0"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22544020905,
            "businesssServiceSla": -22112371781,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1669642712074,
                "lastModifiedTime": 1669642712074
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "d7be1d0d-2379-4710-8948-5e8dbf7d59b5",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-02-004128",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 78157,
                    "userName": "EMP-107-002760",
                    "name": "naren",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8313",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "968ce86d-dd86-488e-a244-9d0260581284"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22544288777,
            "businesssServiceSla": -24351799581,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1669642444202,
                "lastModifiedTime": 1669642444202
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "96526727-7813-4cd0-919e-40b22dfb1384",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-03-004131",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 78157,
                    "userName": "EMP-107-002760",
                    "name": "naren",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8313",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "968ce86d-dd86-488e-a244-9d0260581284"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22544896079,
            "businesssServiceSla": -24291958588,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1669641836900,
                "lastModifiedTime": 1669641836900
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "9b83c9b9-d025-4de8-9c89-32c977e1ec46",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-11-07-004136",
            "action": "ASSIGN",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "PENDINGATLME",
                "applicationStatus": "PENDINGATLME",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "REASSIGN",
                        "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "FORWARD",
                        "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "COMMENT",
                        "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                        "tenantId": "pb",
                        "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "action": "RESOLVE",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "PGR_LME"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12034,
                "userName": "QAPGRGRO",
                "name": "GROUSER",
                "type": "EMPLOYEE",
                "mobileNumber": "******5650",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd"
            },
            "assignes": [
                {
                    "id": 78157,
                    "userName": "EMP-107-002760",
                    "name": "naren",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8313",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "Employee",
                            "code": "EMPLOYEE",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "PGR Last Mile Employee",
                            "code": "PGR_LME",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "968ce86d-dd86-488e-a244-9d0260581284"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                    "tenantId": "pb",
                    "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                    "action": "FORWARD",
                    "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22555937720,
            "businesssServiceSla": -23928948329,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "lastModifiedBy": "68ab310a-0d3b-411f-8295-a1e1bde9c1dd",
                "createdTime": 1669630795259,
                "lastModifiedTime": 1669630795259
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "318f93d6-74e2-4e1c-bda5-1be52ea73bd4",
            "tenantId": "pb.amritsar",
            "businessService": "PGR",
            "businessId": "PB-PGR-2022-10-31-004123",
            "action": "RESOLVE",
            "moduleName": "pgr-services",
            "state": {
                "auditDetails": null,
                "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                "tenantId": "pb",
                "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "sla": 300000,
                "state": "RESOLVED",
                "applicationStatus": "RESOLVED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "RATE",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "CFC",
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "CLOSERESOLVEDCOMPLAIN",
                        "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                        "roles": [
                            "AUTO_ESCALATE"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "COMMENT",
                        "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "roles": [
                            "CITIZEN"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                        "tenantId": "pb",
                        "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "action": "REOPEN",
                        "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "roles": [
                            "CFC",
                            "CSR",
                            "CITIZEN"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "?",
            "documents": null,
            "assigner": {
                "id": 12035,
                "userName": "QAPGRLME",
                "name": "LME",
                "type": "EMPLOYEE",
                "mobileNumber": "******7679",
                "emailId": "t***@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "PGR Last Mile Employee",
                        "code": "PGR_LME",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "c933f1bd-54fc-45e8-bdbe-05f943955659"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                    "tenantId": "pb",
                    "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                    "action": "CLOSERESOLVEDCOMPLAIN",
                    "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                    "roles": [
                        "AUTO_ESCALATE"
                    ],
                    "active": null
                }
            ],
            "stateSla": -22921835095,
            "businesssServiceSla": -24547637035,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "lastModifiedBy": "c933f1bd-54fc-45e8-bdbe-05f943955659",
                "createdTime": 1669264897884,
                "lastModifiedTime": 1669264897884
            },
            "rating": 0,
            "escalated": false
        }
    ],
    "totalCount": 0
}

module.exports = PGRProcess;