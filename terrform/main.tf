terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>5.0"
    }
  }

  required_version = ">=0.14.9"
    backend "s3" {
       key    = "terraform.tfstate" 
       bucket = "tf-flexion-state"
       region = "us-east-2"
   }
}

provider "aws" {
  region  = "us-east-2"
}
