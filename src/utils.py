# src/utils.py
import os
import logging

def setup_logging():
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(message)s",
        level=logging.INFO
    )
    return logging.getLogger(__name__)

def ensure_dir(path: str):
    os.makedirs(path, exist_ok=True)