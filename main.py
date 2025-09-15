# main.py
from config.config import TARGET, PROCESSED_PATH, MODEL_PATH
from src.data_preprocessing import load_data, clean_data, preprocess_features
from src.feature_engineering import add_features
from src.model_training import build_ensemble_model, train_model, evaluate_model
from src.utils import setup_logging
from src.model_training import build_ensemble_model, train_model, evaluate_model
from src.model_io import save_model

logger = setup_logging()

def run_pipeline() -> None:
    # Load + preprocess data (same as before)
    df = load_data()
    df = clean_data(df)
    df = add_features(df)
    df.to_csv(PROCESSED_PATH, index=False)

    X_train, X_test, y_train, y_test = preprocess_features(df, TARGET)

    # Ensemble model
    model = build_ensemble_model()
    model = train_model(model, X_train, y_train)
    evaluate_model(model, X_test, y_test)

    # Save for backend API
    save_model(model, MODEL_PATH)

if __name__ == "__main__":
    run_pipeline()