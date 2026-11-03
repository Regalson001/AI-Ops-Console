:root {
  --bg: #07111f;
  --sidebar: #091523;
  --panel: #0c1929;
  --panel-soft: #101f31;
  --border: #1d3045;
  --border-light: #26394d;
  --text: #edf4fc;
  --muted: #8fa2b9;
  --subtle: #657a92;
  --cyan: #40d8e8;
  --blue: #5b8cff;
  --green: #43d6a0;
  --amber: #f6bd55;
  --red: #ff7b87;
  --violet: #b49aff;
  --radius: 16px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

button,
input,
select,
textarea {
  font: inherit;
}

button,
a,
select {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 3px;
}

.app-shell {
  min-height: 100vh;
}

/* Sidebar */

.sidebar {
  width: 248px;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 26px 16px 15px;
  background: var(--sidebar);
  border-right: 1px solid #1a2a3c;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 10px 28px;
}

.brand-mark {
  width: 35px;
  height: 35px;
  border: 1px solid #246879;
  background: #102c3c;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  transform: rotate(-5deg);
}

.brand-mark span {
  display: block;
  width: 4px;
  border-radius: 3px;
  background: var(--cyan);
}

.brand-mark span:nth-child(1) {
  height: 11px;
}

.brand-mark span:nth-child(2) {
  height: 19px;
}

.brand-mark span:nth-child(3) {
  height: 14px;
}

.brand-copy {
  display: grid;
  line-height: 1.1;
  letter-spacing: 1.5px;
}

.brand-copy strong {
  font: 700 17px "Space Grotesk", sans-serif;
}

.brand-copy small {
  margin-top: 5px;
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--muted);
}

.workspace-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #0d1b2a;
}

.workspace-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  color: #07111f;
  font-weight: 800;
  background: linear-gradient(135deg, #6ce5d5, #8eb5ff);
}

.workspace-copy {
  display: grid;
  min-width: 0;
  flex: 1;
}

.workspace-copy strong {
  font-size: 11px;
  white-space: nowrap;
}

.workspace-copy small {
  font-size: 10px;
  color: var(--muted);
  margin-top: 2px;
}

.chevron {
  color: var(--muted);
  font-size: 18px;
}

.nav-label {
  margin: 30px 10px 10px;
  color: #647a92;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
}

.nav-label-spaced {
  margin-top: 27px;
}

.main-nav {
  display: grid;
  gap: 4px;
}

.nav-item {
  min-height: 41px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 11px;
  border: 1px solid transparent;
  border-radius: 9px;
  color: #9badc2;
  font-size: 12px;
  transition: 0.2s ease;
}

.nav-item:hover {
  color: var(--text);
  background: #102135;
}

