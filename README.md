<p align="center">
  <img src="https://raw.githubusercontent.com/your-org/assets/main/fusionpact-logo.png" width="200"/>
</p>

<h1 align="center">🌟 Fusionpact DevOps Assessment Challenge 2026</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/CI-Passing-brightgreen?style=for-the-badge&logo=github"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Docker-Built-blue?style=for-the-badge&logo=docker"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Cloud-AWS-orange?style=for-the-badge&logo=amazon-aws"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Monitoring-Prometheus-red?style=for-the-badge&logo=prometheus"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Grafana-Visualize-yellow?style=for-the-badge&logo=grafana"/></a>
</p>

---

## 💡 About This Challenge

Welcome to the **Fusionpact DevOps Challenge**! This is **not a simple coding test**—you will simulate **real-world cloud deployments, observability, and automated pipelines**.  

> ⚡ **Pro Tip:** Think like a professional DevOps engineer. Your solution will be evaluated on **reliability, scalability, and automation**.

---

## 🖥️ Application Stack

| Component | Technology | Directory | Key Feature |
|-----------|-----------|-----------|------------|
| **Frontend** | Static HTML/CSS | `./frontend/` | Internship Landing Page |
| **Backend** | Python **FastAPI** | `./backend/` | User Data + Prometheus `/metrics` |

> Your mission: make this **two-tier app** fully **cloud-deployed, persistent, and observable**.

---

## ⚠️ Mandatory Requirements

> 🚨 **Important:** All stages must run on a **public cloud**. Local testing is not enough.

- Supported Clouds: **AWS / GCP / Azure**  
- Documentation: Full **SOP** (PDF or Markdown) required

<div style="background-color:#fffae6;padding:10px;border-left:5px solid #ffcc00;">
📌 **Tip:** SOP should contain commands, screenshots, verification steps, and deployment architecture diagrams.
</div>

---

## 🏆 Task Levels

### 🥇 Level 1: Containerization & Cloud Deployment
> **Weight: 30%**

<div style="background-color:#e6f7ff;padding:10px;border-left:5px solid #0099ff;">
🚀 Focus: Production-ready deployment + persistent backend data
</div>

| Action | Details |
|--------|---------|
| **Dockerize** | Create `Dockerfile` for **backend** + **frontend** (Nginx). |
| **Orchestration** | `docker-compose.yml` linking services. |
| **Persistence** | Ensure backend data survives restarts (**bonus:** migrate to PostgreSQL/MySQL). |
| **Deployment** | Deploy on **Cloud VM / Managed Service**. |

📦 **Deliverables:**  
`Dockerfile`s + `docker-compose.yml`  

---

### 🥈 Level 2: Monitoring & Observability
> **Weight: 30%**

<div style="background-color:#fff0f6;padding:10px;border-left:5px solid #ff4d6d;">
📊 Focus: Full observability of system & app metrics
</div>

| Action | Details |
|--------|---------|
| **Prometheus** | Scrape backend + system metrics |
| **Metrics** | API requests, latency, error rates via `/metrics` |
| **Grafana Dashboards** | 2 professional dashboards:  
1️⃣ **System Health** – CPU, Memory, Disk I/O  
2️⃣ **Application Performance Monitoring** |

📦 **Deliverables:** `prometheus.yml`, Grafana screenshots  

---

### 🥉 Level 3: CI/CD Automation
> **Weight: 30%**

<div style="background-color:#f0fff0;padding:10px;border-left:5px solid #33cc33;">
⚙️ Focus: Fully automated deployment pipeline
</div>

| Action | Details |
|--------|---------|
| **Pipeline Tool** | GitHub Actions / GitLab CI / Jenkins |
| **Stages** | On push to `main`:  
- Checkout code  
- Lint / Unit Tests  
- Docker Build  
- Push image to registry  
- Rolling Deployment to cloud |

📦 **Deliverables:** Pipeline config + successful run screenshot  

---

## 📑 Submission Instructions

1. **Fork** this repo & push your solution  
2. **SOP Document:** PDF or Markdown (commands, screenshots, verification)  
3. **Email Submission:**  
   - ✅ GitHub Repo URL  
   - ✅ Data persistence summary (Level 1)  
   - ✅ SOP Document (do not commit to repo)  

> 💡 **Pro Tip:** SOP is critical for scoring. Include **screenshots of cloud deployment, persistence test, monitoring, and CI/CD success**.

---

## 📊 Evaluation Criteria

| Category | Weight | Focus Areas |
|----------|--------|-------------|
| Cloud Architecture & Persistence | 30% | Containerization, volume/db setup, public access |
| Monitoring & Observability | 30% | Prometheus scraping, dashboard quality, relevant metrics |
| CI/CD Automation | 30% | Pipeline logic, artifact management, deployment success |
| Documentation & SOP | 10% | Clarity, accuracy, professional presentation |

---

## 🌐 Useful Links

- [Prometheus Docs](https://prometheus.io/docs/introduction/overview/)  
- [Grafana Docs](https://grafana.com/docs/)  
- [Docker Docs](https://docs.docker.com/)  

---

## ✨ Styling Extras

- Animated GIFs for frontend demo  
- Project logos for branding  
- Shields.io badges for CI/CD & Docker builds  
- Highlight important sections with colored panels

---

> 🚀 **Good Luck!** Demonstrate **reliability, observability, and automated cloud deployments** with professional finesse.
