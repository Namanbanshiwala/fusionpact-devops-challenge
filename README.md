# 🚀 Fusionpact DevOps Assessment — Junior/Intern DevOps Role

Welcome to the **Fusionpact DevOps Challenge 2026**.
This assignment is designed to evaluate your **real-world DevOps skills** — from containerization and deployment to monitoring and automation — using industry-grade tools and practices.

---

## 📄 Project Overview

You are provided with a two-part application:
1.  **Frontend (`./frontend/`):** A static HTML page (`Devops_Intern.html`) representing the program's landing page.
2.  **Backend (`./backend/`):** A simple Python **FastAPI** application that manages user data (stored in a JSON file locally, which you may choose to migrate or manage persistence for) and exposes a **Prometheus metrics endpoint** at `/metrics`.

Your objective is to **deploy, monitor, and automate** this project stack following the 3 stages described below.

---

## 🧪 Task Levels

### 🥇 Level 1: Mandatory Cloud Deployment & Persistence (30%)

Your first goal is to containerize and deploy the application stack so it is **publicly accessible on a cloud platform**.

1.  **Containerization:**
    * Create a **`Dockerfile`** for the **backend** (FastAPI).
    * Create a **`Dockerfile`** for the **frontend** (serve the static HTML using a lightweight server like Nginx).
    * Use **`docker-compose.yml`** to orchestrate both services.
2.  **Data Persistence:**
    * The backend currently saves user data to a local JSON file (`users.json`). You must ensure this data persists even after the container is restarted or replaced. You can achieve this using:
        * **Volume Mapping** for the JSON file.
        * **(Optional Bonus)** Replace the file-based storage with a dedicated **PostgreSQL/MySQL** container and update the backend code.
3.  **Deployment Requirement:**
    * **❌ Local setup is not allowed.** You **must** deploy the entire containerized solution on a **Cloud Server** of your choice: **AWS, Google Cloud Platform (GCP), or Microsoft Azure**. The application must be publicly accessible via a browser URL.

📦 **Deliverables:**
* Live URL of the deployed frontend.
* The `Dockerfile` and `docker-compose.yml` files.
* A brief note on your choice of cloud services (e.g., EC2/ECS, Cloud Run, Kubernetes).

---

### 🥈 Level 2: Monitoring & Observability (30%)

Implement a robust observability stack to monitor the health and performance of the backend service.

1.  **Monitoring Stack Setup:**
    * Deploy **Prometheus** for metrics collection.
    * Deploy **Grafana** for visualization.
2.  **Configuration:**
    * Configure **Prometheus** to scrape metrics from the backend's exposed `/metrics` endpoint.
    * Configure Prometheus to monitor the basic health of the application containers (CPU, memory, uptime).
3.  **Visualization:**
    * Create at least **2 Dashboards** in Grafana:
        * One for **System-Level Metrics** (e.g., CPU load, Memory usage of the host/containers).
        * One for **Application-Level Metrics** (e.g., API response times, request counts, error rates from the backend).

📦 **Deliverables:**
* Configuration files used for Prometheus (e.g., `prometheus.yml`).
* Screenshots of the functioning Grafana dashboards.

---

### 🥉 Level 3: CI/CD Automation (30%)

Automate the process of building, testing, and deploying the backend application.

1.  **CI/CD Tool Selection:**
    * Choose a CI/CD tool: **Jenkins, GitHub Actions, GitLab CI/CD,** or a cloud-native service.
2.  **Pipeline Implementation:**
    * Create a pipeline that triggers on code pushes to the main branch.
    * The pipeline must include the following stages:
        * **Code Checkout & Linting/Testing** (e.g., using `black` for the Python code).
        * **Docker Image Build** for the backend service.
        * **Docker Image Push** to a container registry (e.g., Docker Hub, ECR, GCR).
        * **Deployment/Rolling Update** to the cloud environment.

📦 **Deliverables:**
* The complete CI/CD pipeline configuration file (e.g., `Jenkinsfile`, `.github/workflows/main.yml`).
* A screenshot of a successful pipeline run showing all stages.

---

## 📑 Submission Requirements

**Your submission will not be evaluated without a cloud deployment and SOP document.**

1.  **Fork** this repository and push your solution to your GitHub account.
2.  **Create a detailed SOP (Standard Operating Procedure)** document (PDF or Markdown) documenting:
    * All steps and commands executed to build and deploy the stack.
    * Screenshots of key stages (Container Build, Cloud Deployment Console, Grafana Dashboards, Successful Pipeline Run).
3.  **Email the following to kiran.rakh@fusionpact.com:**
    * 📎 Your **GitHub repository URL** (the forked version).
    * 📎 A **short paragraph** explaining how you verified data persistence (Level 1).
    * 📎 The **SOP document as an attachment**.
    * 📎 Live frontend/backend URLs.
    * 📎 Screenshots of Grafana dashboards.

⚠️ **Important:** The SOP document **must not** be included in your repository.

---

## ✅ Evaluation Criteria

| Category | Weight | Focus |
| :--- | :--- | :--- |
| **Cloud Deployment & Persistence** | 30% | Containerization, cloud service choice, and successful data persistence implementation. |
| **Monitoring & Observability** | 30% | Correct configuration, effective and informative Grafana dashboards. |
| **CI/CD Automation** | 30% | Clean, reliable, and logical pipeline stages with successful execution. |
| **Documentation & SOP** | 10% | Clarity, detail, and professionalism of the Standard Operating Procedure. |

---

**Good Luck! 🚀**
Show us how you think like a DevOps Engineer at **Fusionpact**.