.nav-item.active {
  color: #dffcff;
  border-color: #1a4554;
  background: linear-gradient(90deg, #123342, #102536);
}

.nav-icon {
  width: 17px;
  color: #7e94ab;
  font-size: 17px;
  text-align: center;
}

.active .nav-icon {
  color: var(--cyan);
}

.nav-count {
  margin-left: auto;
  padding: 2px 6px;
  background: #1a3043;
  border-radius: 5px;
  color: #b7c8d8;
  font-size: 10px;
}

.new-tag {
  margin-left: auto;
  font-size: 8px;
  color: var(--cyan);
  background: #12303a;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 700;
}

.sidebar-bottom {
  margin-top: auto;
}

.plan-card {
  padding: 13px;
  background: linear-gradient(145deg, #102637, #0d1a29);
  border: 1px solid #254052;
  border-radius: 12px;
}

.plan-top {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #8ea5b9;
  font-size: 8px;
  letter-spacing: 1px;
  font-weight: 700;
}

.plan-dot,
.live-status span,
.healthy-dot,
.status-inline i,
.footer span i {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px #43d6a055;
}

.plan-card > strong {
  display: block;
  margin-top: 13px;
  font: 600 13px "Space Grotesk", sans-serif;
}

.plan-card p {
  margin: 5px 0 10px;
  color: var(--muted);
  font-size: 10px;
}

.text-button {
  padding: 0;
  border: 0;
  color: #79dbe8;
  background: transparent;
  font-size: 11px;
  font-weight: 600;
}

.text-button span {
  margin-left: 5px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 17px 4px 0;
  margin-top: 15px;
  border-top: 1px solid #1b2b3d;
}

.avatar,
.top-avatar {
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #09202b;
  background: linear-gradient(135deg, #e4f2f4, #8ec6ce);
  font-size: 10px;
  font-weight: 800;
}

.avatar {
  width: 31px;
  height: 31px;
}

.user-copy {
  display: grid;
  flex: 1;
}

.user-copy strong {
  font-size: 10px;
}

.user-copy small {
  color: var(--muted);
  font-size: 9px;
  margin-top: 2px;
}

.more {
  color: var(--muted);
  letter-spacing: 2px;
  font-size: 12px;
}

/* Main area and header */

.main-content {
  margin-left: 248px;
  padding: 0 32px;
  max-width: 1800px;
}

.topbar {
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1b2b3d;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8195aa;
  font-size: 11px;
}

.breadcrumbs strong {
  color: #dce7f3;
  font-weight: 600;
}

.crumb-separator {
  color: #42566b;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 19px;
}

.live-status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b4c6d8;
  font-size: 10px;
}

.icon-button {
  position: relative;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: #0c1928;
  color: #afc0d2;
}

.notification-button {
  font-size: 17px;
}

.notification-button i {
  position: absolute;
  width: 5px;
  height: 5px;
  top: 7px;
  right: 7px;
  border-radius: 50%;
  background: var(--amber);
}

.top-avatar {
  width: 30px;
  height: 30px;
}

.mobile-menu {
  display: none;
}

/* Page heading */

.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  padding: 31px 0 24px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cyan);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.eyebrow-line {
  display: inline-block;
  width: 17px;
  height: 2px;
  background: var(--cyan);
}

h1 {
  margin: 10px 0 7px;
  font: 600 clamp(25px, 2.7vw, 35px)/1.2 "Space Grotesk", sans-serif;
  letter-spacing: -1.4px;
}

h1 span {
  color: #8296ad;
  font-weight: 500;
}

.page-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.heading-actions {
  display: flex;
  gap: 9px;
  flex-shrink: 0;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 37px;
  padding: 0 13px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 700;
  transition: 0.2s ease;
}

.button-primary {
  color: #05141e;
  background: var(--cyan);
  border: 1px solid #6be7ef;
  box-shadow: 0 4px 18px #40d8e81a;
}

.button-primary:hover {
  background: #83edf2;
  transform: translateY(-1px);
}

.button-secondary {
  color: #c5d2e0;
  border: 1px solid var(--border-light);
  background: #0e1b2a;
}

.button-secondary:hover {
  background: #142538;
}

/* Metric cards */

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.metric-card,
.panel {
  background: linear-gradient(145deg, #0d1a2a, #0b1725);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.metric-card {
  min-height: 160px;
  padding: 16px 16px 13px;
  position: relative;
  overflow: hidden;
}

.metric-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.metric-label {
  color: #9cafc3;
  font-size: 10px;
}

.metric-icon {
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border-radius: 8px;
  font-size: 15px;
}

.metric-icon.cyan {
  color: var(--cyan);
  background: #12323d;
}

.metric-icon.green {
  color: var(--green);
  background: #10372f;
}

.metric-icon.violet {
  color: var(--violet);
  background: #29243e;
}

.metric-icon.amber {
  color: var(--amber);
  background: #352d20;
}

.metric-value {
  margin-top: 12px;
  font: 600 29px "Space Grotesk", sans-serif;
  letter-spacing: -1px;
}

.metric-unit {
  margin-left: 3px;
  color: #9db0c5;
  font-size: 15px;
  letter-spacing: 0;
}

.metric-foot {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 5px;
  color: #70859b;
  font-size: 9px;
}

.trend {
  font-weight: 700;
}

.trend.positive {
  color: var(--green);
}

.mini-bars {
  height: 26px;
  display: flex;
  align-items: end;
  gap: 4px;
  position: absolute;
  bottom: 14px;
  right: 16px;
  width: 75px;
  opacity: 0.7;
}

.mini-bars i {
  flex: 1;
  background: #39cddd;
  border-radius: 3px 3px 0 0;
}

.progress-track {
  margin-top: 14px;
  height: 4px;
  background: #1b2e40;
  border-radius: 5px;
  overflow: hidden;
}

.progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--green);
}

