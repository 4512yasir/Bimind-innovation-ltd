import os
import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)

# CORS configuration for your Vercel frontend
FRONTEND_URL = "https://bimind-innovation-ltd.vercel.app"
CORS(
    app,
    resources={r"/api/*": {"origins": [FRONTEND_URL]}},
    methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

# Add headers to all responses (extra safety for Vercel)
@app.after_request
def add_cors_headers(response):
    response.headers.add("Access-Control-Allow-Origin", FRONTEND_URL)
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    return response

# Email configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
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
    msg.set_content(f"""
You received a new message from your website contact form.

Name: {name}
Email: {email}

Message:
{message}
""")

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login(SMTP_USER, SMTP_PASS)
        smtp.send_message(msg)

# Preflight OPTIONS route for /api/contact
@app.route("/api/contact", methods=["OPTIONS"])
def contact_options():
    return jsonify({"ok": True}), 200

# POST route to handle contact form submissions
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
        return jsonify({"ok": True, "message": "Message sent successfully"}), 200
    except Exception as e:
        print("EMAIL ERROR:", str(e))
        return jsonify({"ok": False, "error": "Failed to send email"}), 500

# Health check endpoint
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"ok": True}), 200

# Run locally
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)