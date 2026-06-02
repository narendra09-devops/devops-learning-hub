# AWS Access Key Variable Declaration

# AWS Secret Key Variable Declaration

# AMI Mapping Variable Declaration
variable "AMIS" {
    type    = map
    default = {
        us-east-1 = "ami-0f40c8f97004632f9"
        us-east-2 = "ami-05692172625678b4e"
        us-west-2 = "ami-0352d5a37fb4f603f"
        us-west-1 = "ami-0f40c8f97004632f9"
    }
}

# Path to Private Key Variable Declaration
variable "PATH_TO_PRIVATE_KEY" {
    default = "levelup_key"
}

# Path to Public Key Variable Declaration
variable "PATH_TO_PUBLIC_KEY" {
    default = "levelup_key.pub"
}

# Instance Username Variable Declaration
variable "INSTANCE_USERNAME" {
    default = "ubuntu"
}