.progress-caption {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  color: #71859a;
  font-size: 9px;
}

.progress-caption strong {
  color: #bdcddd;
}

.sparkline {
  position: absolute;
  bottom: 10px;
  right: 12px;
  width: 88px;
  color: var(--violet);
  opacity: 0.8;
}

.sparkline svg {
  width: 100%;
}

.status-inline {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
}

.workflow-dots {
  display: flex;
  gap: 4px;
  margin-top: 15px;
}

.workflow-dots i {
  height: 4px;
  flex: 1;
  border-radius: 4px;
  background: var(--amber);
}

.workflow-dots i.muted {
  background: #27394a;
}

/* Chart and model panels */

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(280px, 1fr);
  gap: 14px;
  margin-top: 15px;
}

.panel {
  min-width: 0;
  padding: 19px;
}

.panel-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}

.panel-heading h2 {
  margin: 0;
  font: 600 14px "Space Grotesk", sans-serif;
  letter-spacing: -0.2px;
}

.panel-heading p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 10px;
}

.chart-controls {
  display: flex;
  padding: 3px;
  background: #071320;
  border: 1px solid #1c2d40;
  border-radius: 8px;
}

.range-button {
  border: 0;
  padding: 5px 9px;
  border-radius: 5px;
  color: #8195aa;
  background: transparent;
  font-size: 9px;
}

.range-button.active {
  color: #dffcff;
  background: #1a3745;
}

.chart-summary {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 9px;
  margin: 23px 0 8px;
  color: #8195aa;
  font-size: 9px;
}

.chart-summary > strong {
  color: var(--text);
  font: 600 24px "Space Grotesk", sans-serif;
}

.chart-legend {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
}

.chart-legend i {
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--cyan);
}

.chart-legend .legend-failed {
  margin-left: 7px;
  background: var(--violet);
}

.chart-wrap {
  height: 235px;
  position: relative;
}

.model-panel {
  min-width: 0;
}

.dots-button {
  color: #7f94a9;
  border: 0;
  background: transparent;
  letter-spacing: 2px;
}

.model-main {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 23px;
  padding-bottom: 18px;
  border-bottom: 1px solid #1c2d3f;
}

.model-orb {
  position: relative;
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  border-radius: 13px;
  color: var(--cyan);
  background: radial-gradient(circle at 30% 25%, #22566b, #122a42 70%);
  border: 1px solid #2d6173;
  font-size: 22px;
}

.model-orb i {
  position: absolute;
  width: 5px;
  height: 5px;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  background: var(--green);
}

.model-main > div:nth-child(2) {
  min-width: 0;
  flex: 1;
}

.model-main strong {
  font-size: 11px;
}

.model-main p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 9px;
}

.healthy-dot {
  margin-right: 4px;
}

.model-version {
  align-self: flex-start;
  padding: 4px 6px;
  border: 1px solid #2c3b50;
  border-radius: 5px;
  color: #9db0c4;
  font-size: 8px;
}

.model-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 11px;
  padding: 17px 0 15px;
}

.model-stats > div {
  display: grid;
  gap: 5px;
}

.model-stats span {
  color: #8296aa;
  font-size: 9px;
}

.model-stats strong {
  font: 600 17px "Space Grotesk", sans-serif;
}

.tiny-progress {
  height: 3px;
  border-radius: 3px;
  background: #1c2e40;
  overflow: hidden;
}

.tiny-progress i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #40d8e8, #68b9ff);
}

.panel-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #1c2d3f;
  color: var(--cyan);
  font-size: 10px;
  font-weight: 600;
}

/* Workflow table */

.workflow-panel {
  margin-top: 15px;
  padding-bottom: 0;
}

.workflow-heading {
  align-items: center;
  margin-bottom: 18px;
}

.table-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 9px;
  border: 1px solid #24374b;
  border-radius: 8px;
  color: #8094a9;
  background: #091624;
}

.search-box span {
  font-size: 17px;
}

.search-box input {
  width: 130px;
  color: var(--text);
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 10px;
}

