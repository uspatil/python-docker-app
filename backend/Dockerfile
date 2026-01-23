FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --root-user-action=ignore -r requirements.txt


COPY . .

EXPOSE 5000
CMD ["python", "app.py"]
