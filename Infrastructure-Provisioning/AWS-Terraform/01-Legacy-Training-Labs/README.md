# Legacy Terraform Training Labs

These labs demonstrate older Terraform learning patterns where AWS credentials may be shown as variables or placeholders.

This is useful for understanding:
- Terraform provider configuration
- variables.tf
- terraform.tfvars
- input variables and outputs

## Important Security Note

Do not use real AWS access keys or secret keys in Terraform files.

For real projects, use the modern approach:

- AWS CLI profile using `aws configure`
- IAM Role
- Environment variables
- AWS SSO

Modern labs are available in:

`02-Modern-AWS-Terraform-Labs`
