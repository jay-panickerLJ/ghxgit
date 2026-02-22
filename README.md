# ghxgit - GitHub eXperience CLI

A powerful command-line tool for searching and jumping to GitHub PRs, issues, branches, and commits directly from your terminal.

## Features

- 🔍 **Smart Search** - Search across PRs, issues, branches, and commits in order of relevance
- 🌐 **Browser Integration** - Open results directly in your browser with `--open`
- 🚀 **Quick Checkout** - Check out PR branches locally with `--checkout`
- 🎯 **Type Filtering** - Limit searches to specific types (PR, issue, branch, commit)
- ⚡ **Fast** - Built with bash for minimal overhead
- 📝 **ZSH Completions** - Full shell completion support

## Installation

### Prerequisites

- **Git** - Obviously!
- **gh (GitHub CLI)** - [Install guide](https://cli.github.com)
- **jq** - JSON processor

### Install on Linux/macOS

```bash
# Clone the repository
git clone https://github.com/jay-panickerLJ/ghxgit.git
cd ghxgit

# Run the installer
bash install.sh
```

### Manual Installation

```bash
# Copy the main script
sudo install -m 0755 bin/ghx /usr/local/bin/ghx

# Copy ZSH completions
sudo mkdir -p /usr/local/share/zsh/site-functions
sudo install -m 0644 completions/zsh/_ghx /usr/local/share/zsh/site-functions/_ghx
```

## Quick Start

### Basic Usage

Search for a PR or issue and print the best match:

```bash
# Search by ID
ghx jump OPS-123

# Search by description
ghx jump "increase timeout"

# Output:
# [pr]       Increase timeout during auth
# Number:    456
# Branch:    feature/increase-timeout
# URL:       https://github.com/owner/repo/pull/456
```

### Open in Browser

```bash
ghx jump OPS-123 --open
# Automatically opens the GitHub page in your default browser
```

### Checkout Branch

```bash
ghx jump OPS-123 --checkout
# Checks out the PR branch locally (requires the PR has a branch)
```

### Filter by Type

```bash
# Only search PRs
ghx jump OPS-123 --type pr

# Only search issues
ghx jump "performance" --type issue

# Only search branches
ghx jump "feature" --type branch

# Only search commits
ghx jump "abc1234" --type commit
```

### Combine Options

```bash
# Search specifically for a PR and open it
ghx jump OPS-123 --type pr --open

# Find a branch and checkout
ghx jump "develop" --type branch --checkout
```

## Search Order (Default)

When no `--type` is specified, ghxgit searches in this order and returns the first match:

1. **Pull Requests** - by PR number or in title/body
2. **Issues** - by issue ID or in title/body
3. **Branches** - by branch name
4. **Commits** - by commit hash or message

## Command Reference

### ghx jump

```
USAGE
    ghx jump <query> [OPTIONS]

QUERY
    The search term (PR number, issue ID, branch name, etc.)

OPTIONS
    --open               Open the result in your default browser
    --checkout          Checkout the matched branch/PR locally
    --type <type>       Limit search to type: pr, issue, branch, commit
    --verbose (-v)      Show debug output
    --help              Show help message
    --version           Show version information
```

## Examples

### Search Scenarios

```bash
# Find a specific PR by number
ghx jump 123

# Find an issue by Jira-style ID
ghx jump OPS-456

# Find by description
ghx jump "fix: null pointer"

# Find and open immediately
ghx jump OPS-789 --open

# Find a branch and checkout with one command
ghx jump "feature/dashboard" --type branch --checkout

# Enable debug mode to see what's happening
ghx jump OPS-123 -v
```

### Workflow Examples

#### Quick PR Checkout and Review

```bash
# Find the PR and checkout in one command
ghx jump OPS-123 --checkout

# Your local branch is now checked out
git log --oneline -5
git diff main..
```

#### Open Multiple Results

```bash
# Find and open the PR
ghx jump OPS-123 --open

# Open the issue separately
ghx jump OPS-123 --type issue --open
```

#### Search Across Repository

```bash
# Fuzzy search by description
ghx jump "authentication middleware" --type pr --open
```

## Configuration

### Custom Installation Path

```bash
PREFIX=/opt/ghxgit bash install.sh
```

### ZSH Shell Configuration

Ensure your `~/.zshrc` has completion enabled:

```bash
# Add to ~/.zshrc if not already present
autoload -Uz compinit && compinit

# Then reload your shell
exec zsh
```

## Troubleshooting

### "Not a git repository"

Make sure you're running `ghx jump` from within a Git repository with a GitHub remote.

```bash
git remote -v
# Should show origin pointing to a GitHub URL
```

### "gh: command not found"

Install the GitHub CLI:

```bash
# macOS
brew install gh

# Ubuntu/Debian
curl -fsSLo /usr/share/keyrings/githubcli-archive-keyring.gpg https://cli.github.com/packages/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages jammy main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

### "jq: command not found"

Install jq:

```bash
# macOS
brew install jq

# Ubuntu/Debian
sudo apt install jq

# Fedora
sudo dnf install jq
```

### No Results Found

Try:
1. Check your GitHub CLI is authenticated: `gh auth status`
2. Make sure you're in a GitHub repo: `git remote -v`
3. Use `--verbose` flag to see what's happening: `ghx jump OPS-123 -v`
4. Try filtering by type: `ghx jump OPS-123 --type pr`

## API Usage

ghxgit uses the GitHub CLI (`gh`) under the hood, which uses the GitHub REST and GraphQL APIs. Your authentication is handled through `gh auth login`.

## Performance

- Initial search: ~1-2 seconds
- Cached API results: ~0.5-1 second
- Browser open: ~0.5 seconds

## Limitations

- Requires authenticated GitHub CLI to access private repositories
- Search is limited to the current repository only
- Cannot search across multiple repositories (for now)
- Commit search limited to recent commits by default

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE file for details

## Inspiration

Built as the ultimate GitHub experience tool for developers who live in the terminal.

---

**Questions?** Open an issue on [GitHub](https://github.com/jay-panickerLJ/ghxgit)
