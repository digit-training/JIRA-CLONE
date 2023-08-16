const EDITRENEWALProcess = {
    "ResponseInfo": null,
    "ProcessInstances": [
        {
            "id": "851f00d2-a940-4413-8c3e-98fcf1797423",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-12-29-051402",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -19714300091,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1672300090010,
                "lastModifiedTime": 1672300090010
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "0a71880c-4b8b-4410-91d7-adefa6148651",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-28-051208",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -25041418979,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1666972971651,
                "lastModifiedTime": 1666972971651
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "a351a6e7-13a9-495e-bd39-84a318c6c0df",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-28-051209",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -25041418840,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1666972971446,
                "lastModifiedTime": 1666972971446
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "df70cdbe-caeb-4d02-b9d8-3ddeb9f16407",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-28-051207",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -25041419869,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1666972970321,
                "lastModifiedTime": 1666972970321
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "1f91b938-2b90-4391-8d15-ca5d34be223d",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-28-051196",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 16490,
                "userName": "7979797979",
                "name": "Debasish",
                "type": "CITIZEN",
                "mobileNumber": "******7979",
                "emailId": "g*******@g*******m",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "7d82122e-1e91-4f34-893f-d16963af217a"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -25052477354,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "7d82122e-1e91-4f34-893f-d16963af217a",
                "lastModifiedBy": "7d82122e-1e91-4f34-893f-d16963af217a",
                "createdTime": 1666971832574,
                "lastModifiedTime": 1666971832574
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "b15df9a4-7ca9-4291-a9c3-c96ca848ad24",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-19-051111",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "FIELDINSPECTION",
                "applicationStatus": "FIELDINSPECTION",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f59975f-37dd-4e90-8ea9-62d37cb541d8",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b78592f5-78be-4641-a98b-1a4a5f3f7f44",
                        "tenantId": "pb.amritsar",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "SENDBACK",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "5b129daa-4c72-49b8-a67c-8574ccd54fff",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "FORWARD",
                        "nextState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "aca8765b-12d7-4767-8375-7339b76b32f5",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12027,
                "userName": "QATLDV",
                "name": "TL Document Verifier",
                "type": "EMPLOYEE",
                "mobileNumber": "******9923",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "TL doc verifier",
                        "code": "TL_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "eed2d73e-b396-4248-a69a-53c62e1a53fa"
            },
            "assignes": [
                {
                    "id": 3998,
                    "userName": "EMPL",
                    "name": "test",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******8458",
                    "emailId": null,
                    "roles": [
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
                            "name": "TL Counter Employee",
                            "code": "TL_CEMP",
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
                            "name": "NoC counter Approver",
                            "code": "NOC_APPROVER",
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
                            "name": "TL Approver",
                            "code": "TL_APPROVER",
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
                            "name": "PT Field Inspector",
                            "code": "PT_FIELD_INSPECTOR",
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
                            "name": "NoC Doc Verifier",
                            "code": "NOC_DOC_VERIFIER",
                            "tenantId": "pb.amritsar"
                        },
                        {
                            "id": null,
                            "name": "TL doc verifier",
                            "code": "TL_DOC_VERIFIER",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "2689394a-b809-4c7c-9a15-7eeb63ea45c7"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "5b129daa-4c72-49b8-a67c-8574ccd54fff",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "FORWARD",
                    "nextState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4f59975f-37dd-4e90-8ea9-62d37cb541d8",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b78592f5-78be-4641-a98b-1a4a5f3f7f44",
                    "tenantId": "pb.amritsar",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "SENDBACK",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "aca8765b-12d7-4767-8375-7339b76b32f5",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -25821787644,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "eed2d73e-b396-4248-a69a-53c62e1a53fa",
                "lastModifiedBy": "eed2d73e-b396-4248-a69a-53c62e1a53fa",
                "createdTime": 1666193228664,
                "lastModifiedTime": 1666193228664
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f18b2e62-c491-4016-86d5-ea3902e7b8cb",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-01-051027",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -27382211533,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1664632178613,
                "lastModifiedTime": 1664632178613
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "66cf1427-2bb4-446d-be1d-b38855c15ff4",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-10-01-051026",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -27382213260,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1664632175850,
                "lastModifiedTime": 1664632175850
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f10f1a17-400f-4ce1-9e5e-1d92dc95b639",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-25-050649",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30588797780,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661425591330,
                "lastModifiedTime": 1661425591330
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "5be9a345-526f-426f-afa4-4a194655cb17",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-23-050605",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30764431801,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661249957309,
                "lastModifiedTime": 1661249957309
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f6daa80b-be76-44a6-9fa9-e8372f6c50d5",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-23-050604",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30764467550,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661249921560,
                "lastModifiedTime": 1661249921560
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "d16209ad-b653-4db4-b9b0-35e082fad2c2",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-23-050603",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30764509684,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661249879426,
                "lastModifiedTime": 1661249879426
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "23f9ec1c-34b2-4738-901c-0db34e698a7f",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-23-050602",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30764531948,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661249862166,
                "lastModifiedTime": 1661249862166
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "d8a06b04-55aa-41bc-89a5-5ace14e50683",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-23-050601",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30764766867,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661249627705,
                "lastModifiedTime": 1661249627705
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "32d36b7f-e258-43b0-9bca-a1ed0e801416",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-22-049407",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "PENDINGAPPROVAL",
                "applicationStatus": "PENDINGAPPROVAL",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "APPROVE",
                        "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                        "tenantId": "pb.amritsar",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "SENDBACK",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12038,
                "userName": "QATLFI",
                "name": "TL FI",
                "type": "EMPLOYEE",
                "mobileNumber": "******7670",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "99858bef-9fac-4c61-a750-459a9e81257b"
            },
            "assignes": [
                {
                    "id": 30630,
                    "userName": "EMP-107-002424",
                    "name": "AUTOEMPLOYEEUZtzqs",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******7563",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Approver",
                            "code": "TL_APPROVER",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "b613ce98-0e4e-48e2-aaaf-866a61b0de13"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "APPROVE",
                    "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                    "tenantId": "pb.amritsar",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "SENDBACK",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30841821962,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "99858bef-9fac-4c61-a750-459a9e81257b",
                "lastModifiedBy": "99858bef-9fac-4c61-a750-459a9e81257b",
                "createdTime": 1661229599620,
                "lastModifiedTime": 1661229599620
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "45b4fb81-58ca-4efc-ab6c-5d59fd42e8e3",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-22-049389",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30845258126,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661169130984,
                "lastModifiedTime": 1661170568620
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "7c224948-fa8d-4b3b-9d54-70f6cae60196",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-22-049390",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30845252414,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661169137163,
                "lastModifiedTime": 1661169137163
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "4601c6be-86a9-46ec-8f27-1d87bfe2c008",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-22-049392",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -30845252010,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1661169137100,
                "lastModifiedTime": 1661169137100
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "c34cad2d-c457-4f1c-b85c-e838a89d9e46",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-18-049345",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -31192285300,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1660822103810,
                "lastModifiedTime": 1660822103810
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "a7dc62aa-fdaa-4e3d-a3c1-f83c8be1bc60",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-17-049327",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -31275431547,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1660738957563,
                "lastModifiedTime": 1660738957563
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "24744b36-ee6f-4363-becd-b9e1fe9c8abd",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-08-08-048733",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "PENDINGAPPROVAL",
                "applicationStatus": "PENDINGAPPROVAL",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "APPROVE",
                        "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                        "tenantId": "pb.amritsar",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "SENDBACK",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12038,
                "userName": "QATLFI",
                "name": "TL FI",
                "type": "EMPLOYEE",
                "mobileNumber": "******7670",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "99858bef-9fac-4c61-a750-459a9e81257b"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "APPROVE",
                    "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                    "tenantId": "pb.amritsar",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "SENDBACK",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -32066539065,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "99858bef-9fac-4c61-a750-459a9e81257b",
                "lastModifiedBy": "99858bef-9fac-4c61-a750-459a9e81257b",
                "createdTime": 1659948033824,
                "lastModifiedTime": 1659948033824
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "8943540e-c688-4b5c-8ad9-9491a93d134a",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-06-17-048475",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -36552000323,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1655462389186,
                "lastModifiedTime": 1655462389186
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "211fdec6-d07f-49fc-84b6-1ceacdb54a78",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-06-17-048473",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -36552084224,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1655462304886,
                "lastModifiedTime": 1655462304886
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "4f27a92b-e8e9-47ff-bf05-087a398ab256",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-06-13-048441",
            "action": "APPROVE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "122c7560-f85e-414a-91ec-5235d02ececf",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "PENDINGPAYMENT",
                "applicationStatus": "PENDINGPAYMENT",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "96074ef1-bd4c-4434-8f98-1c44ee5f02cd",
                        "tenantId": "pb",
                        "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "action": "PAY",
                        "nextState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP",
                            "SYSTEM_PAYMENT"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "5830981a-98a5-498c-8cd1-c5230d1662a9",
                        "tenantId": "pb",
                        "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "action": "ADHOC",
                        "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "roles": [
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12032,
                "userName": "QATLA",
                "name": "Sham",
                "type": "EMPLOYEE",
                "mobileNumber": "******9934",
                "emailId": null,
                "roles": [
                    {
                        "id": null,
                        "name": "TL Approver",
                        "code": "TL_APPROVER",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4dc1010d-4b31-4b31-a596-cec2986ac04c"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "5830981a-98a5-498c-8cd1-c5230d1662a9",
                    "tenantId": "pb",
                    "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "action": "ADHOC",
                    "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "roles": [
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "96074ef1-bd4c-4434-8f98-1c44ee5f02cd",
                    "tenantId": "pb",
                    "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "action": "PAY",
                    "nextState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP",
                        "SYSTEM_PAYMENT"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -36888205089,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4dc1010d-4b31-4b31-a596-cec2986ac04c",
                "lastModifiedBy": "4dc1010d-4b31-4b31-a596-cec2986ac04c",
                "createdTime": 1655136801148,
                "lastModifiedTime": 1655136801148
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "663c9cd4-1c8a-459c-9823-fd93a38581f0",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-04-04-024505",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "PENDINGAPPROVAL",
                "applicationStatus": "PENDINGAPPROVAL",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "APPROVE",
                        "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                        "tenantId": "pb",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_APPROVER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                        "tenantId": "pb.amritsar",
                        "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "action": "SENDBACK",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_APPROVER"
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                    "id": 12032,
                    "userName": "QATLA",
                    "name": "Sham",
                    "type": "EMPLOYEE",
                    "mobileNumber": "******9934",
                    "emailId": null,
                    "roles": [
                        {
                            "id": null,
                            "name": "TL Approver",
                            "code": "TL_APPROVER",
                            "tenantId": "pb.amritsar"
                        }
                    ],
                    "tenantId": "pb.amritsar",
                    "uuid": "4dc1010d-4b31-4b31-a596-cec2986ac04c"
                }
            ],
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "APPROVE",
                    "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                    "tenantId": "pb",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                    "tenantId": "pb.amritsar",
                    "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "action": "SENDBACK",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_APPROVER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -42952065770,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1653547694330,
                "lastModifiedTime": 1653547694330
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "10f2184b-0f12-4223-8f96-b7c3877859b3",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-05-06-048316",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -40197689012,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1651816700747,
                "lastModifiedTime": 1651816700747
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "75e58b34-acaa-4fa1-8d52-0d693a471592",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-05-06-048313",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -40197850429,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1651816539294,
                "lastModifiedTime": 1651816539294
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "bc0b6ebc-ac6e-4ed9-aa24-b54b79370f52",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-05-06-048312",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -40197955579,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1651816433531,
                "lastModifiedTime": 1651816433531
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "f143b25a-3e0c-4bfd-867f-4cd4ffb1e96e",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-05-04-024681",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -40367094128,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1651647305904,
                "lastModifiedTime": 1651647305904
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "ca16bf43-8a5c-4e5f-8a7e-a6ed330e44f2",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-04-04-024504",
            "action": "INITIATE",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "INITIATED",
                "applicationStatus": "INITIATED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "INITIATE",
                        "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                        "tenantId": "pb",
                        "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "action": "APPLY",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
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
                        "name": "ULB Administrator",
                        "code": "PTADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "APPLY",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                    "tenantId": "pb",
                    "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "action": "INITIATE",
                    "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -42952093953,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "lastModifiedBy": "90fed312-d88a-4a8a-b411-fe682e5b28cd",
                "createdTime": 1649062295157,
                "lastModifiedTime": 1649062295157
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "db61325a-31d6-479c-ac59-00e01929fc61",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024480",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44055007993,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647959382050,
                "lastModifiedTime": 1647959382050
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "b5178506-9ebb-4725-841b-b2c48d00b800",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024464",
            "action": "FORWARD",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "FIELDINSPECTION",
                "applicationStatus": "FIELDINSPECTION",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "4f59975f-37dd-4e90-8ea9-62d37cb541d8",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "aca8765b-12d7-4767-8375-7339b76b32f5",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "5b129daa-4c72-49b8-a67c-8574ccd54fff",
                        "tenantId": "pb",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "FORWARD",
                        "nextState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b78592f5-78be-4641-a98b-1a4a5f3f7f44",
                        "tenantId": "pb.amritsar",
                        "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "action": "SENDBACK",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "TL_FIELD_INSPECTOR"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "5b129daa-4c72-49b8-a67c-8574ccd54fff",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "FORWARD",
                    "nextState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "4f59975f-37dd-4e90-8ea9-62d37cb541d8",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b78592f5-78be-4641-a98b-1a4a5f3f7f44",
                    "tenantId": "pb.amritsar",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "SENDBACK",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "aca8765b-12d7-4767-8375-7339b76b32f5",
                    "tenantId": "pb",
                    "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_FIELD_INSPECTOR"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44090997385,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647923424000,
                "lastModifiedTime": 1647923424000
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "41afa826-6606-4947-b268-a4b9aa383646",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024461",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44091903195,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647922486507,
                "lastModifiedTime": 1647922486507
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "49ecf41b-ad35-4339-80b4-ea5f9e69bff8",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024460",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44091946907,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647922442841,
                "lastModifiedTime": 1647922442841
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "16b0272a-e879-4082-b375-5050bdcdf50d",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024459",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44092098461,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647922291357,
                "lastModifiedTime": 1647922291357
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "316c749d-0e64-472a-b3f0-047bb13e8504",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024458",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44092137659,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647922251977,
                "lastModifiedTime": 1647922251977
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "36f00b3f-ec7a-4266-b6b6-a12a3f958a5e",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-22-024457",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44092199040,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647922190745,
                "lastModifiedTime": 1647922190745
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "c18d1dbc-fe37-46c4-86dd-2e3c851ca6fa",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024453",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44142054713,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647872335081,
                "lastModifiedTime": 1647872335081
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "163dd219-54dd-48ad-bcac-10d1b24cf052",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024452",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44142238860,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647872150827,
                "lastModifiedTime": 1647872150827
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "97657456-9e70-46ce-8dff-f80a27a572df",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024451",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44143953243,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647870436631,
                "lastModifiedTime": 1647870436631
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "70a3804b-e5c9-49b6-88e8-88c23bec1b42",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024450",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44144044719,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647870345041,
                "lastModifiedTime": 1647870345041
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "bf6ab471-09b8-4cc8-9940-45328d0eb04b",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024449",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145112429,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647869277211,
                "lastModifiedTime": 1647869277211
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "40d7c9dd-b9bc-4da4-90e4-96fc90e10b8e",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024448",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145175942,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647869214178,
                "lastModifiedTime": 1647869214178
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "96ab9355-14db-476b-955d-2e62dd89142e",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024447",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145268583,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647869149749,
                "lastModifiedTime": 1647869149749
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "8aaa83ce-a616-44a9-926f-229c8f13fc19",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024446",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145341539,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647869048094,
                "lastModifiedTime": 1647869048094
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "71c46cfe-5e37-434e-a957-186445a2e448",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024444",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145459569,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647868930509,
                "lastModifiedTime": 1647868930509
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "65e574fc-05da-4044-b105-51702368da5c",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024443",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44145491998,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647868897726,
                "lastModifiedTime": 1647868897726
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "39d64c32-33c2-475c-ae09-5ccb0f3f620b",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024441",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44150372638,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647864017689,
                "lastModifiedTime": 1647864017689
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "d22e36c7-92d2-4c6d-b0f6-ad55e1353839",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024440",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44150415957,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647863974015,
                "lastModifiedTime": 1647863974015
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "aa21118a-82ce-4e98-b6af-a30c77201bd8",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024439",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44150456688,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647863933313,
                "lastModifiedTime": 1647863933313
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "0e719dac-17d5-4f04-8424-b97e1277d4f1",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024438",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12006,
                "userName": "SEMP",
                "name": "Srish",
                "type": "EMPLOYEE",
                "mobileNumber": "******4765",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "NoC counter employee",
                        "code": "NOC_CEMP",
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
                        "name": "PT Counter Employee",
                        "code": "PT_CEMP",
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
                        "name": "Abstract Estimate Creator",
                        "code": "AE_CREATOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
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
                        "name": "Airport authority Approver",
                        "code": "AIRPORT_AUTHORITY_APPROVER",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "SW Counter Employee",
                        "code": "SW_CEMP",
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
                        "name": "SW Clerk",
                        "code": "SW_CLERK",
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
                        "name": "WS Clerk",
                        "code": "WS_CLERK",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Anonymous User",
                        "code": "ANONYMOUS",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
                        "tenantId": "pb"
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "TL doc verifier",
                        "code": "TL_DOC_VERIFIER",
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
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "864e6c10-7be8-4479-b3ad-6ffbb57ffea5"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44155366846,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "864e6c10-7be8-4479-b3ad-6ffbb57ffea5",
                "lastModifiedBy": "864e6c10-7be8-4479-b3ad-6ffbb57ffea5",
                "createdTime": 1647859022947,
                "lastModifiedTime": 1647859022947
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "ba722700-cacc-4a9d-a746-089ed03a720f",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024435",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44167168348,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647847221749,
                "lastModifiedTime": 1647847221749
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "ce2db69d-3f9f-4d34-9397-c8e3f1ded30d",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024434",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44167202639,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647847187274,
                "lastModifiedTime": 1647847187274
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "1ee59d41-1e03-41d5-8837-4572c0825c39",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-03-21-024433",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12579,
                "userName": "JA",
                "name": "Jagan",
                "type": "EMPLOYEE",
                "mobileNumber": "******1026",
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
                        "name": "Grievance Routing Officer",
                        "code": "GRO",
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
                        "name": "BPA Builder",
                        "code": "BPA_BUILDER",
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
                        "name": "AssetReportViewer",
                        "code": "AssetReportViewer",
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
                        "name": "TL Field Inspector",
                        "code": "TL_FIELD_INSPECTOR",
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
                        "name": "BPA Services Approver",
                        "code": "BPA_APPROVER",
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
                        "name": "PT Field Inspector",
                        "code": "PT_FIELD_INSPECTOR",
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
                        "name": "FSM Driver",
                        "code": "FSM_DRIVER",
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
                        "name": "WS Field Inspector",
                        "code": "WS_FIELD_INSPECTOR",
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
                        "name": "PT Doc Verifier",
                        "code": "PT_DOC_VERIFIER",
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
                        "name": "Employee",
                        "code": "EMPLOYEE",
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
                        "name": "BPA Engineer",
                        "code": "BPA_ENGINEER",
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
                        "name": "FSM FSTP Opperator",
                        "code": "FSM_EMP_FSTPO",
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
                        "name": "State Administrator",
                        "code": "STADMIN",
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
                        "name": "NoC Field Inpector",
                        "code": "NOC_FIELD_INSPECTOR",
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
                        "name": "FSM Employee Application Creator",
                        "code": "FSM_CREATOR_EMP",
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
                        "name": "Auto Escalation Employee",
                        "code": "AUTO_ESCALATE",
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
                        "name": "BPA Town Planner",
                        "code": "BPA_TOWNPLANNER",
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
                        "name": "BPA NOC Verifier",
                        "code": "BPA_NOC_VERIFIER",
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
                        "name": "System user",
                        "code": "SYSTEM",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "SW Approver",
                        "code": "SW_APPROVER",
                        "tenantId": "pb.amritsar"
                    },
                    {
                        "id": null,
                        "name": "Grivance Administrator",
                        "code": "GA",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "746412f0-93cc-4da2-8aff-33301aad92fc"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -44167295943,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "lastModifiedBy": "746412f0-93cc-4da2-8aff-33301aad92fc",
                "createdTime": 1647847094333,
                "lastModifiedTime": 1647847094333
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "12466ab8-5264-426e-a742-a49cd57354d3",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-26-022615",
            "action": "RESUBMIT",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46120373710,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1645894452702,
                "lastModifiedTime": 1645894452702
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "c7e1ae9f-472f-49f1-b1f0-446c2de94d73",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-26-022611",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46121343737,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1645893045936,
                "lastModifiedTime": 1645893045936
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "0c889d6c-9df9-4f25-922c-424a7820ac1b",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-26-022608",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 12037,
                "userName": "QATLCE",
                "name": "TL Cemp",
                "type": "EMPLOYEE",
                "mobileNumber": "******7568",
                "emailId": "k*********@d*********m",
                "roles": [
                    {
                        "id": null,
                        "name": "TL Counter Employee",
                        "code": "TL_CEMP",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "4d84cae1-edc5-4654-9dec-31f445d3bf17"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46195284880,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "lastModifiedBy": "4d84cae1-edc5-4654-9dec-31f445d3bf17",
                "createdTime": 1645819104739,
                "lastModifiedTime": 1645819104739
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "47a45a00-30bf-4710-9b18-e74897f00da4",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-25-018937",
            "action": "SENDBACKTOCITIZEN",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "CITIZENACTIONREQUIRED",
                "applicationStatus": "CITIZENACTIONREQUIRED",
                "docUploadRequired": false,
                "isStartState": false,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "f399f03e-1955-4ead-82ae-68b5fb60d2c6",
                        "tenantId": "pb",
                        "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "action": "RESUBMIT",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "TL_CEMP"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "a56892b2-72a7-46a4-844d-13e74b15f759",
                        "tenantId": "pb",
                        "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "action": "FORWARD",
                        "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                        "roles": [
                            "CITIZEN",
                            "TL_CEMP"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": "",
            "documents": null,
            "assigner": {
                "id": 12027,
                "userName": "QATLDV",
                "name": "TL Document Verifier",
                "type": "EMPLOYEE",
                "mobileNumber": "******9923",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "TL doc verifier",
                        "code": "TL_DOC_VERIFIER",
                        "tenantId": "pb.amritsar"
                    }
                ],
                "tenantId": "pb.amritsar",
                "uuid": "eed2d73e-b396-4248-a69a-53c62e1a53fa"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "a56892b2-72a7-46a4-844d-13e74b15f759",
                    "tenantId": "pb",
                    "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "action": "FORWARD",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "CITIZEN",
                        "TL_CEMP"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "f399f03e-1955-4ead-82ae-68b5fb60d2c6",
                    "tenantId": "pb",
                    "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "action": "RESUBMIT",
                    "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                    "roles": [
                        "TL_CEMP"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46208157472,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "eed2d73e-b396-4248-a69a-53c62e1a53fa",
                "lastModifiedBy": "eed2d73e-b396-4248-a69a-53c62e1a53fa",
                "createdTime": 1645807513428,
                "lastModifiedTime": 1645807513428
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "cef6d9fa-b22c-4386-a911-4bf17b05d1b9",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-25-018936",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 21966,
                "userName": "9111111111",
                "name": "beena",
                "type": "CITIZEN",
                "mobileNumber": "******1111",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "10aeaad3-b531-40d4-b47b-7554df6debcf"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46208343159,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "10aeaad3-b531-40d4-b47b-7554df6debcf",
                "lastModifiedBy": "10aeaad3-b531-40d4-b47b-7554df6debcf",
                "createdTime": 1645806046465,
                "lastModifiedTime": 1645806046465
            },
            "rating": 0,
            "escalated": false
        },
        {
            "id": "29a28154-7e24-4f7f-8242-457100a7e8ee",
            "tenantId": "pb.amritsar",
            "businessService": "EDITRENEWAL",
            "businessId": "PB-TL-2022-02-25-018935",
            "action": "APPLY",
            "moduleName": "tl-services",
            "state": {
                "auditDetails": null,
                "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                "tenantId": "pb",
                "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "sla": null,
                "state": "APPLIED",
                "applicationStatus": "APPLIED",
                "docUploadRequired": false,
                "isStartState": true,
                "isTerminateState": false,
                "isStateUpdatable": null,
                "actions": [
                    {
                        "auditDetails": null,
                        "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "FORWARD",
                        "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "REJECT",
                        "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    },
                    {
                        "auditDetails": null,
                        "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                        "tenantId": "pb",
                        "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                        "action": "SENDBACKTOCITIZEN",
                        "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "roles": [
                            "TL_DOC_VERIFIER"
                        ],
                        "active": null
                    }
                ]
            },
            "comment": null,
            "documents": null,
            "assigner": {
                "id": 21966,
                "userName": "9111111111",
                "name": "beena",
                "type": "CITIZEN",
                "mobileNumber": "******1111",
                "emailId": "",
                "roles": [
                    {
                        "id": null,
                        "name": "Citizen",
                        "code": "CITIZEN",
                        "tenantId": "pb"
                    }
                ],
                "tenantId": "pb",
                "uuid": "10aeaad3-b531-40d4-b47b-7554df6debcf"
            },
            "assignes": null,
            "nextActions": [
                {
                    "auditDetails": null,
                    "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "FORWARD",
                    "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "REJECT",
                    "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                },
                {
                    "auditDetails": null,
                    "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                    "tenantId": "pb",
                    "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                    "action": "SENDBACKTOCITIZEN",
                    "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                    "roles": [
                        "TL_DOC_VERIFIER"
                    ],
                    "active": null
                }
            ],
            "stateSla": null,
            "businesssServiceSla": -46208520867,
            "previousStatus": null,
            "entity": null,
            "auditDetails": {
                "createdBy": "10aeaad3-b531-40d4-b47b-7554df6debcf",
                "lastModifiedBy": "10aeaad3-b531-40d4-b47b-7554df6debcf",
                "createdTime": 1645805868976,
                "lastModifiedTime": 1645805868976
            },
            "rating": 0,
            "escalated": false
        }
    ],
    "totalCount": 0
}
module.exports = EDITRENEWALProcess;