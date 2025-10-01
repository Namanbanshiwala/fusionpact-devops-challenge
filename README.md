<p align="center">
  <img src="https://raw.githubusercontent.com/Fusionpact-Org/assets/main/fusionpact-hero.gif" alt="Fusionpact Hero Banner" width="350"/>
</p>

<h1 align="center">🌟 Fusionpact DevOps Gauntlet: Assessment 2026</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Cloud--Ready-brightgreen?style=for-the-badge&logo=googles-cloud&logoColor=white" title="Project Status"/>
  <img src="https://img.shields.io/badge/Container-Docker--Required-blue?style=for-the-badge&logo=docker&logoColor=white" title="Docker"/>
  <img src="https://img.shields.io/badge/CI/CD-Automation--Focus-red?style=for-the-badge&logo=githubactions&logoColor=white" title="CI/CD"/>
  <img src="https://img.shields.io/badge/Observability-Mandatory-yellowgreen?style=for-the-badge&logo=grafana&logoColor=white" title="Monitoring"/>
</p>

---

## 🎯 MISSION BRIEFING: The Challenge

Welcome to the **Fusionpact DevOps Gauntlet**! This is your final opportunity to prove your mastery of modern cloud engineering. Your task is to take this two-tier application stack and transform it into a **fault-tolerant, observable, and automated production system** in the cloud.

### 💻 Application Stack Overview

| Component | Technology | Directory | Key Feature |
| :--- | :--- | :--- | :--- |
| 🖼️ **Frontend** | HTML / CSS | `./frontend/` | Internship Landing Page (Requires lightweight serving) |
| ⚡ **Backend** | Python **FastAPI** | `./backend/` | REST API, Data Handling, and **Prometheus `/metrics`** endpoint |

---

## 🚨 MANDATORY EXECUTION PROTOCOL

<div style="background-color:#ffe6e6;padding:15px;border-left:6px solid #ff4d4d;border-radius:5px;">
  <p style="font-size:1.1em;font-weight:bold;margin-top:0;">🛑 NON-NEGOTIABLE REQUIREMENTS</p>
  <ul>
    <li>**Cloud-Only Deployment:** ❌ Local setup is strictly forbidden. The entire solution must be deployed on a public cloud service (AWS, GCP, or Azure).</li>
    <li>**SOP DOCUMENTATION:** A comprehensive, professional **SOP (Standard Operating Procedure)** is required for full evaluation.</li>
  </ul>
</div>

---

## 🏆 THE GAUNTLET: Three Levels of Mastery

### 🥇 Level 1: Cloud & Data Sovereignty (30%)
<div style="background-color:#e6f7ff;padding:12px;border-radius:8px;border-left:6px solid #0099ff;">
  🚀 **Focus:** Production-ready deployment and ensuring data integrity.
</div>

| Action | Execution Focus |
| :--- | :--- |
| **1. Containerization** | Write **optimized, multi-stage** `Dockerfile`s for **Frontend** and **Backend**. |
| **2. Orchestration** | Define the multi-service environment using a robust **`docker-compose.yml`**. |
| **3. Persistence** | **CRITICAL:** Solve the file-based storage weakness. Ensure data **persists** across container restarts. *(High credit for migrating to a dedicated DB container like PostgreSQL/MySQL).* |
| **4. Cloud Launch** | Deploy the entire stack using your orchestrator onto a **Cloud Server/Service**. |

📦 **Deliverables:** Optimized `Dockerfile`s, complete `docker-compose.yml`.

---

### 🥈 Level 2: Observability & Insight (30%)
<div style="background-color:#fff0f6;padding:12px;border-radius:8px;border-left:6px solid #ff4d6d;">
  📊 **Focus:** Full observability of system and application metrics.
</div>

| Action | Execution Focus |
| :--- | :--- |
| **1. Metrics Engine** | Deploy **Prometheus** and configure its scraping jobs to correctly target the backend's `/metrics`. |
| **2. Visualization** | Deploy **Grafana**. Design is key—dashboards must be professional and insightful. |
| **3. Dashboard Design** | Create **two high-impact dashboards**: one for **Infrastructure Health** (Host/Container CPU/Memory/Disk I/O) and one for **Application Performance Monitoring (APM)** (API Latency, Request Rate, Error Counts). |

📦 **Deliverables:** Clean `prometheus.yml` configuration, **Screenshots of the working Grafana Dashboards.**

---

### 🥉 Level 3: Zero-Touch Automation (30%)
<div style="background-color:#f0fff0;padding:12px;border-radius:8px;border-left:6px solid #33cc33;">
  ⚙️ **Focus:** Implementing a reliable, automated CI/CD pipeline.
</div>

| Action | Execution Focus |
| :--- | :--- |
| **1. CI/CD Platform** | Choose your weapon: **Jenkins**, **GitHub Actions**, or **GitLab CI/CD**. |
| **2. Pipeline Logic** | The pipeline must include: **Checkout** ➡️ **Lint/Test** ➡️ **Docker Build** ➡️ **Image Push to Registry** ➡️ **Automated Deployment/Update** in the cloud. |
| **3. Artifacts** | Ensure proper versioning and use of a container registry (Docker Hub, ECR, GCR). |

📦 **Deliverables:** The complete CI/CD configuration file (e.g., **`Jenkinsfile`** or **`.github/workflows/main.yml`**), Screenshot of a verified successful pipeline run.

---

## 📧 SUBMISSION PROTOCOL (10%)

Your submission must be a single, professional package.

1.  **Fork** the repository and push your complete solution (Docker files, CI/CD scripts) to your account.
2.  **SOP Document:** Prepare your **detailed SOP** (PDF or Markdown). This document must include:
    * **The Architectural Rationale:** Justify your choice of cloud services (e.g., why Kubernetes vs. EC2).
    * All commands executed and **Screenshots** verifying every major stage.
3.  **Email Reply:** Reply to the original task email with the following:
    * ✅ Your **GitHub Repository URL**.
    * ✅ A short paragraph explaining the mechanism you used to **verify data persistence** (Level 1).
    * ✅ The **SOP document as a single, attached file**.

> ⚠️ **FINAL CHECK:** Submissions will be rejected if the deployment is not in the cloud or if the SOP is missing.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Fusionpact-Org/assets/main/devops-fun.gif" alt="DevOps Fun GIF" width="400"/>
</p>

> 🚀 **SHOW US YOUR BEST WORK.** Showcase **reliability, scalability, and automated cloud deployments** professionally.
