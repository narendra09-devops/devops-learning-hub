const roadmap = [
  { title: "Linux basics", folder: "Linux", icon: "LX", color: "#168a8a", text: "Files, users, permissions, services, logs, packages, and shell commands." },
  { title: "Networking basics", folder: "Networking", icon: "NW", color: "#2f6fbc", text: "IP, DNS, ports, HTTP, routing, firewalls, load balancers, and troubleshooting." },
  { title: "Git and GitHub", folder: "Version-Control", icon: "GT", color: "#b54763", text: "Commits, branches, pull requests, merge conflicts, tags, and release workflow." },
  { title: "Shell scripting", folder: "Scripting", icon: "SH", color: "#b7791f", text: "Variables, loops, functions, exit codes, cron jobs, and automation scripts." },
  { title: "Cloud basics", folder: "Cloud-Platforms", icon: "CL", color: "#168a8a", text: "Regions, IAM, compute, storage, networking, billing, and shared responsibility." },
  { title: "AWS core services", folder: "Cloud-Platforms/AWS", icon: "AWS", color: "#2f6fbc", text: "EC2, S3, IAM, VPC, CloudFront, Route 53, CloudWatch, and backup services." },
  { title: "Docker", folder: "Containers/Docker", icon: "DK", color: "#168a8a", text: "Images, containers, Dockerfile, volumes, networks, registries, and compose basics." },
  { title: "Kubernetes", folder: "Containers/Kubernetes", icon: "K8S", color: "#2f6fbc", text: "Pods, deployments, services, config maps, secrets, ingress, storage, and scaling." },
  { title: "Terraform", folder: "Infrastructure-Provisioning/Infrastructure-as-Code/Terraform", icon: "TF", color: "#7c5cc4", text: "Providers, resources, variables, state, modules, plans, and remote backends." },
  { title: "CI/CD", folder: "CI-CD-Pipelines", icon: "CI", color: "#b54763", text: "Build, test, scan, artifact, deploy, rollback, approvals, and secrets." },
  { title: "Monitoring/logging", folder: "Observability", icon: "OB", color: "#3d8b57", text: "Metrics, logs, dashboards, alerts, SLOs, incident notes, and CloudWatch." },
  { title: "Security basics", folder: "Security", icon: "SC", color: "#b7791f", text: "IAM least privilege, patching, secrets, TLS, vulnerability scans, and audit logs." },
  { title: "Real projects", folder: "Projects", icon: "PJ", color: "#168a8a", text: "Build portfolio projects that prove you can deploy and operate systems." },
  { title: "Interview preparation", folder: "Interview-Questions", icon: "IQ", color: "#b54763", text: "Prepare tool questions, troubleshooting stories, and scenario-based answers." }
];

