# Monitoring & Observability

## What is monitoring?


## What is Observabilty?

- In control theory,observabity is a measure of how well internal state of a system can be inferred from knowledge of its external outputs.

- These are the three main concept of observabilty.
  - Structured Logging
  - Metrics
  - Traces

---

## Observabilty

> Observabilty stack

```yaml
    Monitoring     -    Metrics     - Prometheus 
    Monitoring     -    Dashboard   - Grafana
    Logging        -    Logs        - Loki
    Logging        -    Log Shipping    - Fluentd 
    Monitoring     -    Metrics Shipping - Thanos
    Monitoring     -    Grafana Backup   - Wizzy
```
# Observability

This folder contains learning resources, monitoring tools, logging systems, tracing concepts, dashboards, alerts, troubleshooting guides, interview questions, and hands-on projects related to Observability in DevOps, Cloud, Kubernetes, and Infrastructure environments.

Observability helps monitor system health, analyze logs, trace requests, detect failures, improve performance, and maintain highly available infrastructure and applications.

---

# 📂 Folder Structure

```bash
Observability/
│
├── Monitoring/
├── Logging/
├── Tracing/
├── Prometheus/
├── Grafana/
├── ELK-Stack/
├── Loki/
├── AlertManager/
├── Jaeger/
├── OpenTelemetry/
├── Kubernetes-Monitoring/
├── Cloud-Monitoring/
├── Dashboards/
├── Troubleshooting/
└── README.md
```