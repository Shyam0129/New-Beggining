from fastapi import APIRouter
from ..services.mcp_client import MCPClient

router = APIRouter()
mcp_client = MCPClient()

@router.post("/command")
async def forward_command(command: str):
    return await mcp_client.send_command(command)
