# src/feature_engineering.py
import pandas as pd
from src.utils import setup_logging

logger = setup_logging()

def add_features(df: pd.DataFrame) -> pd.DataFrame:
    logger.info("Adding engineered features...")
    thresholdDiarrheal = df['Diarrheal Cases per 100,000 people'].quantile(0.8)
    thresholdCholeral = df['Cholera Cases per 100,000 people'].quantile(0.8)
    thresholdTyphoid = df['Typhoid Cases per 100,000 people'].quantile(0.8)
    df["Cholera_Risk"] = (df["Cholera Cases per 100,000 people"] > thresholdCholeral).astype(int)
    df["Typhoid_Risk"] = (df["Typhoid Cases per 100,000 people"] > thresholdTyphoid).astype(int)
    df["Diarrhea_Risk"] = (df["Diarrheal Cases per 100,000 people"] > thresholdDiarrheal).astype(int)

    y = df["Cholera_Risk"]

    # Drop target + identifiers + original disease columns
    drop_cols = [
        "Cholera Cases per 100,000 people",
        "Diarrheal Cases per 100,000 people",
        "Typhoid Cases per 100,000 people",
    ]
    df = df.drop(drop_cols, axis = 1)



    df_encoded = pd.get_dummies(df, columns=df.select_dtypes(include=['object']).columns)


    # Clean feature names: remove spaces, % and special chars
    df_encoded.columns = (
        df_encoded.columns
        .str.replace('[^A-Za-z0-9_]+', '_', regex=True)  # replace special chars with _
        .str.replace('_+', '_', regex=True)              # collapse multiple underscores
        .str.strip('_')                                  # strip leading/trailing _
    )
    return df_encoded