const folderCatalog = [
  ["Architecture Diagrams", "AD", "Design references, system diagrams, and architecture notes.", "Architecture-Diagrams", "#2f6fbc"],
  ["Assets", "AS", "Website images, icons, profile photos, and banner files used by GitHub Pages.", "assets", "#168a8a"],
  ["Certifications", "CE", "Certification paths, exam notes, and preparation material.", "Certifications", "#33895d"],
  ["Cheatsheets", "CS", "Fast command references and quick lookup guides.", "Cheatsheets", "#c27a17"],
  ["CI/CD Pipelines", "CI", "Jenkins, GitHub Actions, GitLab CI, CircleCI, and Travis CI.", "CI-CD-Pipelines", "#b54763"],
  ["Cloud Platforms", "CL", "AWS, Azure, GCP, and DigitalOcean learning notes.", "Cloud-Platforms", "#168a8a"],
  ["Containers", "CO", "Docker, Kubernetes, Minikube, and container projects.", "Containers", "#2f6fbc"],
  ["Data Streaming", "DS", "Kafka and streaming platform concepts.", "Data-Streaming", "#c27a17"],
  ["Databases", "DB", "Database learning notes for DevOps workflows.", "Databases", "#33895d"],
  ["DevOps", "DO", "Core DevOps concepts, CNCF notes, and fundamentals.", "DevOps", "#168a8a"],
  ["GitOps", "GO", "Argo CD, sync strategies, app-of-apps, and GitOps practices.", "GitOps", "#b54763"],
  ["How-To Guides", "HT", "Step-by-step installation and setup guides.", "How-To-Guides", "#2f6fbc"],
  ["Images", "IM", "Diagrams and reference images used across notes.", "Images", "#33895d"],
  ["Infrastructure Provisioning", "IP", "Terraform, Ansible, CloudFormation, Chef, and Puppet.", "Infrastructure-Provisioning", "#c27a17"],
  ["Interview Questions", "IQ", "DevOps interview questions, notes, and preparation lists.", "Interview-Questions", "#b54763"],
  ["Linux", "LX", "Linux commands, OS concepts, processes, files, and shell scripting.", "Linux", "#168a8a"],
  ["Networking", "NW", "Routing, switching, protocols, DNS, and troubleshooting.", "Networking", "#2f6fbc"],
  ["Observability", "OB", "Monitoring, logging, tracing, Prometheus, Grafana, Loki, and Jaeger.", "Observability", "#33895d"],
  ["Package Managers", "PM", "Helm and Kubernetes package management notes.", "Package-Managers", "#c27a17"],
  ["Programming", "PR", "Programming references useful for automation work.", "Programming", "#b54763"],
  ["Projects", "PJ", "Hands-on projects and practice ideas.", "Projects", "#168a8a"],
  ["Scripting", "SC", "Scripting notes and automation references.", "Scripting", "#2f6fbc"],
  ["Security", "SE", "Security practices, hardening, and DevSecOps references.", "Security", "#33895d"],
  ["Servers", "SV", "Apache, hosting, headers, SSL, caching, and operations.", "Servers", "#c27a17"],
  ["Version Control", "VC", "Git commands, workflows, and version control references.", "Version-Control", "#b54763"]
];

const resources = [
  ["Kubernetes", "Official Kubernetes Docs", "https://kubernetes.io/docs/"],
  ["Containers", "Docker Docs", "https://docs.docker.com/"],
  ["IaC", "Terraform Docs", "https://developer.hashicorp.com/terraform/docs"],
  ["CI/CD", "GitHub Actions Docs", "https://docs.github.com/en/actions"],
  ["Cloud DevOps", "Azure DevOps Docs", "https://learn.microsoft.com/en-us/azure/devops/"],
  ["AWS", "DevOps on AWS", "https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/introduction-to-devops.html"],
  ["Automation", "Jenkins Docs", "https://www.jenkins.io/doc/"],
  ["Monitoring", "Prometheus Guide", "https://prometheus.io/docs/tutorials/getting_started/"]
];

