resource "aws_s3_bucket" "conversion_bucket" {
  bucket = "unit-conversion-service"
}

resource "aws_s3_bucket_public_access_block" "access_bucket" {
  bucket = aws_s3_bucket.conversion_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.conversion_bucket.id
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "PublicReadGetObject",
          "Effect" : "Allow",
          "Principal" : "*",
          "Action" : "s3:GetObject",
          "Resource" : "arn:aws:s3:::${aws_s3_bucket.conversion_bucket.id}/*"
        }
      ]
    }
  )
  depends_on = [
   aws_s3_bucket_public_access_block.access_bucket
  ]
}

# resource "aws_s3_object" "file" {
#   for_each     = fileset(path.module, "../src/site/**/*")

#   bucket       = aws_s3_bucket.conversion_bucket.id
#   key          = each.value  // replace(each.value, "/^content//", "")
#   source       = each.value
#   content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
# }

resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.conversion_bucket.id

  index_document {
    suffix = "index.html"
  }
}
