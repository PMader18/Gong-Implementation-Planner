// --- DATA DEFINITIONS --- //

// Product labels
const PRODUCT_LABELS = {
  "foundation-qs": "Foundations · Quickstart",
  "foundation-pro": "Foundations · Professional",
  "engage-qs": "Engage · Quickstart",
  "engage-plus": "Engage · Plus",
  "engage-pro": "Engage · Professional",
  "forecast-qs": "Forecast · Quickstart",
  "forecast-pro": "Forecast · Professional",
  enable: "Enable"
};

// Map SKU+Plan from task table to product keys
const SKU_PLAN_TO_KEY = {
  "Foundation|QS": "foundation-qs",
  "Foundation|Pro": "foundation-pro",
  "Forecast|QS": "forecast-qs",
  "Forecast|Pro": "forecast-pro",
  "Engage|QS": "engage-qs",
  "Engage|Plus": "engage-plus",
  "Engage|Pro": "engage-pro",
  "Enable|": "enable"
};

// Call ordering / attendee guidance
const CALL_ORDER = [
  { product: "Foundation", order: 1, callType: "Kickoff", gong: "PS Consultant / EM, CSM, AE (optional), Solution Architect (if complex)", customer: "Executive Sponsor, Program Manager, Sales/CS Leadership, Functional Champion(s)" },
  { product: "Foundation", order: 2, callType: "Change Management & Discovery", gong: "PS Consultant / EM, CSM", customer: "Program Manager, Enablement, RevOps, FLM(s), Change/Project Owner" },
  { product: "Foundation", order: 3, callType: "Technical Setup", gong: "PS Consultant, Technical Architect (if included), System Admin(s)", customer: "Program Manager, CRM Admin / RevOps, IT / Security (as needed)" },
  { product: "Foundation", order: 4, callType: "Privacy Settings", gong: "PS Consultant, Technical Architect (if relevant)", customer: "Program Manager, Security/Legal/Compliance, IT, CRM Admin" },
  { product: "Foundation", order: 5, callType: "Customization", gong: "PS Consultant, CSM (optional), Solution Architect (if complex)", customer: "Program Manager, Enablement, FLM(s), Power Users / Champions" },
  { product: "Foundation", order: 6, callType: "Enablement & Launch", gong: "PS Consultant, CSM, Customer Education (as needed)", customer: "Program Manager, Enablement, FLM(s), ICs (AEs/SDRs/CSMs), Champions" },

  { product: "Forecast", order: 1, callType: "Kickoff", gong: "PS Consultant, CSM (optional), Solution Architect (if complex)", customer: "CRO / Head of Sales, RevOps Leader, Program Manager, Forecast Champion(s)" },
  { product: "Forecast", order: 2, callType: "Discovery", gong: "PS Consultant, CSM (optional)", customer: "RevOps, Sales Leadership, FLM(s), Program Manager" },
  { product: "Forecast", order: 3, callType: "Technical Setup", gong: "PS Consultant, Technical Architect (if included), System Admin(s)", customer: "RevOps / CRM Admin, Program Manager, IT (if needed)" },
  { product: "Forecast", order: 4, callType: "Customization", gong: "PS Consultant, CSM (optional)", customer: "RevOps, Sales Leadership, FLM(s), Program Manager" },
  { product: "Forecast", order: 5, callType: "Insights & Analytics", gong: "PS Consultant, CSM", customer: "Sales Leadership, RevOps, FLM(s), Program Manager" },
  { product: "Forecast", order: 6, callType: "Enablement & Launch", gong: "PS Consultant, CSM, Customer Education (as needed)", customer: "RevOps, FLM(s), Sales Leadership, ICs (AEs/AMs/CSMs), Program Manager, Champions" },

  { product: "Enable", order: 1, callType: "Kickoff", gong: "PS Consultant, CSM", customer: "Enablement Lead, Program Manager, Sales/CS Leadership, FLM(s)" },
  { product: "Enable", order: 2, callType: "Customization", gong: "PS Consultant, CSM", customer: "Enablement, FLM(s), Program Manager, Top Performer Rep(s)" },
  { product: "Enable", order: 3, callType: "Enablement & Launch", gong: "PS Consultant, CSM, Customer Education (as needed)", customer: "Enablement, FLM(s), ICs (AEs/SDRs/CSMs), Program Manager, Champions" },

  { product: "Engage", order: 1, callType: "Kickoff", gong: "PS Consultant / Engage Specialist, CSM (optional)", customer: "Executive Sponsor (Sales/Rev), Program Manager, SDR/BDR Leadership, RevOps/CRM Admin" },
  { product: "Engage", order: 2, callType: "Workflow Discovery", gong: "PS Consultant / Engage Specialist", customer: "Program Manager, SDR/BDR Manager(s), AE Manager(s), RevOps, Marketing (if involved in leads)" },
  { product: "Engage", order: 3, callType: "Technical Setup", gong: "PS Consultant, Technical Architect (if included), System Admin(s)", customer: "RevOps / CRM Admin, IT/Email Admin, Program Manager" },
  { product: "Engage", order: 4, callType: "Content Strategy", gong: "PS Consultant / Engage Specialist, CSM (optional)", customer: "Program Manager, Enablement, SDR/BDR & AE Manager(s), Marketing / Content Owners" },
  { product: "Engage", order: 5, callType: "Enablement & Launch", gong: "PS Consultant / Engage Specialist, CSM, Customer Education (as needed)", customer: "Program Manager, SDR/BDR & AE Manager(s), ICs (SDRs/BDRs/AEs/CSMs), Enablement, Champions" }
];

// Simple docs placeholders per SKU/plan – editable text blocks
const PRODUCT_DOCS = {
  "foundation-qs": "",
  "foundation-pro": "",
  "engage-qs": "",
  "engage-plus": "",
  "engage-pro": "",
  "forecast-qs": "",
  "forecast-pro": "",
  enable: ""
};

// Phase labels
const PHASE_LABELS = {
  0: "Phase 0 · Pre-Project Checklist",
  1: "Phase 1 · Kickoff / Discovery",
  2: "Phase 2 · Technical Setup / Workflow",
  3: "Phase 3 · Privacy / Configuration",
  4: "Phase 4 · Customization / Content",
  5: "Phase 5 · Enablement & Launch"
};


