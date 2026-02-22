# ghxgit - GitHub eXperience CLI

A powerful command-line tool for searching and jumping to GitHub PRs, issues, branches, and commits directly from your terminal. Plus integrated git workflow helpers for branches, pushing, and pulling.

## Features

- 🔍 **Smart Search** - Search across PRs, issues, branches, and commits in order of relevance
- 🌐 **Browser Integration** - Open results directly in your browser with `--open`
- 🚀 **Quick Checkout** - Check out PR branches locally with `--checkout`
- 🎯 **Type Filtering** - Limit searches to specific types (PR, issue, branch, commit)
- 🌳 **Branch Management** - List, switch, create, and delete branches easily
- 📤 **Smart Push** - Push with intelligent options (safe force push, upstream tracking)
- 📥 **Pull Helper** - Pull with rebase option and sync commands
- 🔄 **Git Sync** - Fetch and pull all changes in one command
- 💡 **Git Status** - Quick status check with ahead/behind commits
- 📝 **ZSH Completions** - Full shell completion support
- ⚡ **Fast** - Built with bash for minimal overhead

## Installation

### Prerequisites

- **Git** - Obviously!
- **gh (GitHub CLI)** - [Install guide](https://cli.github.com)
- **jq** - JSON processor
- **fzf** (optional) - [Install guide](https://github.com/junegunn/fzf) - For interactive branch selection

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

## Git Workflow Commands

ghxgit includes powerful git workflow commands to complement your GitHub operations.

### Branch Management

#### List Branches

```bash
ghx branch list
# Shows all local and remote branches with color highlighting
```

Output:
```
Local branches:
===============
* main (abc1234)
  develop (def5678)
  feature/dashboard (ghi9012)

Remote branches:
================
  origin/main
  origin/develop
```

#### Switch Branches

```bash
# List and select interactively
ghx branch switch

# Fuzzy search for a branch
ghx branch switch feature
# Finds "feature/dashboard" and switches

# Exact match
ghx branch switch main

# Works with fzf for interactive selection if available
# (displays branch commit previews)
```

#### Create Branch

```bash
# Create from main
ghx branch create feature/my-feature

# Create from specific source
ghx branch create feature/new-feature develop
```

#### Delete Branch

```bash
# Delete with confirmation
ghx branch delete old-feature
# Asks for confirmation before deleting
```

#### Show Current Branch

```bash
ghx branch
# Displays current branch name
```

### Push & Pull Commands

#### Smart Push

```bash
# Push current branch
ghx push

# Push specific branch
ghx push develop

# Set upstream on first push
ghx push -u

# Safe force push (recommended over --force)
ghx push --force-with-lease

# Force push (with confirmation)
ghx push --force

# Skip pre-push hooks
ghx push --no-verify
```

#### Pull Changes

```bash
# Standard pull
ghx pull

# Pull with rebase
ghx pull --rebase
```

#### Sync with Remote

```bash
# Fetch all remotes and pull
ghx sync
# Equivalent to: git fetch --all && git pull
```

### Status & History

#### Quick Status

```bash
ghx status
# Shows:
# - Current branch
# - Modified files
# - Commits ahead/behind origin
```

Output:
```
Branch: feature/dashboard
Status:
 M src/dashboard.js
 A src/components/Widget.js

Commits:
  📤 2 commit(s) ahead of origin
```

#### View Recent Commits

```bash
# Show last 10 commits
ghx log

# Show last 20 commits
ghx log 20
```

## Command Reference

### ghx jump

```
USAGE
    ghx jump <query> [OPTIONS]

QUERY
    The search term (PR number, issue ID, branch name, commit hash, etc.)

OPTIONS
    --open               Open the result in your default browser
    --checkout          Checkout the matched branch/PR locally
    --type <type>       Limit search to type: pr, issue, branch, commit
    --verbose (-v)      Show debug output
    --help              Show help message
```

### ghx branch

```
USAGE
    ghx branch [SUBCOMMAND] [OPTIONS]

SUBCOMMANDS
    list                List all branches (local and remote)
    current             Show current branch name
    switch <name>       Switch to a branch (supports fuzzy matching)
    delete <name>       Delete a local branch (requires confirmation)
    create <name>       Create a new branch from main
    
    (no subcommand)     Show current branch

OPTIONS (for switch)
    <name>              Branch name (partial match supported)
```

### ghx push

```
USAGE
    ghx push [BRANCH] [OPTIONS]

SERVICE
    Safely pushes code with helpful options

OPTIONS
    --force-with-lease  Force push safely (recommended)
    --force             Force push (shows confirmation)
    -u                  Set upstream (origin)
    --no-verify         Skip pre-push hooks
    
BRANCH (optional)
    Defaults to current branch if not specified
```

### ghx pull

```
USAGE
    ghx pull [OPTIONS]

OPTIONS
    --rebase            Pull with rebase instead of merge
```

### ghx sync

```
USAGE
    ghx sync

FEATURES
    - Fetches all remotes
    - Prunes deleted branches
    - Pulls latest changes
    Equivalent to: git fetch --all --prune && git pull
```

### ghx status

```
USAGE
    ghx status

SHOWS
    - Current branch
    - Modified/staged files
    - Commits ahead/behind origin
```

### ghx log

```
USAGE
    ghx log [LIMIT]

LIMIT (optional)
    Number of commits to show (default: 10)
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

#### Work on a PR

```bash
# Search and checkout PR in one command
ghx jump OPS-123 --checkout

# View the files changed
ghx status

# Review recent commits
ghx log 5

# Push your changes
ghx push
```

#### Create and manage branches

```bash
# Create a new feature branch
ghx branch create feature/new-widget

# List all branches to see where you are
ghx branch list

# Make some changes...
ghx status

# Push and set upstream
ghx push -u

# When done, switch back to main
ghx branch switch main

# Delete the feature branch
ghx branch delete feature/new-widget
```

#### Keep in sync with team

```bash
# See what's on the remote
ghx sync

# Check if you're behind
ghx status

# View recent changes
ghx log

# Switch to the latest develop
ghx branch switch develop
```

#### Interactive branch switching

```bash
# List branches with commit info and select interactively
ghx branch switch
# (shows a fuzzy-searchable list if fzf is installed)
```

#### Quick feature review and merge workflow

```bash
# Find the PR
ghx jump "authentication" --type pr

# Jump to and checkout the branch
ghx jump "authentication" --checkout

# Test/review the code
ghx log 5

# Switch back to main
ghx branch switch main

# Merge (or let GitHub handle via PR)
git merge feature/authentication
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
