# BalancingFORGE v0.1

A student-facing chemistry practice tool from Catalyst Forge Labs. Plain HTML, CSS, and JavaScript; no dependencies, account, analytics, or build step.

## Features

- Learn Mode with a responsive balancing guide and worked atom counts.
- Practice Mode with points, streaks, and credit for each unique reaction.
- 90 reactions: 30 Easy, 30 Medium, and 30 Challenge. Surprise Me shuffles the whole bank without repeating a reaction within its current deck.
- 18 synthesis, 16 decomposition, 20 combustion, 16 single replacement, 15 double replacement, and 5 additional redox problems. These are instructional categories; a combustion or replacement reaction may also be redox.
- Fixed formulas, editable positive integer coefficients (1–99), live reactant/product inventories, and smallest-ratio checking.
- Three progressive hints: a reaction-specific strategy, a count breakdown from the student's current answer, then one coefficient as a foothold.
- Keyboard-accessible controls, phone layouts, visible focus states, non-color balance indicators, and reduced-motion support.

## Run and publish

Open `index.html` directly, or serve this folder with any static web server. All assets use relative paths so GitHub Pages project URLs work. Publish the root of the `main` branch through GitHub Settings → Pages.

The five runtime files are `index.html`, `styles.css`, `reactions.js`, `chemistry.js`, and `app.js`. Keep them together. No API keys or external scripts are used.

## Scoring

New Easy / Medium / Challenge solutions earn 10 / 20 / 30 points. Each hint reduces potential points by 2 (minimum 2). A wrong check or skipping an unfinished, uncredited practice reaction ends the streak. A balanced multiple prompts simplification without breaking the streak. Rechecking or resetting a solved reaction never awards points twice. Learn Mode is unscored and retains separate in-visit state from Practice Mode. Switching modes opens another reaction.

Score, streak, and unique solved IDs persist in local storage for the current browser and origin. Coefficients, hint usage, and navigation queues last for the current page visit. Progress does not sync between browsers or devices. If browser storage is blocked, the app continues and tells the student that progress will last for this visit.

## Chemistry scope

The app teaches atom conservation for the supplied molecular equations. It does not ask students to predict products, balance net ionic equations or charge, or supply reaction conditions. Physical states, heating, catalysts, concentration details (except where relevant in titles), and apparatus are intentionally omitted. These are balancing exercises, not experimental instructions. One Easy equation is already balanced at 1:1:1:1 to reinforce counting before changing anything.

All 90 answers conserve each element, have greatest common divisor 1, and have a single independent balancing ratio. Formulas support parentheses, multi-digit subscripts, and repeated element symbols such as CH3OH. The 1–99 control range exceeds all required answers (largest coefficient: 37).

Concept reference: [OpenStax Chemistry 2e, Writing and Balancing Chemical Equations](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations). Reaction strategies and interface text were written for this app.

## Verification

Run `node test.cjs` to check all 90 reactions, per-level totals, unique equations, minimal integer ratios, matrix rank, wrong-answer rejection, parentheses, repeated symbols, and coefficient bounds.

Interactive verification includes Learn and Practice flows, smallest-ratio feedback, rejected invalid values, hint deductions, duplicate-score protection, streak reset, difficulty changes, and desktop/mobile layout. The active-mode highlight and narrow-screen button text were adjusted during visual verification. A 320-pixel phone check exposed atom-table overflow; reduced table padding fixed it, and 320-, 390-, and 768-pixel checks showed no horizontal page overflow.

An optional, feature-detected WebMCP interface exposes `read_balancing_exercise`, `set_balancing_coefficients`, and `check_balancing_answer`. These use the same validation and state as the visible controls. Browsers without WebMCP use the standard interface without any dependency on it.

## Limits

This is a formative practice tool, not a secured assessment system. The reaction bank and answer data are public source, and local progress can be cleared or edited. No teacher dashboard, student identity, cloud sync, or LMS grade passback is included in v0.1.
