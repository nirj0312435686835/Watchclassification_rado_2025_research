from fastapi import APIRouter, HTTPException
from sqlalchemy.exc import SQLAlchemyError

from app.db.session import check_database_connection

router = APIRouter(tags=["health"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@router.get("/ready")
def ready() -> dict[str, str]:
    try:
        check_database_connection()
    except SQLAlchemyError as exc:
        raise HTTPException(status_code=503, detail="Database unavailable") from exc
    return {"status": "ready", "database": "connected"}
