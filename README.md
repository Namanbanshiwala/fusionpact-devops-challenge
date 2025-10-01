# 🌟 Fusionpact DevOps Assessment Challenge 2026

Welcome to the **Fusionpact DevOps Challenge**. This assignment is a real-world simulation designed to rigorously test your **end-to-end DevOps skillset**—from containerization and cloud deployment to monitoring and CI/CD automation.

---

## 🎯 The Application Stack

You are provided with a basic two-tier application stack:

| Component | Technology | Directory | Key Feature |
| :--- | :--- | :--- | :--- |
| **Frontend** | Static HTML/CSS | `./frontend/` | The Internship Program Landing Page. |
| **Backend** | Python **FastAPI** | `./backend/` | Handles user data management and exposes a **Prometheus `/metrics` endpoint**. |

Your primary objective is to take this codebase and transform it into a fully observable, persistent, and automatically deployable service in the cloud.

---

## ⚠️ MANDATORY REQUIREMENT: Cloud Deployment & Documentation

This is not a local coding exercise. **All stages must be deployed and validated on a public cloud platform.**

* **Cloud Platforms:** AWS, Google Cloud Platform (GCP), or Microsoft Azure.
* **Documentation:** A comprehensive **SOP (Standard Operating Procedure)** is mandatory for evaluation.

---

## 🧪 DevOps Task Levels

This challenge is structured into three progressive levels.

### 🥇 Level 1: Containerization & Cloud Deployment (30% Score Weight)

Focus on production-ready deployment and ensuring data integrity.

| Action | Details |
| :--- | :--- |
| **1. Dockerize** | Create a `Dockerfile` for the **backend** (FastAPI) and a lightweight `Dockerfile` for the **frontend** (e.g., using Nginx to serve the static HTML). |
| **2. Orchestration** | Write a **`docker-compose.yml`** file to define and link both the frontend and backend services. |
| **3. Persistence** | The backend currently uses a local JSON file for data storage. **You must ensure this data persists** across container restarts. *Bonus points for migrating to a dedicated database container (PostgreSQL/MySQL) and updating the backend service.* |
| **4. Deployment** | Deploy the entire stack using your orchestrator (`docker-compose` or equivalent YAML/config) onto a **Cloud Server/Service** (e.g., EC2, Cloud Run, App Service). |

📦 **Deliverables:** The `Dockerfile` (x2) and `docker-compose.yml` files.

---

### 🥈 Level 2: Monitoring & Observability Stack (30% Score Weight)

Establish a robust monitoring solution using the industry standard.

| Action | Details |
| :--- | :--- |
| **1. Service Integration** | Deploy **Prometheus** and configure it to effectively scrape application and system metrics. |
| **2. Application Metrics** | Target the backend's `/metrics` endpoint to capture API request statistics, latency, and error rates. |
| **3. Visualization** | Deploy **Grafana** and create at least **two high-quality, professional dashboards**: one for **System Health** (CPU, Memory, Disk I/O) and one for **Application Performance Monitoring (APM)**. |

📦 **Deliverables:** Prometheus configuration file (`prometheus.yml`), Screenshots of Grafana Dashboards.

---

### 🥉 Level 3: CI/CD Automation Pipeline (30% Score Weight)

Automate the process for rapid, reliable software delivery.

| Action | Details |
| :--- | :--- |
| **1. Tool Selection** | Implement the pipeline using your preferred tool (e.g., **GitHub Actions**, **GitLab CI**, **Jenkins**). |
| **2. Pipeline Stages** | Define a pipeline that includes the following stages on a push to the main branch: **Code Checkout** -> **Linting/Testing** -> **Docker Build** -> **Image Push to Registry** -> **Rolling Deployment** to the cloud environment. |

📦 **Deliverables:** CI/CD pipeline configuration file (e.g., **`Jenkinsfile`** or **`.github/workflows/main.yml`**), Screenshot of a successful pipeline run.

---

## 📑 Submission Instructions

Failure to meet the submission format will result in non-evaluation.

1.  **Fork** this repository and push your complete solution to your own GitHub account.
2.  **SOP Document:** Create a **detailed Standard Operating Procedure (SOP)** (PDF or Markdown format is preferred). This SOP must include:
    * The **architectural rationale** for your cloud service choices.
    * All commands executed during setup.
    * Screenshots verifying every major stage (Cloud Deployment Console, Persistence Test, Monitoring Setup, Successful Pipeline Run).
3.  **Email Submission:** Reply to the original task email and include:
    * ✅ Your **GitHub Repository URL** (the forked version).
    * ✅ A **short paragraph** summarizing your data persistence solution (Level 1).
    * ✅ The **SOP document as an attachment** (Do NOT commit to the repo).

⚠️ **Important:** The SOP document **must not** be included in your repository.

---

## ✅ Evaluation Criteria (100% Total)

| Category | Weight | Focus Areas |
| :--- | :--- | :--- |
| **Cloud Architecture & Persistence** | 30% | Correct containerization, effective volume/database setup, and secure public access. |
| **Monitoring & Observability** | 30% | Scrape target accuracy, quality of visualization, and choice of relevant metrics. |
| **CI/CD Automation** | 30% | Pipeline logic, reusability, proper artifact management (registry push), and successful automated deployment. |
| **Documentation & SOP** | 10% | Clarity, detail, technical accuracy, and professional presentation of the SOP. |

---

**Good Luck! 🚀** Show us how you engineer reliability, scalability, and automation.