.search-box input::placeholder {
  color: #70849a;
}

.table-actions select,
.full-select,
.prompt-options select {
  color: #b9c8d8;
  border: 1px solid #24374b;
  border-radius: 8px;
  background: #0a1725;
}

.table-actions select {
  height: 32px;
  padding: 0 9px;
  font-size: 10px;
}

.table-scroll {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}

thead {
  background: #0a1724;
}

th {
  padding: 11px 10px;
  color: #6f849a;
  text-align: left;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
}

td {
  padding: 13px 10px;
  border-bottom: 1px solid #192b3d;
  color: #9dafc2;
  font-size: 10px;
}

tbody tr:last-child td {
  border-bottom: 0;
}

tbody tr:hover {
  background: #102032;
}

.workflow-name {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #dce7f3;
  font-weight: 600;
}

.workflow-icon {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: var(--cyan);
  background: #14303e;
  font-size: 13px;
}

.workflow-icon.purple {
  color: var(--violet);
  background: #29243d;
}

.workflow-icon.orange {
  color: var(--amber);
  background: #352d20;
}

.workflow-icon.green {
  color: var(--green);
  background: #12362e;
}

.workflow-icon.blue {
  color: #8db5ff;
  background: #1b2b48;
}

.workflow-name small {
  display: block;
  margin-top: 2px;
  color: #71859b;
  font-size: 8px;
  font-weight: 400;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 600;
}

.status-badge::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.status-badge.success {
  color: var(--green);
  background: #10352e;
}

.status-badge.running {
  color: var(--cyan);
  background: #12323e;
}

.status-badge.failed {
  color: var(--red);
  background: #3a202c;
}

.row-menu {
  border: 0;
  color: #7c90a6;
  background: transparent;
}

.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0 15px;
  border-top: 1px solid #192b3d;
  color: #72879c;
  font-size: 9px;
}

/* Activity feed and prompt playground */

.bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.92fr);
  gap: 15px;
  margin-top: 15px;
}

.activity-panel,
.prompt-panel {
  padding: 19px;
}

.live-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--green);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.7px;
}

.live-pill i {
  width: 5px;
  height: 5px;
  background: var(--green);
  border-radius: 50%;
}

.activity-list {
  margin-top: 18px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #192b3d;
}

.activity-item:last-child {
  border-bottom: 0;
}

.activity-symbol {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 8px;
  font-size: 12px;
}

.success-symbol {
  color: var(--green);
  background: #12362e;
}

.info-symbol {
  color: var(--cyan);
  background: #12313d;
}

.warning-symbol {
  color: var(--amber);
  background: #382f21;
}

.violet-symbol {
  color: var(--violet);
  background: #2b2540;
}

.activity-item > div {
  flex: 1;
  min-width: 0;
}

.activity-item p {
  margin: 1px 0 4px;
  color: #b7c7d7;
  font-size: 10px;
}

.activity-item p strong {
  color: #edf4fc;
}

.activity-item small {
  color: #71859a;
  font-size: 9px;
}

.activity-time {
  color: #71859a;
  font-size: 9px;
}

.beta-tag {
  color: var(--violet);
  background: #2b2440;
  border: 1px solid #41365e;
  border-radius: 5px;
  padding: 4px 6px;
  font-size: 8px;
  font-weight: 700;
}

.field-label {
  display: block;
  margin: 16px 0 6px;
  color: #9eb1c5;
  font-size: 9px;
  font-weight: 600;
}

.full-select {
  width: 100%;
  height: 34px;
  padding: 0 10px;
  font-size: 10px;
}

.prompt-panel textarea {
  width: 100%;
  resize: vertical;
  min-height: 72px;
  padding: 10px;
  border: 1px solid #24374b;
  border-radius: 8px;
  outline: none;
  color: #c8d6e4;
  background: #081522;
  font-size: 10px;
  line-height: 1.6;
}

.prompt-options {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 15px;
  margin-top: 12px;
}

.prompt-options label {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 6px;
  color: #8296aa;
  font-size: 9px;
}

.prompt-options label strong {
  color: #dce8f4;
}

.prompt-options input {
  grid-column: 1 / -1;
  width: 100%;
  accent-color: var(--cyan);
}

