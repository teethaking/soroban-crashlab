# Maintainer Wave Playbook

This document defines how Soroban CrashLab is operated during Drips Wave cycles.

## 🌊 Wave 3 Specific Context
- **Contributor Limit**: Each contributor can resolve a maximum of **4 issues** across this entire org (down from 7 last wave). Keep an eye on assigning too many issues to a single applicant.
- **Application Rejections**: Explicitly and quickly **reject** applicants who are not a fit or if we are waiting for a specific profile. Do not leave them pending; rejecting them immediately returns their application quota.
- **24-Hour Review SLA Alert**: AI point appeals explicitly drop in when maintainers are unresponsive for >24 hours. Given our strict "Definition of Done", we risk automated points bypassing our review if we dawdle. Review inside 24h!

## Issue triage board queries

Use the following saved search queries to filter the issue board during triage.

### Pending review

Issues with open PRs awaiting maintainer review:

```
is:open is:issue label:wave3 linked:pr
```

### Stale

Issues assigned but with no activity in the last 3 days:

```
is:open is:issue label:wave3 assignee:* updated:<YYYY-MM-DD>
```

Replace `<YYYY-MM-DD>` with a date 3 days before today. For example, if today is 2026-03-25, use `updated:<2026-03-22`.

### Blocked

Issues explicitly marked as blocked on dependencies or external factors:

```
is:open is:issue label:wave3 label:blocked
```

If the `blocked` label does not exist, create it with color `d93f0b` and description "Blocked on dependency or external factor".

## Pre-wave checklist

1. Validate that each candidate issue has scope, acceptance criteria, and complexity.
2. Ensure issue labels are consistent:
   - `wave3`
   - `complexity:trivial|medium|high`
   - area labels such as `area:fuzzer`, `area:web`, `area:dx`
3. Confirm issue dependencies are explicit.
4. Keep an adequately sized open issue backlog ready for the new 4-issue org limit (i.e. more issues require spreading out to higher volume of distinct contributors).

## Assignment policy

- Prioritize first-time contributors on trivial and medium issues.
- **Do not** assign more than 4 issues historically to the same contributor across the org.
- Reject misaligned applications quickly using the Wave UI so contributors can reapply elsewhere.
- If no progress update is posted in 24 hours, request a status check and un-assign if unresponsive.

## PR review policy

Review inside 24 hours to prevent unnecessary automated appeals. Review in this order:

1. Correctness and safety
2. Adherence to the strict "Definition of Done" provided in the issue
3. Deterministic reproducibility of behavior
4. Test coverage
5. Clarity and maintainability

## Resolution policy

- If work quality is acceptable but merge is blocked for external reasons, resolve per Wave guidance so contributor effort is credited.
- Move partial work to follow-up issues with clear boundaries.

## Post-resolution feedback

- Leave practical, direct feedback.
- Highlight what was done well and what should improve.
- Keep comments specific to code and collaboration behavior.