const projects = [
  project("Host static website on GitHub Pages", "Beginner", ["Git", "GitHub Pages", "HTML", "CSS"], "Publish a static portfolio or learning site from a GitHub repository.", "Practice repository setup, commits, Pages settings, custom paths, and static asset paths.", ["How does GitHub Pages publish static files?", "Why should paths be relative in a GitHub Pages project?"]),
  project("Deploy website on AWS S3 + CloudFront", "Intermediate", ["AWS S3", "CloudFront", "Route 53", "ACM"], "Host a static website using S3 and distribute it through CloudFront.", "Practice buckets, policies, CDN cache behavior, SSL, DNS, and invalidations.", ["Why use CloudFront in front of S3?", "How do you invalidate cached content?"]),
  project("Launch EC2 web server with Nginx/Apache", "Beginner", ["EC2", "Linux", "Nginx", "Apache"], "Create an EC2 instance and serve a web page using a web server.", "Practice SSH, security groups, packages, services, logs, and firewall checks.", ["How do you troubleshoot a web server that is not reachable?", "What is the role of a security group?"]),
  project("Dockerize a simple web application", "Intermediate", ["Docker", "Dockerfile", "Registry"], "Package a web app into a reusable container image.", "Practice Dockerfile layers, image build, environment variables, ports, and registry push.", ["What is the difference between image and container?", "How do you reduce Docker image size?"]),
  project("CI/CD pipeline using GitHub Actions", "Intermediate", ["GitHub Actions", "YAML", "Docker", "Secrets"], "Create a pipeline that builds, tests, and publishes an artifact or image.", "Practice workflow triggers, jobs, steps, caches, secrets, and deployment gates.", ["What is a workflow runner?", "How do you protect secrets in CI/CD?"]),
  project("Kubernetes deployment with service and ingress", "Advanced", ["Kubernetes", "kubectl", "Ingress", "YAML"], "Deploy an application to Kubernetes and expose it through a service and ingress.", "Practice deployments, services, ingress rules, scaling, rollout, and logs.", ["What is the difference between Deployment and Service?", "How do you roll back a failed deployment?"]),
  project("Terraform AWS VPC project", "Advanced", ["Terraform", "AWS VPC", "Subnets", "State"], "Create a basic AWS VPC with public/private subnets using Terraform.", "Practice variables, outputs, state, plans, resources, and modular design.", ["Why is Terraform state important?", "What is the difference between plan and apply?"]),
  project("CloudWatch monitoring and alarms", "Intermediate", ["CloudWatch", "SNS", "EC2", "Dashboards"], "Create metrics, alarms, notifications, and a dashboard for a workload.", "Practice CPU alarms, log groups, dashboards, notification topics, and validation.", ["What metric would you alert on first?", "How do you avoid noisy alerts?"]),
  project("Backup and restore validation project", "Intermediate", ["Backup", "Linux", "AWS Backup", "Runbook"], "Create a backup, restore it, and document proof that restore works.", "Practice backup policy, restore testing, evidence, RPO/RTO, and runbook updates.", ["Why is backup useless without restore testing?", "What is RPO and RTO?"]),
  project("SSL certificate setup and renewal tracking", "Intermediate", ["TLS", "ACM", "Nginx", "Cron"], "Install or request a certificate and track renewal before expiry.", "Practice HTTPS setup, certificate chain, renewal reminders, and browser validation.", ["How do you check certificate expiry?", "What causes certificate chain errors?"]),
  project("Linux server patching checklist", "Beginner", ["Linux", "Package Manager", "Systemd"], "Create a repeatable patching checklist for Linux servers.", "Practice pre-checks, package updates, service restart checks, rollback notes, and logs.", ["What do you check before patching?", "How do you confirm services are healthy after patching?"]),
  project("VM backup restore testing project", "Intermediate", ["Virtualization", "Snapshots", "Backup", "Validation"], "Restore a VM from backup and prove application/data integrity.", "Practice restore workflow, network validation, login checks, application checks, and sign-off.", ["What should be included in restore evidence?", "How do you reduce restore risk?"])
];

function project(title, difficulty, tools, objective, practice, questions) {
  return { title, difficulty, tools, objective, practice, questions, repo: "GitHub repo/demo placeholder" };
}

const videos = [
  ["Linux basics", "Commands, files, permissions, services, logs", "Add video link here"],
  ["Git and GitHub", "Commits, branches, pull requests, merge conflict workflow", "Add video link here"],
  ["AWS basics", "IAM, EC2, S3, VPC, CloudWatch, and cost basics", "Add video link here"],
  ["Docker", "Images, containers, Dockerfile, volumes, and networks", "Add video link here"],
  ["Kubernetes", "Pods, deployments, services, ingress, config maps, and secrets", "Add video link here"],
  ["Terraform", "Providers, state, variables, modules, plan, and apply", "Add video link here"],
  ["CI/CD", "GitHub Actions, Jenkins, build/test/deploy pipelines", "Add video link here"],
  ["Monitoring", "Metrics, logs, dashboards, alert rules, and incident response", "Add video link here"],
  ["Interview preparation", "Scenario answers, HR answers, and project explanation", "Add video link here"]
];

