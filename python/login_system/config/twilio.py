import os
from dotenv import load_dotenv
load_dotenv()

config = {
    "account_sid": os.environ.get('twilio_account_sid'),
    "auth_token": os.environ.get('twilio_auth_token'),
    "phone_number": os.environ.get('twilio_phone_number')
}
