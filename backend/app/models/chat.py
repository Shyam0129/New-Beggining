from pydantic import BaseModel
from typing import Optional

class Message(BaseModel):
    content: str
    sender: str
