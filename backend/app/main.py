from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.health import router as health_router
from app.core.config import settings

app = FastAPI(
    title="Fulda ReUse Market API",
    description="API for the Fulda ReUse Market student project.",
    version="0.1.0",
    docs_url="/api/docs" if settings.app_env != "production" else None,
    redoc_url=None,
)

if settings.cors_origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=False,
        allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
        allow_headers=["Content-Type", "Authorization"],
    )

app.include_router(health_router, prefix="/api/v1")


@app.get("/", include_in_schema=False)
def root() -> dict[str, str]:
    return {"name": "Fulda ReUse Market API"}