// Raw task data, from your table (tab-separated)
const RAW_TASKS_DATA = `
SKU	Plan	Phase	CallType	Goal	Deliverables	ActionableItems
ALL	ALL	0	Pre-Project Checklist	Ensure the client is introduced and understands the implementation context.	AE intro email delivered.	Send introductory email from AE to client to introduce Gong implementation.
ALL	ALL	0	Pre-Project Checklist	Ensure Gong instance exists and subscription is active.	Active Gong account.	Create Gong account and verify subscription status.
ALL	ALL	0	Pre-Project Checklist	Ensure appropriate admins have access.	Business and technical admins provisioned.	Add users to Gong as business and technical admins.
ALL	ALL	0	Pre-Project Checklist	Align customer on implementation expectations.	Customer informed about implementation scope and timeline.	Send implementation introductory email to customer contacts.
ALL	ALL	0	Pre-Project Checklist	Align internal team on plan.	Internal kickoff scheduled or done asynchronously.	Schedule internal kickoff call or share implementation context with AE/CSM.
ALL	ALL	0	Pre-Project Checklist	Prepare client-facing materials.	Initial implementation slide deck.	Prepare implementation slide deck for customer kickoff.
ALL	ALL	0	Pre-Project Checklist	Ensure deck reflects customer context.	Deck updated with customer specifics.	Update implementation slide deck with info from internal kickoff / handoff.
ALL	ALL	0	Pre-Project Checklist	Align on primary outcome.	Primary outcome documented.	Confirm primary Outcome with customer during kickoff and document in plan.
ALL	ALL	0	Pre-Project Checklist	Establish target go-live.	Go-live date agreed.	Confirm target go-live date with client.
Foundation	Pro	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Confirmed ownership matrix.	Identify core owners by function; confirm which individuals are accountable, responsible, and informed.
Foundation	Pro	1	Kickoff		Cadence framework defined.	Select forecast cadence and implementation rhythm (e.g., weekly sprints; 30-day standard cycle).
Foundation	Pro	1	Kickoff		Access checklist validated.	Verify connection permissions across CRM, email/calendar, meeting platforms, and dialer.
Foundation	Pro	1	Kickoff		Motion map finalized.	Document sales motions and required workflows by motion (New Business, Renewal, Expansion).
Foundation	Pro	1	Kickoff		Governance policy notes.	Review and confirm compliance standards for recording, consent, data residency, and retention.
Foundation	Pro	1	Kickoff		Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Foundation	Pro	1	Kickoff		Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Foundation	Pro	1	Change Management & Discovery	Align on change management approach.	Change management framework notes.	Review the Change Management Framework with customer; understand each team's existing pipeline management and coaching processes.
Foundation	Pro	2	Technical Setup	Connect Gong to core systems and data sources.	CRM sync established.	Connect Gong to CRM via OAuth
Foundation	Pro	2	Technical Setup			test sync
Foundation	Pro	2	Technical Setup			review process of exporting data to CRM
Foundation	Pro	2	Technical Setup			if Salesforce, review Gong for Salesforce managed package.
Foundation	Pro	2	Technical Setup	Connect Gong to core systems and data sources.	Meeting capture verified.	Set up web conferencing systems
Foundation	Pro	2	Technical Setup			configure native integrations (e.g., Zoom) and verify meeting capture.
Foundation	Pro	2	Technical Setup		Calendar and email capture working.	Connect mail/calendar integration
Foundation	Pro	2	Technical Setup			confirm meetings created from email/calendar invites are captured.
Foundation	Pro	2	Technical Setup		Telephony sync verified.	Integrate telephony / dialer
Foundation	Pro	2	Technical Setup			confirm call tracking, user mapping, and recording configuration.
Foundation	Pro	2	Technical Setup		Coverage report.	Review recording coverage report
Foundation	Pro	2	Technical Setup			confirm active recording for all enabled users and adjust as needed.
Foundation	Pro	2	Technical Setup		Backup upload method.	Test manual upload or API-based fallback for non-standard calls or legacy recordings.
Foundation	Pro	3	Privacy Settings	Implement data protection framework.	Consent configuration complete.	Define and apply consent policy
Foundation	Pro	3	Privacy Settings			review recording consent settings in Gong and align by region.
Foundation	Pro	3	Privacy Settings		Retention settings active.	Configure data retention policies in Gong based on legal and security requirements.
Foundation	Pro	3	Privacy Settings		Access matrix in Gong.	Review permission profiles
Foundation	Pro	3	Privacy Settings			assign roles
Foundation	Pro	3	Privacy Settings			confirm data visibility for each persona.
Foundation	Pro	3	Privacy Settings		Compliance by region validated.	Enforce restricted recording rules (users, teams, regions)
Foundation	Pro	3	Privacy Settings			validate compliance with local regulations.
Foundation	Pro	3	Privacy Settings		Admin log validated.	Enable and confirm admin log / audit trail settings in Gong.
Foundation	Pro	4	Customization	Tailor Gong to company process.	Tracker config list.	Review and build out custom Keyword Trackers
Foundation	Pro	4	Customization			enable default Smart Trackers aligned to target outcomes.
Foundation	Pro	4	Customization		Scorecard built.	Build rep-level evaluation scorecards
Foundation	Pro	4	Customization			 review how to use scorecards once they are published.
Foundation	Pro	4	Customization		Admin boards configured.	Create deal review boards (Sales Pipeline, New Business, Renewals)
Foundation	Pro	4	Customization			 configure advanced deal board settings where applicable.
Foundation	Pro	4	Customization		Library organized by team.	Organize call libraries and streams by team/motion
Foundation	Pro	4	Customization			define content sharing rules and permissions.
Foundation	Pro	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Foundation	Pro	5	Enablement & Launch			establish champion network
Foundation	Pro	5	Enablement & Launch			announce go-live
Foundation	Pro	5	Enablement & Launch			set up adoption KPIs and dashboards
Foundation	Pro	5	Enablement & Launch			establish change control & governance cadence.
Foundation	QS	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Confirmed ownership matrix.	Identify core owners by function; confirm which individuals are accountable, responsible, and informed.
Foundation	QS	1	Kickoff		Cadence framework defined.	Select forecast cadence and implementation rhythm (e.g., weekly sprints; 30-day standard cycle).
Foundation	QS	1	Kickoff		Access checklist validated.	Verify connection permissions across CRM, email/calendar, meeting platforms, and dialer.
Foundation	QS	1	Kickoff		Motion map finalized.	Document sales motions and required workflows by motion (New Business, Renewal, Expansion).
Foundation	QS	1	Kickoff		Governance policy notes.	Review and confirm compliance standards for recording, consent, data residency, and retention.
Foundation	QS	1	Kickoff		Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Foundation	QS	1	Kickoff		Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Foundation	QS	2	Technical Setup	Connect Gong to core systems and data sources.	CRM sync established.	Connect Gong to CRM via OAuth
Foundation	QS	2	Technical Setup			test sync
Foundation	QS	2	Technical Setup			review process of exporting data to CRM
Foundation	QS	2	Technical Setup			if Salesforce, review Gong for Salesforce managed package.
Foundation	QS	2	Technical Setup		Meeting capture verified.	Set up web conferencing systems
Foundation	QS	2	Technical Setup			configure native integrations (e.g., Zoom) and verify meeting capture.
Foundation	QS	2	Technical Setup		Calendar and email capture working.	Connect mail/calendar integration
Foundation	QS	2	Technical Setup			confirm meetings created from email/calendar invites are captured.
Foundation	QS	2	Technical Setup		Telephony sync verified.	Integrate telephony / dialer
Foundation	QS	2	Technical Setup			confirm call tracking, user mapping, and recording configuration.
Foundation	QS	2	Technical Setup		Coverage report.	Review recording coverage report
Foundation	QS	2	Technical Setup			confirm active recording for all enabled users and adjust as needed.
Foundation	QS	2	Technical Setup		Backup upload method.	Test manual upload or API-based fallback for non-standard calls or legacy recordings.
Foundation	QS	3	Privacy Settings	Implement data protection framework.	Consent configuration complete.	Define and apply consent policy
Foundation	QS	3	Privacy Settings			review recording consent settings in Gong and align by region.
Foundation	QS	3	Privacy Settings		Retention settings active.	Configure data retention policies in Gong based on legal and security requirements.
Foundation	QS	3	Privacy Settings		Access matrix in Gong.	Review permission profiles
Foundation	QS	3	Privacy Settings			assign roles; confirm data visibility for each persona.
Foundation	QS	3	Privacy Settings		Compliance by region validated.	Enforce restricted recording rules (users, teams, regions)
Foundation	QS	3	Privacy Settings			validate compliance with local regulations.
Foundation	QS	3	Privacy Settings		Admin log validated.	Enable and confirm admin log / audit trail settings in Gong.
Foundation	QS	4	Customization	Tailor Gong to company process.	Tracker config list.	Review and build out custom Keyword Trackers
Foundation	QS	4	Customization			enable default Smart Trackers aligned to target outcomes.
Foundation	QS	4	Customization		Admin boards configured.	Create deal review boards (Sales Pipeline, New Business, Renewals)
Foundation	QS	4	Customization			configure advanced deal board settings where applicable.
Foundation	QS	4	Customization		Library organized by team.	Organize call libraries and streams by team/motion
Foundation	QS	4	Customization			define content sharing rules and permissions.
Foundation	QS	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Foundation	QS	5	Enablement & Launch			establish champion network
Foundation	QS	5	Enablement & Launch			announce go-live
Foundation	QS	5	Enablement & Launch			set up adoption KPIs and dashboards
Foundation	QS	5	Enablement & Launch			establish change control & governance cadence.
Forecast	Pro	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Confirmed ownership matrix.	Identify core owners by function; confirm which individuals are accountable, responsible, and informed.
Forecast	Pro	1	Kickoff		Cadence framework defined.	Select forecast cadence and implementation rhythm (e.g., weekly sprints; 30-day standard cycle).
Forecast	Pro	1	Kickoff		Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Forecast	Pro	1	Kickoff		Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Forecast	Pro	4	Customization	Tailor Gong to company process.	Admin boards configured.	Create deal review boards (Sales Pipeline, New Business, Renewals)
Forecast	Pro	4	Customization			configure advanced deal board settings where applicable.
Forecast	Pro	2	Discovery	Understand forecast process & needs.	Forecast discovery document.	Hold forecast discovery session(s); map current vs. ideal forecast workflow
Forecast	Pro	2	Discovery			define forecast categories, amounts, close dates, levels, and accuracy/coverage KPIs.
Forecast	Pro	3	Technical Setup	Build forecast boards.	Forecast boards & roles configured.	Confirm CRM sync for forecast fields
Forecast	Pro	3	Technical Setup			apply role-based permissions
Forecast	Pro	3	Technical Setup			set forecast reminder cadence and submission locks
Forecast	Pro	3	Technical Setup			configure warning conditions
Forecast	Pro	3	Technical Setup			build boards by line of business (New Biz, Renewals, Growth).
Forecast	Pro	5	Insights & Analytics	Train leaders to interpret metrics.	Forecast analytics suite.	Configure Trends, Changes, Accuracy, and Pacing reports
Forecast	Pro	5	Insights & Analytics			enable Win/Loss and drivers analytics
Forecast	Pro	5	Insights & Analytics			set up adoption tracking for forecast usage.
Forecast	Pro	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Forecast	Pro	5	Enablement & Launch			establish champion network
Forecast	Pro	5	Enablement & Launch			announce go-live
Forecast	Pro	5	Enablement & Launch			set up adoption KPIs and dashboards
Forecast	Pro	5	Enablement & Launch			establish change control & governance cadence.
Forecast	QS	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Confirmed ownership matrix.	Identify core owners by function; confirm which individuals are accountable, responsible, and informed.
Forecast	QS	1	Kickoff		Cadence framework defined.	Select forecast cadence and implementation rhythm (e.g., weekly sprints; 30-day standard cycle).
Forecast	QS	1	Kickoff		Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Forecast	QS	1	Kickoff		Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Forecast	QS	2	Discovery	Understand forecast process & needs.	Forecast discovery document.	Hold forecast discovery session(s); map current vs. ideal forecast workflow
Forecast	QS	2	Discovery			define forecast categories, amounts, close dates, levels, and accuracy/coverage KPIs.
Forecast	QS	3	Technical Setup	Build forecast boards.	Forecast boards & roles configured.	Confirm CRM sync for forecast fields
Forecast	QS	3	Technical Setup			apply role-based permissions
Forecast	QS	3	Technical Setup			set forecast reminder cadence and submission locks
Forecast	QS	3	Technical Setup			configure warning conditions
Forecast	QS	3	Technical Setup			build boards by line of business (New Biz, Renewals, Growth).
Forecast	QS	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Forecast	QS	5	Enablement & Launch			establish champion network
Forecast	QS	5	Enablement & Launch			announce go-live
Forecast	QS	5	Enablement & Launch			set up adoption KPIs and dashboards
Forecast	QS	5	Enablement & Launch			establish change control & governance cadence.
Enable		1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Confirmed ownership matrix.	Identify core owners by function; confirm which individuals are accountable, responsible, and informed.
Enable		2	Customization	Tailor Gong to company process.	Tracker config list.	Review and build out custom Keyword Trackers
Enable		2	Customization			enable default Smart Trackers aligned to target outcomes.
Enable		2	Customization	Tailor Gong to company process.	Scorecard built.	Build rep-level evaluation scorecards
Enable		2	Customization			review how to use scorecards once they are published.
Enable		2	Customization	Tailor Gong to company process.	Library organized by team.	Organize call libraries and streams by team/motion
Enable		2	Customization			define content sharing rules and permissions.
Enable		3	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Enable		3	Enablement & Launch			establish champion network
Enable		3	Enablement & Launch			announce go-live
Enable		3	Enablement & Launch			set up adoption KPIs and dashboards
Enable		3	Enablement & Launch			establish change control & governance cadence.
Engage	Plus	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Engage	Plus	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Engage	Plus	2	Workflow Discovery	Understand lead flow & outreach processes.	Workflow & routing map.	Run workflow discovery sessions
Engage	Plus	2	Workflow Discovery			document lead sources
Engage	Plus	2	Workflow Discovery			routing rules
Engage	Plus	2	Workflow Discovery			persona strategies
Engage	Plus	2	Workflow Discovery			flow segmentation (Inbound/Outbound/Nurture).
Engage	Plus	3	Technical Setup	Configure Engage and validate syncs.	CRM sync + dialer + flows configured.	Set up Engage CRM sync 
Engage	Plus	3	Technical Setup			configure email sending and tracking
Engage	Plus	3	Technical Setup			configure Gong Dialer (numbers, local dialing, trusted calling)
Engage	Plus	3	Technical Setup			configure flow automation and triggers.
Engage	Plus	4	Content Strategy	Define message library and personalization framework.	Template library & personalization framework.	Draft and upload templates per motion/persona
Engage	Plus	4	Content Strategy			add dynamic CRM fields
Engage	Plus	4	Content Strategy			set up sending domain (SPF/DKIM)
Engage	Plus	4	Content Strategy			define content feedback loop for reps.
Engage	Plus	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Engage	Plus	5	Enablement & Launch			establish champion network
Engage	Plus	5	Enablement & Launch			announce go-live
Engage	Plus	5	Enablement & Launch			set up adoption KPIs and dashboards
Engage	Plus	5	Enablement & Launch			establish change control & governance cadence.
Engage	Pro	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Engage	Pro	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Engage	Pro	2	Workflow Discovery	Understand lead flow & outreach processes.	Workflow & routing map.	Run workflow discovery sessions
Engage	Pro	2	Workflow Discovery			document lead sources
Engage	Pro	2	Workflow Discovery			routing rules
Engage	Pro	2	Workflow Discovery			persona strategies
Engage	Pro	2	Workflow Discovery			flow segmentation (Inbound/Outbound/Nurture).
Engage	Pro	3	Technical Setup	Configure Engage and validate syncs.	CRM sync + dialer + flows configured.	Set up Engage CRM sync 
Engage	Pro	3	Technical Setup			configure email sending and tracking
Engage	Pro	3	Technical Setup			configure Gong Dialer (numbers, local dialing, trusted calling)
Engage	Pro	3	Technical Setup			configure flow automation and triggers.
Engage	Pro	4	Content Strategy	Define message library and personalization framework.	Template library & personalization framework.	Draft and upload templates per motion/persona
Engage	Pro	4	Content Strategy			add dynamic CRM fields
Engage	Pro	4	Content Strategy			set up sending domain (SPF/DKIM)
Engage	Pro	4	Content Strategy			define content feedback loop for reps.
Engage	Pro	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Engage	Pro	5	Enablement & Launch			establish champion network
Engage	Pro	5	Enablement & Launch			announce go-live
Engage	Pro	5	Enablement & Launch			set up adoption KPIs and dashboards
Engage	Pro	5	Enablement & Launch			establish change control & governance cadence.
Engage	QS	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Project calendar.	Book all implementation calls (Foundations, Engage, Forecast, Enablement) and hold times if needed.
Engage	QS	1	Kickoff	Establish foundation for Gong (owners, cadence, governance, privacy).	Success KPI doc.	Align on measurable success criteria by product (Foundations, Engage, Forecast) and document KPIs.
Engage	QS	2	Workflow Discovery	Understand lead flow & outreach processes.	Workflow & routing map.	Run workflow discovery sessions
Engage	QS	2	Workflow Discovery			document lead sources
Engage	QS	2	Workflow Discovery			routing rules
Engage	QS	2	Workflow Discovery			persona strategies
Engage	QS	2	Workflow Discovery			flow segmentation (Inbound/Outbound/Nurture).
Engage	QS	3	Technical Setup	Configure Engage and validate syncs.	CRM sync + dialer + flows configured.	Set up Engage CRM sync 
Engage	QS	3	Technical Setup			configure email sending and tracking
Engage	QS	3	Technical Setup			configure Gong Dialer (numbers, local dialing, trusted calling)
Engage	QS	3	Technical Setup			configure flow automation and triggers.
Engage	QS	5	Enablement & Launch	Launch Gong tools and drive adoption.	Launch plan and training delivered.	Deliver role-based training
Engage	QS	5	Enablement & Launch			establish champion network
Engage	QS	5	Enablement & Launch			announce go-live
Engage	QS	5	Enablement & Launch			set up adoption KPIs and dashboards
Engage	QS	5	Enablement & Launch			establish change control & governance cadence.
`.trim();

