from flask import Flask, request, jsonify
from tools.gmail_tool import GmailTool
from tools.pdf_tool import PDFTool
from tools.telegram_tool import TelegramTool

app = Flask(__name__)

tools = {
    'gmail': GmailTool(),
    'pdf': PDFTool(),
    'telegram': TelegramTool()
}

@app.route('/execute', methods=['POST'])
def execute_command():
    command = request.json.get('command')
    # Parse command and execute appropriate tool
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
