/*
data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.unit_lambda.function_name
  principal     = "apigateway.amazonaws.com"
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = "${path.module}/../src/conversionFactors.mjs"
  output_path = "lambda_function_payload.zip"
}

resource "aws_lambda_function" "unit_lambda" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_function_payload.zip"
  function_name = "unit-lambda-aws"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "conversionFactors.handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "nodejs18.x"

}

resource "aws_lambda_alias" "test_lambda_alias" {
  name             = "the_alias"
  description      = "a sample description"
  function_name    = aws_lambda_function.unit_lambda.arn
  function_version = "$LATEST"
}

//API RESTful 
resource "aws_api_gateway_rest_api" "unit_api" {
  name = "unit_api"
}

resource "aws_api_gateway_resource" "unit_api_resource" {
  parent_id   = aws_api_gateway_rest_api.unit_api.root_resource_id
  path_part   = "unit"  
  rest_api_id = aws_api_gateway_rest_api.unit_api.id
}
//ascouaiet method w recourse above it
resource "aws_api_gateway_method" "unit_api_method" {
  authorization = "NONE"
  http_method   = "POST"
  resource_id   = aws_api_gateway_resource.unit_api_resource.id
  rest_api_id   = aws_api_gateway_rest_api.unit_api.id
}
resource "aws_api_gateway_integration" "unit_api_integration" {
  http_method = aws_api_gateway_method.unit_api_method.http_method
  resource_id = aws_api_gateway_resource.unit_api_resource.id
  rest_api_id = aws_api_gateway_rest_api.unit_api.id
  integration_http_method = "POST"
  type        = "AWS" //MOCK?
  uri         = aws_lambda_function.unit_lambda.invoke_arn
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id = aws_api_gateway_rest_api.unit_api.id
  resource_id = aws_api_gateway_resource.unit_api_resource.id
  http_method = aws_api_gateway_method.unit_api_method.http_method
  status_code = "200"
}
resource "aws_api_gateway_deployment" "unit_api_deployment" {
  rest_api_id = aws_api_gateway_rest_api.unit_api.id

  triggers = {
    # NOTE: The configuration below will satisfy ordering considerations,
    #       but not pick up all future REST API changes. More advanced patterns
    #       are possible, such as using the filesha1() function against the
    #       Terraform configuration file(s) or removing the .id references to
    #       calculate a hash against whole resources. Be aware that using whole
    #       resources will show a difference after the initial implementation.
    #       It will stabilize to only change when resources change afterwards.
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.unit_api_resource.id,
      aws_api_gateway_method.unit_api_method.id,
      aws_api_gateway_integration.unit_api_integration.id,
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_api_gateway_stage" "unit_api_stage" {
  deployment_id = aws_api_gateway_deployment.unit_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.unit_api.id
  stage_name    = "stage"
}
resource "aws_s3_bucket" "metric_conversions_bucket" {
  bucket = "metric-conversions-bucket-aws"

  tags = {
    Name        = "Metric Conversions"
    Environment = "Dev"
  }
}

 */