// --- PARSING --- //
function parseTasks(raw) {
  const lines = raw.split(/\r?\n/);
  const header = lines[0].split("\t").map((h) => h.trim());
  const tasks = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const cols = line.split("\t");
    while (cols.length < header.length) cols.push("");
    const [sku, plan, phaseStr, callType, goal, deliverables, actionableItems] =
      cols.map((c) => c.trim());
    const phase = Number.isFinite(Number(phaseStr)) ? Number(phaseStr) : 0;
    let productKey = "ALL";
    if (sku !== "ALL") {
      const mapKey = SKU_PLAN_TO_KEY[`${sku}|${plan}`] || null;
      productKey = mapKey;
    }
    const id = `${sku}|${plan}|${phase}|${callType}|${actionableItems}`.replace(
      /\s+/g,
      "_"
    );
    tasks.push({
      id,
      sku,
      plan,
      productKey,
      phase,
      callType,
      goal,
      deliverables,
      actionableItems
    });
  }
  return tasks;
}

const ALL_TASKS = parseTasks(RAW_TASKS_DATA);

// --- STATE --- //
let formValues = null;
let filteredTasks = [];
let taskStatus = {}; // id -> "Not Started" | "Complete" | "NA"

// --- UTILITIES --- //
function $(sel) {
  return document.querySelector(sel);
}
function $all(sel) {
  return Array.from(document.querySelectorAll(sel));
}

