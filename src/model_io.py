# src/model_io.py
import joblib
from src.utils import setup_logging

logger = setup_logging()

def save_model(model, path="models/model.pkl"):
    logger.info(f"Saving model to {path}")
    joblib.dump(model, path)

def load_model(path="models/model.pkl"):
    logger.info(f"Loading model from {path}")
    return joblib.load(path)