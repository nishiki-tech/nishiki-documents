# Notification Service

The error notification is a crucial feature of the reliable system.

![service-diagram](/img/aws/functions/notification-service.drawio.svg)

## Event Detail

Nishiki has a dedicated Event Bus for the notification.
It is *NotificationEventBus*.

To put the event to this event bus with the appropriate detail type, the event is sent to this service, then the information is sent to Discord.

Detail Type: *ErrorNotification*

Detail:

```json
{
    "status": string,
    "content": string
}
```

**status**: error status, like Info, Error.  
**content**: the notification detail, if it could be multiple lines, add "\n".