// Multi-select helper
function getMultiSelectValues(selectId) {
  const el = document.getElementById(selectId);
  if (!el) return [];
  return Array.from(el.selectedOptions).map((o) => o.value);
}

// Collect all form values (Step 1)
function getFormValues() {
  const form = document.getElementById("handoffForm");
  const data = new FormData(form);
  const getChecked = (name) =>
    Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(
      (el) => el.value
    );
  const ms = (id) => getMultiSelectValues(id);

  return {
    companyName: (data.get("companyName") || "").trim(),
    mainPocs: (data.get("mainPocs") || "").trim(),
    programManager: (data.get("programManager") || "").trim(),
    ae: (data.get("ae") || "").trim(),
    csm: (data.get("csm") || "").trim(),
    ps: (data.get("ps") || "").trim(),
    goLive: data.get("goLive") || "",
    seats: (data.get("seats") || "").trim(),
    notes: (data.get("notes") || "").trim(),
    handoffNotes: (data.get("handoffNotes") || "").trim(),

    products: getChecked("products"),
    outcomes: getChecked("outcomes"),

    techCrm: [
      ...ms("crmSelect"),
      ...(document.getElementById("crmOther")?.value.trim()
        ? [document.getElementById("crmOther").value.trim()]
        : [])
    ],
    techWebConf: [
      ...ms("webconfSelect"),
      ...(document.getElementById("webconfOther")?.value.trim()
        ? [document.getElementById("webconfOther").value.trim()]
        : [])
    ],
    techTelephony: [
      ...ms("telephonySelect"),
      ...(document.getElementById("telephonyOther")?.value.trim()
        ? [document.getElementById("telephonyOther").value.trim()]
        : [])
    ],
    techProvisioning: [
      ...ms("provisioningSelect"),
      ...(document.getElementById("provisioningOther")?.value.trim()
        ? [document.getElementById("provisioningOther").value.trim()]
        : [])
    ],
    techIntegrations: [
      ...ms("integrationsSelect"),
      ...(document.getElementById("integrationsOther")?.value.trim()
        ? [document.getElementById("integrationsOther").value.trim()]
        : [])
    ]
  };
}

