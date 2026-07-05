# CareConnect Desktop Accessibility Notes (WCAG 2.1 AA)

This document covers the accessibility setup, keyboard navigation flow, and WCAG 2.1 AA compliance details for the CareConnect Electron desktop app.

---

## 1. Global Keyboard Navigation & Focus States

To support users navigating purely via keyboard (including screen readers and switch access), the app uses a strict tab order and clear visual focus indicators.

### Focus Indicators
* **Visual Style:** Every interactive element (inputs, buttons, links) uses a dual-ring outline when focused by a keyboard.
* **Spec:** A 2px solid inner ring matching the background color, with a 2px solid outer ring in our primary teal (`#1B6F4E`).
* **Contrast:** The focus indicator maintains at least a 4.5:1 contrast ratio against both light and dark backgrounds to meet **WCAG SC 1.4.11 (Non-text Contrast)**.

---

## 2. Onboarding & Sign-Up Screen Focus Order

The layout uses native HTML elements structured to follow a logical top-to-bottom, left-to-right reading order when tabbing through the Sign-Up screen:

1. **Back Button** (`<button>`) - Goes back to the welcome view.
2. **Full Name** (`<input type="text">`) - User's name.
3. **Email Address** (`<input type="email">`) - User's email.
4. **Password** (`<input type="password">`) - Hidden password input.
5. **Confirm Password** (`<input type="password">`) - Hidden validation input.
6. **Preferred Communication Method Grid** (Custom Selector)
   * Tab 6a: Text Message
   * Tab 6b: Visual Alerts
   * Tab 6c: Vibration Alerts
7. **Hearing Support Level Selector** (Custom Control)
   * Tab 7a: Mild Support
   * Tab 7b: Moderate Support
   * Tab 7c: Severe Support
8. **Create Account Button** (`<button type="submit">`) - Submits the form data.
9. **Sign In Link** (`<a>`) - Redirects back to login page.

---

## 3. WCAG 2.1 AA Mapping

| WCAG SC | Criterion | How It's Handled in CareConnect |
| :--- | :--- | :--- |
| **2.1.1** | Keyboard (Level A) | All interactive controls fully support `Tab`, `Shift+Tab`, `Spacebar`, and `Enter`. No mouse required. |
| **2.4.3** | Focus Order (Level A) | Tabbing matches the visual reading flow perfectly to prevent getting stuck in keyboard traps. |
| **1.3.1** | Info and Relationships (Level A) | Proper heading tags (`<h1>`, `<h2>`) define sections. Form inputs are explicitly paired with text labels using `aria-labelledby` or `<label for="...">`. |
| **4.1.2** | Name, Role, Value (Level A) | Custom components (like the communication and hearing choice cards) use explicit ARIA roles (`role="radio"`, `role="radiogroup"`) and track state with `aria-checked`. |
| **1.4.3** | Contrast (Minimum) (Level AA) | Body text keeps a contrast ratio of at least 4.5:1 against the background. Headings and large text use at least 3.0:1. |

---

## 4. Screen Reader Optimization & ARIA Layout

For screen reader software (like NVDA or JAWS), elements are structured to provide clear context:

* **Live Error Handling:** Dynamic validation errors or inline warnings use `aria-live="polite"`. This ensures the screen reader announces the error immediately without interrupting the user's active typing.
* **Accessible Labels:** Action items and custom inputs are explicitly defined with clean accessibility labels (e.g., the Create Account button reads out its primary registration action along with a hint to configure environmental accessibility preferences).