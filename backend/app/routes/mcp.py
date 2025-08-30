from fastapi import APIRouter

router = APIRouter()

@router.get("/mcp")
async def mcp_status():
    return {"status": "MCP service ready"}