// Build Tech summary string for badges / exports
function buildTechSummary(v) {
  const parts = [];
  const addLine = (label, arr) => {
    if (arr && arr.length) parts.push(`${label}: ${arr.join(", ")}`);
  };
  addLine("CRM", v.techCrm);
  addLine("Web Conf", v.techWebConf);
  addLine("Telephony/SEP", v.techTelephony);
  addLine("Provisioning/Auth", v.techProvisioning);
  addLine("Integrations", v.techIntegrations);
  return parts.join(" · ");
}

function filterTasksForSelection(v) {
  const selectedProducts = v.products || [];
  const out = [];

  ALL_TASKS.forEach((t) => {
    if (t.sku === "ALL" && t.plan === "ALL") {
      out.push(t);
      return;
    }
    if (!t.productKey) return;
    if (selectedProducts.includes(t.productKey)) out.push(t);
  });

  out.sort((a, b) => {
    if (a.sku === "ALL" && b.sku !== "ALL") return -1;
    if (b.sku === "ALL" && a.sku !== "ALL") return 1;
    const labelA = a.productKey ? PRODUCT_LABELS[a.productKey] || "" : "";
    const labelB = b.productKey ? PRODUCT_LABELS[b.productKey] || "" : "";
    if (labelA < labelB) return -1;
    if (labelA > labelB) return 1;
    if (a.phase !== b.phase) return a.phase - b.phase;
    if (a.callType < b.callType) return -1;
    if (a.callType > b.callType) return 1;
    return 0;
  });

  return out;
}

// --- RENDER PLAN (STEP 2) --- //
function renderPlanMeta() {
  const metaEl = document.getElementById("planMeta");
  if (!formValues) {
    metaEl.innerHTML = "<span class='helper'>Plan not generated yet.</span>";
    return;
  }
  const productsLabel =
    (formValues.products || []).map((p) => PRODUCT_LABELS[p] || p).join(", ") ||
    "N/A";
  const outcomesLabel =
    (formValues.outcomes || []).length
      ? (formValues.outcomes || []).join(", ")
      : "N/A";
  const techSummary = buildTechSummary(formValues) || "N/A";

  metaEl.innerHTML = `
    <span class="badge"><strong>Client</strong>&nbsp; ${formValues.companyName || "N/A"}</span>
    <span class="badge"><strong>Products</strong>&nbsp; ${productsLabel}</span>
    <span class="badge"><strong>Outcomes</strong>&nbsp; ${outcomesLabel}</span>
    <span class="badge"><strong>Tech</strong>&nbsp; ${techSummary}</span>
  `;
}

function getProductFamilyFromKey(key) {
  if (!key) return null;
  if (key.startsWith("foundation")) return "Foundation";
  if (key.startsWith("forecast")) return "Forecast";
  if (key.startsWith("engage")) return "Engage";
  if (key === "enable") return "Enable";
  return null;
}

