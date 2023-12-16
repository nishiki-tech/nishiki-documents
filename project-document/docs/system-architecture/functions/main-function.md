# Main function

**Function resource name**: nishiki-main-function

This function has the prime role.
Fundamentally, all feature of this system is managed in this function.

![main-function](/img/aws/functions/main-function.drawio.svg)

## Interfaces

This function has two interfaces.

One is the API Gateway interface.
It is tightly linked to the API Gateway through the [Lambda Proxy Integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html).
To invoke the main function via this interface, you need to make a call through the API Gateway.

Another interface is [the function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html).
This function accepts HTTP request.
The access is limited by [the AWS IAM](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html#urls-auth-iam)
It is designed for internal use only, and we have no plans to expose this URL outside of this system.
