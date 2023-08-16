const dtrData = 
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
                "uuid": "ebc95611-dae9-40e4-b41f-425cc094947c",
                "businessService": "DTR",
                "business": "death-services",
                "businessServiceSla": 432000000,
                "states": [
                    {
                        "auditDetails": {
                            "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1680605252440,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "bf714a42-d8c1-47cc-a124-72c910a895e5",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
                        "sla": null,
                        "state": null,
                        "applicationStatus": null,
                        "docUploadRequired": true,
                        "isStartState": true,
                        "isTerminateState": false,
                        "isStateUpdatable": true,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1680605252440,
                                    "lastModifiedTime": 1681798424719
                                },
                                "uuid": "15413bd3-62e6-4e32-9b9b-631206db8483",
                                "tenantId": "pb.amritsar",
                                "currentState": "bf714a42-d8c1-47cc-a124-72c910a895e5",
                                "action": "APPLY",
                                "nextState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                                "roles": [
                                    "CITIZEN",
                                    "EMPLOYEE"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1680605252440,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
                        "sla": null,
                        "state": "APPLIED",
                        "applicationStatus": "APPLIED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1680605252440,
                                    "lastModifiedTime": 1681798424719
                                },
                                "uuid": "e44581c4-c221-4978-8e34-7e483ed7672f",
                                "tenantId": "pb.amritsar",
                                "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                                "action": "APPROVE",
                                "nextState": "61b187d3-09fb-4221-942c-c75dd938b203",
                                "roles": [
                                    "EMPLOYEE"
                                ],
                                "active": true
                            },
                            {
                                "auditDetails": {
                                    "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1680605252440,
                                    "lastModifiedTime": 1681798424719
                                },
                                "uuid": "4a239152-b979-4e3a-aa5d-2c1441f14ad6",
                                "tenantId": "pb.amritsar",
                                "currentState": "930c6d06-1efb-40dc-8d37-005bb29b2dbb",
                                "action": "REJECT",
                                "nextState": "a1e8b906-a90c-4428-85b8-6044f424afb7",
                                "roles": [
                                    "EMPLOYEE"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1680605252440,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "61b187d3-09fb-4221-942c-c75dd938b203",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
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
                                    "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1680605252440,
                                    "lastModifiedTime": 1681798424719
                                },
                                "uuid": "d96cb2d5-36ad-4716-b689-0bfe3f1bb782",
                                "tenantId": "pb.amritsar",
                                "currentState": "61b187d3-09fb-4221-942c-c75dd938b203",
                                "action": "PAY",
                                "nextState": "e03eee9b-d9f5-404e-a986-cc53b1d31f00",
                                "roles": [
                                    "SYSTEM_PAYMENT",
                                    "CITIZEN",
                                    "EMPLOYEE"
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "auditDetails": {
                            "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1680605252440,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "a1e8b906-a90c-4428-85b8-6044f424afb7",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
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
                            "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1680605252440,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "e03eee9b-d9f5-404e-a986-cc53b1d31f00",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
                        "sla": null,
                        "state": "REGISTRATIONCOMPLETED",
                        "applicationStatus": "REGISTRATIONCOMPLETED",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": true,
                        "isStateUpdatable": false,
                        "actions": null
                    },
                    {
                        "auditDetails": {
                            "createdBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                            "createdTime": 1681798424719,
                            "lastModifiedTime": 1681798424719
                        },
                        "uuid": "8b31805a-24f6-4ff4-8d89-0ee52eb56d20",
                        "tenantId": "pb.amritsar",
                        "businessServiceId": "ebc95611-dae9-40e4-b41f-425cc094947c",
                        "sla": null,
                        "state": "CITIZEN_FEEDBACK_PENDING",
                        "applicationStatus": "CITIZEN_FEEDBACK_PENDING",
                        "docUploadRequired": false,
                        "isStartState": false,
                        "isTerminateState": false,
                        "isStateUpdatable": false,
                        "actions": [
                            {
                                "auditDetails": {
                                    "createdBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                                    "createdTime": 1681798424719,
                                    "lastModifiedTime": 1681798424719
                                },
                                "uuid": "7b145fbe-5b38-4566-a07f-a96633f72dfe",
                                "tenantId": "pb.amritsar",
                                "currentState": "8b31805a-24f6-4ff4-8d89-0ee52eb56d20",
                                "action": "RATE",
                                "nextState": "a1e8b906-a90c-4428-85b8-6044f424afb7",
                                "roles": [
                                    "CITIZEN"
                                ],
                                "active": true
                            }
                        ]
                    }
                ],
                "auditDetails": {
                    "createdBy": "7a416a46-e009-4a98-88f4-c9ffc2e30798",
                    "lastModifiedBy": "d39db015-746a-40b7-95ab-6e8b36de40ff",
                    "createdTime": 1680605252440,
                    "lastModifiedTime": 1681798424719
                }
            }
        ]
    }
  
  module.exports = dtrData;