function renderPlan() {
  renderPlanMeta();
  const container = document.getElementById("planContainer");
  container.innerHTML = "";

  if (!filteredTasks.length) {
    container.innerHTML =
      "<div class='card'><p class='helper'>No tasks found. Select at least one product on Step 1 and regenerate.</p></div>";
    return;
  }

  // Global pre-project checklist
  const preTasks = filteredTasks.filter((t) => t.sku === "ALL" && t.plan === "ALL");
  if (preTasks.length) {
    const callId = "preproject";
    const section = document.createElement("div");
    section.className = "card";

    let html = `
      <div class="call-section">
        <div class="call-header" data-target="call-body-${callId}">
          <div>
            <div class="call-title">Phase 0 · Pre-Project Checklist</div>
            <div class="call-meta">Applies to all products · Align internal/external teams before kickoff.</div>
          </div>
          <div class="call-toggle">▼</div>
        </div>
        <div class="call-body" id="call-body-${callId}">
          <ul class="task-list">
    `;
    preTasks.forEach((t) => {
      const status = taskStatus[t.id] || "Not Started";
      html += `
        <li class="task-item">
          <div>${t.actionableItems}</div>
          <div class="task-status">
            <select data-task-id="${t.id}">
              <option value="Not Started"${status === "Not Started" ? " selected" : ""}>Not started</option>
              <option value="Complete"${status === "Complete" ? " selected" : ""}>Complete</option>
              <option value="NA"${status === "NA" ? " selected" : ""}>N/A</option>
            </select>
          </div>
        </li>
      `;
    });
    html += `
          </ul>
          <div class="helper" style="margin-top:0.4rem;">Tip: Complete this checklist before your first customer-facing call.</div>
        </div>
      </div>
    `;
    section.innerHTML = html;
    container.appendChild(section);
  }

  const selectedProducts = formValues.products || [];
  selectedProducts.forEach((productKey) => {
    const productLabel = PRODUCT_LABELS[productKey] || productKey;
    const family = getProductFamilyFromKey(productKey);
    const prodTasks = filteredTasks.filter((t) => t.productKey === productKey);
    if (!prodTasks.length) return;

    const card = document.createElement("div");
    card.className = "card";
    const docs = (PRODUCT_DOCS[productKey] || "").trim();

    let html = `
      <h3>${productLabel}</h3>
      <p class="helper">
        Call flow and tasks for ${productLabel}. Each section below represents a milestone call; use the status controls to track progress.
      </p>
    `;
    if (docs) html += `<p class="helper">${docs}</p>`;

    const callTypes = Array.from(
      new Set(
        prodTasks
          .filter((t) => t.phase !== 0)
          .map((t) => t.callType)
          .filter(Boolean)
      )
    );

    const callEntries = CALL_ORDER.filter(
      (c) => c.product === family && callTypes.includes(c.callType)
    ).sort((a, b) => a.order - b.order);

    callEntries.forEach((call) => {
      const callTasks = prodTasks.filter((t) => t.callType === call.callType);
      if (!callTasks.length) return;
      const callId = `${productKey}-${call.callType.replace(/\s+/g, "_")}`;
      const phase = callTasks[0].phase;
      const phaseLabel = PHASE_LABELS[phase] || `Phase ${phase}`;
      html += `
        <div class="call-section">
          <div class="call-header" data-target="call-body-${callId}">
            <div>
              <div class="call-title">${phaseLabel} · ${call.callType}</div>
              <div class="call-meta">
                Gong: ${call.gong}<br/>
                Customer: ${call.customer}
              </div>
            </div>
            <div class="call-toggle">▼</div>
          </div>
          <div class="call-body" id="call-body-${callId}">
            <div class="helper"><strong>Goal:</strong> ${
              callTasks.find((t) => t.goal)?.goal || "See tasks below."
            }</div>
            <ul class="task-list">
      `;
      callTasks.forEach((t) => {
        const status = taskStatus[t.id] || "Not Started";
        html += `
          <li class="task-item">
            <div>${t.actionableItems}</div>
            <div class="task-status">
              <select data-task-id="${t.id}">
                <option value="Not Started"${
                  status === "Not Started" ? " selected" : ""
                }>Not started</option>
                <option value="Complete"${
                  status === "Complete" ? " selected" : ""
                }>Complete</option>
                <option value="NA"${status === "NA" ? " selected" : ""}>N/A</option>
              </select>
            </div>
          </li>
        `;
      });
      html += `
            </ul>
            <div class="helper" style="margin-top:0.5rem;">
              Placeholders: <strong>Training links</strong>, <strong>playbooks</strong>, and <strong>talk tracks</strong> can be pasted here by PS.
            </div>
          </div>
        </div>
      `;
    });

    card.innerHTML = html;
    container.appendChild(card);
  });

  wireCollapsibles();
  wireStatusSelects();
}

// --- COLLAPSIBLES & STATUS --- //
function wireCollapsibles() {
  $all(".call-header").forEach((hdr) => {
    hdr.addEventListener("click", () => {
      const targetId = hdr.getAttribute("data-target");
      const body = document.getElementById(targetId);
      if (!body) return;
      const open = !body.classList.contains("hidden");
      body.classList.toggle("hidden", open);
      const toggleEl = hdr.querySelector(".call-toggle");
      if (toggleEl) toggleEl.textContent = open ? "▶" : "▼";
    });
  });
}

function wireStatusSelects() {
  $all(".task-status select").forEach((sel) => {
    sel.addEventListener("change", () => {
      const id = sel.getAttribute("data-task-id");
      const val = sel.value;
      taskStatus[id] = val;
      renderDashboard();
    });
  });
}

// --- EXPORT HELPERS --- //
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generatePlanCsv() {
  const cols = [
    "SKU",
    "Plan",
    "Phase",
    "CallType",
    "Goal",
    "Deliverables",
    "ActionableItems",
    "Status"
  ];
  const lines = [cols.join(",")];
  filteredTasks.forEach((t) => {
    const status = taskStatus[t.id] || "Not Started";
    const row = [
      t.sku,
      t.plan,
      String(t.phase),
      t.callType,
      t.goal || "",
      t.deliverables || "",
      t.actionableItems || "",
      status
    ].map((v) => `"${String(v).replace(/"/g, '""')}"`);
    lines.push(row.join(","));
  });
  return lines.join("\n");
}

