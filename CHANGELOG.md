# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

### [0.2.0] - Planned
- [ ] Bash shell completion
- [ ] Fish shell completion
- [ ] Configuration file support (~/.ghxgitrc)
- [ ] Cache search results for performance
- [ ] Support for GitHub Enterprise
- [ ] Multi-repository search
- [ ] Custom search order configuration
- [ ] Integration with fzf for interactive search
- [ ] GitHub Actions integration

### [0.3.0] - Planned
- [ ] Graphql query support for advanced searches
- [ ] Create PR/issue from command line
- [ ] Add reviewers/assignees to PRs
- [ ] Comment on PRs from CLI
- [ ] Merge/close PRs from CLI
- [ ] Bulk operations on multiple results