const labs = {
  "aws-labs": [
    ["IAM user and least privilege policy", "Create IAM users/groups, attach limited policies, and test access boundaries."],
    ["EC2 web server", "Launch EC2, configure security group, install Nginx/Apache, and validate HTTP access."],
    ["S3 static website", "Create a bucket, upload files, configure policy, and test static hosting."],
    ["CloudFront distribution", "Connect CloudFront to S3, enable HTTPS, and test cache invalidation."],
    ["VPC basics", "Create VPC, subnets, route tables, internet gateway, and security groups."],
    ["CloudWatch alarm", "Create CPU/log alarms and send notifications through SNS."],
    ["AWS Backup validation", "Create backup plan, restore resource, and record evidence."]
  ],
  "linux-labs": [
    ["File and directory commands", "Practice ls, find, grep, tar, permissions, ownership, and symbolic links."],
    ["User and group management", "Create users, groups, sudo rules, SSH keys, and password policies."],
    ["Systemd services", "Start, stop, enable, inspect, and troubleshoot Linux services."],
    ["Log troubleshooting", "Use journalctl, tail, grep, and log rotation basics."],
    ["Networking checks", "Use ip, ss, curl, dig, ping, traceroute, and firewall tools."],
    ["Shell scripting", "Write scripts with variables, loops, functions, exit codes, and cron."],
    ["Patching checklist", "Create pre-check, update, reboot, validation, and rollback notes."]
  ],
  "container-labs": [
    ["Build a Docker image", "Write a Dockerfile, build image, run container, and inspect logs."],
    ["Docker networking", "Expose ports, use bridge networks, and connect containers."],
    ["Docker volumes", "Persist data and understand bind mounts versus named volumes."],
    ["Kubernetes deployment", "Create deployment YAML and validate pod rollout."],
    ["Service exposure", "Expose pods with ClusterIP, NodePort, or LoadBalancer concepts."],
    ["Ingress routing", "Create ingress rules and test host/path routing."],
    ["Rollback and scaling", "Scale deployments and roll back failed versions."]
  ],
  "terraform-labs": [
    ["Provider setup", "Configure AWS provider, variables, outputs, and formatting."],
    ["EC2 with Terraform", "Provision EC2, security group, key pair, and user data."],
    ["S3 backend", "Store state remotely and understand locking requirements."],
    ["VPC module", "Create reusable VPC/subnet module structure."],
    ["Plan review", "Practice terraform fmt, validate, plan, apply, and destroy."],
    ["State safety", "Inspect state, import resource, and avoid manual drift."],
    ["Environment variables", "Use tfvars for dev/test/prod style configuration."]
  ],
  "cicd-labs": [
    ["GitHub Actions build", "Trigger workflow on push and run lint/test steps."],
    ["Docker image pipeline", "Build and tag image, then push to registry."],
    ["Secrets and environments", "Use secrets, protected branches, and manual approvals."],
    ["Deployment job", "Deploy static site or container after successful tests."],
    ["Rollback step", "Document rollback command and recovery process."],
    ["Jenkins freestyle job", "Create a basic build job and inspect console output."],
    ["Pipeline as code", "Write a Jenkinsfile with stages for build, test, deploy."]
  ],
  "monitoring-labs": [
    ["CloudWatch dashboard", "Create dashboard widgets for EC2 or application metrics."],
    ["Alert rules", "Create threshold alerts and notification channels."],
    ["Log search", "Send logs to a central place and search for errors."],
    ["Prometheus basics", "Run Prometheus, scrape metrics, and query PromQL."],
    ["Grafana dashboard", "Create a dashboard for CPU, memory, and request metrics."],
    ["Incident note", "Document symptoms, timeline, root cause, and follow-up actions."],
    ["Noise reduction", "Tune alert thresholds and reduce duplicate alerts."]
  ]
};

