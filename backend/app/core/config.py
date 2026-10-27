from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    database_url: str
    cors_origins: list[str] = ["http://localhost"]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
