#!/bin/bash

# Test that Prettier integration works with ESLint

echo "Testing Prettier integration..."

# Copy the badly formatted file to a temp location
cp tests/BadFormatting.tsx tests/BadFormatting.tmp.tsx

# Run eslint --fix on the temp file
npx eslint tests/BadFormatting.tmp.tsx --fix --no-ignore

# Check if the file was modified (prettier should have formatted it)
if ! diff -q tests/BadFormatting.tsx tests/BadFormatting.tmp.tsx > /dev/null 2>&1; then
  echo "✅ Prettier integration works! File was formatted correctly."
  # Show a sample of the changes
  echo "Sample of formatting changes:"
  diff tests/BadFormatting.tsx tests/BadFormatting.tmp.tsx | head -20
  rm tests/BadFormatting.tmp.tsx
  exit 0
else
  echo "❌ Prettier integration failed! File was not formatted."
  rm tests/BadFormatting.tmp.tsx
  exit 1
fi