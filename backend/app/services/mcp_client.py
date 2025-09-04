import aiohttp

class MCPClient:
    def __init__(self):
        self.base_url = "http://mcp-server:5000"

    async def send_command(self, command: str):
        async with aiohttp.ClientSession() as session:
            async with session.post(f"{self.base_url}/execute", json={"command": command}) as response:
                return await response.json()
