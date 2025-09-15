# src/model_training.py
from sklearn.pipeline import Pipeline
from sklearn.ensemble import VotingClassifier, RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score, classification_report
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from config.config import XGB_PARAMS, SEED, LightGBM_PARAMS, RandomForest_PARAMS
from src.utils import setup_logging

logger = setup_logging()

def build_ensemble_model():
    logger.info("Building Ensemble Model (XGB + LGBM + RF)")

    xgb = XGBClassifier(**XGB_PARAMS)
    lgb = LGBMClassifier(**LightGBM_PARAMS)
    rf = RandomForestClassifier(**RandomForest_PARAMS)

    ensemble = VotingClassifier(
        estimators=[
            ("xgb", xgb),
            ("lgb", lgb),
            ("rf", rf),
        ],
        voting="soft"  # soft = probability averaging
    )

    model = Pipeline([
        ("clf", ensemble)
    ])
    return model

def train_model(model, X_train, y_train) -> Pipeline:
    logger.info("Training ensemble model...")
    model.fit(X_train, y_train)
    return model

def evaluate_model(model, X_test, y_test) -> tuple:
    logger.info("Evaluating ensemble model...")
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred, average="weighted")
    logger.info(f"Accuracy: {acc:.3f}, F1: {f1:.3f}")
    print(classification_report(y_test, y_pred))
    return acc, f1