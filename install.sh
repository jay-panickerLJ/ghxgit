#!/usr/bin/env bash
set -euo pipefail

PREFIX="${PREFIX:-/usr/local}"
ZSH_SITE="${ZSH_SITE:-$PREFIX/share/zsh/site-functions}"
BIN_DIR="$PREFIX/bin"

# Check dependencies
check_dependencies() {
    local missing=()
    
    command -v gh >/dev/null 2>&1 || missing+=("gh (GitHub CLI)")
    command -v jq >/dev/null 2>&1 || missing+=("jq")
    command -v git >/dev/null 2>&1 || missing+=("git")
    
    if [[ ${#missing[@]} -gt 0 ]]; then
        echo "Error: Missing required dependencies:"
        for dep in "${missing[@]}"; do
            echo "  - $dep"
        done
        echo ""
        echo "Please install the missing dependencies:"
        echo "  macOS:  brew install gh jq"
        echo "  Linux:  sudo apt install gh jq (Debian/Ubuntu)"
        echo "          sudo dnf install gh jq (Fedora)"
        return 1
    fi
}

echo "ghxgit Installer"
echo "================"
echo ""
echo "Checking dependencies..."
if ! check_dependencies; then
    exit 1
fi
echo "✓ All dependencies found"
echo ""

echo "Installing ghx to: $BIN_DIR"
sudo install -m 0755 bin/ghx "$BIN_DIR/ghx"
echo "✓ ghx installed successfully"
echo ""

echo "Installing zsh completion to: $ZSH_SITE"
sudo mkdir -p "$ZSH_SITE"
sudo install -m 0644 completions/zsh/_ghx "$ZSH_SITE/_ghx"
echo "✓ ZSH completion installed"
echo ""

echo "Installation complete!"
echo ""
echo "To enable ZSH completions, ensure your ~/.zshrc has:"
echo "  autoload -Uz compinit && compinit"
echo ""
echo "Then restart your shell:"
echo "  exec zsh"
echo ""
echo "Try it out:"
echo "  cd to a GitHub repository"
echo "  ghx jump --help"
