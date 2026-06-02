terraform {
    backend "s3-bucket" {
        bucket = "remote-tfstate19"
        key    = "development/terraform_state"
        region = "us-east-2"
    }
}