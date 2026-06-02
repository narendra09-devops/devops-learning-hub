#This file provides values for variables defined in variables.tf. 
#It's useful for specifying environment-specific configurations like production or staging.

# This file contains the actual values for the variables, especially sensitive information like your AWS credentials. 
# This file should be kept secure.

#Declare the access key in this seceret file.
# This file contains the actual values for the variables, especially sensitive information like your AWS credentials.
# This file should be kept secure.

#Declare the access key in this seceret file.
# terraform.tfvars

AWS_ACCESS_KEY = "YOUR_AWS_ACCESS_KEY"           #your_access_key_here
AWS_SECRET_KEY = "YOUR_AWS_SECRET_KEY"      #your_secret_key_here
AWS_Region     = "us-east-2"                      # Or any other region you prefer

ami_id         = "ami-05803413c51f242b7"  # You can override the AMI ID here if needed
instance_type  = "t2.micro"               # You can override the instance type here if needed




