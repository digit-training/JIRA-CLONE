const editRenewalData = 
    {
        "ResponseInfo": {
            "apiId": "Rainmaker",
            "ver": ".01",
            "ts": null,
            "resMsgId": "uief87324",
            "msgId": "20170310130900|en_IN",
            "status": "successful"
        },
        "BusinessServices": [
            {
                "tenantId": "pb.amritsar",
                "uuid": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                "businessService": "EDITRENEWAL",
                "business": "tl-services",
                "businessServiceSla": 172800000,
                "states": [
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "1d76a788-75b0-43bb-b799-13d849b4b8c8",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": null,
                        "applicationStatus": null,
                        "docUploadRequired": false,
                        "isStartState": true,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "db7b43bc-d791-4427-9ee0-fb8a6e114c92",
                                "tenantId": "pb.amritsar",
                                "currentState": "1d76a788-75b0-43bb-b799-13d849b4b8c8",
                                "action": "INITIATE",
                                "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                                "roles": [
                                    "CITIZEN",
                                    "TL_CEMP"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "INITIATED",
                        "applicationStatus": "INITIATED",
                        "docUploadRequired": false,
                        "isStartState": true,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "e32dbc0a-0011-4069-94bc-1ebe53bc0382",
                                "tenantId": "pb.amritsar",
                                "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                                "action": "APPLY",
                                "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                                "roles": [
                                    "CITIZEN",
                                    "TL_CEMP"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "6d7944cb-4501-4f16-9976-46083653b58b",
                                "tenantId": "pb.amritsar",
                                "currentState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                                "action": "INITIATE",
                                "nextState": "187b9296-6eda-4fed-9d4f-2098b7b22599",
                                "roles": [
                                    "CITIZEN",
                                    "TL_CEMP"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "863a076d-d298-4692-a457-7af526ccb750",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "APPLIED",
                        "applicationStatus": "APPLIED",
                        "docUploadRequired": false,
                        "isStartState": true,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "ea822865-1082-4d08-b062-3f045b5c3301",
                                "tenantId": "pb.amritsar",
                                "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                                "action": "FORWARD",
                                "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "roles": [
                                    "TL_DOC_VERIFIER"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "3240c1f3-7cfc-48a6-bdd1-4d838f7fe6a3",
                                "tenantId": "pb.amritsar",
                                "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                                "action": "REJECT",
                                "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                                "roles": [
                                    "TL_DOC_VERIFIER"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1627298916374,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "b68a3661-aebc-4e29-a452-cf8a7189a020",
                                "tenantId": "pb.amritsar",
                                "currentState": "863a076d-d298-4692-a457-7af526ccb750",
                                "action": "SENDBACKTOCITIZEN",
                                "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                                "roles": [
                                    "TL_DOC_VERIFIER"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "REJECTED",
                        "applicationStatus": "REJECTED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "FIELDINSPECTION",
                        "applicationStatus": "FIELDINSPECTION",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "4f59975f-37dd-4e90-8ea9-62d37cb541d8",
                                "tenantId": "pb.amritsar",
                                "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "action": "REJECT",
                                "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                                "roles": [
                                    "TL_FIELD_INSPECTOR"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1627298916374,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "aca8765b-12d7-4767-8375-7339b76b32f5",
                                "tenantId": "pb.amritsar",
                                "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "action": "SENDBACKTOCITIZEN",
                                "nextState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                                "roles": [
                                    "TL_FIELD_INSPECTOR"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "5b129daa-4c72-49b8-a67c-8574ccd54fff",
                                "tenantId": "pb.amritsar",
                                "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "action": "FORWARD",
                                "nextState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                                "roles": [
                                    "TL_FIELD_INSPECTOR"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1666096259179,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "b78592f5-78be-4641-a98b-1a4a5f3f7f44",
                                "tenantId": "pb.amritsar",
                                "currentState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "action": "SENDBACK",
                                "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                                "roles": [
                                    "TL_FIELD_INSPECTOR"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "PENDINGAPPROVAL",
                        "applicationStatus": "PENDINGAPPROVAL",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1666096122808,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "07b6376b-b0db-4ead-86d0-306c8c39d9b2",
                                "tenantId": "pb.amritsar",
                                "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                                "action": "SENDBACK",
                                "nextState": "0ec2bc75-930d-4c1b-8339-8b91f55f9e1e",
                                "roles": [
                                    "TL_APPROVER"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "4ae0131a-7110-421e-95aa-f360a1a51a72",
                                "tenantId": "pb.amritsar",
                                "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                                "action": "REJECT",
                                "nextState": "e996a83e-9a54-46a9-a2a5-c2ad1bb8b7d2",
                                "roles": [
                                    "TL_APPROVER"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "705a0a9d-ea72-4a2c-8508-c3d0a0300823",
                                "tenantId": "pb.amritsar",
                                "currentState": "c2ceca62-4063-4174-b043-85f746bfbc0c",
                                "action": "APPROVE",
                                "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                                "roles": [
                                    "TL_APPROVER"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "122c7560-f85e-414a-91ec-5235d02ececf",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "PENDINGPAYMENT",
                        "applicationStatus": "PENDINGPAYMENT",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "5830981a-98a5-498c-8cd1-c5230d1662a9",
                                "tenantId": "pb.amritsar",
                                "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                                "action": "ADHOC",
                                "nextState": "122c7560-f85e-414a-91ec-5235d02ececf",
                                "roles": [
                                    "TL_CEMP"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "96074ef1-bd4c-4434-8f98-1c44ee5f02cd",
                                "tenantId": "pb.amritsar",
                                "currentState": "122c7560-f85e-414a-91ec-5235d02ececf",
                                "action": "PAY",
                                "nextState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                                "roles": [
                                    "CITIZEN",
                                    "TL_CEMP",
                                    "SYSTEM_PAYMENT"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "APPROVED",
                        "applicationStatus": "APPROVED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1636610825125,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "252dbdb7-e5c0-4112-902f-60e583c6c557",
                                "tenantId": "pb.amritsar",
                                "currentState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                                "action": "EXPIRE",
                                "nextState": "20c0047d-88d5-434f-b8d7-4bfda50a8f4f",
                                "roles": [
                                    "SYSTEM"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1634126864139,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "0aaa1912-722a-4777-b77d-366cfb3fefdf",
                                "tenantId": "pb.amritsar",
                                "currentState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                                "action": "MANUALEXPIRE",
                                "nextState": "252f00b0-5c52-4b3b-80d9-984d46d6f75f",
                                "roles": [
                                    "TL_APPROVER"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1581335442684,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "ef446c27-5587-4d63-b6ed-b7e2d2e3718b",
                                "tenantId": "pb.amritsar",
                                "currentState": "916e55d4-4f5c-4340-99f3-dfda0230dcd0",
                                "action": "CANCEL",
                                "nextState": "cc980d48-831e-4c61-b439-c065b6294f66",
                                "roles": [
                                    "TL_APPROVER"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1581335442684,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "cc980d48-831e-4c61-b439-c065b6294f66",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "CANCELLED",
                        "applicationStatus": "CANCELLED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1627298916374,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "CITIZENACTIONREQUIRED",
                        "applicationStatus": "CITIZENACTIONREQUIRED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1627298916374,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "a56892b2-72a7-46a4-844d-13e74b15f759",
                                "tenantId": "pb.amritsar",
                                "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                                "action": "FORWARD",
                                "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                                "roles": [
                                    "CITIZEN",
                                    "TL_CEMP"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1627298916374,
                                    "lastModifiedTime": 1666096259179
                                },
                                "uuid": "f399f03e-1955-4ead-82ae-68b5fb60d2c6",
                                "tenantId": "pb.amritsar",
                                "currentState": "37683c43-08a6-4e6e-a70a-c26ee3a3b85b",
                                "action": "RESUBMIT",
                                "nextState": "863a076d-d298-4692-a457-7af526ccb750",
                                "roles": [
                                    "TL_CEMP"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1634126864139,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "252f00b0-5c52-4b3b-80d9-984d46d6f75f",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "MANUALEXPIRED",
                        "applicationStatus": "MANUALEXPIRED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1636610825125,
                            "lastModifiedTime": 1666096259179
                        },
                        "uuid": "20c0047d-88d5-434f-b8d7-4bfda50a8f4f",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "8f52a4f1-aa3e-4032-9f5e-bd4a794003fd",
                        "sla": null,
                        "state": "EXPIRED",
                        "applicationStatus": "EXPIRED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    }
                ],
                "auditDetails": {
                    "createdBy": "f6b0e1cf-5764-4570-9a95-5051d41ef468",
                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                    "createdTime": 1581335442684,
                    "lastModifiedTime": 1666096259179
                }
            }
        ]
    }
  
  module.exports = editRenewalData;