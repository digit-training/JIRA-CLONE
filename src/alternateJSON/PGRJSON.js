const pgrData = 
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
                "uuid": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                "businessService": "PGR",
                "business": "pgr-services",
                "businessServiceSla": 432000000,
                "states": [
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "338e618d-1a6d-40b1-b360-8d178f7b9b97",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": null,
                        "state": null,
                        "applicationStatus": null,
                        "docUploadRequired": false,
                        "isStartState": true,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "f43cc0bb-de52-4ac4-94d2-8112382984c1",
                                "tenantId": "pb.amritsar",
                                "currentState": "338e618d-1a6d-40b1-b360-8d178f7b9b97",
                                "action": "APPLY",
                                "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "roles": [
                                    "CITIZEN",
                                    "CSR"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "PENDINGFORASSIGNMENT",
                        "applicationStatus": "PENDINGFORASSIGNMENT",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1626437145348,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "2ce1987d-d266-4070-8f6f-a33d2fdc4e96",
                                "tenantId": "pb.amritsar",
                                "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "action": "ASSIGNEDBYAUTOESCALATION",
                                "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "roles": [
                                    "AUTO_ESCALATE"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "7c81d179-ab77-4a19-9c24-2481afda47a5",
                                "tenantId": "pb.amritsar",
                                "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "action": "REJECT",
                                "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "roles": [
                                    "GRO",
                                    "DGRO"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "e2021a45-40cf-4cef-85d4-e2fce9a7f165",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1610519300099,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "4f4abb82-9100-49c5-843f-ccd188db29a4",
                                "tenantId": "pb.amritsar",
                                "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "action": "COMMENT",
                                "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "e514f1f5-a42a-48ca-973d-2064be205174",
                                "tenantId": "pb.amritsar",
                                "currentState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "action": "ASSIGN",
                                "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "roles": [
                                    "GRO",
                                    "DGRO"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "PENDINGFORREASSIGNMENT",
                        "applicationStatus": "PENDINGFORREASSIGNMENT",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "e2021a45-40cf-4cef-85d4-e2fce9a7f165",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1610519300099,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "ee021d53-78b9-4b73-a5b3-bd9f7f16c787",
                                "tenantId": "pb.amritsar",
                                "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "action": "COMMENT",
                                "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "cdd962f0-6ec3-492d-a6a8-54cefa7a9984",
                                "tenantId": "pb.amritsar",
                                "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "action": "REASSIGN",
                                "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "roles": [
                                    "GRO",
                                    "DGRO"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "ec32a3ab-4a50-4271-80d2-5190a53c4b71",
                                "tenantId": "pb.amritsar",
                                "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "action": "REJECT",
                                "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "roles": [
                                    "GRO",
                                    "DGRO"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1626437145348,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "74db5b30-5830-497e-b56c-77344e1dc469",
                                "tenantId": "pb.amritsar",
                                "currentState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "action": "ASSIGNEDBYAUTOESCALATION",
                                "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "roles": [
                                    "AUTO_ESCALATE"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "PENDINGATLME",
                        "applicationStatus": "PENDINGATLME",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "0d005cf0-1027-44b2-a96e-d6ad766f42fd",
                                "tenantId": "pb.amritsar",
                                "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "action": "RESOLVE",
                                "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "roles": [
                                    "PGR_LME"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "8ac1e3de-035d-453c-bcb8-f57c4a2921c9",
                                "tenantId": "pb.amritsar",
                                "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "action": "REASSIGN",
                                "nextState": "2cad96b7-b1d7-423c-93c5-a6fa247ff4b0",
                                "roles": [
                                    "PGR_LME"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "e2021a45-40cf-4cef-85d4-e2fce9a7f165",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1610519300099,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "3fc9ab6e-e32c-489d-91fe-7dd66675e306",
                                "tenantId": "pb.amritsar",
                                "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "action": "COMMENT",
                                "nextState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1626437145348,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "3c8cdb6f-86d9-439a-bca7-00017b5165a6",
                                "tenantId": "pb.amritsar",
                                "currentState": "6ccb1604-c4d2-46b3-98f9-ac4c259246dc",
                                "action": "FORWARD",
                                "nextState": "13535233-2870-4103-b920-ea5f53d6b313",
                                "roles": [
                                    "AUTO_ESCALATE"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "REJECTED",
                        "applicationStatus": "REJECTED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1626680325599,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "7c4b48f2-d631-411f-9349-97a708e8cd72",
                                "tenantId": "pb.amritsar",
                                "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "action": "CANCEL",
                                "nextState": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                                "roles": [
                                    "CITIZEN",
                                    "AUTO_ESCALATE"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "e2021a45-40cf-4cef-85d4-e2fce9a7f165",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1610519300099,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "b3559e6a-68c9-4091-8e17-958b4d3117d1",
                                "tenantId": "pb.amritsar",
                                "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "action": "COMMENT",
                                "nextState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "fdd5e85a-1a0b-4c25-827a-55956f23e8b9",
                                "tenantId": "pb.amritsar",
                                "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "action": "RATE",
                                "nextState": "2f5239cc-eb40-4f8c-8d14-f8946f0890ed",
                                "roles": [
                                    "CFC",
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "d9948bf3-0546-4832-88f0-45349e39d659",
                                "tenantId": "pb.amritsar",
                                "currentState": "e370f31f-c939-49a2-bd3e-e8ada514e8b9",
                                "action": "REOPEN",
                                "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "roles": [
                                    "CFC",
                                    "CSR",
                                    "CITIZEN"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "RESOLVED",
                        "applicationStatus": "RESOLVED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "cf209669-88e4-4da8-951b-a0173b3edcae",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1625746707222,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "a7848b2e-5a56-4c35-b25e-de7a50e6fa95",
                                "tenantId": "pb.amritsar",
                                "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "action": "CLOSERESOLVEDCOMPLAIN",
                                "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                                "roles": [
                                    "AUTO_ESCALATE"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "cd785440-bcf1-4f40-96bc-77520c0804eb",
                                "tenantId": "pb.amritsar",
                                "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "action": "RATE",
                                "nextState": "1927670e-3e1a-4513-b357-7d3805966437",
                                "roles": [
                                    "CFC",
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1596715146173,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "f5b4ff3b-ec5c-4faa-a732-fab30705afeb",
                                "tenantId": "pb.amritsar",
                                "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "action": "REOPEN",
                                "nextState": "9d2a8d25-6d0c-4ba1-a154-99c2bed148aa",
                                "roles": [
                                    "CFC",
                                    "CSR",
                                    "CITIZEN"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "e2021a45-40cf-4cef-85d4-e2fce9a7f165",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1610519300099,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "9f356f91-bc62-46af-ab6a-d48c2138dba0",
                                "tenantId": "pb.amritsar",
                                "currentState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "action": "COMMENT",
                                "nextState": "03ad7bc9-a7e6-44d7-9a38-31e17cffdde9",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "2f5239cc-eb40-4f8c-8d14-f8946f0890ed",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": null,
                        "state": "CLOSEDAFTERREJECTION",
                        "applicationStatus": "CLOSEDAFTERREJECTION",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1596715146173,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "1927670e-3e1a-4513-b357-7d3805966437",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": null,
                        "state": "CLOSEDAFTERRESOLUTION",
                        "applicationStatus": "CLOSEDAFTERRESOLUTION",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1626437145348,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "13535233-2870-4103-b920-ea5f53d6b313",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": 300000,
                        "state": "PENDINGATSUPERVISOR",
                        "applicationStatus": "PENDINGATSUPERVISOR",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                                    "createdTime": 1626437145348,
                                    "lastModifiedTime": 1626718339852
                                },
                                "uuid": "9e213599-2697-44e9-9cd9-4855613b72b2",
                                "tenantId": "pb.amritsar",
                                "currentState": "13535233-2870-4103-b920-ea5f53d6b313",
                                "action": "RESOLVEBYSUPERVISOR",
                                "nextState": "363db096-1ebe-42ce-8c7b-db7f11c2147e",
                                "roles": [
                                    "SUPERVISOR"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1626437145348,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "363db096-1ebe-42ce-8c7b-db7f11c2147e",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": null,
                        "state": "RESOLVEDBYSUPERVISOR",
                        "applicationStatus": "RESOLVEDBYSUPERVISOR",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                            "createdTime": 1626680325599,
                            "lastModifiedTime": 1626718339852
                        },
                        "uuid": "7fa9900e-e795-4dd8-9e0b-8f1d3ef1d530",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "5a881bb3-1d14-4260-bef6-efa72c38d934",
                        "sla": null,
                        "state": "CANCELLED",
                        "applicationStatus": "CANCELLED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    }
                ],
                "auditDetails": {
                    "createdBy": "2faa779f-3f3a-422f-9186-3b9fe6fa05c5",
                    "lastModifiedBy": "33fcada3-984b-4906-a528-7336e3f03af1",
                    "createdTime": 1596715146173,
                    "lastModifiedTime": 1626718339852
                }
            }
        ]
    }
  
  module.exports = pgrData;