function generatePlanMarkdown() {
  let md = `# Gong Implementation Plan\n\n`;
  if (formValues) {
    md += `**Client:** ${formValues.companyName || "N/A"}\n\n`;
  }
  md += `| SKU | Plan | Phase | Call Type | Goal | Deliverables | Actionable Items | Status |\n`;
  md += `| --- | --- | --- | --- | --- | --- | --- | --- |\n`;
  filteredTasks.forEach((t) => {
    const status = taskStatus[t.id] || "Not Started";
    md += `| ${t.sku} | ${t.plan} | ${t.phase} | ${t.callType} | ${t.goal || ""} | ${
      t.deliverables || ""
    } | ${t.actionableItems || ""} | ${status} |\n`;
  });
  return md;
}

function generatePlanHtml() {
  return `
  <html><body>
  <h1>Gong Implementation Plan</h1>
  <p>Client: <strong>${formValues?.companyName || "N/A"}</strong></p>
  <table border="1" cellpadding="4" cellspacing="0">
    <thead>
      <tr>
        <th>SKU</th><th>Plan</th><th>Phase</th><th>Call Type</th>
        <th>Goal</th><th>Deliverables</th><th>Actionable Items</th><th>Status</th>
      </tr>
    </thead>
    <tbody>
      ${filteredTasks
        .map((t) => {
          const status = taskStatus[t.id] || "Not Started";
          return `<tr>
            <td>${t.sku}</td>
            <td>${t.plan}</td>
            <td>${t.phase}</td>
            <td>${t.callType}</td>
            <td>${t.goal || ""}</td>
            <td>${t.deliverables || ""}</td>
            <td>${t.actionableItems || ""}</td>
            <td>${status}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>
  </body></html>`;
}

function generateHandoffDoc() {
  if (!formValues) return "";
  const tech = buildTechSummary(formValues);
  return `
  <html><body>
  <h1>Gong Handoff Questionnaire</h1>
  <h2>Project Information</h2>
  <p><strong>Client:</strong> ${formValues.companyName || ""}</p>
  <p><strong>Primary Contacts:</strong> ${formValues.mainPocs || ""}</p>
  <p><strong>Program Manager:</strong> ${formValues.programManager || ""}</p>
  <p><strong>AE:</strong> ${formValues.ae || ""} · <strong>CSM:</strong> ${
    formValues.csm || ""
  } · <strong>PS Consultant:</strong> ${formValues.ps || ""}</p>
  <p><strong>Target Go-Live:</strong> ${formValues.goLive || ""}</p>
  <p><strong>Seats:</strong> ${formValues.seats || ""}</p>

  <h2>Products & Outcomes</h2>
  <p><strong>Products:</strong> ${(formValues.products || [])
    .map((p) => PRODUCT_LABELS[p] || p)
    .join(", ")}</p>
  <p><strong>Primary Outcomes:</strong> ${(formValues.outcomes || []).join(", ") ||
    "N/A"}</p>

  <h2>Tech Stack</h2>
  <p>${tech || "N/A"}</p>

  <h2>Notes</h2>
  <p>${(formValues.notes || "") + "<br/><br/>" + (formValues.handoffNotes || "")}</p>
  </body></html>
  `;
}

// --- DASHBOARD (STEP 3) --- //
function computeProgress() {
  const result = {
    overall: { complete: 0, total: 0 },
    byProduct: {},
    byCall: []
  };

  function isComplete(status) {
    return status === "Complete";
  }

  filteredTasks.forEach((t) => {
    const status = taskStatus[t.id] || "Not Started";
    if (status === "NA") return;

    result.overall.total += 1;
    if (isComplete(status)) result.overall.complete += 1;

    const key = t.productKey || "GLOBAL";
    if (!result.byProduct[key]) result.byProduct[key] = { complete: 0, total: 0 };
    result.byProduct[key].total += 1;
    if (isComplete(status)) result.byProduct[key].complete += 1;

    if (t.productKey) {
      const family = getProductFamilyFromKey(t.productKey);
      const callType = t.callType || "";
      const existing = result.byCall.find(
        (c) => c.productKey === t.productKey && c.callType === callType
      );
      if (existing) {
        existing.total += 1;
        if (isComplete(status)) existing.complete += 1;
      } else {
        result.byCall.push({
          productKey: t.productKey,
          productLabel: PRODUCT_LABELS[t.productKey] || t.productKey,
          callType,
          family,
          complete: isComplete(status) ? 1 : 0,
          total: 1
        });
      }
    }
  });

  return result;
}

function renderDashboardMeta() {
  const metaEl = document.getElementById("dashboardMeta");
  if (!formValues) {
    metaEl.innerHTML =
      "<span class='helper'>Generate a plan first on Step 2 to see status.</span>";
    return;
  }
  const tech = buildTechSummary(formValues) || "N/A";
  const productsLabel =
    (formValues.products || []).map((p) => PRODUCT_LABELS[p] || p).join(", ") ||
    "N/A";
  metaEl.innerHTML = `
    <span class="badge"><strong>Client</strong>&nbsp; ${formValues.companyName || "N/A"}</span>
    <span class="badge"><strong>Products</strong>&nbsp; ${productsLabel}</span>
    <span class="badge"><strong>Tech</strong>&nbsp; ${tech}</span>
  `;
}

function renderDashboard() {
  renderDashboardMeta();
  const overallEl = document.getElementById("overallProgress");
  const byProdEl = document.getElementById("byProductProgress");
  const roadmapEl = document.getElementById("roadmapTimeline");

  if (!filteredTasks.length) {
    overallEl.innerHTML =
      "<p class='helper'>No tasks in scope. Build a plan on Step 2 first.</p>";
    byProdEl.innerHTML = "";
    roadmapEl.innerHTML = "";
    return;
  }

  const progress = computeProgress();

  const pctOverall =
    progress.overall.total === 0
      ? 0
      : Math.round((progress.overall.complete / progress.overall.total) * 100);
  overallEl.innerHTML = `
    <div class="progress-bar">
      <div class="progress-bar-inner" style="width:${pctOverall}%;"></div>
    </div>
    <div class="progress-text">${pctOverall}% complete (${progress.overall.complete} of ${progress.overall.total} applicable tasks)</div>
  `;

  const rows = [];
  Object.entries(progress.byProduct).forEach(([key, val]) => {
    const pct = val.total === 0 ? 0 : Math.round((val.complete / val.total) * 100);
    const label = key === "GLOBAL" ? "Global (Pre-Project)" : PRODUCT_LABELS[key] || key;
    rows.push(
      `<tr><td>${label}</td><td>${pct}%</td><td>${val.complete}/${val.total}</td></tr>`
    );
  });
  byProdEl.innerHTML = `
    <table class="small-table">
      <thead><tr><th>Scope</th><th>% Complete</th><th>Tasks</th></tr></thead>
      <tbody>${rows.join("")}</tbody>
    </table>
  `;

  const callLines = [];
  const sortedCalls = progress.byCall.sort((a, b) => {
    const famA = a.family || "";
    const famB = b.family || "";
    if (famA < famB) return -1;
    if (famA > famB) return 1;
    const orderA =
      CALL_ORDER.find((c) => c.product === famA && c.callType === a.callType)?.order ||
      99;
    const orderB =
      CALL_ORDER.find((c) => c.product === famB && c.callType === b.callType)?.order ||
      99;
    return orderA - orderB;
  });
  sortedCalls.forEach((c) => {
    const pct = c.total === 0 ? 0 : Math.round((c.complete / c.total) * 100);
    callLines.push(
      `<li class="timeline-item"><strong>${c.productLabel} · ${
        c.callType
      }</strong><br/>${pct}% (${c.complete}/${c.total})</li>`
    );
  });
  roadmapEl.innerHTML = `
    <ul class="timeline-list">
      ${callLines.join("")}
    </ul>
  `;
}

// Export individual visual cards as HTML snippet
function exportViz(which) {
  let elId = "";
  let filename = "";
  if (which === "overall") {
    elId = "viz-overall";
    filename = "gong_overall_progress.html";
  } else if (which === "byProduct") {
    elId = "viz-by-product";
    filename = "gong_by_product_progress.html";
  } else if (which === "roadmap") {
    elId = "viz-roadmap";
    filename = "gong_roadmap.html";
  }
  if (!elId) return;
  const el = document.getElementById(elId);
  if (!el) return;
  const html = `<html><body>${el.innerHTML}</body></html>`;
  downloadFile(filename, html, "text/html");
}

// --- NAVIGATION --- //
function setStep(step) {
  $all(".step-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.step === String(step));
  });
  $all(".step-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `step-${step}`);
  });
}

// --- PRODUCT GROUP WIRING --- //
function setupProductGroups() {
  const grouped = [
    { groupId: "group-foundations", containerId: "foundations-skus" },
    { groupId: "group-engage", containerId: "engage-skus" },
    { groupId: "group-forecast", containerId: "forecast-skus" }
  ];
  grouped.forEach(({ groupId, containerId }) => {
    const groupEl = document.getElementById(groupId);
    const containerEl = document.getElementById(containerId);
    if (!groupEl || !containerEl) return;
    groupEl.addEventListener("change", () => {
      const checked = groupEl.checked;
      containerEl.classList.toggle("hidden", !checked);
      if (!checked) {
        containerEl
          .querySelectorAll('input[type="checkbox"][name="products"]')
          .forEach((c) => (c.checked = false));
      }
    });
  });

  const enableGroup = document.getElementById("group-enable");
  const enableSku = document.getElementById("sku-enable");
  if (enableGroup && enableSku) {
    enableGroup.addEventListener("change", () => {
      enableSku.checked = enableGroup.checked;
    });
  }
}

// --- THEME TOGGLE --- //
function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// --- HANDOFF DOC EXPORT --- //
function setupHandoffExport() {
  const btn = document.getElementById("exportHandoffDoc");
  if (!btn) return;
  btn.addEventListener("click", () => {
    formValues = getFormValues();
    const html = generateHandoffDoc();
    const name =
      (formValues.companyName || "Client") + " - Handoff Questionnaire.doc";
    downloadFile(name, html, "application/msword");
  });
}

// --- MAIN WIRING --- //
window.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProductGroups();
  setupHandoffExport();

// Enhance tech stack multi-selects with Choices.js
document.querySelectorAll(".js-multi-select").forEach((el) => {
  new Choices(el, {
    removeItemButton: true,
    shouldSort: false,
    searchEnabled: true,
    placeholder: true,
    placeholderValue: "Select...",
  });
});

  // Step nav
  $all(".step-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = btn.dataset.step;
      setStep(step);
      if (step === "3") renderDashboard();
    });
  });

  // Footer navigation
  $("#toStep2").addEventListener("click", () => {
    formValues = getFormValues();
    filteredTasks = filterTasksForSelection(formValues);
    filteredTasks.forEach((t) => {
      if (!taskStatus[t.id]) taskStatus[t.id] = "Not Started";
    });
    renderPlan();
    setStep(2);
  });

  $("#toStep3").addEventListener("click", () => {
    renderDashboard();
    setStep(3);
  });

  $("#backToStep1").addEventListener("click", () => setStep(1));
  $("#backToStep2").addEventListener("click", () => setStep(2));

  // Plan exports
  $("#exportPlanCsv").addEventListener("click", () => {
    if (!filteredTasks.length) return;
    const csv = generatePlanCsv();
    const name =
      (formValues?.companyName || "Client") + " - Gong Implementation Plan.csv";
    downloadFile(name, csv, "text/csv");
  });

  $("#exportPlanMd").addEventListener("click", () => {
    if (!filteredTasks.length) return;
    const md = generatePlanMarkdown();
    const name =
      (formValues?.companyName || "Client") + " - Gong Implementation Plan.md";
    downloadFile(name, md, "text/markdown");
  });

  $("#exportPlanHtml").addEventListener("click", () => {
    if (!filteredTasks.length) return;
    const html = generatePlanHtml();
    const name =
      (formValues?.companyName || "Client") + " - Gong Implementation Plan.html";
    downloadFile(name, html, "text/html");
  });

  $("#exportPlanDoc").addEventListener("click", () => {
    if (!filteredTasks.length) return;
    const html = generatePlanHtml();
    const name =
      (formValues?.companyName || "Client") + " - Gong Implementation Plan.doc";
    downloadFile(name, html, "application/msword");
  });

  // Viz exports
  $all("[data-export-viz]").forEach((btn) => {
    btn.addEventListener("click", () => {
      exportViz(btn.getAttribute("data-export-viz"));
    });
  });
});

