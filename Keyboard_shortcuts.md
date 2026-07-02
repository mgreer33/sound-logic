# CareConnect Desktop — Keyboard Shortcut Reference (Week 7)

This document maps the standardized system keyboard shortcuts implemented across the CareConnect desktop application (Electron) to ensure a keyboard-first operational workflow.

## 1. Global Application Shortcuts

These shortcuts are globally bound within the Electron main process and are accessible from any screen view.

| Shortcut | Action Description | System Target / Event |
| :--- | :--- | :--- |
| `Ctrl + N` | New Record / Appointment | Launches the overlay modal to input a new patient profile or schedule a care window. |
| `Ctrl + S` | Save | Commits current form modifications or active patient notes directly to the local cache/database. |
| `Ctrl + F` | Search | Focuses the global search bar in the contextual toolbar for rapid database querying. |
| `Ctrl + ,` | Open Settings | Swaps main panel focus to the user preferences and accessibility customization screen. |
| `F1` | Help / Documentation | Opens the CareConnect quick-start user guide and system diagnostics overlay. |

## 2. Interface Navigation & Control

| Shortcut | Action Description | Behavior |
| :--- | :--- | :--- |
| `Tab` | Next Interactive Element | Advances programmatic focus forward through inputs, buttons, and preference cards. |
| `Shift + Tab` | Previous Interactive Element | Reverses programmatic focus back through the interactive order. |
| `Spacebar` / `Enter` | Activate Focused Element | Triggers buttons, selects active choice cards, or toggles checkbox/radio states. |
| `Esc` | Close Dialog / Cancel | Dismisses open modals, modal overlays, or active dropdown menus without saving changes. |

## 3. Section 5 — Week 7 Submission Feedback

*   **Figma AI Insights:** Leveraging Figma AI streamlined establishing our initial type scales and text spacing components for large-format displays (≥1440px). It was highly effective at quickly generating responsive component layout grids.
*   **Parallel Workflow Friction:** Building out the Electron architecture concurrently with the design system meant structural changes to layout wrappers required rapid file coordination, which we managed directly via Git.
*   **Accessibility Hurdles:** Balancing explicit keyboard focus states while simultaneously accounting for low-contrast visual considerations for users with dyslexia required tight iteration between our UI elements and ARIA roles.