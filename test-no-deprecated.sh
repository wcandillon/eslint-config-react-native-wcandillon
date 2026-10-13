#!/bin/bash

# Test that a call to a deprecated API is reported

echo "Testing @typescript-eslint/no-deprecated..."

output=$(npx eslint tests/Deprecated.tsx --no-ignore 2>&1)

if echo "$output" | grep -q "salute.*is deprecated.*@typescript-eslint/no-deprecated"; then
  echo "✅ The deprecated call is reported."
  exit 0
else
  echo "❌ The deprecated call in tests/Deprecated.tsx was not reported."
  echo "$output"
  exit 1
fi
