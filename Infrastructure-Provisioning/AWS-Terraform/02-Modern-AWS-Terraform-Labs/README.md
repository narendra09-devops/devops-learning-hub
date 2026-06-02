# Modern AWS Terraform Labs

These labs follow modern Terraform and AWS best practices.

## Authentication

Terraform should use AWS credentials from:

- AWS CLI Profile (`aws configure`)
- IAM Roles
- Environment Variables
- AWS SSO

Do NOT hardcode credentials in Terraform code.

## Example Provider Configuration

provider "aws" {
  region = var.AWS_Region
}

## Recommended Workflow

aws configure

terraform init

terraform plan

terraform apply

## Security Best Practices

Avoid:

- access_key = "..."
- secret_key = "..."

Use IAM Roles and AWS Profiles whenever possible.
