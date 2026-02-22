et -euo pipefail

PREFIX="${PREFIX:-/usr/local}"
ZSH_SITE="${ZSH_SITE:-$PREFIX/share/zsh/site-functions}"
BIN_DIR="$PREFIX/bin"

echo "Installing git-pr and git-issue to: $BIN_DIR"
sudo install -m 0755 bin/git-pr "$BIN_DIR/git-pr"
sudo install -m 0755 bin/git-issue "$BIN_DIR/git-issue"

echo "Installing zsh completion to: $ZSH_SITE"
sudo mkdir -p "$ZSH_SITE"
sudo install -m 0644 completions/zsh/_ghxgit "$ZSH_SITE/_ghxgit"

echo
echo "Done."
echo "If needed, ensure your ~/.zshrc has:"
echo "  autoload -Uz compinit && compinit"
echo "Then restart your shell: exec zsh"
