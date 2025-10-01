# 🌟 Fusionpact DevOps Assessment Challenge 2026

![Fusionpact Logo](https://raw.githubusercontent.com/your-org/assets/main/fusionpact-logo.png)

[![CI Badge](https://img.shields.io/badge/CI-Passing-brightgreen)](https://github.com/)
[![Docker Badge](https://img.shields.io/badge/Docker-Built-blue)](https://www.docker.com/)
[![GitHub Issues](https://img.shields.io/github/issues/FusionpactTech/devops-challenge)](https://github.com/FusionpactTech/devops-challenge/issues)

> Welcome to the **Fusionpact DevOps Challenge**, a real-world simulation to test your **end-to-end DevOps skills**—from **cloud deployment**, **monitoring**, to **CI/CD automation**.  

---

## 🖥️ Application Stack

| Component | Technology | Directory | Key Feature |
|-----------|-----------|-----------|------------|
| **Frontend** | Static HTML/CSS | `./frontend/` | Internship Program Landing Page. |
| **Backend** | Python **FastAPI** | `./backend/` | Handles user data & exposes **Prometheus `/metrics`** endpoint. |

Your mission: transform this stack into a **fully observable, persistent, and cloud-deployed service**.  

---

## ⚠️ Mandatory Requirements

> **Cloud deployment is required.** Local testing alone will not be evaluated.  

- **Supported Clouds:** AWS, GCP, or Azure  
- **Documentation:** A detailed **SOP (PDF or Markdown)** covering every stage  

---

## 🏆 Task Levels

### 🥇 Level 1: Containerization & Cloud Deployment (30%)

| Action | Details |
|--------|---------|
| **Dockerize** | Create `Dockerfile`s for **frontend** (Nginx) & **backend** (FastAPI). |
| **Orchestration** | Use **`docker-compose.yml`** to link both services. |
| **Persistence** | Ensure **backend data persists** (bonus: migrate to PostgreSQL/MySQL). |
| **Deployment** | Deploy on a **Cloud VM or managed service**. |

📦 **Deliverables:** `Dockerfile`s + `docker-compose.yml`  

---

### 🥈 Level 2: Monitoring & Observability (30%)

| Action | Details |
|--------|---------|
| **Prometheus** | Scrape system + application metrics. |
| **Metrics** | Backend `/metrics` endpoint: API request stats, latency, errors. |
| **Grafana Dashboards** | Minimum 2 dashboards:  
1. **System Health** – CPU, Memory, Disk I/O  
2. **Application Performance Monitoring (APM)** |

📦 **Deliverables:** `prometheus.yml`, Grafana dashboard screenshots  

---

### 🥉 Level 3: CI/CD Automation (30%)

| Action | Details |
|--------|---------|
| **Pipeline Tool** | GitHub Actions / GitLab CI / Jenkins |
| **Stages** | On push to `main`:  
1. Checkout code  
2. Lint / Test  
3. Docker Build  
4. Push image to registry  
5. Rolling deployment to cloud |

📦 **Deliverables:** CI/CD config + successful pipeline screenshot  

---

## 📑 Submission Instructions

1. **Fork** this repo & push your solution.  
2. **SOP Document:** Include **commands, screenshots, verification steps** (PDF/Markdown).  
3. **Email Submission:**  
   - ✅ GitHub Repo URL  
   - ✅ Short paragraph describing **data persistence solution**  
   - ✅ SOP Document (do **not** commit to repo)  

---

## 📊 Evaluation Criteria

| Category | Weight | Focus Areas |
|----------|--------|-------------|
| Cloud Architecture & Persistence | 30% | Correct containerization, volume/db setup, secure public access |
| Monitoring & Observability | 30% | Prometheus scraping, dashboard quality, metrics selection |
| CI/CD Automation | 30% | Pipeline logic, artifact management, deployment success |
| Documentation & SOP | 10% | Clarity, accuracy, professional presentation |

---

## 🌐 Useful Links

- [Prometheus Docs](https://prometheus.io/docs/introduction/overview/)  
- [Grafana Docs](https://grafana.com/docs/)  
- [Docker Docs](https://docs.docker.com/)  

---

## 🎨 Optional Style & Extras

- Add **animated GIFs** for frontend demonstration  
- Add **company/project logos** for branding  
- Add **Shields.io badges** for CI/CD & Docker builds  

---

> 🚀 **Good Luck!** Demonstrate how you engineer **reliability, observability, and automation** at cloud scale.
