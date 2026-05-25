(function(){
window.BANKS = window.BANKS || {};
window.BANKS["pal-e"] = {
  id: "pal-e",
  short: "PAL-E",
  name: "Professional Agile Leadership Essentials",
  url: "https://www.scrum.org/assessments/professional-agile-leadership-certification",
  source: "Scrum Guide 2020 + EBM Guide + Professional Scrum Competencies + Cynefin/Theory Y/Westrum/Team Topologies",
  pass: 85,
  examCount: 36,
  minutes: 60,
  status: "complete",
  cats: { framework:"Scrum for Leaders", leadership:"Agile Leadership", people:"People & Self-Managing Teams", orgdesign:"Org Design & Culture", evidence:"Measuring Value (EBM)", product:"Product Value & Stakeholders", delivery:"Emergent Development" },
  questions: [
    { type:"single", cat:"leadership", q:"A team working on a genuinely novel product keeps asking their leader for a detailed plan that guarantees the outcome. The work is complex with high uncertainty. What is the most appropriate leadership response?", opts:[{t:"Create a fixed, detailed plan and hold the team to it so there is no ambiguity"},{t:"Help the team set a clear goal, then give them space to experiment and adapt as they learn",c:true},{t:"Escalate to senior management to decide the exact steps the team must follow"},{t:"Tell the team that complex work has no goals and they should simply do their best"}], exp:"In complex domains cause and effect are clear only in retrospect, so the agile leader sets clear goals and creates space for the team to probe, sense, and adapt rather than imposing a deterministic plan." },
    { type:"single", cat:"leadership", q:"What best describes the primary way an agile leader adds value to a self-organizing team?", opts:[{t:"By assigning each team member their daily tasks to maximize utilization"},{t:"By creating the conditions and removing impediments so the team can self-organize toward goals",c:true},{t:"By approving every technical decision before the team may proceed"},{t:"By measuring individual output and ranking team members against each other"}], exp:"Agile leadership is largely servant leadership: leaders invest in the environment, clarify direction, and clear obstacles so self-organization can flourish, rather than directing the work." },
    { type:"single", cat:"leadership", q:"A manager wants to increase a team's agile maturity. Which approach is most consistent with agile leadership?", opts:[{t:"Mandate a higher velocity target each sprint and tie it to bonuses"},{t:"Coach the team, connect their work to clear goals and values, and let them own how they improve",c:true},{t:"Add more detailed status reports so the manager can track every activity"},{t:"Replace team members who do not immediately reach the desired maturity"}], exp:"Maturity grows when leaders coach, connect work to clear goals and shared values, and foster ownership. Imposing output targets or surveillance undermines the intrinsic motivation that drives high-performing teams." },
    { type:"single", cat:"leadership", q:"A leader notices that delegating a decision to the team would help them grow, but the decision carries some risk. What is the best agile leadership stance on delegation?", opts:[{t:"Never delegate decisions that carry any risk; leaders must own all risky choices"},{t:"Delegate authority deliberately to the appropriate level, matching it to the team's competence and the situation",c:true},{t:"Delegate every decision immediately and equally, regardless of context"},{t:"Delegate only the decisions the team has already proven they can make perfectly"}], exp:"Delegation in agile leadership is intentional and situational: leaders push authority to the appropriate level based on the team's capability and the context, growing the team while managing risk, rather than hoarding or abdicating decisions." },
    { type:"single", cat:"leadership", q:"During a difficult release, an agile leader is tempted to step in and tell the team exactly how to solve a complex technical problem. Why is restraint usually the better choice?", opts:[{t:"Because leaders are not allowed to have technical opinions"},{t:"Because giving the team space to find emergent solutions builds capability and fits complex work",c:true},{t:"Because the team should never receive any input from leadership"},{t:"Because the leader's time is more valuable than solving the problem"}], exp:"For complex problems the best solutions emerge from the people doing the work. Leaders foster that by providing goals and support and resisting the urge to dictate solutions, which also builds the team's long-term capability." },
    { type:"single", cat:"leadership", q:"Which statement best reflects how an agile leader should think about motivation?", opts:[{t:"Motivation comes mainly from financial incentives and close supervision"},{t:"Intrinsic motivators such as autonomy, mastery, and purpose drive sustained high performance",c:true},{t:"Motivation is fixed by personality and cannot be influenced by leaders"},{t:"The most reliable motivator is fear of negative consequences"}], exp:"Agile leadership leans on intrinsic motivation. Autonomy, mastery, and a sense of purpose sustain engagement in knowledge work far better than extrinsic carrots and sticks." },
    { type:"single", cat:"orgdesign", q:"An organization funds and staffs initiatives as temporary projects that disband once delivered. A leader wants more agility. Which shift is most aligned with agile leadership?", opts:[{t:"Keep the project model but add more upfront documentation"},{t:"Move toward a product mindset with stable, long-lived teams focused on outcomes",c:true},{t:"Shorten every project to two weeks regardless of the work"},{t:"Outsource all projects to reduce internal coordination"}], exp:"A product mindset with stable, enduring teams oriented around customer outcomes sustains learning and value delivery, whereas the temporary project model optimizes for one-time output and disperses hard-won knowledge." },
    { type:"single", cat:"orgdesign", q:"A leader is reshaping the organization to better support agile teams. Which of these is the most important precondition to establish?", opts:[{t:"A detailed multi-year roadmap that cannot change"},{t:"Clear goals and direction combined with the autonomy for teams to decide how to meet them",c:true},{t:"A rule that every decision must be approved by a steering committee"},{t:"Individual performance quotas for each developer"}], exp:"Key preconditions for agile teams include clear organizational goals plus the autonomy to determine how to achieve them. Rigid plans, heavy approval gates, and individual quotas work against self-organization." },
    { type:"single", cat:"orgdesign", q:"When hiring to strengthen organizational agility, what should an agile leader prioritize in candidates?", opts:[{t:"The longest list of certifications regardless of mindset"},{t:"A learning, collaborative, agile mindset and the ability to work in complexity",c:true},{t:"Willingness to follow detailed instructions without questioning them"},{t:"A preference for working alone to avoid coordination overhead"}], exp:"Hiring for agility favors people with a learning and collaborative mindset who thrive amid complexity, rather than credential count or a command-and-follow disposition." },
    { type:"single", cat:"orgdesign", q:"A leader argues that culture is irrelevant as long as teams follow the Scrum events correctly. Why is this view problematic for organizational agility?", opts:[{t:"Because culture only matters in non-software organizations"},{t:"Because mechanically following events without supportive values and behaviors rarely produces real agility",c:true},{t:"Because Scrum events should be skipped once a culture is healthy"},{t:"Because culture is entirely the responsibility of the human resources department"}], exp:"Agility depends on culture, values, and behaviors, not just ceremony. Going through the motions of events without the underlying mindset and supportive environment produces the form of agile without the benefits." },
    { type:"multi", cat:"leadership", q:"Which of the following are characteristics of effective servant leadership in an agile organization? (Choose all that apply.)", opts:[{t:"Putting the needs of the team and customers ahead of the leader's status",c:true},{t:"Developing people so they can perform and decide as highly as possible",c:true},{t:"Centralizing all decisions so the leader retains maximum control"},{t:"Removing organizational impediments that block the team",c:true},{t:"Measuring success primarily by how busy each individual appears"}], exp:"Servant leaders prioritize team and customer needs, grow people's capability and autonomy, and clear impediments. Centralizing control and equating busyness with success contradict servant leadership." },
    { type:"multi", cat:"evidence", q:"According to Evidence-Based Management, which of the following are the four Key Value Areas (KVAs)? (Choose all that apply.)", opts:[{t:"Current Value (CV)",c:true},{t:"Unrealized Value (UV)",c:true},{t:"Time-to-Market (T2M)",c:true},{t:"Ability to Innovate (A2I)",c:true},{t:"Return on Investment (ROI)"}], exp:"EBM defines four KVAs: Current Value, Unrealized Value, Time-to-Market, and Ability to Innovate. ROI is a financial metric, not one of the four KVAs." },
    { type:"multi", cat:"evidence", q:"An EBM goal hierarchy guides empirical improvement. Which of the following are levels in that hierarchy? (Choose all that apply.)", opts:[{t:"Strategic Goal",c:true},{t:"Intermediate Goal",c:true},{t:"Immediate Tactical Goal",c:true},{t:"Annual Budget Goal"},{t:"Personal Bonus Goal"}], exp:"EBM describes Strategic Goals, Intermediate Goals, and Immediate Tactical Goals. Teams run experiments toward the immediate tactical goal, which advances intermediate goals on the way to the strategic goal. Budget and bonus targets are not EBM goal levels." },
    { type:"tf", cat:"evidence", q:"In Evidence-Based Management, Unrealized Value (UV) represents the potential future value that could be realized if the organization met the needs of all potential customers or users.", opts:[{t:"True",c:true},{t:"False"}], exp:"Correct. UV captures the gap between current value delivered and the best possible value, motivating continued investment when the opportunity outweighs the cost." },
    { type:"tf", cat:"evidence", q:"Evidence-Based Management teaches that measuring outputs and activity (such as features shipped or hours worked) is a reliable substitute for measuring customer outcomes.", opts:[{t:"True"},{t:"False",c:true}], exp:"False. EBM stresses measuring outcomes and value, not output. Activity and output are easy to count but do not guarantee improved customer experience; goals should be framed in terms of customer outcomes and satisfaction gaps." },
    { type:"tf", cat:"orgdesign", q:"For an organization to sustain value over time, Evidence-Based Management suggests it needs strength across all four Key Value Areas, not just the ability to deliver value today.", opts:[{t:"True",c:true},{t:"False"}], exp:"Correct. An organization strong only in Current Value may deliver short-term value but cannot sustain it without also attending to Unrealized Value, Time-to-Market, and Ability to Innovate." },

    { type:"multi", cat:"framework", q:"Which of the following are the three pillars of empirical process control upon which Scrum is founded? (select 3)", opts:[{t:"Transparency",c:true},{t:"Inspection",c:true},{t:"Adaptation",c:true},{t:"Predictability"},{t:"Compliance"}], exp:"Scrum is founded on empiricism: knowledge comes from experience and decisions are made based on what is observed. The three pillars are Transparency, Inspection, and Adaptation." },

    { type:"single", cat:"framework", q:"A leader insists that every Scrum Team must follow a single corporate Definition of Done set by an external governance body. Which best describes the Scrum Guide 2020 stance?", opts:[{t:"If the organization has a Definition of Done as a standard, all Scrum Teams must follow it as a minimum; teams may add stricter criteria.",c:true},{t:"Scrum forbids organizational standards — each team must define DoD independently."},{t:"The PO alone defines the DoD for their team."},{t:"Definition of Done is optional and may be skipped."}], exp:"The Scrum Guide 2020 states if the DoD is part of organizational standards, all Scrum Teams must follow it as a minimum. Teams may add stricter criteria. DoD is the commitment for the Increment." },

    { type:"single", cat:"framework", q:"In agile organizations, the Product Owner is best understood as:", opts:[{t:"One person accountable for maximizing product value; not a committee or proxy.",c:true},{t:"A committee of stakeholders representing different business units."},{t:"A junior coordinator under a project manager."},{t:"A rotating role held by different Developers each Sprint."}], exp:"The Scrum Guide 2020 states the Product Owner is one person, not a committee. They may represent the needs of many stakeholders, but they are a single accountable decision-maker for ordering the Product Backlog." },

    { type:"single", cat:"framework", q:"A senior leader asks 'Can we extend this Sprint by a week because the team needs more time?' What is the most accurate response per Scrum?", opts:[{t:"No — Sprint length is fixed once it begins; if the Sprint Goal is endangered, only the Product Owner may cancel the Sprint.",c:true},{t:"Yes — leaders may extend Sprints to ensure delivery."},{t:"Yes — but only with the approval of all stakeholders."},{t:"Yes — but the team must work weekends to make up the time."}], exp:"Sprint length is fixed (one month or less); extending undermines empiricism and the cadence of inspection/adaptation. Sprint cancellation is the PO's authority, used only when the Sprint Goal becomes obsolete." },

    { type:"tf", cat:"framework", q:"Per the Scrum Guide 2020, the Scrum Master is a 'true leader who serves' the Scrum Team and the larger organization.", opts:[{t:"True",c:true},{t:"False"}], exp:"Correct. The 2020 Scrum Guide reframes the SM from 'servant-leader' to 'true leader who serves' — leading by serving, not commanding." },

    { type:"single", cat:"framework", q:"A manager wants weekly individual productivity reports on each Developer. From an agile leadership perspective, this approach is most likely to:", opts:[{t:"Damage self-management, transparency, and the team's intrinsic motivation; better to inspect outcomes via Scrum artifacts.",c:true},{t:"Improve team performance by holding individuals accountable."},{t:"Be required by the Scrum Guide 2020."},{t:"Have no effect on team dynamics."}], exp:"Individual productivity metrics treat knowledge work as factory output, undermining self-management, collaboration, and intrinsic motivation. Agile leaders inspect team-level outcomes via Scrum artifacts and value-based measures, not individual surveillance." },

    { type:"single", cat:"framework", q:"What does 'self-managing' mean per the Scrum Guide 2020?", opts:[{t:"The Scrum Team internally decides who does what, when, and how.",c:true},{t:"The team has no manager in the organization."},{t:"The team sets its own salaries and budgets."},{t:"The team chooses the Product Goal independently of stakeholders."}], exp:"The Scrum Guide 2020 states Scrum Teams are self-managing — they internally decide who does what, when, and how. This is a different scope than removing external management altogether or setting their own compensation." },

    { type:"single", cat:"framework", q:"A leader attends the Daily Scrum to give status updates and direction to the team. What is the most accurate critique per the Scrum Guide 2020?", opts:[{t:"The Daily Scrum is a 15-minute event for the Developers; leaders may observe but should not run it or use it for status reporting.",c:true},{t:"This is appropriate as long as the leader keeps it brief."},{t:"This is required when the team is new to Scrum."},{t:"The Daily Scrum should be moved to a different time to accommodate leadership."}], exp:"The Daily Scrum is for the Developers. Leaders attending to direct or extract status disrupts self-management and turns inspection-and-adaptation into status reporting — an anti-pattern." },

    { type:"single", cat:"leadership", q:"A Scrum Team is building a novel product with unknown customer behavior. Per Cynefin, this work is most likely in which domain?", opts:[{t:"Complex — cause and effect can only be understood in retrospect; probe-sense-respond.",c:true},{t:"Clear — best practice applies; sense-categorize-respond."},{t:"Complicated — expert analysis can determine the answer; sense-analyze-respond."},{t:"Chaotic — no patterns yet; act-sense-respond."}], exp:"Novel product development with unknown user behavior is a complex domain (Snowden's Cynefin). Cause-and-effect are visible only in hindsight, requiring small experiments (probe), measurement (sense), and adaptation (respond) — exactly what Scrum's empirical process provides." },

    { type:"single", cat:"leadership", q:"In Cynefin, complicated and complex domains differ most importantly in that:", opts:[{t:"Complicated problems can be solved by experts with analysis; complex problems require experimentation because cause-effect is unknown in advance.",c:true},{t:"Complex problems are harder versions of complicated problems."},{t:"Complicated problems require more documentation than complex ones."},{t:"Complex problems should always be escalated to senior management."}], exp:"Complicated = knowable through expertise (sense-analyze-respond). Complex = unknowable in advance, requires probe-sense-respond. Most product development sits in complex; treating it as complicated leads to plan-driven failure." },

    { type:"single", cat:"leadership", q:"Which approach best reflects 'Theory Y' assumptions about people, as relevant to agile leadership?", opts:[{t:"People are self-directed, seek responsibility, and exercise creativity when given the right conditions.",c:true},{t:"People are lazy, dislike work, and must be controlled and threatened."},{t:"People are motivated mainly by financial bonuses."},{t:"People work best when monitored closely and given little autonomy."}], exp:"McGregor's Theory Y (which underpins agile leadership) assumes people are self-directed and seek responsibility when given autonomy, mastery, and purpose. Theory X (control-and-direct) does not fit knowledge work and undermines Scrum's empirical foundation." },

    { type:"multi", cat:"leadership", q:"According to research on intrinsic motivation in knowledge work, which factors most reliably drive sustained high performance? (select 3)", opts:[{t:"Autonomy",c:true},{t:"Mastery",c:true},{t:"Purpose",c:true},{t:"Surveillance"},{t:"Individual cash bonuses"}], exp:"Daniel Pink's 'Drive' (and broader intrinsic-motivation research) identifies autonomy, mastery, and purpose as the durable motivators for creative knowledge work. Surveillance and extrinsic monetary incentives can actually harm creative performance." },

    { type:"single", cat:"leadership", q:"A leader is deciding how much authority to delegate to a self-managing team. Which approach is most consistent with agile leadership?", opts:[{t:"Delegate authority deliberately and at a level matched to the team's competence and the situation, making the delegation level explicit.",c:true},{t:"Delegate everything immediately and equally, regardless of context."},{t:"Withhold all decision authority until the team has proven they never make mistakes."},{t:"Make delegation invisible — let the team guess what authority they have."}], exp:"Delegation in agile leadership is intentional and situational. Approaches like Delegation Poker make the delegation level explicit per decision area, growing the team while managing risk. Implicit or all-or-nothing delegation creates confusion and undermines self-management." },

    { type:"single", cat:"leadership", q:"Why is psychological safety considered foundational to agile teams (per Edmondson and Google's Project Aristotle)?", opts:[{t:"It is the strongest predictor of team effectiveness because it enables members to take interpersonal risks — speak up, admit mistakes, propose ideas — which empiricism requires.",c:true},{t:"It eliminates conflict by ensuring everyone agrees."},{t:"It guarantees the team will hit every Sprint forecast."},{t:"It is a Scrum value that replaces Courage in newer guides."}], exp:"Project Aristotle (Google) identified psychological safety (Edmondson) as the #1 predictor of team effectiveness — above skills or seniority. It does NOT remove conflict; it makes productive conflict safe. Empiricism (transparency, inspection, adaptation) collapses without it." },

    { type:"single", cat:"leadership", q:"When a Scrum Team faces a difficult technical problem, what is the most appropriate stance for an agile leader?", opts:[{t:"Coach with powerful questions and create space for the team to find emergent solutions; intervene only if they truly cannot move.",c:true},{t:"Step in immediately and dictate the technical solution."},{t:"Replace the team members with senior engineers."},{t:"Add more upfront documentation requirements to prevent the issue."}], exp:"For complex problems, the best solutions emerge from the people doing the work. Coaching and providing space builds team capability long-term. Dictating solutions undermines self-management; replacing people punishes learning; documentation cannot replace empirical inspection." },

    { type:"single", cat:"people", q:"A leader asks why a Scrum Team's first Sprint with a new member produced lower output. What is the most likely cause from a team-dynamics view?", opts:[{t:"The team is in the Forming/Storming stage; output dips as the team builds shared understanding before performing.",c:true},{t:"The new member is incompetent and should be removed."},{t:"Scrum is failing — the team should adopt a different framework."},{t:"Velocity drops are abnormal and indicate a serious problem."}], exp:"Tuckman's stages (Forming, Storming, Norming, Performing) show that teams predictably take time to gel. Leaders should expect and accept this dip rather than punishing or restructuring. Productive Storming is necessary growth." },

    { type:"single", cat:"people", q:"An agile leader wants to support self-management. Which behavior is MOST counterproductive?", opts:[{t:"Approving every team decision before they can proceed.",c:true},{t:"Clarifying the long-term direction and outcomes."},{t:"Removing organizational impediments outside the team's control."},{t:"Coaching the team on Scrum Values and empirical thinking."}], exp:"Approval gates kill self-management by sending the message that the team cannot be trusted with decisions in their own domain. Clarifying outcomes, removing org impediments, and coaching all support self-management." },

    { type:"single", cat:"people", q:"A Scrum Team is reaching maturity and rarely needs help. From a situational-leadership view, the leader's stance should shift toward:", opts:[{t:"Coaching with powerful questions and protecting their autonomy, rather than teaching/directing.",c:true},{t:"Increasing daily oversight to keep them sharp."},{t:"Assigning harder tasks personally to challenge them."},{t:"Reorganizing the team to mix it with less-mature teams."}], exp:"As teams mature (Shu→Ha→Ri), the leader's stance shifts from teaching/mentoring to coaching/facilitating. Maintaining heavy oversight or breaking up mature teams undermines the autonomy they have earned." },

    { type:"single", cat:"orgdesign", q:"Conway's Law states that:", opts:[{t:"Organizations design systems that mirror their own communication structures.",c:true},{t:"The number of meetings grows to fill the available time."},{t:"Every organization eventually becomes bureaucratic."},{t:"Software complexity doubles every 18 months."}], exp:"Conway's Law (1968): system architecture mirrors the communication structure of the organization that built it. The 'Inverse Conway Maneuver' deliberately designs team structures to produce the desired architecture (e.g. loosely coupled teams produce loosely coupled software)." },

    { type:"single", cat:"orgdesign", q:"In Team Topologies, what is the primary team type that should make up the majority (~80%) of teams?", opts:[{t:"Stream-aligned teams — long-lived teams aligned to a flow of work delivering value to customers.",c:true},{t:"Enabling teams — short-lived coaches raising capability."},{t:"Platform teams — internal product teams providing self-service infrastructure."},{t:"Complicated-subsystem teams — pockets of deep expertise."}], exp:"Per Team Topologies (Skelton & Pais), stream-aligned teams are the dominant type — long-lived, end-to-end value-flow teams. The other three types (Enabling, Platform, Complicated-Subsystem) exist to support stream-aligned teams' fast flow." },

    { type:"single", cat:"orgdesign", q:"Which type of organizational culture (Westrum, 1988) is most strongly associated with high software delivery performance per DORA research?", opts:[{t:"Generative — performance-oriented; messengers trained, risks shared, novelty implemented.",c:true},{t:"Pathological — power-oriented; messengers shot, scapegoating, novelty crushed."},{t:"Bureaucratic — rule-oriented; messengers ignored, narrow responsibility, novelty causes problems."},{t:"Hierarchical — control-oriented; messengers must escalate everything."}], exp:"Westrum's typology defines Pathological/Bureaucratic/Generative cultures based on how information flows. DORA research confirms Generative culture predicts software delivery performance, organizational goal attainment, and job satisfaction." },

    { type:"single", cat:"orgdesign", q:"A leader has reorganized teams into 'squads' with the labels from the Spotify model, but six months later sees no improvement. What is the most likely cause per recent reflections on the model?", opts:[{t:"Copying the labels without addressing autonomy, alignment, manager scarcity, and coordination — Schein-level changes — produces cargo-cult agile.",c:true},{t:"The model is fundamentally broken and should be reversed."},{t:"More squads should be added to reach the right ratio."},{t:"The Spotify model only works in music streaming companies."}], exp:"The Spotify model was a 2012 snapshot, not a framework; Spotify themselves abandoned aspects of it. Copying labels (artifacts in Schein's culture model) without changing underlying values, assumptions, and incentives is cargo-cult agile — the #1 failure mode reported by practitioners." },

    { type:"single", cat:"orgdesign", q:"An agile transformation is stalling because middle managers feel threatened. From an agile leadership perspective, the best response is:", opts:[{t:"Repurpose middle managers as barrier removers, coaches, and system improvers; align their incentives to the new model.",c:true},{t:"Eliminate the middle management layer entirely."},{t:"Ignore middle managers and proceed without them."},{t:"Force them to adopt the new behaviors with stricter KPIs."}], exp:"Middle managers are usually the largest blocker — not because of bad intent but because their incentives still reward the old behavior. Agile transformations succeed when middle managers are repurposed as system improvers (Deming), with aligned incentives and clear new roles." },

    { type:"multi", cat:"evidence", q:"Which of the following are example Key Value Measures (KVMs) for Current Value (CV) per the EBM Guide? (select 2)", opts:[{t:"Customer satisfaction.",c:true},{t:"Revenue per employee.",c:true},{t:"Release frequency."},{t:"Technical debt."}], exp:"Per the EBM Guide, Current Value KVMs include revenue per employee, product cost ratio, employee satisfaction, customer satisfaction, and customer usage index. Release frequency belongs to Time to Market; technical debt to Ability to Innovate." },

    { type:"single", cat:"evidence", q:"A market opportunity exists that the product is not yet capturing. Which EBM Key Value Area best frames this?", opts:[{t:"Unrealized Value — the gap between desired and current customer experience or market position.",c:true},{t:"Current Value — what the product delivers today."},{t:"Time to Market — how quickly the org delivers."},{t:"Ability to Innovate — capacity to deliver new capabilities."}], exp:"Unrealized Value captures the gap between current customer/market experience and what is desired. It motivates continued investment when the opportunity outweighs cost. Leaders use UV to direct strategic exploration." },

    { type:"multi", cat:"evidence", q:"Which of the following are example Key Value Measures (KVMs) for Time to Market per the EBM Guide? (select 2)", opts:[{t:"Release frequency.",c:true},{t:"Lead time.",c:true},{t:"Customer satisfaction."},{t:"Market share."}], exp:"Time to Market KVMs include build/integration frequency, release frequency, release stabilization period, mean time to repair, cycle time, and lead time. Customer satisfaction is CV; market share is UV." },

    { type:"single", cat:"evidence", q:"A product has strong Current Value but its Ability to Innovate is degrading due to mounting technical debt. From an EBM perspective, the leader should:", opts:[{t:"Invest in reducing technical debt to protect future capability delivery, even if short-term CV gains slow.",c:true},{t:"Ignore the debt and push for more features to maximize CV."},{t:"Drop the Definition of Done so the team can ship faster."},{t:"Outsource maintenance entirely to focus on new features."}], exp:"EBM treats the four KVAs as a balanced portfolio. Eroding A2I will eventually erode CV. Leaders balance short-term and long-term capability — protecting quality and reducing debt is a leadership responsibility." },

    { type:"single", cat:"evidence", q:"An executive proposes funding an entire 18-month roadmap upfront with fixed scope, dates, and budget. From an EBM perspective, the leader should:", opts:[{t:"Argue for incremental funding gated by evidence; treat each tranche as a hypothesis, with the right to stop or pivot based on outcomes.",c:true},{t:"Approve the plan as is — long-term commitments give the team focus."},{t:"Cut the budget by 50% to be safer."},{t:"Lock the scope but flex the dates."}], exp:"EBM advocates funding experiments and outcomes, not upfront plans. Long roadmaps with fixed scope/date/budget remove the ability to adapt based on evidence — anti-empirical. Hypothesis-driven funding tranches preserve optionality." },

    { type:"single", cat:"evidence", q:"After two years and $5M, an initiative shows no measurable customer outcome improvement. The leadership team is reluctant to kill it because of the investment already made. From an EBM standpoint:", opts:[{t:"The sunk cost is irrelevant; EBM mandates decisions based on current evidence — if outcomes are not improving, redirect investment.",c:true},{t:"They should double down to recoup the investment."},{t:"They should keep going for at least one more year to be sure."},{t:"They should outsource the initiative to reduce internal cost."}], exp:"The sunk cost fallacy is a classic leadership trap. EBM is evidence-based: past spend is not evidence of future value. If KVMs show no movement after meaningful investment, the leader should redirect — treating each ongoing investment as a renewed bet." },

    { type:"single", cat:"evidence", q:"An executive is celebrating that the team's velocity has doubled in the last quarter. The agile leader should ask first:", opts:[{t:"Have any of the Key Value Areas — especially Current Value and Unrealized Value — actually moved as a result?",c:true},{t:"How can we double it again next quarter?"},{t:"How can we use this to rank the team against other teams?"},{t:"How can we cut the team in half and still maintain the new velocity?"}], exp:"Velocity is an output metric, internal to the team, used for forecasting. Doubling it does not prove customer or business value moved. The EBM lens asks whether the KVAs improved — velocity alone is a vanity metric at the leadership level." },

    { type:"single", cat:"evidence", q:"In the EBM Goal hierarchy, the typical mapping to Scrum artifacts is:", opts:[{t:"Strategic Goal ≈ long-term product vision; Intermediate Goal ≈ Product Goal; Immediate Tactical Goal ≈ Sprint Goal.",c:true},{t:"Strategic Goal ≈ Sprint Goal; Intermediate Goal ≈ Product Goal; Tactical ≈ vision."},{t:"All three EBM goals are the same as the Product Goal."},{t:"EBM goals do not map to Scrum artifacts at all."}], exp:"Per Scrum.org's mapping, Strategic Goal aligns with the long-term vision/mission; Intermediate Goal corresponds to the Product Goal (commitment for Product Backlog); Immediate Tactical Goal corresponds to the Sprint Goal. Each level cascades down to enable empirical progress." },

    { type:"single", cat:"product", q:"A leader insists on directing the Product Owner to add a feature they personally requested ahead of items the PO believes deliver more value. The most appropriate response per Scrum:", opts:[{t:"The PO remains accountable for ordering the Product Backlog; the whole organization must respect their decisions.",c:true},{t:"The leader's request always overrides the PO."},{t:"The Scrum Master decides which side wins."},{t:"The Developers vote on which order to use."}], exp:"The Scrum Guide 2020 states the PO is accountable for ordering the Product Backlog, and for value to be maximized, the entire organization must respect their decisions. Leaders may influence the PO but should not override the accountability." },

    { type:"single", cat:"product", q:"A senior stakeholder treats the Sprint Backlog as a contract and accuses the team of failing whenever a selected item is not Done. An agile leader should:", opts:[{t:"Coach the stakeholder that the Sprint Backlog is a forecast; the commitment is the Sprint Goal, and scope may be renegotiated.",c:true},{t:"Pressure the team to finish every item regardless of quality."},{t:"Cancel the Sprint to avoid further disappointment."},{t:"Agree that all forecast items must always be delivered."}], exp:"The Scrum Guide 2020 makes the Sprint Goal the commitment, not the selected item list. Treating the forecast as a contract leads to compromised quality (DoD skipping). Leaders serve by coaching stakeholders on this empirical principle." },

    { type:"single", cat:"product", q:"A manager wants the Scrum Team to commit to a fixed number of story points each Sprint based on past velocity. From an agile leadership view, the issue is:", opts:[{t:"Velocity is a team-internal empirical measure for forecasting, not a delivery commitment — using it as a target encourages inflated estimates and lower quality.",c:true},{t:"Velocity is unreliable until measured for at least one year."},{t:"Story points should be converted to hours for accuracy."},{t:"Velocity must be approved by the PO before use."}], exp:"Velocity is a team-internal observation used for probabilistic forecasting. Using it as a commitment device or performance target incentivizes gaming (inflating estimates) and undermines quality. Velocity is also not comparable across teams." },

    { type:"single", cat:"product", q:"On the Tuesday of a two-week Sprint, the Developers complete a high-value Product Backlog item that meets the DoD. The PO wants to release it immediately. From a leadership view:", opts:[{t:"Support the release — the Scrum Guide 2020 states the Increment may be delivered prior to the end of the Sprint, and the Sprint Review is never a release gate.",c:true},{t:"Block the release until the Sprint Review."},{t:"Block the release until end-of-quarter approval."},{t:"Block the release until every selected item is Done."}], exp:"The Scrum Guide 2020 explicitly states the Increment may be delivered to stakeholders prior to the end of the Sprint; the Sprint Review is not a release gate. Early release improves Time to Market — an EBM KVA leaders should protect." },

    { type:"single", cat:"product", q:"An executive team rewards the Scrum Team based on the number of features shipped per quarter. An agile leader can serve the organization best by:", opts:[{t:"Coaching leadership on outcomes vs output — adopting empirical measures of actual customer and business value (EBM KVAs).",c:true},{t:"Pressuring the team to ship more features to satisfy the metric."},{t:"Splitting items finer to inflate feature counts."},{t:"Ignoring the metric since it is not in the Scrum Guide."}], exp:"Output (features shipped) does not equal value. The agile leader serves the organization by coaching it toward empirical, outcome-based measurement. Gaming output or ignoring the issue both fail; engagement and education are correct." },

    { type:"single", cat:"product", q:"An organization currently funds product work as temporary projects that disband once delivered. A leader wants more agility. Which shift is most aligned with agile leadership?", opts:[{t:"Move toward a product mindset with stable, long-lived teams focused on outcomes and continuous learning.",c:true},{t:"Keep the project model but add more upfront documentation."},{t:"Shorten every project to two weeks regardless of scope."},{t:"Outsource all projects to reduce internal coordination cost."}], exp:"Product mindset with stable, enduring teams sustains learning and value delivery. The project model optimizes for one-time output and disperses hard-won knowledge each time teams disband. EBM and product thinking both favor long-lived teams." },

    { type:"single", cat:"product", q:"How does Sprint Review best serve stakeholders per the Scrum Guide 2020?", opts:[{t:"As a working session where stakeholders inspect the Increment and collaborate on Product Backlog adaptations — not a one-way demo.",c:true},{t:"As a formal sign-off gate for releasing the Increment."},{t:"As a status meeting where stakeholders rate the team's performance."},{t:"As a presentation by the Scrum Master to leadership."}], exp:"The Scrum Guide 2020 explicitly describes the Sprint Review as a working session where the Scrum Team and key stakeholders inspect the outcome and adapt the Product Backlog together. Treating it as a demo, gate, or status meeting is an anti-pattern." },

    { type:"single", cat:"delivery", q:"A leader is told 'we cut Definition of Done items to ship faster.' What is the most likely consequence per EBM?", opts:[{t:"Apparent velocity rises but Ability to Innovate (A2I) erodes — undone work creates hidden technical debt that slows future delivery.",c:true},{t:"Time to Market improves with no downside."},{t:"Current Value rises sustainably."},{t:"Unrealized Value drops to zero."}], exp:"Skipping DoD inflates apparent output but creates undone work — hidden technical debt and quality gaps that erode Ability to Innovate over time. The illusion of speed today produces real slowdown tomorrow. Leaders protect DoD to protect long-term value." },

    { type:"single", cat:"delivery", q:"A senior leader is unsure whether continuous delivery is compatible with Scrum. The most accurate answer is:", opts:[{t:"Yes — the Scrum Guide 2020 states multiple Increments may be created within a Sprint and may be released at any time; continuous delivery aligns with Scrum.",c:true},{t:"No — Scrum requires releasing only at Sprint Review."},{t:"No — Scrum forbids deploying to production more than once per Sprint."},{t:"Yes — but only if the Sprint length is one week or less."}], exp:"The Scrum Guide 2020 explicitly allows multiple Increments per Sprint and release at any time. Continuous delivery (releasing every Done Increment immediately) directly supports the Time to Market KVA and is fully compatible with Scrum." },

    { type:"single", cat:"delivery", q:"From an agile leadership perspective, which of the following is the strongest indicator of an emergent, healthy software development capability?", opts:[{t:"Frequent, small, end-to-end working Increments delivered with high quality and meaningful customer feedback.",c:true},{t:"Detailed multi-year requirements documents signed off before development begins."},{t:"High individual developer utilization tracked daily."},{t:"Strict enforcement of one branch per feature with monthly merges."}], exp:"Emergent software development is signaled by frequent small Increments + quality + customer feedback (the DORA elite signals + EBM KVAs). Upfront documentation, utilization tracking, and long-lived feature branches all work against emergence and fast flow." },

    /* ---------------- AGILE LEADERSHIP — extended ---------------- */
    { type:"single", cat:"leadership", q:"Patrick Lencioni's 'Five Dysfunctions of a Team' identifies the foundational dysfunction as:",
      opts:[{t:"Absence of trust — without it, healthy conflict, commitment, accountability, and results all suffer",c:true},{t:"Fear of conflict"},{t:"Lack of commitment"},{t:"Inattention to results"}],
      exp:"Lencioni's pyramid bottom-up: trust → conflict → commitment → accountability → results. Vulnerability-based trust is the foundation. Without it, the team avoids conflict, fakes buy-in, dodges accountability, and underperforms on results." },
    { type:"single", cat:"leadership", q:"A leader uses the 'advice process' for a decision: they decide after seeking advice from affected people and experts. This is most aligned with:",
      opts:[{t:"Distributed decision-making — keeping decision speed while leveraging input; appropriate when consensus is too slow but expertise matters",c:true},{t:"Pure command-and-control"},{t:"Full consensus required for every decision"},{t:"Avoiding decisions altogether"}],
      exp:"The advice process (popularized by Frederic Laloux in Reinventing Organizations) keeps decision speed while ensuring affected parties are consulted. Faster than consensus, wiser than unilateral. Common in self-managing orgs." },
    { type:"single", cat:"leadership", q:"A leader who consistently models the behaviors they want to see (transparency, learning from mistakes, Scrum Values) is using:",
      opts:[{t:"Leadership by example — typically more effective than directives because behaviors are imitated more than instructions are followed",c:true},{t:"Manipulation"},{t:"Theory X"},{t:"Avoidance"}],
      exp:"Behavioral modeling is one of the strongest culture-shaping forces. Leaders 'cast a long shadow' — what they actually do (not what they say) sets the tone for what's acceptable. The opposite undermines trust ('do as I say, not as I do')." },
    { type:"single", cat:"leadership", q:"A senior leader insists that every team must follow the exact same agile practices across the org. The most aligned coaching is:",
      opts:[{t:"Coach toward principles (empiricism, transparency) with team-level autonomy to choose practices that fit their context — uniformity often produces compliance theater",c:true},{t:"Insist on uniformity for control"},{t:"Let every team do whatever they want without principles"},{t:"Ban all agile practices"}],
      exp:"Imposing uniform practices typically creates theater. Agile leaders set the principles and outcomes, while letting teams choose practices. Diversity of practice under shared principles is a sign of healthy adoption." },
    { type:"single", cat:"leadership", q:"Coaching differs from mentoring in that:",
      opts:[{t:"Coaching helps the person find their own answers; mentoring shares the mentor's experience-based advice",c:true},{t:"They are identical"},{t:"Coaching is for new hires only"},{t:"Mentoring is unethical"}],
      exp:"Coaching asks powerful questions and supports the coachee's own thinking. Mentoring shares expertise and advice. Both have value; agile leaders use coaching to grow self-management and mentoring to transfer specific knowledge." },
    { type:"single", cat:"leadership", q:"A leader practices 'leading by listening' — spending time with teams to understand their context before making changes. This is most aligned with:",
      opts:[{t:"Gemba walks / go-and-see — gathering ground truth before deciding (lean leadership)",c:true},{t:"Micromanagement"},{t:"Avoidance"},{t:"Authoritarian control"}],
      exp:"'Go and see' (Genchi Genbutsu) is a lean leadership principle. Decisions made far from the work tend to miss context. Leaders who walk the floor, listen, and learn make better-informed decisions and build trust." },
    { type:"single", cat:"leadership", q:"A leader uses 'vulnerability-based trust' (Lencioni). What does this look like in practice?",
      opts:[{t:"The leader acknowledges mistakes and limits, asks for help, and is open about uncertainties — modeling that it's safe for others to do the same",c:true},{t:"The leader hides all weaknesses"},{t:"The leader projects total certainty"},{t:"The leader never asks questions"}],
      exp:"Vulnerability-based trust ('I don't know,' 'I was wrong,' 'I need help') is foundational to high-trust teams. Leaders who model it create psychological safety for others. Predictive trust ('they'll do what they say') is weaker." },
    { type:"single", cat:"leadership", q:"A leader notices a Scrum Team is mature and self-managing. From a Hersey/Blanchard situational-leadership view, the leader should:",
      opts:[{t:"Shift toward delegating — provide minimal directive support and trust the team to lead itself within agreed boundaries",c:true},{t:"Increase command-and-control"},{t:"Stop interacting with the team entirely"},{t:"Reassign team members to less mature teams"}],
      exp:"Situational leadership: directing → coaching → supporting → delegating as the team matures. Continued heavy intervention with a mature team is counterproductive. Delegation with clear outcomes and trust unlocks high performance." },
    { type:"single", cat:"leadership", q:"A leader sees a team struggling with a decision. They could (A) make it for the team or (B) coach them to make it. The aligned choice depends on:",
      opts:[{t:"Stakes, time pressure, and the team's learning need — preferring (B) when feasible because making decisions for them stunts self-management",c:true},{t:"Always pick (A)"},{t:"Always pick (B)"},{t:"Toss a coin"}],
      exp:"Default to (B) — coaching builds capability. Choose (A) only when stakes are high and time is short. Habitually choosing (A) atrophies team decision-making; habitually (B) when stakes are too high is also wrong. Leaders judge each case." },
    { type:"single", cat:"leadership", q:"An agile leader's primary contribution in a complex domain (per Cynefin) is:",
      opts:[{t:"Setting goals and creating conditions for experiments, sense-making, and adaptation — not prescribing solutions",c:true},{t:"Writing the detailed solution upfront"},{t:"Mandating one best practice"},{t:"Eliminating all uncertainty"}],
      exp:"Complex domains require probe-sense-respond (Cynefin). Leaders set direction, enable safe-to-fail experiments, and adapt based on what emerges. Prescribing solutions in complexity reduces learning and often fails." },

    /* ---------------- EVIDENCE & EBM — extended ---------------- */
    { type:"single", cat:"evidence", q:"In EBM, each goal in the hierarchy (Strategic, Intermediate, Immediate) is paired with:",
      opts:[{t:"A measurable target state and a current state — so progress can be inspected and adapted empirically",c:true},{t:"A fixed scope contract"},{t:"A budget only"},{t:"A team assignment only"}],
      exp:"EBM's goal hierarchy pairs each goal with measures of current and target state. The gap is the journey; progress is measured by movement across that gap. This makes empirical adaptation possible." },
    { type:"single", cat:"evidence", q:"An EBM-aligned leader treats each strategic bet as:",
      opts:[{t:"A hypothesis to be validated with evidence — funding continues as the bet shows results, and stops when it doesn't",c:true},{t:"A signed contract that must be fully delivered regardless of evidence"},{t:"An immutable promise to stakeholders"},{t:"Personal opinion to be defended"}],
      exp:"EBM treats strategy itself as hypotheses. Continued funding is contingent on evidence of progress (improved KVAs). This decouples 'commitment to learning' from 'commitment to a fixed plan' — supporting investing under uncertainty." },
    { type:"single", cat:"evidence", q:"Which of these is a Key Value Measure (KVM) for Ability to Innovate per the EBM Guide?",
      opts:[{t:"Innovation Rate (% effort on new capabilities vs. existing)",c:true},{t:"Revenue per employee"},{t:"Release Frequency"},{t:"Customer Satisfaction"}],
      exp:"Innovation Rate is an A2I KVM. (Revenue per employee = CV; Release Frequency = T2M; Customer Satisfaction = CV.) A2I measures the team's capacity for new value, often degraded by tech debt, maintenance, or unsafe-to-change code." },
    { type:"single", cat:"evidence", q:"Which is a KVM for Unrealized Value?",
      opts:[{t:"Market Share (the portion not yet captured)",c:true},{t:"Defect rate"},{t:"Release Frequency"},{t:"Active product code branches"}],
      exp:"Market Share (untapped portion), Customer/User Satisfaction Gap, Desired Customer Experience — these are UV measures. UV captures opportunity not yet delivered. CV measures what is delivered today; A2I measures capacity; T2M measures responsiveness." },
    { type:"single", cat:"evidence", q:"A leader's quarterly review focuses only on Current Value (revenue, costs). From an EBM perspective, this misses:",
      opts:[{t:"The three other KVAs (UV, A2I, T2M) — a CV-only view risks short-term thinking and hides erosion of future value",c:true},{t:"Nothing — CV is all that matters"},{t:"Only employee satisfaction"},{t:"Only marketing data"}],
      exp:"Single-KVA leadership is fragile. UV reveals opportunity, A2I reveals capacity, T2M reveals responsiveness. Healthy products show movement across all four. Optimizing only CV often eats A2I and T2M, harming long-term CV." },
    { type:"single", cat:"evidence", q:"From an EBM lens, a 'happy CFO' (low costs) but unhappy customers (declining NPS) likely indicates:",
      opts:[{t:"CV is being optimized at the expense of UV/CV potential — short-term cost wins, long-term value loss",c:true},{t:"A healthy product"},{t:"That the team should ship more features"},{t:"That metrics are irrelevant"}],
      exp:"Cost reduction without customer outcome attention erodes value. EBM frames this as imbalance — CV (cost ratio) up, but CV (customer satisfaction) down + UV (satisfaction gap) up. The portfolio view surfaces the trade-off." },
    { type:"single", cat:"evidence", q:"A leader insists 'we have the data — output metrics, story points shipped, defects.' From an EBM view, these are mostly:",
      opts:[{t:"Output and proxy measures — not outcome measures of value to customers and the business",c:true},{t:"The four KVAs"},{t:"Strategic Goals"},{t:"Intermediate Goals"}],
      exp:"Output (features, points, defects) is a proxy — not value. EBM emphasizes outcome measures across CV/UV/A2I/T2M. Output can be high while outcomes stagnate. Leaders coach toward outcome conversations." },
    { type:"single", cat:"evidence", q:"In EBM, the Strategic Goal is typically:",
      opts:[{t:"Aspirational, far-reaching, with significant uncertainty — requiring empirical navigation; not a quarterly KPI",c:true},{t:"A weekly task list"},{t:"A budget number"},{t:"The Sprint Goal renamed"}],
      exp:"Per the EBM Guide, the Strategic Goal is 'so big and far away with many uncertainties along the journey that the organization must use empiricism.' Intermediate goals turn over more frequently; Sprint Goals are immediate." },

    /* ---------------- SCRUM FRAMEWORK FOR LEADERS — extended ---------------- */
    { type:"single", cat:"framework", q:"A senior executive asks 'why can't we just have status meetings with each team daily?' The aligned response is:",
      opts:[{t:"The Daily Scrum is by/for the Developers — adding executive status meetings creates parallel processes that erode self-management and transparency",c:true},{t:"It's fine if the SM organizes them"},{t:"Set them up weekly instead"},{t:"Cancel the Daily Scrum and replace it"}],
      exp:"Parallel status pipelines (manager check-ins, executive standups) duplicate effort and split transparency. Leaders inspect Increments at Sprint Reviews and team health through other means — not by adding new events that pull the team out of self-management." },
    { type:"single", cat:"framework", q:"A leader is invited to a Sprint Review. Their most aligned posture is:",
      opts:[{t:"Engage as a stakeholder — inspect the Increment, contribute feedback on what to do next, and adapt the broader plan accordingly",c:true},{t:"Approve or reject the team's work"},{t:"Demand acceleration"},{t:"Stay silent and just observe"}],
      exp:"Sprint Review is a collaborative working session. Leaders attending bring market/strategic context, inspect outcomes, and help shape Product Backlog updates. Approval-gate behavior misunderstands the event." },
    { type:"single", cat:"framework", q:"A leader hears 'we need a Sprint 0 to set up the architecture.' How should the leader respond?",
      opts:[{t:"The Scrum Guide does not define a Sprint 0 — coach toward producing a usable Increment from Sprint 1, even if thin (walking skeleton)",c:true},{t:"Approve a Sprint 0 of 4 weeks"},{t:"Approve a Sprint 0 of 2 weeks"},{t:"Add multiple Sprint 0s"}],
      exp:"Sprint 0 is a recognized Scrum anti-pattern — a phase-gate disguised as a Sprint that produces no Increment. Leaders coach toward thin end-to-end first Sprints and emergent architecture." },
    { type:"single", cat:"framework", q:"Three Scrum Teams work on one product but have three Product Owners. What should the leader coach?",
      opts:[{t:"Move to one Product Owner across the teams — Scrum requires a single PO per product, with one Product Backlog and one Product Goal",c:true},{t:"Keep all three but add a director above them"},{t:"Let each PO independently order their own backlog"},{t:"Vote on every priority"}],
      exp:"The Scrum Guide 2020 explicitly requires a single PO per product when multiple teams work on it. Leaders coach toward this; misalignment creates conflicting priorities, duplicated work, and broken value flow." },
    { type:"single", cat:"framework", q:"The Product Goal is most accurately described as:",
      opts:[{t:"A long-term objective for the product, contained within the Product Backlog — Sprint Goals are stepping stones toward it",c:true},{t:"Identical to the Sprint Goal"},{t:"Approved by stakeholders quarterly"},{t:"A marketing slogan"}],
      exp:"Per the Scrum Guide 2020, the Product Goal lives in the Product Backlog as a long-term objective. Sprint Goals are short-term commitments toward it. It is created and adapted by the Product Owner with Scrum Team input." },

    /* ---------------- PEOPLE & SELF-MANAGING TEAMS — extended ---------------- */
    { type:"single", cat:"people", q:"Edmondson's research on psychological safety found that high-performing teams differ from low-performing teams primarily in:",
      opts:[{t:"Reporting more mistakes — not because they made more, but because they felt safe to surface them",c:true},{t:"Making fewer mistakes overall"},{t:"Being micromanaged"},{t:"Having strict reporting hierarchies"}],
      exp:"Edmondson's surprise finding: high-performing teams reported MORE mistakes — because psychological safety let them surface and learn. Low-safety teams hid mistakes, repeating them. Safety enables learning, learning drives performance." },
    { type:"single", cat:"people", q:"A leader wants to install 'engagement surveys' as the primary signal of team health. A more aligned approach is:",
      opts:[{t:"Combine signals — direct conversation, observation of empirical outcomes, retrospectives, and surveys — no single instrument is sufficient",c:true},{t:"Surveys alone are fine"},{t:"Track engagement only through HR"},{t:"Don't measure engagement at all"}],
      exp:"Surveys provide trend data but lag, smooth out, and don't surface causes. Real-time signals — what teams discuss in Retros, what impediments persist, customer outcomes — give richer pictures. Use multiple signals together." },
    { type:"single", cat:"people", q:"Daniel Pink's 'Drive' identifies three core motivators for creative knowledge work:",
      opts:[{t:"Autonomy, Mastery, Purpose",c:true},{t:"Salary, Title, Bonus"},{t:"Fear, Control, Surveillance"},{t:"Speed, Volume, Output"}],
      exp:"Pink's framework: autonomy (self-direction), mastery (getting better at something that matters), purpose (work that connects to something larger). Extrinsic rewards (pay, status) matter only to a baseline; intrinsic factors drive performance above it." },
    { type:"single", cat:"people", q:"Lencioni's second dysfunction is 'Fear of conflict.' What does its absence look like?",
      opts:[{t:"Artificial harmony — surface agreement that hides disagreement, leading to weak commitment and poor decisions",c:true},{t:"More productive arguments"},{t:"Faster decision-making"},{t:"Better outcomes"}],
      exp:"Without trust, teams avoid productive conflict. They settle for artificial harmony — nods of agreement that hide real disagreement. Decisions made in artificial harmony are weakly committed to and often quietly sabotaged." },
    { type:"single", cat:"people", q:"A leader publicly punishes a Developer who admitted to a mistake. What is the most likely consequence?",
      opts:[{t:"Psychological safety erodes — others will hide future mistakes, harming the team's ability to learn and adapt",c:true},{t:"Better quality going forward"},{t:"Stronger team trust"},{t:"Increased empiricism"}],
      exp:"Punishing honest mistake admissions destroys safety. Future mistakes get hidden, repeated, and compounded. Edmondson's research shows safety enables learning; absence of safety kills it. Leaders correct via blameless post-mortems and systemic fixes." },
    { type:"single", cat:"people", q:"A working agreement is most useful when:",
      opts:[{t:"Created by the team themselves, made visible, and revisited periodically as the team learns",c:true},{t:"Imposed by management"},{t:"Created once and never reviewed"},{t:"Copied verbatim from another team"}],
      exp:"Team-created agreements have ownership. Visibility makes them actionable. Periodic review keeps them relevant. Imposed or stale agreements become checkboxes that nobody honors." },
    { type:"single", cat:"people", q:"Recognition vs. incentives: which is more aligned with intrinsic motivation in creative knowledge work?",
      opts:[{t:"Recognition that's specific, timely, and connected to meaningful outcomes — less likely to crowd out intrinsic motivation than per-task bonuses",c:true},{t:"Per-task individual bonuses"},{t:"Stack ranking"},{t:"Forced curve distribution"}],
      exp:"Research (Deci, Pink, Kohn) shows extrinsic rewards (per-task bonuses) often degrade intrinsic motivation for creative work. Recognition tied to outcomes and craft preserves intrinsic engagement and signals what matters." },
    { type:"single", cat:"people", q:"A team conflict gets stuck in personal blame. The most aligned leader/SM facilitation is:",
      opts:[{t:"Shift attention to interests, behaviors, and systems — separating people from problems and focusing on what changes would help",c:true},{t:"Pick a winner and impose the decision"},{t:"Disband the team"},{t:"Ignore the conflict"}],
      exp:"'Hard on the problem, soft on the people' (Fisher/Ury, Getting to Yes). Surface underlying interests, examine behaviors, look at systemic causes. Personalization escalates; structural framing de-escalates and unlocks problem-solving." },

    /* ---------------- ORG DESIGN & CULTURE — extended ---------------- */
    { type:"single", cat:"orgdesign", q:"In Team Topologies, what's the role of a Platform Team?",
      opts:[{t:"To reduce cognitive load on Stream-aligned teams by providing internal compelling products/services they can self-serve",c:true},{t:"To approve all releases"},{t:"To replace developers"},{t:"To act as middle management"}],
      exp:"Platform teams in Team Topologies build internal services (CI/CD, observability, infra) that stream-aligned teams use self-service. Goal: reduce extraneous cognitive load so stream-aligned teams focus on customer-facing value." },
    { type:"single", cat:"orgdesign", q:"Team Topologies' 'Enabling Team' exists to:",
      opts:[{t:"Help stream-aligned teams overcome obstacles and detect missing capabilities — typically time-bounded engagements",c:true},{t:"Permanently take over difficult work"},{t:"Govern other teams' decisions"},{t:"Run the Daily Scrums for other teams"}],
      exp:"Enabling teams are coaching-oriented — they bring specialist expertise to help stream-aligned teams build capabilities (testing, security, cloud). Engagements are time-bounded, transferring skill rather than creating dependency." },
    { type:"single", cat:"orgdesign", q:"Team Topologies' three interaction modes are:",
      opts:[{t:"Collaboration, X-as-a-Service, Facilitating",c:true},{t:"Direct, Indirect, Hierarchical"},{t:"Always-on, Sometimes-on, Off"},{t:"Scrum, Kanban, XP"}],
      exp:"Three interaction modes: Collaboration (close work, blurred boundaries — high cost), X-as-a-Service (clear consumer-provider — efficient), Facilitating (enabling team coaches another). Choosing the right mode matches team purposes." },
    { type:"single", cat:"orgdesign", q:"'Inverse Conway maneuver' refers to:",
      opts:[{t:"Designing the team/communication structure first to encourage the desired system architecture",c:true},{t:"Removing all teams"},{t:"Making system architecture by random choice"},{t:"Banning Conway's Law"}],
      exp:"Conway's Law: systems mirror organizations. Inverse Conway: shape organizations to produce the desired architecture (e.g., team boundaries align with desired service boundaries). Used in microservice transformations." },
    { type:"single", cat:"orgdesign", q:"In Westrum's culture model, a 'Pathological' culture is characterized by:",
      opts:[{t:"Power-oriented, low cooperation, messengers shot, responsibilities shirked — failure leads to scapegoating",c:true},{t:"High trust and learning"},{t:"Generative information flow"},{t:"Strong customer focus"}],
      exp:"Westrum: Pathological (power, fear, shoot the messenger) → Bureaucratic (rules, jurisdictions) → Generative (mission, learning, novel ideas welcomed). DORA found generative cultures correlate with elite delivery performance." },
    { type:"single", cat:"orgdesign", q:"A 'Generative' (Westrum) culture is identified by which behavior?",
      opts:[{t:"Information flows freely; messengers are trained; failures are investigated for systemic causes; novel ideas are welcomed",c:true},{t:"Information is hoarded"},{t:"Messengers are punished"},{t:"Bureaucracy is enforced"}],
      exp:"Generative cultures share information, support cross-functional bridges, treat failure as systemic learning, and welcome new ideas. DORA research strongly correlates this culture type with elite software delivery outcomes." },
    { type:"single", cat:"orgdesign", q:"Cognitive load on a team has three components: intrinsic (essential task complexity), extraneous (avoidable friction), and germane (learning to build capability). Which should leaders most aggressively reduce?",
      opts:[{t:"Extraneous load — toolchain friction, unclear ownership, unnecessary handoffs — frees capacity for value and learning",c:true},{t:"Intrinsic load (the work itself)"},{t:"Germane load (learning capacity)"},{t:"All three equally"}],
      exp:"Extraneous load is waste — avoidable friction that consumes brainpower without producing value. Intrinsic load is the work; germane load is investment in capability. Leaders reduce extraneous (via platforms, clearer ownership) to unlock the others." },
    { type:"single", cat:"orgdesign", q:"Project funding (temporary teams disbanded after delivery) creates which problems for agile organizations?",
      opts:[{t:"Loss of team learning and capability when teams disband, knowledge dispersal, and incentive to ship 'projects' over sustained product outcomes",c:true},{t:"More efficient delivery"},{t:"Better agile adoption"},{t:"Stronger team identities"}],
      exp:"Projects are time-bounded; products are long-lived. Project funding rebuilds teams each time, losing accumulated knowledge and capability. Persistent product teams + persistent funding aligned with outcomes is the modern alternative." },
    { type:"single", cat:"orgdesign", q:"A 'feature team' versus a 'component team' differs in that:",
      opts:[{t:"Feature teams own end-to-end customer value across components; component teams own one technical layer and must coordinate to ship",c:true},{t:"They're identical"},{t:"Feature teams are always smaller"},{t:"Component teams use Scrum, feature teams don't"}],
      exp:"Component teams optimize their layer but require cross-team coordination per feature, creating handoffs. Feature teams (cross-functional, end-to-end) reduce coordination, deliver value independently — generally preferred in agile product orgs." },
    { type:"single", cat:"orgdesign", q:"An agile transformation is stalling because finance still funds annually with fixed scope. The most aligned leadership move is:",
      opts:[{t:"Engage finance to shift toward persistent product funding, smaller funding increments tied to outcome evidence",c:true},{t:"Ignore finance and let teams continue"},{t:"Replace all finance staff"},{t:"Cancel the transformation"}],
      exp:"Annual fixed-scope funding contradicts empiricism — locking in plans that can't adapt. Persistent product funding with periodic outcome review (EBM-style) aligns money with agile. Without changing funding, the transformation hits a ceiling." },

    /* ---------------- PRODUCT VALUE & STAKEHOLDERS — extended ---------------- */
    { type:"single", cat:"product", q:"An executive proposes splitting the Product Owner role: a 'business PO' for stakeholders and a 'technical PO' for the team. The aligned response is:",
      opts:[{t:"Coach toward a single, empowered Product Owner — splitting the role typically creates conflicting priorities and dilutes accountability",c:true},{t:"Approve the split"},{t:"Add a third PO for coordination"},{t:"Let the SM act as one of the POs"}],
      exp:"Per the Scrum Guide 2020, the PO is one person, not a committee. Splits create who-decides ambiguity, slow decisions, and reduce empiricism. Address root causes (PO bandwidth, stakeholder coaching) instead." },
    { type:"single", cat:"product", q:"A stakeholder bypasses the PO and gives priorities directly to the Developers. The most aligned leader action is:",
      opts:[{t:"Coach the stakeholder that all priority requests flow through the PO; protect Developer self-management; reinforce single ordering",c:true},{t:"Allow bypass for VIPs"},{t:"Tell Developers to accept all VIP requests"},{t:"Replace the PO"}],
      exp:"Single-PO ordering is foundational to empirical Scrum. Bypass channels create conflicting priorities, hidden work, and unstable forecasts. Leaders coach stakeholders into the proper interaction pattern." },
    { type:"single", cat:"product", q:"A leader wants to know if the PO is effective. What signals are most aligned?",
      opts:[{t:"Outcome evidence (CV/UV/A2I/T2M trends), backlog clarity and order, stakeholder + team trust, and decision speed — not feature counts",c:true},{t:"Number of stakeholder meetings"},{t:"Volume of Product Backlog items"},{t:"Number of features shipped"}],
      exp:"PO effectiveness = value delivered (outcomes), backlog quality, stakeholder/team trust, decision pace. Output metrics (PBI counts, features shipped) miss whether the right things were built." },
    { type:"single", cat:"product", q:"A Product Goal is most useful when it:",
      opts:[{t:"Is measurable, time-relevant, and connected to a business outcome — guiding Sprint Goals and Product Backlog evolution",c:true},{t:"Is a feature list"},{t:"Is vague to maximize flexibility"},{t:"Is set quarterly without measurement"}],
      exp:"Product Goals work when they describe a desired outcome (not a feature list), are measurable, and have a time horizon. They guide Sprint Goals and backlog ordering. Vague or feature-list goals fail to direct decisions." },
    { type:"single", cat:"product", q:"A leader wants to invest in a product but uncertainty is high. The aligned approach (per EBM) is:",
      opts:[{t:"Fund in increments tied to outcome evidence — start small, expand or stop based on learning",c:true},{t:"Fund the entire roadmap upfront"},{t:"Don't fund at all"},{t:"Set a multi-year fixed plan"}],
      exp:"Under uncertainty, optionality matters. Incremental funding tied to evidence preserves the option to stop, pivot, or accelerate. Big bets locked at the start can't adapt — and most fail when reality diverges." },
    { type:"single", cat:"product", q:"A senior stakeholder demands a hard deadline for a complex new product. The aligned leader response is:",
      opts:[{t:"Frame the trade-offs honestly — scope flexes for fixed-date in complex domains; commit to outcome milestones with empirical adaptation",c:true},{t:"Promise the deadline regardless"},{t:"Refuse to engage on dates"},{t:"Hide uncertainty from the stakeholder"}],
      exp:"In complex domains, hard scope + hard date + high quality is impossible. The leader frames trade-offs and proposes outcome milestones with regular inspection. Hiding uncertainty or making blind promises destroys trust later." },

    /* ---------------- EMERGENT DELIVERY — extended ---------------- */
    { type:"single", cat:"delivery", q:"Per the Agile Manifesto principle, what is the primary measure of progress?",
      opts:[{t:"Working software",c:true},{t:"Lines of code"},{t:"Hours worked"},{t:"Number of features in the backlog"}],
      exp:"Agile Manifesto principle 7: 'Working software is the primary measure of progress.' Outputs are proxies; working, valuable software is the real signal. Leaders coach toward this primacy and away from output/activity metrics." },
    { type:"single", cat:"delivery", q:"DORA elite delivery performers are characterized by which combination?",
      opts:[{t:"High deployment frequency, short lead time, low change failure rate, fast time to restore — speed AND stability together",c:true},{t:"Speed only"},{t:"Stability only"},{t:"Neither — they balance neither"}],
      exp:"DORA research consistently shows elite teams achieve speed AND stability simultaneously. The trade-off is a myth — practices (CI/CD, trunk-based, small batches, automation) enable both. Leaders invest in these practices." },
    { type:"single", cat:"delivery", q:"A team reports they 'cut DoD items' to ship faster. The most aligned leader response is:",
      opts:[{t:"Investigate — cutting DoD creates undone work and hidden debt; address the systemic pressure (timeline, scope) rather than weakening quality",c:true},{t:"Celebrate the speed"},{t:"Permanently lower the DoD"},{t:"Ignore"}],
      exp:"DoD cuts are a symptom: of unrealistic timeline, of poor scope management, of stakeholder pressure. Leaders address the systemic cause (renegotiate scope/dates, reduce dependencies, strengthen PO/stakeholder coaching) — not allow quality erosion." },
    { type:"single", cat:"delivery", q:"Continuous Delivery (CD) and Scrum are:",
      opts:[{t:"Complementary — Scrum's empirical cycle is strengthened by frequent integration and the ability to release at will",c:true},{t:"Incompatible"},{t:"Mutually exclusive"},{t:"The same thing"}],
      exp:"CD makes Scrum better: frequent integration shortens feedback loops, working Increments become truly releasable, T2M improves. Many high-performing Scrum Teams ship multiple times per Sprint. CD is technical enablement of Scrum's intent." },
    { type:"single", cat:"delivery", q:"Test automation investment is most aligned because:",
      opts:[{t:"It enables fast inspection (CI feedback in minutes), supports refactoring without regression, and makes Increments reliably Done",c:true},{t:"It removes the need for tests"},{t:"It eliminates all bugs"},{t:"It is required by the Scrum Guide"}],
      exp:"Automation makes empiricism affordable — inspection is fast, frequent, and trustworthy. Without it, integration is risky, refactoring is feared, and Done becomes vague. Leaders treat test automation as core engineering capability." },
    { type:"single", cat:"delivery", q:"A team relies on a 'hardening Sprint' to stabilize before release. From an agile leader's view:",
      opts:[{t:"Hardening Sprints signal weak DoD and accumulated undone work — invest in fixing the systemic causes rather than perpetuating the pattern",c:true},{t:"They are normal and should be scheduled"},{t:"They make Scrum work"},{t:"They are required for big releases"}],
      exp:"Hardening Sprints are an anti-pattern — they mean Increments aren't truly Done and quality is deferred. Leaders coach toward stronger DoD, automation, and continuous quality rather than scheduling stabilization as a separate phase." },
    { type:"single", cat:"delivery", q:"A leader is told that automating deployment is 'too risky.' What's the aligned reframe?",
      opts:[{t:"Manual deployment is the riskier path — error-prone, slow to recover, and unrepeatable; automation makes deployment safe and reversible",c:true},{t:"Automation is indeed too risky"},{t:"Manual is the gold standard"},{t:"Automation removes the need for testing"}],
      exp:"Counterintuitively, manual deployment is higher-risk: humans make mistakes, processes drift, recovery is slow. Automated, tested, repeatable deployment is far safer. DORA research confirms automation correlates with both speed and stability." },
    { type:"single", cat:"delivery", q:"What does 'technical excellence' refer to in the Agile Manifesto's 12 principles?",
      opts:[{t:"Continuous attention to good design and craftsmanship that enhances agility — not perfection or gold-plating",c:true},{t:"Choosing the latest framework"},{t:"Writing as much code as possible"},{t:"Eliminating all refactoring"}],
      exp:"Manifesto principle 9: 'Continuous attention to technical excellence and good design enhances agility.' The point: good design enables change (the agile core); bad design prevents it. Leaders invest in craft, not perfection." },

    /* ---------------- NEW MULTI-SELECT — pushes multi share higher ---------------- */
    { type:"multi", cat:"leadership", q:"Which behaviors characterize agile leaders coaching their organization toward empiricism? (select 3)",
      opts:[
        {t:"Setting clear outcomes and creating space for teams to experiment",c:true},
        {t:"Coaching managers to shift from output to outcome conversations",c:true},
        {t:"Modeling vulnerability and learning publicly from their own mistakes",c:true},
        {t:"Prescribing detailed practices that every team must follow identically"},
        {t:"Demanding fixed multi-year delivery plans before any work begins"}
      ],
      exp:"Empirical leadership sets direction, enables experimentation, and models the openness it wants from the org. Prescribing practices and locking long-term plans contradicts inspect-adapt." },
    { type:"multi", cat:"leadership", q:"Which practices are consistent with Theory Y assumptions about people in knowledge work? (select 3)",
      opts:[
        {t:"Granting autonomy paired with clear outcome goals",c:true},
        {t:"Investing in mastery development (training, pairing, learning time)",c:true},
        {t:"Connecting daily work to a meaningful purpose or customer outcome",c:true},
        {t:"Monitoring hours and presence as the primary measure of effort"},
        {t:"Default skepticism that people will deliver without supervision"}
      ],
      exp:"Theory Y (McGregor) assumes people seek responsibility and meaningful work — Pink's autonomy/mastery/purpose maps directly. Surveillance-style management reflects Theory X." },
    { type:"multi", cat:"leadership", q:"Which practices help leaders preserve self-management as teams mature? (select 3)",
      opts:[
        {t:"Delegating decision-making with clear outcomes and trust",c:true},
        {t:"Coaching the team beyond directing them",c:true},
        {t:"Removing senior managers from per-feature approval steps",c:true},
        {t:"Increasing detailed daily check-ins with the leader"},
        {t:"Adding approval gates above the Scrum Master for technical choices"}
      ],
      exp:"Mature teams thrive on delegation, coaching, and removal of intermediate gates. More check-ins and new gates reverse the maturity gain." },
    { type:"multi", cat:"evidence", q:"Which are example Key Value Measures for Ability to Innovate per the EBM Guide? (select 3)",
      opts:[
        {t:"Innovation Rate",c:true},
        {t:"Defect Trends",c:true},
        {t:"On-Product Index",c:true},
        {t:"Revenue per Employee"},
        {t:"Release Frequency"}
      ],
      exp:"Innovation Rate, Defect Trends, and On-Product Index appear in the EBM Guide as A2I measures. Revenue per Employee is a CV KVM; Release Frequency is a T2M KVM." },
    { type:"multi", cat:"evidence", q:"Which are example Key Value Measures for Unrealized Value per the EBM Guide? (select 3)",
      opts:[
        {t:"Market Share (the portion not yet captured)",c:true},
        {t:"Customer/User Satisfaction Gap",c:true},
        {t:"Desired Customer Experience",c:true},
        {t:"Production Incident Count"},
        {t:"Customer Cycle Time"}
      ],
      exp:"Market Share, Satisfaction Gap, and Desired Customer Experience are UV measures per the EBM Guide. Production Incident Count is an A2I measure; Customer Cycle Time is a T2M measure." },
    { type:"multi", cat:"framework", q:"Which Scrum-aligned organizational practices does an agile leader actively encourage? (select 3)",
      opts:[
        {t:"Persistent product teams instead of project-based disbanding",c:true},
        {t:"Funding tied to outcome evidence rather than fixed-scope plans",c:true},
        {t:"A single Product Owner per product (no role-splits)",c:true},
        {t:"Mandatory weekly status meetings for executives across all teams"},
        {t:"Output metrics (features shipped, hours worked) as primary success measure"}
      ],
      exp:"Persistent teams, evidence-tied funding, single PO support empiricism. Executive status pipelines and output-only metrics undermine it." },
    { type:"multi", cat:"people", q:"Which characteristics indicate high psychological safety on a team (per Edmondson)? (select 3)",
      opts:[
        {t:"People report more mistakes — not because they make more, but because they feel safe to surface them",c:true},
        {t:"Asking for help is normal and not stigmatized",c:true},
        {t:"Disagreement is welcomed and processed productively",c:true},
        {t:"Everyone publicly agrees to keep harmony"},
        {t:"Failures are punished with public reviews and blame"}
      ],
      exp:"Edmondson: safety enables learning, which surfaces (not hides) mistakes and supports productive conflict. Artificial harmony and blame are the opposite signature." },
    { type:"multi", cat:"people", q:"Which leader behaviors erode team trust over time? (select 3)",
      opts:[
        {t:"Publicly punishing a Developer for an honest mistake",c:true},
        {t:"Bypassing the Product Owner to give Developers direct demands",c:true},
        {t:"Imposing velocity targets the team didn't set",c:true},
        {t:"Coaching the PO on Product Backlog management techniques"},
        {t:"Removing organizational impediments the team raises"}
      ],
      exp:"Public punishment, role bypass, and external velocity pressure all corrode trust. Coaching the PO and clearing impediments are exactly the help leaders should provide." },
    { type:"multi", cat:"orgdesign", q:"Which describe the four team types in Team Topologies? (select 3)",
      opts:[
        {t:"Stream-aligned — the majority team type, focused on a flow of value",c:true},
        {t:"Platform — provides self-service internal products to reduce cognitive load on stream-aligned teams",c:true},
        {t:"Enabling — helps stream-aligned teams build capability, typically time-bounded",c:true},
        {t:"Audit — governs and approves all other teams' work"},
        {t:"Executive — sets all goals strictly top-down without team input"}
      ],
      exp:"Team Topologies (Skelton/Pais): Stream-aligned, Platform, Enabling, Complicated-Subsystem. Audit and top-down Executive teams are not part of the framework." },
    { type:"multi", cat:"orgdesign", q:"Which characterize a Generative culture per Westrum? (select 3)",
      opts:[
        {t:"Information flows freely across the organization",c:true},
        {t:"Failures are investigated for systemic causes, not blamed on individuals",c:true},
        {t:"Novel ideas are welcomed and explored",c:true},
        {t:"Messengers bringing bad news are punished"},
        {t:"Strict jurisdictional boundaries on responsibility"}
      ],
      exp:"Westrum's Generative culture is performance-oriented — information flows, learning is systemic, novelty welcomed. Punishing messengers (Pathological) and rigid jurisdictions (Bureaucratic) are the other two culture types." },
    { type:"multi", cat:"orgdesign", q:"Which signals indicate cognitive overload on a team that warrants leadership attention? (select 3)",
      opts:[
        {t:"Sustained context-switching across unrelated products or domains",c:true},
        {t:"Long coordination meetings between many teams",c:true},
        {t:"Toolchain friction consuming significant team capacity",c:true},
        {t:"Stable team membership over time"},
        {t:"Self-service platform usage that reduces external dependencies"}
      ],
      exp:"Extraneous cognitive load shows up as context-switching, coordination drag, and toolchain pain. Stable teams and platform self-service REDUCE load — they're not signs of overload." },
    { type:"multi", cat:"product", q:"Which actions help a leader shift the organization from output to outcome conversations? (select 3)",
      opts:[
        {t:"Adopt EBM KVAs as the portfolio-level conversation",c:true},
        {t:"Replace feature-count milestones with measurable customer outcomes",c:true},
        {t:"Tie continued funding to evidence of value movement",c:true},
        {t:"Stick to feature roadmaps even as evidence diverges"},
        {t:"Use individual story-point output as the success metric"}
      ],
      exp:"Outcome focus uses KVAs, real customer measures, and evidence-tied funding. Sticking to features and individual-output metrics keeps the org locked in output thinking." },
    { type:"multi", cat:"product", q:"Which stakeholder behaviors support a healthy PO accountability? (select 3)",
      opts:[
        {t:"Routing requests through the Product Owner rather than directly to Developers",c:true},
        {t:"Engaging in the Sprint Review as collaborative participants",c:true},
        {t:"Sharing strategic context with the PO openly and early",c:true},
        {t:"Setting Sprint Backlog content directly with individual Developers"},
        {t:"Issuing fixed multi-quarter scope contracts the team must honor"}
      ],
      exp:"Healthy stakeholder behaviors respect the PO's single-point ordering accountability and engage empirically. Bypass and fixed contracts undermine both empiricism and the PO." },
    { type:"multi", cat:"delivery", q:"Which DORA-aligned investments most consistently improve BOTH speed and stability? (select 3)",
      opts:[
        {t:"Trunk-based development with short-lived branches",c:true},
        {t:"Comprehensive automated test suites covering critical paths",c:true},
        {t:"Frequent small deploys paired with fast rollback",c:true},
        {t:"Long QA hardening phases at the end of each release",c:true ? false : true},
        {t:"Manual approval gates for every deployment"}
      ],
      exp:"DORA research links trunk-based + automation + small deploys with elite outcomes on both speed AND stability. Hardening phases and manual gates correlate with worse outcomes on both." },
    { type:"multi", cat:"delivery", q:"Which signs indicate a weak Definition of Done at the team level that a leader should address? (select 3)",
      opts:[
        {t:"Need for periodic 'hardening' Sprints before release",c:true},
        {t:"Defects discovered after Sprint Review that should have been caught",c:true},
        {t:"'Done' items requiring rework before they can be released",c:true},
        {t:"A stable test pyramid with fast CI feedback"},
        {t:"Increments deployed multiple times per Sprint without rollback"}
      ],
      exp:"Hardening Sprints, post-Review defects, and pre-release rework all signal DoD that doesn't actually mean releasable. Test pyramid + frequent deploys are HEALTHY indicators, not weak-DoD symptoms." }
  ]
};
})();
