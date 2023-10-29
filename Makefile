.PHONY: build-frontend build-backend run

build-frontend:
    cd docker/frontend && docker build -t my-nextjs-app -f Dockerfile-frontend .

build-backend:
    cd docker/backend && docker build -t my-aspnet-app -f Dockerfile-backend .

run:
    docker-compose up --build