const resumeItems = [
  ["Resume summary", "Write a short DevOps summary mentioning Linux, AWS, Docker, Kubernetes, Terraform, CI/CD, and monitoring."],
  ["Project bullets", "Use action + tool + result: Deployed static website on S3 and CloudFront with HTTPS and cache invalidation."],
  ["LinkedIn headline", "Use a searchable headline: DevOps & Cloud Engineer | AWS | Linux | Docker | Kubernetes | Terraform | CI/CD."],
  ["GitHub profile", "Pin repositories for GitHub Pages, Docker, Terraform VPC, CI/CD, monitoring, and backup validation."],
  ["Interview stories", "Prepare STAR stories for incident handling, deployment failure, rollback, patching, and monitoring alerts."],
  ["Portfolio evidence", "Add screenshots, README steps, architecture diagrams, validation proof, and lessons learned."]
];

const interviewTopics = [
  qaTopic("Linux interview questions", [
    ["How do you check disk usage?", "Use df -h for filesystem usage and du -sh path for directory size."],
    ["How do you check running processes?", "Use ps aux, top, htop, or systemctl status for service processes."],
    ["How do you view service logs?", "Use journalctl -u service-name or application log files under /var/log."],
    ["What is chmod?", "chmod changes file permissions for owner, group, and others."],
    ["What is chown?", "chown changes file or directory ownership."],
    ["How do you troubleshoot high CPU?", "Check top, ps, logs, recent deployments, and process-level usage."],
    ["What is cron?", "Cron schedules recurring commands or scripts."],
    ["How do you check open ports?", "Use ss -tulpn or netstat where available."],
    ["How do you patch Linux safely?", "Take backup/snapshot, review updates, apply, reboot if needed, validate services."],
    ["What is systemd?", "systemd manages Linux services, boot targets, and service dependencies."]
  ]),
  qaTopic("Git/GitHub questions", [
    ["What is Git?", "Git is a distributed version control system for tracking code changes."],
    ["What is a branch?", "A branch is an isolated line of development."],
    ["What is a pull request?", "A pull request proposes changes for review before merging."],
    ["How do you resolve merge conflicts?", "Edit conflicting files, choose correct changes, test, add, and commit."],
    ["What is git rebase?", "Rebase replays commits onto another base to create cleaner history."],
    ["What is .gitignore?", "It prevents selected files from being tracked by Git."],
    ["How do you undo a commit safely?", "Use git revert for shared history."],
    ["What is GitHub Actions?", "A CI/CD automation platform integrated with GitHub repositories."],
    ["What is a tag?", "A tag marks a specific commit, often for releases."],
    ["How do you protect main branch?", "Use branch protection rules, reviews, and required checks."]
  ]),
  qaTopic("AWS questions", [
    ["What is IAM?", "IAM manages identities, permissions, roles, and access policies."],
    ["What is EC2?", "EC2 provides virtual machines in AWS."],
    ["What is S3?", "S3 is object storage for files, backups, static sites, and data."],
    ["What is VPC?", "VPC is an isolated virtual network in AWS."],
    ["What is a security group?", "A stateful virtual firewall attached to resources."],
    ["What is CloudFront?", "A CDN that caches and delivers content close to users."],
    ["What is CloudWatch?", "Monitoring and logging service for metrics, logs, alarms, and dashboards."],
    ["How do you reduce AWS cost?", "Right-size resources, stop unused instances, use budgets, and monitor usage."],
    ["What is an AMI?", "An Amazon Machine Image is a template for EC2 instances."],
    ["What is AWS Backup?", "A managed service for backup policies and restore operations."]
  ]),
  qaTopic("Docker questions", [
    ["What is Docker?", "Docker packages applications and dependencies into containers."],
    ["Image vs container?", "Image is a template; container is a running instance of an image."],
    ["What is Dockerfile?", "A Dockerfile defines image build instructions."],
    ["What is a volume?", "A volume persists data outside the container lifecycle."],
    ["How do you view logs?", "Use docker logs container-name."],
    ["What is port mapping?", "It maps host ports to container ports."],
    ["How do you reduce image size?", "Use small base images, multi-stage builds, and fewer layers."],
    ["What is Docker Compose?", "A tool to define and run multi-container apps."],
    ["How do you scan images?", "Use scanner tools such as Trivy or registry scanning."],
    ["Why avoid running as root?", "It reduces container security risk."]
  ]),
  qaTopic("Kubernetes questions", [
    ["What is a pod?", "The smallest deployable Kubernetes unit, containing one or more containers."],
    ["What is a deployment?", "A controller that manages replica sets and rolling updates."],
    ["What is a service?", "A stable network endpoint for pods."],
    ["What is ingress?", "HTTP/HTTPS routing into cluster services."],
    ["ConfigMap vs Secret?", "ConfigMap stores non-sensitive config; Secret stores sensitive data encoded."],
    ["How do you check pod logs?", "Use kubectl logs pod-name."],
    ["How do you troubleshoot CrashLoopBackOff?", "Check logs, describe pod, image, config, probes, and resources."],
    ["What are probes?", "Liveness/readiness/startup checks for container health."],
    ["How do you scale deployment?", "Use kubectl scale deployment name --replicas=N."],
    ["How do you roll back?", "Use kubectl rollout undo deployment/name."]
  ]),
  qaTopic("Terraform questions", [
    ["What is Terraform?", "An Infrastructure as Code tool for provisioning resources declaratively."],
    ["What is state?", "State maps Terraform configuration to real infrastructure."],
    ["What is provider?", "A plugin that interacts with a platform such as AWS."],
    ["What is terraform plan?", "It previews changes before applying them."],
    ["What is terraform apply?", "It executes planned infrastructure changes."],
    ["Why use modules?", "Modules reuse and organize infrastructure code."],
    ["What is drift?", "Drift happens when real infrastructure differs from Terraform state/config."],
    ["How do you protect state?", "Use remote backend, locking, access control, and encryption."],
    ["What is variable?", "A configurable input for Terraform code."],
    ["What is output?", "A value exposed after Terraform applies resources."]
  ]),
  qaTopic("CI/CD questions", [
    ["What is CI?", "Continuous Integration builds and tests changes frequently."],
    ["What is CD?", "Continuous Delivery/Deployment automates release steps."],
    ["What are pipeline stages?", "Common stages are build, test, scan, package, deploy, and verify."],
    ["How do you secure secrets?", "Use secret stores and avoid printing secrets in logs."],
    ["What is rollback?", "Returning to a known-good version after a failed release."],
    ["What is artifact?", "A build output such as binary, package, or container image."],
    ["How do you speed up pipelines?", "Use caching, parallel jobs, and smaller build contexts."],
    ["What is blue-green deployment?", "A strategy with two environments where traffic switches after validation."],
    ["What is canary deployment?", "A small percentage of users receive the new version first."],
    ["How do you handle failed tests?", "Stop deployment and fix code or test environment before release."]
  ]),
  qaTopic("Monitoring questions", [
    ["What is monitoring?", "Collecting metrics/logs/events to understand system health."],
    ["What is alerting?", "Notifying teams when symptoms cross action thresholds."],
    ["Metric vs log?", "Metric is numeric time-series data; log is event text."],
    ["What is dashboard?", "A visual view of important metrics and system state."],
    ["What is SLO?", "A target for service reliability or performance."],
    ["How do you reduce alert noise?", "Tune thresholds, deduplicate alerts, and alert on user impact."],
    ["What is Prometheus?", "An open-source monitoring system for metrics and alerting."],
    ["What is Grafana?", "A dashboard and visualization tool."],
    ["What is CloudWatch alarm?", "An AWS alarm triggered by metric or log conditions."],
    ["What do you include in an incident report?", "Timeline, impact, root cause, mitigation, and follow-up actions."]
  ]),
  qaTopic("Scenario-based DevOps questions", [
    ["Website is down. What do you check first?", "Confirm impact, DNS, load balancer, instance health, logs, recent changes, and rollback option."],
    ["Deployment failed in production. What next?", "Stop further rollout, inspect logs, roll back if needed, and document root cause."],
    ["Disk is full. How do you respond?", "Identify large files, rotate logs, clean safely, expand disk if needed, and prevent recurrence."],
    ["Pods are pending. Why?", "Check node capacity, taints, affinity, PVCs, image pull, and scheduler events."],
    ["High latency after release. What do you do?", "Compare metrics, check errors, database, resource usage, and roll back if impact is high."],
    ["Backup restore failed. What now?", "Escalate risk, check backup integrity, alternate restore points, and update recovery plan."],
    ["Secrets leaked in Git. What do you do?", "Revoke secret, rotate credentials, remove from history if needed, and audit access."],
    ["Terraform apply changed unexpected resources. Why?", "Review plan, state drift, provider changes, variables, and module updates."],
    ["SSL certificate expired. How do you fix?", "Renew/replace cert, validate chain, reload services, and add expiry monitoring."],
    ["CPU alarm fires repeatedly. What do you do?", "Check process usage, traffic, recent changes, autoscaling, and alert threshold accuracy."]
  ]),
  qaTopic("HR/common interview answers", [
    ["Tell me about yourself.", "Summarize your DevOps learning, tools practiced, projects, and interest in reliable automation."],
    ["Why DevOps?", "DevOps combines automation, cloud, reliability, teamwork, and continuous improvement."],
    ["What are your strengths?", "Learning quickly, troubleshooting calmly, documenting steps, and improving repeatable processes."],
    ["What is your weakness?", "Mention a real but manageable area and how you are improving it with practice."],
    ["Describe a challenge.", "Use STAR: situation, task, action, result, and learning."],
    ["How do you handle pressure?", "Prioritize impact, communicate clearly, use runbooks, and validate fixes."],
    ["How do you learn new tools?", "Read docs, build small labs, document commands, and apply in projects."],
    ["Why should we hire you?", "Connect your project practice, fundamentals, learning discipline, and team mindset."],
    ["Where do you see yourself?", "Growing into a reliable DevOps/cloud engineer who owns automation and production quality."],
    ["Do you have questions?", "Ask about team workflow, deployment process, monitoring, cloud stack, and learning expectations."]
  ])
];

