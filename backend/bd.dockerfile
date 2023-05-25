FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

COPY ./app /app

RUN pip install SQLAlchemy

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]