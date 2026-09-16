import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sys
import json

def send_email(data_json_str):
    try:
        data = json.loads(data_json_str)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        sys.exit(1)
        
    sender_email = "gargatharv2010@gmail.com"
    sender_password = "AZUREgargatharv2010@gmail.com"
    receiver_email = "gargatharv2010@gmail.com"
    
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"New Styling Enquiry: {data.get('name', 'Unknown')}"
    
    # Format the body
    body = f"""
    New Styling Enquiry Received!
    
    --- CONTACT DETAILS ---
    Name:  {data.get('name', '')}
    Email: {data.get('email', '')}
    Phone: {data.get('phone', '')}
    
    --- STYLING DETAILS ---
    Who:             {data.get('who', '')}
    Looking For:     {', '.join(data.get('lookingFor', []))}
    Style Direction: {data.get('styleDirection', '')}
    
    --- WEDDING DETAILS ---
    Date:      {data.get('date', '')}
    Location:  {data.get('location', '')}
    Functions: {data.get('functions', '')}
    
    --- PREFERENCES ---
    Colors:      {data.get('colors', '')}
    Inspiration: {data.get('inspiration', '')}
    Additional:  {data.get('additional', '')}
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        # Connect to Gmail's SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print("Email sent successfully")
    except Exception as e:
        print(f"Error sending email: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        send_email(sys.argv[1])
    else:
        print("No data provided")
        sys.exit(1)