.prompt-options select {
  width: 100%;
  height: 27px;
  padding: 0 7px;
  font-size: 10px;
}

.payload-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0 7px;
  color: #6f849a;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
}

.json-preview {
  max-height: 160px;
  overflow: auto;
  margin: 0;
  padding: 12px;
  border: 1px solid #1d3448;
  border-radius: 9px;
  color: #a7d9c6;
  background: #06111c;
  font: 10px/1.65 Consolas, "Courier New", monospace;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.full-button {
  width: 100%;
  margin-top: 10px;
  min-height: 34px;
}

.demo-note {
  margin: 8px 0 0;
  color: #6c8298;
  text-align: center;
  font-size: 9px;
}

/* Footer and notification toast */

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 0 25px;
  color: #647a91;
  font-size: 9px;
}

.footer span:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer a {
  color: #8ea5ba;
}

.toast {
  position: fixed;
  z-index: 50;
  right: 24px;
  bottom: 24px;
  max-width: calc(100vw - 48px);
  padding: 12px 16px;
  border: 1px solid #2d5864;
  border-radius: 10px;
  color: #e8fbff;
  background: #10313d;
  box-shadow: 0 12px 35px #0005;
  font-size: 12px;
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: 0.22s ease;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* Large screens */

@media (min-width: 1500px) {
  .main-content {
    padding: 0 42px;
  }

  .metric-card {
    min-height: 174px;
    padding: 19px;
  }

  .panel {
    padding: 22px;
  }
}

/* Laptops and tablets */

@media (max-width: 1200px) {
  .main-content {
    padding: 0 22px;
  }

  .sidebar {
    width: 220px;
  }

  .main-content {
    margin-left: 220px;
  }

  .metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid {
    grid-template-columns: minmax(0, 1.35fr) minmax(260px, 1fr);
  }

  .bottom-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile navigation */

@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    box-shadow: 20px 0 40px #0004;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0;
    padding: 0 22px;
  }

  .mobile-menu {
    display: inline-grid;
    place-items: center;
    margin-right: 12px;
  }

  .topbar {
    justify-content: flex-start;
  }

  .breadcrumbs {
    flex: 1;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .chart-wrap {
    height: 220px;
  }

  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .heading-actions {
    align-self: flex-start;
  }
}

/* Small phones */

@media (max-width: 600px) {
  .main-content {
    padding: 0 14px;
  }

  .topbar {
    height: 62px;
  }

  .topbar-actions {
    gap: 9px;
  }

  .live-status {
    font-size: 0;
    gap: 0;
  }

  .live-status span {
    width: 8px;
    height: 8px;
  }

  .page-heading {
    padding: 25px 0 20px;
  }

  h1 {
    font-size: 28px;
  }

  .page-subtitle {
    max-width: 360px;
    line-height: 1.7;
  }

  .heading-actions {
    width: 100%;
  }

  .heading-actions .button {
    flex: 1;
    padding: 0 8px;
    font-size: 10px;
  }

  .metric-grid {
    gap: 9px;
  }

  .metric-card {
    padding: 12px;
    min-height: 145px;
  }

  .metric-label {
    font-size: 9px;
  }

  .metric-value {
    font-size: 25px;
  }

  .mini-bars {
    right: 10px;
    width: 55px;
  }

  .panel {
    padding: 14px;
    border-radius: 13px;
  }

  .chart-summary {
    gap: 5px;
  }

  .chart-summary > strong {
    font-size: 20px;
  }

  .chart-legend {
    width: 100%;
    margin: 8px 0 0;
  }

  .chart-wrap {
    height: 190px;
  }

  .workflow-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .table-actions {
    width: 100%;
  }

  .search-box {
    flex: 1;
  }

  .search-box input {
    width: 100%;
    min-width: 0;
  }

  .table-actions select {
    max-width: 115px;
  }

  .table-footer {
    align-items: flex-start;
    gap: 10px;
  }

  .prompt-options {
    grid-template-columns: 1fr 85px;
  }

  .footer {
    flex-wrap: wrap;
  }

  .footer span:nth-child(2) {
    order: 3;
    width: 100%;
  }
}

/* Accessibility: reduce motion when requested */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
