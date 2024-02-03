# User Initialize Function

**Function Resource Name**: user-initialize-function

Users register in this application through Cognito using Google Authenticator.
However, this system currently lacks a means to identify users.
Consequently, this system cannot distinguish between individual users even though foods and containers are managed by specific users within this system.
To address this issue, users must be registered with Nishiki, not just in the Cognito.

## Initialize User

When the user sign up for this system, it's required for the user to have a container and belong to a group.
Consequently, this system must create a new group and a new container for each new user during the sign-up process.

## How this function work

[This function hooks Cognito's sign-up event](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html), which provides the user's email address.
Leveraging this information, the function initiate the following process using the API of [main function's API](/system-architecture/functions/main-function).

1. [Register the user in Nishiki.](https://nishiki-tech.github.io/nishiki-documents/web-api/index.html#tag/user/paths/~1users/post)
2. [Create a new Group.](https://nishiki-tech.github.io/nishiki-documents/web-api/index.html#tag/user/paths/~1users/post)
3. [Create a new Container.](https://nishiki-tech.github.io/nishiki-documents/web-api/index.html#tag/container/paths/~1containers/post)
4. [Let the new user belong to the new Group which is created in 2. process.](https://nishiki-tech.github.io/nishiki-documents/web-api/index.html#tag/group/paths/~1groups~1%7BgroupId%7D~1users~1%7BuserId%7D/put)