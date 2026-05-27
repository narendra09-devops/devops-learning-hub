const topics = [
  { title: "Architecture Diagrams", folder: "Architecture-Diagrams", icon: "AD", color: "#2f6fbc", description: "Design references, system diagrams, and architecture notes." },
  { title: "Certifications", folder: "Certifications", icon: "CE", color: "#3d8b57", description: "Certification paths, exam notes, and preparation material." },
  { title: "Cheatsheets", folder: "Cheatsheets", icon: "CS", color: "#b7791f", description: "Fast command references and quick lookup guides." },
  { title: "CI/CD Pipelines", folder: "CI-CD-Pipelines", icon: "CI", color: "#b54763", description: "Jenkins, GitHub Actions, GitLab CI, CircleCI, and Travis CI." },
  { title: "Cloud Platforms", folder: "Cloud-Platforms", icon: "CL", color: "#168a8a", description: "AWS, Azure, GCP, and DigitalOcean learning notes." },
  { title: "Containers", folder: "Containers", icon: "CO", color: "#2f6fbc", description: "Docker, Kubernetes, Minikube, and container projects." },
  { title: "Data Streaming", folder: "Data-Streaming", icon: "DS", color: "#b7791f", description: "Kafka and streaming platform concepts." },
  { title: "Databases", folder: "Databases", icon: "DB", color: "#3d8b57", description: "Database learning notes for DevOps workflows." },
  { title: "DevOps", folder: "DevOps", icon: "DO", color: "#168a8a", description: "Core DevOps concepts, CNCF notes, and fundamentals." },
  { title: "GitOps", folder: "GitOps", icon: "GO", color: "#b54763", description: "Argo CD, sync strategies, app-of-apps, and GitOps practices." },
  { title: "How-To Guides", folder: "How-To-Guides", icon: "HT", color: "#2f6fbc", description: "Step-by-step installation and setup guides." },
  { title: "Images", folder: "Images", icon: "IM", color: "#3d8b57", description: "Diagrams and reference images used across notes." },
  { title: "Infrastructure Provisioning", folder: "Infrastructure-Provisioning", icon: "IP", color: "#b7791f", description: "Terraform, Ansible, CloudFormation, Chef, and Puppet." },
  { title: "Interview Questions", folder: "Interview-Questions", icon: "IQ", color: "#b54763", description: "DevOps interview questions, notes, and preparation lists." },
  { title: "Linux", folder: "Linux", icon: "LX", color: "#168a8a", description: "Linux commands, OS concepts, processes, files, and shell scripting." },
  { title: "Networking", folder: "Networking", icon: "NW", color: "#2f6fbc", description: "Routing, switching, protocols, PDFs, troubleshooting, and services." },
  { title: "Observability", folder: "Observability", icon: "OB", color: "#3d8b57", description: "Monitoring, logging, tracing, Prometheus, Grafana, Loki, and Jaeger." },
  { title: "Package Managers", folder: "Package-Managers", icon: "PM", color: "#b7791f", description: "Helm and Kubernetes package management notes." },
  { title: "Programming", folder: "Programming", icon: "PR", color: "#b54763", description: "Programming references useful for automation work." },
  { title: "Projects", folder: "Projects", icon: "PJ", color: "#168a8a", description: "Hands-on projects and practice ideas." },
  { title: "Scripting", folder: "Scripting", icon: "SC", color: "#2f6fbc", description: "Scripting notes and automation references." },
  { title: "Security", folder: "Security", icon: "SE", color: "#3d8b57", description: "Security practices, hardening, and DevSecOps references." },
  { title: "Servers", folder: "Servers", icon: "SV", color: "#b7791f", description: "Apache, hosting, headers, SSL, caching, and server operations." },
  { title: "Version Control", folder: "Version-Control", icon: "VC", color: "#b54763", description: "Git commands, workflows, and version control references." }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

function renderCards(filter = "") {
  const query = filter.trim().toLowerCase();
  const matches = topics.filter((topic) => {
    return [topic.title, topic.folder, topic.description].join(" ").toLowerCase().includes(query);
  });

  cardsContainer.innerHTML = matches.map((topic) => `
    <a class="card" href="./pages/viewer.html?folder=${encodeURIComponent(topic.folder)}" style="--card-color: ${topic.color}">
      <span class="card-top">
        <span class="card-icon" aria-hidden="true">${topic.icon}</span>
        <span class="card-meta">Open folder</span>
      </span>
      <span>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </span>
      <span class="card-cta">View notes</span>
    </a>
  `).join("");

  emptyState.hidden = matches.length > 0;
}

searchInput.addEventListener("input", () => renderCards(searchInput.value));
renderCards();