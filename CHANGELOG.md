# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-02-22

### Added
- **Branch Management Commands**:
  - `ghx branch list` - List all local and remote branches with color highlighting
  - `ghx branch current` - Show current branch name
  - `ghx branch switch <name>` - Switch to branch with fuzzy search support
  - `ghx branch delete <name>` - Delete local branch with confirmation
  - `ghx branch create <name>` - Create new branch from main
  
- **Git Workflow Commands**:
  - `ghx push` - Smart push with safe options (--force-with-lease, -u, etc.)
  - `ghx pull` - Pull with optional rebase
  - `ghx sync` - Fetch all remotes and pull in one command
  - `ghx status` - Show status with ahead/behind commit counts
  - `ghx log` - Show recent commits (customizable limit)

- **Enhanced Features**:
  - fzf integration for interactive branch selection
  - Fuzzy branch name matching for quick switching
  - Smart force push with confirmation prompts
  - Color-coded branch output
  - Detailed git status with remote tracking info
  - Safe branch deletion with confirmation

- **Improved Documentation**:
  - Extended README with git workflow examples
  - New command reference section
  - Workflow scenario documentation

## [0.1.0] - 2026-02-22

### Added
- Initial release of ghxgit
- `ghx jump` command for searching PRs, issues, branches, and commits
- `--open` flag to open results in browser
- `--checkout` flag to checkout PR/branch locally
- `--type` flag to filter search by type
- `--verbose` flag for debug output
- ZSH shell completion support
- Comprehensive documentation
- Installation script with dependency checking

### Features
- Search PRs by number or description
- Search issues by ID or description
- Search branches by name
- Search commits by hash or message
- Smart search order: PR → Issue → Branch → Commit
- Browser integration (xdg-open, open, wslview)
- Git branch checkout from PRs
- Detailed error messages and help text

## Planned Features

### [0.3.0] - Future
- [ ] Bash shell completion
- [ ] Fish shell completion
- [ ] Configuration file support (~/.ghxgitrc)
- [ ] Cache search results for performance
- [ ] Support for GitHub Enterprise
- [ ] Multi-repository search
- [ ] Custom search order configuration
- [ ] Create PR from current branch
- [ ] Create issue from template

### [0.4.0] - Future
- [ ] Interactive rebase assistant
- [ ] Commit message generator with AI
- [ ] Automated changelog generation
- [ ] GitHub Actions integration
- [ ] PR review automation
- [ ] Release notes generator
