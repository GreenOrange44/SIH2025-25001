# src/data_preprocessing.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from config.config import DATA_PATH, PROCESSED_PATH, TEST_SIZE, SEED
from src.utils import setup_logging, ensure_dir

logger = setup_logging()

def load_data(path: str = DATA_PATH) -> pd.DataFrame:
    logger.info(f"Loading data from {path}")
    return pd.read_csv(path)


def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    df = df.loc[df['Country'] == 'India']
    df = df.loc[(df['Region'] == 'East')]
    df = df.drop(columns=['Country', 'Region', 'Year'])
    return df


def preprocess_features(df: pd.DataFrame, target: str):
    logger.info("Splitting features and target")
    X = df.drop(columns=[target])
    y = df[target]

    # Handle missing values
    imputer = SimpleImputer(strategy="most_frequent")
    X_imputed = imputer.fit_transform(X)


    return train_test_split(X_imputed, y, test_size=TEST_SIZE, random_state=SEED)