# Overview

This system is hosted on the AWS.

![aws-architecture](/img/aws/structure.drawio.svg)

We have deployed these services using [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html), allowing us to manage the infrastructure by code.
The code is hosted on [the cdk directory within the backend repository.](https://github.com/nishiki-tech/nishiki-backend/tree/develop/cdk)

## Using Services

Cognito [(Official)](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

The user information is managed by this service.

![Cognito](/img/aws/resources/Arch_Amazon-Cognito_48.svg)

API Gateway [(Official)](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)

[The API uses the Cognito as an authorizer.](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html)
This means that the client, requesting access to this API, must be authorized by the Cognito.

![API Gateway](/img/aws/resources/Arch_Amazon-API-Gateway_48.svg)

Lambda [Official](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

This system employs multiple lambdas.
The main application, literary named the main function, handles the primary logic.
Additionally, there is a helper function responsible for initial processing when registering user information.

![Lambda](/img/aws/resources/Arch_AWS-Lambda_48.svg)

DynamoDB [(Official)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

This system uses DynamoDB as a main DB. The detail is described [this page](/database).

![DynamoDB](/img/aws/resources/Arch_Amazon-DynamoDB_48.svg)

## Naming Convention

The Resource Name must follow following rule:

**{ resource-name }-{ stage }-{ resource type }**

For instance, if you need the DB named *nishiki-db* in the production environment, the resource name should be:

i.e.: **nishiki-db-prod-db**

### Case

There are two name in the AWS resources.
One is the logical name, another is the resource name.

**Logical Name**: PascalCase

**Resource Name**: kebab-case

The logical name is used in the CloudFormation template.
In the CloudFormation, it is used the CamelCase, therefore we need to match it for the sake of readability.

The resource name is used on the console.
In there, we need to search the resource.
To filter by the name of resources, using the kebab-case is desirable.

[The Construct ID](https://docs.aws.amazon.com/cdk/v2/guide/identifiers.html#identifiers_construct_ids), which must be defined in the CDK, turns into the logical name after the build process.
Therefor, the construct ID must be PascalCase.

### Stage Name 

| Stage Name | Meaning     |
|:-----------|:------------|
| dev        | development |
| prod       | production  |

## CKD Stack

In this system, there are two stacks, StaticAssetsStack and BackendStack.

### Static Asset Stack

This stack manages stateful assets such as the database, Cognito, and API Gateway.
Those resources are not subject to frequent updates and must be preserved from changes.
For these reasons, this stack is dedicated to managing stateful resources.

### Backend Stack

This stack is responsible for managing stateless resources like the Lambda function.
Unlike Static Asset, stateless resources do not need to be the same asset, ultimately, those can be destroyed and deployed with every update.

The Backend Stack can be automatically deployed through the CI/CD pipeline.
Whereas, the Static Assets should be deployed manually.
This is because there is a lower chance of changes, and it's crucial to preserve them from unintentional updates.
