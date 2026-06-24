#!/usr/bin/env bash
set -euo pipefail

IDENTITY="${1:-deployer}"
PUBLIC_KEY="$(stellar keys public-key "$IDENTITY")"

echo "Funding $IDENTITY ($PUBLIC_KEY) on testnet..."
stellar keys fund "$IDENTITY" -n testnet
echo "Done."