function qaTopic(title, items) {
  return { title, items };
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setActiveNav();
  renderAll();
  setupFilters();
  setupDifficultyFilter();
});

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navLinks");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
}

function renderAll() {
  document.querySelectorAll("[data-render]").forEach((container) => {
    const type = container.dataset.render;
    if (type === "roadmap-preview") renderRoadmapPreview(container);
    if (type === "folder-library") renderFolderLibrary(container);
    if (type === "roadmap-full") renderRoadmapFull(container);
    if (type === "featured-projects") renderProjects(container, projects.slice(0, 4));
    if (type === "projects") renderProjects(container, projects);
    if (type === "resources") renderResources(container);
    if (type === "videos") renderVideos(container);
    if (type === "interview") renderInterview(container);
    if (type === "resume") renderSimpleCards(container, resumeItems, "resume-card");
    if (type && type.endsWith("-labs")) renderSimpleCards(container, labs[type.replace("-labs", "-labs")] || labs[type.replace("-labs", "")] || labs[type], "lab-card");
  });
}

function renderFolderLibrary(container) {
  container.innerHTML = folderCatalog.map(([title, icon, text, folder, color]) => `
    <a class="folder-card filter-item" href="pages/viewer.html?folder=${encodeURIComponent(folder)}" style="--card-color: ${color}">
      <span class="topic-top"><span class="topic-icon">${icon}</span><span class="card-meta">Open folder</span></span>
      <span><h3>${title}</h3><p>${text}</p></span>
      <span class="card-link">View notes</span>
    </a>
  `).join("");
}

