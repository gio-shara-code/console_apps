from enums.process import Process
from config import twilio
from twilio.rest import Client


def send_password(to: str, password: str) -> Process:
    client = Client(twilio.config["account_sid"], twilio.config["auth_token"])
    try:
        client.messages.create(
            to=to,
            from_=twilio.config["phone_number"],
            body=f'Your password is: {password}')
    except:
        return Process.FAILED
    return Process.SUCCEEDED
