
DATA_PATH = "data/raw/water_pollution_disease.csv"
PROCESSED_PATH = "data/processed/clean_data.csv"
MODEL_PATH = "models/TyphoidModel.pkl"
TARGET = "Typhoid_Risk"

SEED = 42
TEST_SIZE = 0.2
VALIDATION_SIZE = 0.2

# Model params (can be tuned via Optuna)

RandomForest_PARAMS = {
        "n_estimators": 200,
        "max_depth": 10,
        "random_state": 42,
        "class_weight":"balanced"
}

XGB_PARAMS = {
    "n_estimators": 300,
    "learning_rate": 0.1,
    "max_depth": 6,
    "subsample": 0.8,
    "colsample_bytree": 0.8,
    "random_state": SEED,
    "eval_metric":"logloss",
    "use_label_encoder":False
}

LightGBM_PARAMS = {
        "n_estimators": 300,
        "max_depth": -1,
        "learning_rate": 0.05,
        "subsample": 0.8,
        "colsample_bytree": 0.8,
        "random_state": 42,
        "class_weight":"balanced"
}