function renderRoadmapPreview(container) {
  container.innerHTML = roadmap.map((item) => `
    <a class="topic-card filter-item" href="${topicHref(item)}" style="--card-color: ${item.color}">
      <span class="topic-top"><span class="topic-icon">${item.icon}</span><span class="card-meta">Roadmap</span></span>
      <span><h3>${item.title}</h3><p>${item.text}</p></span>
      <span class="card-link">Open topic</span>
    </a>
  `).join("");
}

function renderRoadmapFull(container) {
  container.innerHTML = roadmap.map((item, index) => `
    <li class="filter-item">
      <span class="step-number">${index + 1}</span>
      <span><h3>${item.title}</h3><p>${item.text}</p><a class="card-link" href="${topicHref(item)}">Open related content</a></span>
    </li>
  `).join("");
}

function topicHref(item) {
  const map = {
    "Linux basics": "linux.html",
    "Docker": "docker-kubernetes.html",
    "Kubernetes": "docker-kubernetes.html",
    "Terraform": "terraform.html",
    "CI/CD": "cicd.html",
    "Monitoring/logging": "monitoring.html",
    "AWS core services": "aws-labs.html",
    "Real projects": "projects.html",
    "Interview preparation": "interview.html"
  };
  return map[item.title] || `pages/viewer.html?folder=${encodeURIComponent(item.folder)}`;
}

