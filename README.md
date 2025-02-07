# Microservice Kubernetes Project

This project consists of two microservices (order-service and product-service) deployed using Kubernetes and managed with Terraform. The project also includes a PostgreSQL database.

## Project Structure

```
db-host.yaml
gitignore
kubernetes/
	order-deployment.yaml
	postgres-deployment.yaml
	product-deployment.yaml
order-service/
	.dockerignore
	.gitignore
	config/
	config.ts
	Dockerfile
	eslint.config.ts
	package.json
	README.md
	scripts/
	src/
	tsconfig.json
	tsconfig.prod.json
product-service/
	.gitignore
	config/
	config.ts
	Dockerfile
	eslint.config.ts
	package.json
	README.md
	scripts/
	src/
	tsconfig.json
	tsconfig.prod.json
terraform/
	.terraform/
	.terraform.lock.hcl
	main.tf
	variables.tf
```

## Services

### Order Service

The order service is responsible for managing orders. It includes the following main components:

- Controllers: `orderController`
- Services: `orderService`
- Repositories: `orderRepositoryImpl`
- Database: `db.ts`

### Product Service

The product service is responsible for managing products. It includes the following main components:

- Controllers: `productController`
- Services: `ProductService`
- Repositories: `productRepositoryImpl`
- Database: `db.ts`

## Kubernetes

Kubernetes manifests for deploying the services and the PostgreSQL database are located in the kubernetes directory:

- `order-deployment.yaml`
- `product-deployment.yaml`
- `postgres-deployment.yaml`

## Terraform

Terraform configuration for setting up the infrastructure is located in the terraform directory:

- `main.tf`
- `variables.tf`

## Getting Started

### Prerequisites

- Docker
- Kubernetes
- Terraform
- Node.js (version >= 16.0.0)

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/concorder911220/microservice-kubernetes.git
   cd microservice-kubernetes
   ```

2. **Build and run the services:**

   ```sh
   cd order-service
   npm install
   npm run build
   docker build -t order-service .
   cd ../product-service
   npm install
   npm run build
   docker build -t product-service .
   ```

3. **Deploy to Kubernetes:**

   ```sh
   kubectl apply -f kubernetes/postgres-deployment.yaml
   kubectl apply -f kubernetes/order-deployment.yaml
   kubectl apply -f kubernetes/product-deployment.yaml
   ```

4. **Setup infrastructure with Terraform:**

   ```sh
   cd terraform
   terraform init
   terraform apply
   ```

## Available Scripts

### Order Service

- `npm run clean-install`: Clean install dependencies.
- `npm run dev`: Run the server in development mode.
- `npm run test`: Run all unit tests.
- `npm run lint`: Check for linting errors.
- `npm run build`: Build the project for production.
- `npm start`: Run the production build.

### Product Service

- `npm run clean-install`: Clean install dependencies.
- `npm run dev`: Run the server in development mode.
- `npm run test`: Run all unit tests.
- `npm run lint`: Check for linting errors.
- `npm run build`: Build the project for production.
- `npm start`: Run the production build.
