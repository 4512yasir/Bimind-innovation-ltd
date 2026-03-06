import os
import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Allow requests from your Vercel frontend
CORS(
    app,
    resources={r"/api/*": {"origins": [
        "https://bimind-innovation-ltd.vercel.app"
    ]}},
    methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"]
)

# Extra headers for CORS (important for Vercel requests)
@app.after_request
def after_request(response):
    response.headers.add(
        "Access-Control-Allow-Origin",
        "https://bimind-innovation-ltd.vercel.app"
    )
    response.headers.add(
        "Access-Control-Allow-Headers",
        "Content-Type,Authorization"
    )
    response.headers.add(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS"
    )
    return response


# Email configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
TO_EMAIL = os.getenv("TO_EMAIL", SMTP_USER)
FROM_NAME = os.getenv("FROM_NAME", "Website Contact Form")


def send_email(name: str, email: str, message: str):
    if not SMTP_USER or not SMTP_PASS:
        raise RuntimeError("SMTP_USER or SMTP_PASS not configured")

    msg = EmailMessage()
    msg["Subject"] = f"New Contact Message from {name}"
    msg["From"] = f"{FROM_NAME} <{SMTP_USER}>"
    msg["To"] = TO_EMAIL
    msg["Reply-To"] = email

    body = f"""
You received a new message from your website contact form.

Name: {name}
Email: {email}

Message:
{message}
"""

    msg.set_content(body)

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login(SMTP_USER, SMTP_PASS)
        smtp.send_message(msg)


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True) or {}

    name = (data.get("user_name") or "").strip()
    email = (data.get("user_email") or "").strip()
    message = (data.get("message") or "").strip()

    # Basic validation
    if not name or not email or not message:
        return jsonify({"ok": False, "error": "Missing required fields"}), 400

    if "@" not in email or "." not in email:
        return jsonify({"ok": False, "error": "Invalid email address"}), 400

    if len(message) > 5000:
        return jsonify({"ok": False, "error": "Message too long"}), 400

    try:
        send_email(name, email, message)
        return jsonify({
            "ok": True,
            "message": "Message sent successfully"
        }), 200

    except Exception as e:
        print("EMAIL ERROR:", str(e))
        return jsonify({
            "ok": False,
            "error": "Failed to send email"
        }), 500


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"ok": True}), 200


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)