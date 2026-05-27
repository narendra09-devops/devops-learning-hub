# DevOps & Cloud Engineer Learning Hub

GitHub Pages website:

https://narendra09-devops.github.io/devops-learning-hub/index.html

This repository is a beginner-friendly DevOps and cloud engineering learning website. It organizes roadmap topics, hands-on projects, AWS labs, Linux practice, Docker/Kubernetes tasks, Terraform, CI/CD, monitoring, interview preparation, video placeholders, and career profile guidance.

## Website Pages

- `index.html` - Homepage with hero banner, roadmap cards, featured projects, learning websites, and calls to action.
- `roadmap.html` - Step-by-step DevOps roadmap.
- `projects.html` - Practical project cards with difficulty, tools, objectives, practice outcomes, and interview questions.
- `aws-labs.html` - AWS practice labs.
- `linux.html` - Linux administration and scripting practice.
- `docker-kubernetes.html` - Container and Kubernetes practice.
- `terraform.html` - Infrastructure as Code practice.
- `cicd.html` - GitHub Actions and Jenkins pipeline practice.
- `monitoring.html` - Monitoring, logging, and alerting practice.
- `interview.html` - Topic-wise interview questions and short answers.
- `videos.html` - Placeholder video reference cards.
- `resume-linkedin.html` - Resume, LinkedIn, GitHub, and portfolio checklist.
- `contact.html` - Static contact/connect page.

## Existing Learning Content

The original learning folders are still kept in the repository, including:

- `Linux/`
- `Containers/`
- `Cloud-Platforms/`
- `CI-CD-Pipelines/`
- `Infrastructure-Provisioning/`
- `Observability/`
- `Interview-Questions/`
- `Version-Control/`
- and other topic folders.

The existing `pages/viewer.html` remains available for rendering folder README files.

## How To Update

Most repeated cards and lists are generated from `script.js`.

Update:

- Roadmap steps in the `roadmap` array.
- Project cards in the `projects` array.
- Learning resources in the `resources` array.
- Interview question topics in the `interviewTopics` array.
- Video placeholders in the `videos` array.
- Lab cards in the `labs` object.

Style changes live in:

- `style.css`

Images and website assets live in:

- `assets/`

## GitHub Pages Notes

This site uses only static HTML, CSS, and JavaScript. It does not require a backend server and is compatible with GitHub Pages from the repository root.

After changes:

```bash
git add .
git commit -m "Update learning hub website"
git push origin main
```

GitHub Pages may take a few minutes to refresh after a push.
