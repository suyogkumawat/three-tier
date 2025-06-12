FROM python:3.10
WORKDIR /app
COPY . .
RUN echo "Contents of /app:" && ls -al /app
RUN pip install flask requests
CMD ["python", "app.py"]
