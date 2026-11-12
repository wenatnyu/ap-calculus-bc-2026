# AP Calculus BC · Course site

Current scope: Units 1–10 (Topics 1.1–10.15), the official mid-unit and end-of-unit reviews, and all six 2022 AP Calculus BC free-response questions.

Each topic follows one classroom sequence:

1. Review Quiz — questions, answers and explanations in one HTML file.
2. Slides — English-first class notes with key Chinese support and built-in answer reveals.
3. CA #1 — a classroom copy of the official corrective assignment.

The 2022 BC FRQ section follows the same Quiz → Slides sequence, then links to a local one-question copy of the released exam. Matching College Board scoring excerpts are stored locally under each card's official-source menu.

Open `index.html` locally or through GitHub Pages.

## Precalculus

The homepage's **Precal** link opens `precal/index.html`. Topic 1.12, Transformations of Functions, includes an online slide viewer, the original editable PowerPoint, and the uploaded PDF notes. The viewer supports arrow keys, Page Up / Page Down, Space, slide selection, and fullscreen. Slides 1–16 form the 40-minute lesson; slides 17–19 are supplementary.

The original PPTX and PDF are stored under `resources/precal/1.12/`. The online viewer uses slide images rendered from the same PowerPoint, with no external document-viewing service.

## Contact and visitor statistics

The homepage displays `wenyin@nyu.edu`, the WeChat ID `wutsupman` with a copy button, and live page-view counters. Tracking currently covers the homepage and `notes.html`; refreshing a page counts another view. The daily boundary uses Asia/Shanghai time. A statistics failure never prevents the course material from loading.

`services/visitor-stats/` contains a separate Cloudflare Worker and D1 database. The public statistics endpoint returns aggregate counts only. The teacher dashboard requires a password, uses an eight-hour Secure/HttpOnly session cookie, and can export the latest 10,000 retained visit records. Raw IP records are deleted after 30 days by a daily scheduled task; lifetime and daily aggregate counts remain. No persistent visitor ID or tracking cookie is created.

The admin password is stored locally in the Git-ignored `private/visitor-admin-password.txt` and in a Cloudflare Worker secret. It must never be added to the repository or browser JavaScript. See `services/visitor-stats/README.md` for deployment commands.

## Classroom tools

- Random Question — 702 English-first prompts covering Topics 1.1–10.15 and the 2022 BC FRQs, with key Chinese hints and toggle answers.
- Student Picker — six confirmed formal-name/WeChat-profile pairs with avatars, no-repeat rounds, and an attendance switch.
- TI‑84 Calculator Lab — `calculator.html` is linked from the home header, Notes, and the floating calculator shortcut. It includes AP keypad exercises and illustrated tutorials. TI84Calc opens in an on-demand frame; MyCalculatorPal opens in a new tab. The separate same-site `emulator/` needs an authorized local 4 MiB TI‑84 Plus CE ROM; TI's OS update package is not a full ROM. No firmware is bundled or uploaded.

## Keyboard controls for class notes

- `←` / `→`, Page Up / Page Down: navigate
- `Space`: next slide
- `N`: speaker notes

## Source and copyright

The lesson structure is based on the corresponding pages at [FlippedMath Calculus](https://calculus.flippedmath.com/). Lesson links continue to open the original FlippedMath pages. Classroom copies of each Packet, Practice Solutions, CA #1 and review are stored under `resources/unit-1/` through `resources/unit-10/` so students can open them directly from this GitHub Pages site. Source attribution remains with FlippedMath.

The 2022 BC question booklet under `resources/frq-2022-bc/` is the released College Board booklet linked by FlippedMath. College Board's old 2022 scoring URL now redirects to a generic past-exam page; the local scoring copy was retrieved from the dated Internet Archive capture of the original College Board PDF URL. Exact source URLs and page mapping are documented in that resource folder.

The compact homepage picker publishes the six formal names, WeChat nicknames, and avatar copies explicitly confirmed for classroom use. The original local `private/` directory and the full `student-picker.html` remain excluded from Git.
