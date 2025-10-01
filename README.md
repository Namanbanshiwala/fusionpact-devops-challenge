<p align="center">
  <img src="https://raw.githubusercontent.com/your-org/assets/main/fusionpact-hero.gif" width="350"/>
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

> Welcome to **Fusionpact DevOps Challenge 2026**!  
> This is a **real-world simulation** to test your **full DevOps skillset**—from **cloud deployment**, **observability**, to **CI/CD automation**.  

> ⚡ **Pro Tip:** Think like a **professional DevOps engineer**—automation, monitoring, and reliability matter most.  

---

## 🖥️ Application Stack

| Component | Technology | Directory | Key Feature |
|-----------|-----------|-----------|------------|
| 🖼️ **Frontend** | HTML / CSS | `./frontend/` | Internship Landing Page |
| ⚡ **Backend** | Python FastAPI | `./backend/` | User Data + Prometheus `/metrics` |

> Your mission: make this stack **fully cloud-deployed, persistent, and observable**.

---

## ⚠️ Mandatory Requirements

> 🚨 **Important:** All stages **must run on a public cloud** (AWS / GCP / Azure). Local testing is insufficient.

- Documentation: **Full SOP** (PDF or Markdown)  
- Include **commands, screenshots, verification steps**

<div style="background-color:#fff4e6;padding:10px;border-left:5px solid #ff9900;">
💡 <b>Tip:</b> Screenshots of cloud deployment, persistence test, monitoring dashboards, and CI/CD pipeline are mandatory.
</div>

---

## 🏆 Task Levels

### 🥇 Level 1: Containerization & Cloud Deployment
<div style="background-color:#e6f7ff;padding:10px;border-radius:8px;border-left:5px solid #0099ff;">
🚀 Focus: Production-ready deployment + persistent backend data
</div>

| Action | Details |
|--------|---------|
| **Dockerize** | Backend + Frontend (Nginx) Dockerfiles |
| **Orchestration** | `docker-compose.yml` linking services |
| **Persistence** | Ensure data persists across restarts (**bonus:** migrate to PostgreSQL/MySQL) |
| **Deployment** | Deploy on Cloud VM / Managed Service |

📦 **Deliverables:** `Dockerfile`s + `docker-compose.yml`  

---

### 🥈 Level 2: Monitoring & Observability
<div style="background-color:#fff0f6;padding:10px;border-radius:8px;border-left:5px solid #ff4d6d;">
📊 Focus: Full observability of system & app metrics
</div>

| Action | Details |
|--------|---------|
| **Prometheus** | Scrape backend & system metrics |
| **Metrics** | API requests, latency, errors (`/metrics`) |
| **Grafana Dashboards** | Two dashboards:  
1️⃣ **System Health** – CPU, Memory, Disk I/O  
2️⃣ **Application Performance Monitoring (APM)** |

📦 **Deliverables:** `prometheus.yml` + Grafana screenshots  

---

### 🥉 Level 3: CI/CD Automation
<div style="background-color:#f0fff0;padding:10px;border-radius:8px;border-left:5px solid #33cc33;">
⚙️ Focus: Fully automated deployment pipeline
</div>

| Action | Details |
|--------|---------|
| **Pipeline Tool** | GitHub Actions / GitLab CI / Jenkins |
| **Stages** | On push to `main`:  
- Checkout code  
- Lint / Unit Tests  
- Docker Build  
- Push to Registry  
- Rolling Deployment |

📦 **Deliverables:** Pipeline config + successful pipeline screenshot  

---

## 📑 Submission Instructions

1. **Fork** this repository & push your solution  
2. **SOP Document**: PDF/Markdown with all commands, screenshots, verification  
3. **Email Submission:**  
   - ✅ GitHub Repo URL  
   - ✅ Data persistence summary (Level 1)  
   - ✅ SOP document (do not commit to repo)

> 💡 **Tip:** SOP is critical. Include **deployment, monitoring, and CI/CD screenshots**.

---

## 📊 Evaluation Criteria

| Category | Weight | Focus Areas |
|----------|--------|-------------|
| Cloud Architecture & Persistence | 30% | Containerization, volume/db setup, public access |
| Monitoring & Observability | 30% | Prometheus scraping, dashboard quality, metrics selection |
| CI/CD Automation | 30% | Pipeline logic, artifact management, deployment success |
| Documentation & SOP | 10% | Clarity, accuracy, professional presentation |

---

## 🌐 Useful Links

- [Prometheus Docs](https://prometheus.io/docs/introduction/overview/)  
- [Grafana Docs](https://grafana.com/docs/)  
- [Docker Docs](https://docs.docker.com/)  

---

## ✨ Styling Extras

- Animated GIFs for **frontend & backend demos**  
- Colored panels for **task emphasis**  
- Badges for **CI/CD, Docker, Cloud, Monitoring**  
- Hover-friendly **links & callouts**  

---

<p align="center">
  <img src="https://raw.githubusercontent.com/your-org/assets/main/devops-fun.gif" width="400"/>
</p>

> 🚀 **Good Luck!** Demonstrate **reliability, observability, and automated cloud deployments** with professional flair.
