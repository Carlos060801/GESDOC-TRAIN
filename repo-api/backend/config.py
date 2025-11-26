from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:1234@localhost:5432/gesdoc_train")
JWT_SECRET = os.getenv("JWT_SECRET", "GESDOC_TRAIN_SECRET_2025")
JWT_ALGORITHM = "HS256"
