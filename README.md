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

## 🎯 Mission Briefing

Welcome to the **Fusionpact DevOps Gauntlet**.  
Your objective is to transform the provided two-tier application stack into a **cloud-deployed, observable, and automated production system**.

---

## 💻 Application Stack

| Component | Technology | Directory | Key Feature |
|----------|------------|-----------|--------------|
| 🖼️ Frontend | HTML / CSS | `./frontend/` | Internship Landing Page |
| ⚡ Backend | Python FastAPI | `./backend/` | REST API + Prometheus `/metrics` endpoint |

---

## 🧪 Challenge Levels

### 🥇 Level 1 – Cloud Deployment (30%)

**Objective:** Deploy the full application stack on a cloud platform.

**Requirements:**
- Containerize both frontend and backend using Docker.
- Define a multi-service setup with `docker-compose.yml`.
- Implement persistent data storage (volume or external DB).
- Deploy the stack on a public cloud platform (AWS, GCP, or Azure).
- Both frontend and backend must be publicly accessible.

**Deliverables:**
- `Dockerfile` for frontend and backend  
- `docker-compose.yml`  
- Public URLs for frontend and backend  
- Screenshot of deployed application  

---

### 🥈 Level 2 – Monitoring & Observability (30%)

**Objective:** Implement complete observability.

**Requirements:**
- Configure Prometheus to scrape backend metrics from `/metrics`.
- Deploy Grafana with dashboards for:
  - **Infrastructure metrics:** CPU, memory, disk, container usage.
  - **Application metrics:** request rate, latency, error counts.

**Deliverables (in SOP):**
- `prometheus.yml` configuration file  
- Screenshots of both Grafana dashboards  

---

### 🥉 Level 3 – CI/CD Automation (30%)

**Objective:** Automate the build and deployment process.

**Requirements:**
- Implement a CI/CD pipeline using Jenkins, GitHub Actions, or GitLab CI/CD.
- Pipeline must include:
  - Code checkout
  - Build & test
  - Docker image build & push
  - Automatic deployment to cloud

**Deliverables:**
- CI/CD configuration file (`Jenkinsfile` or `.github/workflows/main.yml`)  
- Screenshot of successful pipeline run  

---

## 📑 Submission Requirements (10%)

- Fork this repository and push your solution.
- Do **NOT** include the SOP in the repository — **attach it via email**.
- Submit the following:
  - GitHub repository URL
  - SOP PDF (detailed steps, commands, and screenshots)
- Fill out the **Google Form** shared with you after completing the tasks.

---

## 📊 Evaluation Criteria

| Category | Weight |
|----------|--------|
| Cloud Deployment | 30% |
| Monitoring & Observability | 30% |
| CI/CD Automation | 30% |
| Documentation & SOP | 10% |

⚠️ **Final Check:** Submissions will be rejected if not deployed on a public cloud or if the SOP is missing.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Fusionpact-Org/assets/main/devops-fun.gif" alt="DevOps Fun GIF" width="400"/>
</p>

> 🚀 SHOW US YOUR BEST WORK. Demonstrate **reliability, scalability, and automation** in a real-world DevOps scenario.