function renderProjects(container, list) {
  container.innerHTML = list.map((item) => `
    <article class="project-card filter-item" data-difficulty="${item.difficulty}">
      <span class="difficulty ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
      <h3>${item.title}</h3>
      <div class="tag-list">${item.tools.map((tool) => `<span class="pill">${tool}</span>`).join("")}</div>
      <p><strong>Objective:</strong> ${item.objective}</p>
      <p><strong>Practice:</strong> ${item.practice}</p>
      <p><strong>Repo/Demo:</strong> ${item.repo}</p>
      <ul>${item.questions.map((q) => `<li>${q}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderResources(container) {
  container.innerHTML = resources.map(([category, title, url]) => `
    <a class="resource-card" href="${url}" target="_blank" rel="noreferrer">
      <span>${category}</span><strong>${title}</strong>
    </a>
  `).join("");
}

function renderVideos(container) {
  container.innerHTML = videos.map(([title, text, link]) => `
    <article class="video-card filter-item">
      <div class="video-placeholder">Add video link here</div>
      <span>${title}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="card-link" href="#" aria-label="${title} placeholder">${link}</a>
    </article>
  `).join("");
}

function renderSimpleCards(container, items, className) {
  container.innerHTML = items.map(([title, text]) => `
    <article class="${className} filter-item">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderInterview(container) {
  container.innerHTML = interviewTopics.map((topic) => `
    <section class="qa-topic">
      <h2>${topic.title}</h2>
      <div class="interview-grid">
        ${topic.items.map(([question, answer]) => `
          <article class="qa-card filter-item">
            <h3>${question}</h3>
            <p>${answer}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function setupFilters() {
  document.querySelectorAll("[data-filter-input]").forEach((input) => {
    input.addEventListener("input", () => filterItems(input.dataset.filterInput, input.value));
  });
}

function filterItems(containerId, value) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const query = value.trim().toLowerCase();
  container.querySelectorAll(".filter-item").forEach((item) => {
    item.classList.toggle("hidden", query && !item.textContent.toLowerCase().includes(query));
  });
}

function setupDifficultyFilter() {
  const filter = document.getElementById("difficultyFilter");
  const grid = document.getElementById("projectGrid");
  if (!filter || !grid) return;
  filter.addEventListener("change", () => {
    const selected = filter.value;
    grid.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("hidden", selected && card.dataset.difficulty !== selected);
    });
  });
}
