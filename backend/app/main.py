from fastapi import FastAPI, WebSocket
from app.routes import chat, mcp

app = FastAPI(title="MCP Chat Backend")

# Include routes
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(mcp.router, prefix="/mcp", tags=["MCP"])

@app.get("/")
def root():
    return {"message": "MCP Chat Backend is running"}
