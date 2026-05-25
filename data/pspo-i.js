(function(){
window.BANKS = window.BANKS || {};
window.BANKS["pspo-i"] = {
  id: "pspo-i",
  short: "PSPO I",
  name: "Professional Scrum Product Owner I",
  url: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
  source: "Scrum Guide 2020 + EBM Guide + Professional Scrum Competencies + PSPO I Suggested Reading",
  pass: 85,
  examCount: 80,
  minutes: 60,
  status: "complete",
  cats: { framework:"Scrum & PO Accountability", value:"Product Value & EBM", backlog:"Product Backlog & Goal", stakeholders:"Stakeholders & Vision", forecasting:"Forecasting & Release Planning", strategy:"Product Strategy & Goals" },
  questions: [
    { type:"single", cat:"framework", q:"A senior manager tells the Product Owner to reorder the Product Backlog so that a feature she personally requested is built next, ahead of items the Product Owner believes deliver more value. What is the most appropriate response?", opts:[
      {t:"The Product Owner remains accountable for ordering the Product Backlog and decides; she should understand the manager's need and weigh it against overall value, but the decision is hers.",c:true},
      {t:"The Product Owner must comply, because managers outrank the Product Owner in the organization."},
      {t:"The Developers vote on whether to accept the manager's request."},
      {t:"The Scrum Master overrides the request to protect the team."}
    ], exp:"The Scrum Guide 2020 states the Product Owner is accountable for ordering Product Backlog items. The Product Owner may take input from many people, but for value to be maximized the whole organization must respect the Product Owner's decisions; no one tells the Developers to work from a different set of requirements." },

    { type:"single", cat:"value", q:"A Product Owner wants to understand how much value the product could potentially capture if it more completely met the needs of its target customers. Which Evidence-Based Management Key Value Area best captures this?", opts:[
      {t:"Unrealized Value",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Ability to Innovate"}
    ], exp:"Per the EBM Guide, Unrealized Value reflects the potential future value that could be realized if the organization could perfectly meet the needs of all potential customers. Current Value reflects value delivered today; Time to Market reflects responsiveness; Ability to Innovate reflects capacity to deliver new capabilities." },

    { type:"single", cat:"backlog", q:"Halfway through the Sprint, the Developers realize the Sprint Backlog contains more work than they can complete. What does Scrum prescribe?", opts:[
      {t:"The scope may be renegotiated between the Product Owner and the Developers as more is learned, keeping the Sprint Goal intact.",c:true},
      {t:"The Sprint must be extended until all selected items are finished."},
      {t:"A new Developer must be added immediately to absorb the extra work."},
      {t:"The Sprint is cancelled and all work is returned to the Product Backlog."}
    ], exp:"The Scrum Guide 2020 states that as the Developers learn more, scope may be clarified and renegotiated with the Product Owner. The Sprint length is fixed (timeboxed), and only the Product Owner has the authority to cancel a Sprint, which is rare and reserved for when the Sprint Goal becomes obsolete." },

    { type:"multi", cat:"stakeholders", q:"Which statements about the Sprint Review are correct per the Scrum Guide 2020? (select 2)", opts:[
      {t:"The Scrum Team and stakeholders inspect what was accomplished and collaborate on what to do next, and the Product Backlog may be adjusted to meet new opportunities.",c:true},
      {t:"It is a working session, not just a presentation, and the Scrum Team should avoid limiting it to a one-way demo.",c:true},
      {t:"It is a formal sign-off gate that must be passed before any Increment can be released."},
      {t:"It is a performance evaluation in which stakeholders rate the Developers' individual productivity."}
    ], exp:"The Scrum Guide 2020 describes the Sprint Review as a working session where the Scrum Team and stakeholders inspect the outcome of the Sprint and determine future adaptations, often adjusting the Product Backlog; the team is cautioned not to limit it to a presentation. It is not a formal release gate (the Increment may be released at any time) nor a performance review of individuals." },

    { type:"multi", cat:"framework", q:"Which of the following are accountabilities of the Product Owner per the Scrum Guide 2020? (select 2)", opts:[
      {t:"Developing and explicitly communicating the Product Goal.",c:true},
      {t:"Ordering Product Backlog items.",c:true},
      {t:"Deciding how the work in the Sprint Backlog will be technically implemented."},
      {t:"Managing the career development of the Developers."}
    ], exp:"The Scrum Guide 2020 lists the Product Owner as accountable for developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, and ordering them. How the work is technically done is decided by the Developers, and Scrum defines no people-management or career-development role." },

    { type:"single", cat:"value", q:"A team ships features every Sprint, but the Product Owner notices that the time between identifying a customer need and delivering a satisfying solution is growing. Which EBM Key Value Area is most directly degrading?", opts:[
      {t:"Time to Market",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Customer Satisfaction Gap"}
    ], exp:"Per the EBM Guide, Time to Market expresses the organization's ability to quickly deliver new capabilities, services, or products. A growing delay between identifying a need and delivering it is a Time to Market problem. Note that 'Customer Satisfaction Gap' is not one of the four Key Value Areas." },

    { type:"tf", cat:"backlog", q:"The Product Goal is a commitment contained in the Product Backlog, and a Scrum Team should work toward only one Product Goal at a time.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 states the Product Goal is the commitment for the Product Backlog; it describes a future state of the product and serves as the team's long-term objective. The Scrum Team must fulfill (or abandon) one Product Goal before taking on the next." },

    { type:"single", cat:"backlog", q:"Who is accountable for the Sprint Backlog?", opts:[
      {t:"The Developers, since the Sprint Backlog is a plan by and for the Developers.",c:true},
      {t:"The Product Owner, since it derives from the Product Backlog."},
      {t:"The Scrum Master, who facilitates Sprint Planning."},
      {t:"The whole Scrum Team equally, with no specific accountability."}
    ], exp:"The Scrum Guide 2020 states the Sprint Backlog is composed of the Sprint Goal (why), the selected Product Backlog items (what), and a plan for delivering them (how). It is a plan by and for the Developers, a highly visible real-time picture of the work they plan to accomplish; the Developers are accountable for it." },

    { type:"single", cat:"stakeholders", q:"A Product Owner is forming an initial product vision for a new product with high uncertainty. Which approach is most consistent with Scrum's empirical foundation?", opts:[
      {t:"Establish a clear product vision and Product Goal to provide direction, then validate assumptions empirically by delivering Increments and inspecting outcomes.",c:true},
      {t:"Lock down a complete, detailed multi-year requirements specification before any development begins."},
      {t:"Avoid setting any vision so the team stays maximally flexible."},
      {t:"Delegate the vision entirely to the Developers so the Product Owner can focus on reporting."}
    ], exp:"Scrum is founded on empiricism: knowledge comes from experience and decisions are based on what is observed. A vision and Product Goal give direction, while frequent delivery and inspection let the team learn and adapt. Big up-front detailed specifications contradict empirical process control under high uncertainty." },

    { type:"multi", cat:"value", q:"According to the Evidence-Based Management Guide, which of the following are among the four Key Value Areas? (select 2)", opts:[
      {t:"Ability to Innovate",c:true},
      {t:"Current Value",c:true},
      {t:"Return on Investment"},
      {t:"Velocity"}
    ], exp:"The EBM Guide defines exactly four Key Value Areas: Current Value, Unrealized Value, Time to Market, and Ability to Innovate. Return on Investment and Velocity are common metrics but are not Key Value Areas; velocity in particular is a team-internal measure, not a measure of customer value." },

    { type:"single", cat:"framework", q:"During Sprint Planning the Developers ask the Product Owner to commit to exactly which items will be 'Done' by the end of the Sprint. What is the best stance for the Product Owner?", opts:[
      {t:"Collaborate on a Sprint Goal and discuss which items are feasible, but recognize the Developers select how much work to take on and a forecast is not a guarantee.",c:true},
      {t:"Refuse to participate, since selecting Sprint work is solely the Developers' job."},
      {t:"Personally assign each item to a specific Developer to ensure commitment."},
      {t:"Promise stakeholders that 100% of forecast items will be delivered."}
    ], exp:"In Sprint Planning the whole Scrum Team collaborates. The Product Owner proposes how the product could increase value and ensures attendees are prepared to discuss the most important items; the Developers select the items and decide how much they can take on. The Sprint Backlog is a forecast, not a fixed commitment of items, so guaranteeing 100% delivery is inappropriate." },

    { type:"single", cat:"backlog", q:"What is the purpose of Product Backlog refinement?", opts:[
      {t:"The act of breaking down and further defining Product Backlog items into smaller, more precise items, adding details such as a description, order, and size.",c:true},
      {t:"A mandatory formal Scrum event with a fixed timebox held once per Sprint."},
      {t:"A meeting where stakeholders approve the Increment before release."},
      {t:"The process the Scrum Master uses to assign tasks to Developers."}
    ], exp:"The Scrum Guide 2020 describes refinement as the ongoing activity of adding detail, estimates, and order to Product Backlog items. It is an ongoing activity, not one of the five formal Scrum events, and the Developers who will do the work are responsible for sizing items." },

    { type:"tf", cat:"value", q:"Measuring value empirically means a Product Owner should rely on output metrics such as the number of features shipped or story points completed as the primary indicators of product success.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The EBM Guide emphasizes managing toward value and outcomes, not output. Counting features shipped or story points measures activity, not whether customer and business value actually improved; EBM uses measures of realized and potential value (the Key Value Areas) rather than raw output." },

    { type:"single", cat:"stakeholders", q:"A key stakeholder repeatedly bypasses the Product Owner and asks the Developers directly to add small changes mid-Sprint. What is the most appropriate way to handle this?", opts:[
      {t:"The Product Owner engages the stakeholder to reinforce that Product Backlog ordering and value decisions run through the Product Owner, while the Scrum Master helps the organization understand and respect this.",c:true},
      {t:"The Developers should quietly implement the changes to keep the stakeholder happy."},
      {t:"The Scrum Master should forbid the stakeholder from ever attending the Sprint Review."},
      {t:"The Product Owner should escalate to have the stakeholder removed from the project."}
    ], exp:"For value to be maximized, the whole organization must respect the Product Owner's decisions, and no one may instruct the Developers to work from a different set of requirements. The Scrum Master serves the organization by helping everyone understand the Product Owner's role and empirical product planning, making engagement and coaching the appropriate response rather than punishment." },

    { type:"single", cat:"framework", q:"The Product Owner is frequently unavailable and delegates day-to-day backlog decisions to a business analyst, who then makes ordering calls. Where does accountability for those decisions ultimately rest?", opts:[
      {t:"With the Product Owner, who remains accountable even if others do some of the work.",c:true},
      {t:"With the business analyst, since they now make the decisions."},
      {t:"With the Scrum Master, who is responsible for the team's effectiveness."},
      {t:"With the Developers, who implement whatever is ordered."}
    ], exp:"The Scrum Guide 2020 states the Product Owner may represent the needs of many stakeholders and may delegate some work, such as Product Backlog management, to others, but the Product Owner remains accountable. For the Product Owner to succeed, the entire organization must respect their decisions." },

    { type:"tf", cat:"framework", q:"The Increment must meet the Definition of Done before it is considered usable, and multiple Increments may be created within a single Sprint.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 states that the moment a Product Backlog item meets the Definition of Done, an Increment is born, and multiple Increments may be created within a Sprint. Work that does not meet the Definition of Done cannot be released or even presented at the Sprint Review; the Definition of Done is the commitment for the Increment that creates transparency about quality." },

    { type:"multi", cat:"framework", q:"Which of the following are the three pillars upon which empirical process control rests, per the Scrum Guide 2020? (select 3)", opts:[
      {t:"Transparency",c:true},
      {t:"Inspection",c:true},
      {t:"Adaptation",c:true},
      {t:"Documentation"},
      {t:"Estimation"}
    ], exp:"The Scrum Guide 2020 states Scrum is founded on empiricism, which asserts that knowledge comes from experience and decisions are made based on what is observed. Three pillars uphold this approach: transparency, inspection, and adaptation. Documentation and estimation are activities, not pillars." },

    { type:"multi", cat:"framework", q:"Which of the following are among the five Scrum values? (select 3)", opts:[
      {t:"Commitment",c:true},
      {t:"Focus",c:true},
      {t:"Respect",c:true},
      {t:"Velocity"},
      {t:"Productivity"}
    ], exp:"The Scrum Guide 2020 lists five Scrum values: Commitment, Focus, Openness, Respect, and Courage. Velocity and productivity are sometimes-used metrics, not Scrum values, and can even work against the values when overemphasized." },

    { type:"single", cat:"framework", q:"A Developer asks during Sprint Planning, 'What exactly are we committing to this Sprint?' What is the most accurate answer per the Scrum Guide 2020?", opts:[
      {t:"The Sprint Goal — a single objective for the Sprint; the selected Product Backlog items are a forecast that may be renegotiated to achieve the goal.",c:true},
      {t:"The full set of Product Backlog items selected during Sprint Planning, exactly as listed."},
      {t:"The team's average velocity, expressed in story points."},
      {t:"Whatever the Product Owner promises to stakeholders before the Sprint begins."}
    ], exp:"The Scrum Guide 2020 states the Sprint Goal is the single objective for the Sprint and is the commitment for the Sprint Backlog. The selected items are a forecast; scope may be renegotiated with the Product Owner as more is learned, while the Sprint Goal stays intact. Velocity is an empirical observation, not a commitment device." },

    { type:"single", cat:"framework", q:"Why does Scrum limit a Sprint to a maximum of one month?", opts:[
      {t:"When a Sprint's horizon is too long, the Sprint Goal may become invalid, complexity may rise, and risk may increase; shorter cycles enable more frequent inspection and adaptation.",c:true},
      {t:"Because longer Sprints would exceed the Scrum Master's capacity to facilitate."},
      {t:"To make sure the Product Owner has enough time to write all requirements in detail beforehand."},
      {t:"Because Scrum prescribes that release cycles must align to calendar months."}
    ], exp:"The Scrum Guide 2020 explains a Sprint is timeboxed to one month or less for consistency, and that shorter Sprints can generate more learning cycles and limit the risk of cost and effort to a smaller window. When a Sprint's horizon is too long the Sprint Goal may become invalid, complexity may rise, and risk may increase." },

    { type:"single", cat:"framework", q:"Who has the authority to cancel a Sprint before its timebox expires?", opts:[
      {t:"Only the Product Owner.",c:true},
      {t:"The Scrum Master, if they sense low team morale."},
      {t:"The Developers, by majority vote."},
      {t:"Any stakeholder funding the work."}
    ], exp:"The Scrum Guide 2020 states only the Product Owner has the authority to cancel the Sprint, although they may do so under influence from stakeholders, the Developers, or the Scrum Master. A Sprint would be cancelled if the Sprint Goal becomes obsolete. Sprint cancellations are uncommon due to the short timeboxes involved." },

    { type:"multi", cat:"framework", q:"Which of the following are true about the Daily Scrum per the Scrum Guide 2020? (select 2)", opts:[
      {t:"It is a 15-minute event for the Developers of the Scrum Team.",c:true},
      {t:"Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work.",c:true},
      {t:"The Scrum Master must lead the conversation by asking each Developer three set questions."},
      {t:"The Product Owner must give a status report at the start of every Daily Scrum."}
    ], exp:"The Scrum Guide 2020 describes the Daily Scrum as a 15-minute event for the Developers of the Scrum Team, held at the same time and place every working day of the Sprint, to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. The Developers can structure it how they wish; the three-question format is optional and no longer prescribed. The Scrum Master and Product Owner may attend but are not required." },

    { type:"single", cat:"framework", q:"What is the purpose of the Definition of Done?", opts:[
      {t:"It is a formal description of the state of the Increment when it meets the quality measures required for the product, and it creates transparency by giving everyone a shared understanding of what 'Done' means.",c:true},
      {t:"It is a checklist of acceptance criteria the Product Owner writes for each individual Product Backlog item."},
      {t:"It is a contract between the Scrum Team and stakeholders that triggers payment milestones."},
      {t:"It is a set of process steps the Developers must follow during Sprint Planning."}
    ], exp:"The Scrum Guide 2020 defines the Definition of Done as a formal description of the state of the Increment when it meets the quality measures required for the product. It is the commitment for the Increment and creates transparency by providing everyone with a shared understanding of what work was completed as part of the Increment." },

    { type:"single", cat:"framework", q:"What is the primary purpose of the Sprint Retrospective?", opts:[
      {t:"The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done, and identifies the most helpful changes to improve effectiveness.",c:true},
      {t:"The Product Owner reviews team performance and gives feedback to individual Developers."},
      {t:"The Scrum Master assigns improvement tasks to each team member."},
      {t:"Stakeholders rate the Scrum Team and request adjustments for the next Sprint."}
    ], exp:"The Scrum Guide 2020 states the purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went and identifies the most helpful changes; the most impactful improvements are addressed as soon as possible and may even be added to the next Sprint Backlog." },

    { type:"multi", cat:"framework", q:"Which of the following are ways the Scrum Master serves the Product Owner per the Scrum Guide 2020? (select 2)", opts:[
      {t:"Helping find techniques for effective Product Goal definition and Product Backlog management.",c:true},
      {t:"Helping the Scrum Team understand the need for clear and concise Product Backlog items.",c:true},
      {t:"Writing and ordering Product Backlog items on behalf of the Product Owner."},
      {t:"Approving the Product Owner's release decisions."}
    ], exp:"The Scrum Guide 2020 explicitly lists ways the Scrum Master serves the Product Owner, including helping find techniques for effective Product Goal definition and Product Backlog management, helping the Scrum Team understand the need for clear and concise Product Backlog items, helping establish empirical product planning for a complex environment, and facilitating stakeholder collaboration as requested or needed. The Scrum Master does not author Product Backlog items or approve releases." },

    { type:"tf", cat:"framework", q:"The Product Owner is one person, not a committee, and may represent the desires of many stakeholders in the Product Backlog.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 states the Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog. Those wanting to change the Product Backlog can do so by trying to convince the Product Owner. For Product Owners to succeed, the entire organization must respect their decisions." },

    { type:"single", cat:"framework", q:"What does it mean that a Scrum Team is cross-functional?", opts:[
      {t:"The members collectively have all the skills necessary to create value each Sprint.",c:true},
      {t:"Each Developer must be able to perform every task that any other Developer can perform."},
      {t:"The team rotates through different functions of the business every Sprint."},
      {t:"The team reports into multiple functional managers across the organization."}
    ], exp:"The Scrum Guide 2020 states Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. It does not require every individual to have every skill; it requires the team collectively to be capable. Scrum Teams are also self-managing — they choose internally who does what, when, and how." },

    { type:"single", cat:"framework", q:"A Scrum Team is starting work on a new product. What does Scrum prescribe for the first Sprint?", opts:[
      {t:"The Scrum Team begins a Sprint of the chosen length and produces at least one usable Increment that meets the Definition of Done.",c:true},
      {t:"A 'Sprint Zero' for setup and design, with no requirement to produce an Increment."},
      {t:"A discovery phase outside the Scrum framework until requirements stabilize."},
      {t:"A double-length Sprint to absorb initial environment setup."}
    ], exp:"The Scrum Guide 2020 does not define a 'Sprint Zero' or any setup phase. Each Sprint, including the first, must produce a usable Increment that meets the Definition of Done. Necessary setup work can be done within a normal Sprint alongside delivering a usable Increment, however small." },

    { type:"single", cat:"value", q:"How does the EBM Guide define 'Current Value'?", opts:[
      {t:"The value that the product delivers today, focusing on what exists right now, not what is possible or planned in the future.",c:true},
      {t:"The total revenue forecast over the product's projected lifetime."},
      {t:"The cumulative cost the organization has invested in the product so far."},
      {t:"The size of the Product Backlog measured in story points."}
    ], exp:"Per the EBM Guide, Current Value reveals the value the product delivers to customers and stakeholders today. The key question is: 'How happy are users and customers today? How happy are your employees today? Are your investors happy today?' Current Value focuses only on what the product is delivering now, not on its potential or its history." },

    { type:"single", cat:"value", q:"What does the EBM Key Value Area 'Ability to Innovate' measure?", opts:[
      {t:"The effectiveness of a product organization at delivering new capabilities that might better meet customer needs.",c:true},
      {t:"The number of patents the product team has filed in the last year."},
      {t:"The percentage of features delivered exactly on the originally promised date."},
      {t:"The age of the oldest unresolved item in the Product Backlog."}
    ], exp:"Per the EBM Guide, Ability to Innovate measures the effectiveness of a product organization at delivering new capabilities that might better meet customer needs. Many factors can reduce a team's Ability to Innovate (technical debt, low quality, distractions, etc.). When the goal of innovation is hampered, no further customer value can be delivered." },

    { type:"multi", cat:"value", q:"Which of the following are example measures of Current Value per the EBM Guide? (select 2)", opts:[
      {t:"Revenue per employee.",c:true},
      {t:"Customer satisfaction.",c:true},
      {t:"Release frequency."},
      {t:"Technical debt."}
    ], exp:"The EBM Guide lists example measures for Current Value including revenue per employee, product cost ratio, employee satisfaction, customer satisfaction, and customer usage index. Release frequency belongs to Time to Market, and technical debt belongs to Ability to Innovate." },

    { type:"multi", cat:"value", q:"Which of the following are example measures of Time to Market per the EBM Guide? (select 2)", opts:[
      {t:"Release frequency.",c:true},
      {t:"Lead time.",c:true},
      {t:"Customer satisfaction."},
      {t:"Innovation rate."}
    ], exp:"The EBM Guide lists example measures for Time to Market including build and integration frequency, release frequency, release stabilization period, mean time to repair, cycle time, and lead time. Customer satisfaction is a Current Value measure; innovation rate is an Ability to Innovate measure." },

    { type:"multi", cat:"value", q:"Which of the following are example measures of Ability to Innovate per the EBM Guide? (select 2)", opts:[
      {t:"Innovation rate (percent of effort spent on new product capabilities).",c:true},
      {t:"Technical debt.",c:true},
      {t:"Revenue per employee."},
      {t:"Market share."}
    ], exp:"The EBM Guide lists example measures for Ability to Innovate including innovation rate (the percent of effort or cost spent on building new product capabilities versus maintaining the existing product), defect trends, on-product index, installed version index, technical debt, production incident trends, and active product index. Revenue per employee is Current Value; market share relates to Unrealized Value." },

    { type:"multi", cat:"value", q:"Which of the following are example measures of Unrealized Value per the EBM Guide? (select 2)", opts:[
      {t:"Market share.",c:true},
      {t:"Customer satisfaction gap.",c:true},
      {t:"Cycle time."},
      {t:"Release frequency."}
    ], exp:"The EBM Guide lists example measures for Unrealized Value including market share and customer or user satisfaction gap (the difference between a customer's desired experience and their current experience). Cycle time and release frequency are Time to Market measures." },

    { type:"single", cat:"value", q:"A Product Owner notices the team is repeatedly building features that, once released, are barely used. Which approach is most aligned with EBM thinking?", opts:[
      {t:"Frame each significant feature as a hypothesis with a measurable expected outcome, then use Sprints to run experiments and inspect actual customer behavior.",c:true},
      {t:"Stop releasing features until a full market study is completed."},
      {t:"Track and reward Developers based on the number of features they ship per Sprint."},
      {t:"Add more features per Sprint so that at least some of them succeed by chance."}
    ], exp:"EBM advocates managing toward value and using empiricism: form a hypothesis, run an experiment (deliver an Increment), measure the outcome against the hypothesis, and learn. Output metrics like features shipped per Sprint do not reveal whether actual value improved. The Scrum Guide's empirical foundation supports the same approach: transparency, inspection, adaptation." },

    { type:"single", cat:"value", q:"The EBM Guide describes a hierarchy of goals an organization can use to navigate toward value. Which set best matches that hierarchy?", opts:[
      {t:"Strategic Goal, Intermediate Goals, and Immediate Tactical Goal (often expressed as Product Goal and Sprint Goal in Scrum).",c:true},
      {t:"Vision, Mission, and KPI."},
      {t:"Epic, Feature, and User Story."},
      {t:"OKR, KR, and Task."}
    ], exp:"The EBM Guide describes a hierarchy: the Strategic Goal (a long-term, often ambitious objective), Intermediate Goals (medium-term objectives that move the organization toward the Strategic Goal), and an Immediate Tactical Goal (the next concrete step). In Scrum these align naturally with a long-term product vision, the Product Goal, and the Sprint Goal." },

    { type:"tf", cat:"value", q:"Evidence-Based Management is a framework intended only for individual Scrum Teams to measure their own velocity and Sprint outcomes.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. EBM is a framework for organizations to measure, manage, and increase the value derived from product delivery — particularly under uncertainty. It applies across the organization, not only within a single Scrum Team, and it deliberately focuses on customer and business value rather than team output measures like velocity." },

    { type:"single", cat:"value", q:"A leadership team is celebrating that the Scrum Team has doubled its velocity over the last quarter. From an EBM perspective, what is the most important follow-up question?", opts:[
      {t:"Have any of the four Key Value Areas — particularly Current Value and Unrealized Value — actually improved as a result?",c:true},
      {t:"How much further can velocity be increased next quarter?"},
      {t:"How can the Definition of Done be relaxed to keep velocity high?"},
      {t:"Should the team's Sprint length be shortened to compress more story points in?"}
    ], exp:"EBM stresses managing toward value, not output. Velocity is a team-internal output measure; doubling it does not by itself prove anything about customer value, market position, or organizational capability. The relevant question is whether the Key Value Areas — Current Value, Unrealized Value, Time to Market, Ability to Innovate — have moved." },

    { type:"single", cat:"value", q:"A product has strong Current Value but its Ability to Innovate is degrading due to mounting technical debt. What does EBM suggest the Product Owner should consider?", opts:[
      {t:"Investing capacity into reducing technical debt so future capability delivery is not strangled, even if it slows new-feature Current Value gains short-term.",c:true},
      {t:"Ignoring technical debt and continuing to maximize Current Value features."},
      {t:"Dropping the Definition of Done so the team can ship more features faster."},
      {t:"Outsourcing all maintenance so the Scrum Team can focus only on new features."}
    ], exp:"EBM treats the four Key Value Areas as a balanced portfolio. A weakening Ability to Innovate will eventually erode Current Value as well, because the team becomes unable to respond to change. The Product Owner balances near-term value with the organization's capacity to keep delivering, using experiments and measures to inform that balance." },

    { type:"single", cat:"value", q:"In which EBM Key Value Area does the 'customer satisfaction gap' (difference between desired and actual experience) most naturally fit?", opts:[
      {t:"Unrealized Value.",c:true},
      {t:"Current Value."},
      {t:"Time to Market."},
      {t:"Ability to Innovate."}
    ], exp:"Per the EBM Guide, the customer satisfaction gap — the difference between a customer's desired experience and their current experience — is an example measure of Unrealized Value, because it points to value that could still be captured if the product more fully met customer needs." },

    { type:"single", cat:"value", q:"An organization wants to improve its Time to Market. Which of the following changes most directly supports that goal?", opts:[
      {t:"Shorten the path from idea to a usable Increment in production by automating builds, tests, and deployment.",c:true},
      {t:"Increase the size of the Product Backlog so more items are 'ready' for the team."},
      {t:"Add more approval gates before any release to ensure quality."},
      {t:"Lengthen the Sprint so the team can include more features per release."}
    ], exp:"Per the EBM Guide, Time to Market measures the organization's ability to quickly deliver new capabilities, services, or products. Shortening build/integration/release cycles and reducing manual gates directly improves Time to Market measures like release frequency, lead time, and cycle time. Larger backlogs, more gates, or longer Sprints typically push Time to Market in the wrong direction." },

    { type:"multi", cat:"backlog", q:"Which of the following are attributes the Scrum Guide 2020 lists as commonly associated with Product Backlog items? (select 3)", opts:[
      {t:"A description.",c:true},
      {t:"An order.",c:true},
      {t:"A size.",c:true},
      {t:"An assigned Developer."},
      {t:"A fixed delivery date set by the Scrum Master."}
    ], exp:"The Scrum Guide 2020 states attributes of a Product Backlog item often include a description, order, size, and value. Items are not assigned to specific Developers (the Developers self-manage), and fixed delivery dates are not part of the item itself; they relate to release decisions made by the Product Owner." },

    { type:"single", cat:"backlog", q:"Who is responsible for sizing (estimating) Product Backlog items?", opts:[
      {t:"The Developers, who will perform the work.",c:true},
      {t:"The Product Owner, who orders the backlog."},
      {t:"The Scrum Master, who facilitates planning."},
      {t:"Stakeholders, who fund the work."}
    ], exp:"The Scrum Guide 2020 states the Developers who will be doing the work are responsible for the sizing. The Product Owner may influence them by helping them understand and select trade-offs, but the size is owned by those who will deliver." },

    { type:"single", cat:"backlog", q:"A line manager asks the Scrum Team's Developers to spend a few hours each week on a side maintenance project that is not in the Product Backlog. What is the most appropriate response per the Scrum Guide 2020?", opts:[
      {t:"Decline; if the work has value, it should be added to the Product Backlog where the Product Owner can order it against other items.",c:true},
      {t:"Accept; small side requests do not affect Scrum so long as the Sprint Goal is met."},
      {t:"Accept only if the Scrum Master approves."},
      {t:"Accept and ask the Product Owner to reduce the Sprint Backlog to compensate."}
    ], exp:"The Scrum Guide 2020 states the Product Backlog is the single source of work undertaken by the Scrum Team. Work outside it bypasses the Product Owner's ordering authority and undermines transparency. If the maintenance work is valuable it belongs in the Product Backlog, ordered by the Product Owner against other work." },

    { type:"single", cat:"backlog", q:"What does the Sprint Goal provide for the Sprint Backlog?", opts:[
      {t:"It is the single objective of the Sprint and the commitment for the Sprint Backlog, providing focus and flexibility about how it is achieved.",c:true},
      {t:"It is a list of items the Developers are contractually bound to deliver."},
      {t:"It is a duplicate of the Product Goal scoped down."},
      {t:"It is the Scrum Master's plan for facilitating the Sprint."}
    ], exp:"The Scrum Guide 2020 states the Sprint Goal is the single objective for the Sprint and is the commitment for the Sprint Backlog. Although the Sprint Goal is a commitment by the Developers, it provides flexibility in terms of the exact work needed to achieve it. The Sprint Goal also creates coherence and focus, encouraging the Scrum Team to work together rather than on separate initiatives." },

    { type:"single", cat:"backlog", q:"When can new items be added to the Product Backlog?", opts:[
      {t:"At any time; the Product Backlog is emergent and the Product Owner decides what gets added and how it is ordered.",c:true},
      {t:"Only during Sprint Planning."},
      {t:"Only during Product Backlog refinement events scheduled by the Scrum Master."},
      {t:"Only at the start of a new quarterly planning cycle."}
    ], exp:"The Scrum Guide 2020 describes the Product Backlog as emergent — it evolves continuously as the product and the environment in which it will be used evolve. New items can be added at any time. Anyone may propose items, but the Product Owner is accountable for the Product Backlog's content, ordering, and availability." },

    { type:"single", cat:"backlog", q:"A serious defect is discovered in the production product mid-Sprint. How is the work to fix it best managed?", opts:[
      {t:"As a Product Backlog item that the Product Owner orders against other work; if it is urgent enough, the Developers may pull it into the current Sprint with the Product Owner's collaboration, provided the Sprint Goal is not endangered.",c:true},
      {t:"Outside Scrum entirely; bugs do not belong on the Product Backlog."},
      {t:"By immediately cancelling the Sprint regardless of the Sprint Goal."},
      {t:"By the Scrum Master assigning it directly to a Developer."}
    ], exp:"The Scrum Guide 2020 treats the Product Backlog as the single source of work; defects belong on it like any other work. The Product Owner orders items by value, risk, and other factors. Mid-Sprint scope can be renegotiated with the Product Owner as long as the Sprint Goal is not endangered; only the Product Owner may cancel a Sprint." },

    { type:"tf", cat:"backlog", q:"The Sprint Backlog is fixed at the end of Sprint Planning and must not change during the Sprint.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 states the Sprint Backlog is updated throughout the Sprint as more is learned. It should have enough detail that the Developers can inspect their progress in the Daily Scrum. The Sprint Goal, however, remains intact; scope is renegotiated between the Developers and the Product Owner as needed." },

    { type:"multi", cat:"backlog", q:"Which of the following make up the Sprint Backlog per the Scrum Guide 2020? (select 3)", opts:[
      {t:"The Sprint Goal (why).",c:true},
      {t:"The set of Product Backlog items selected for the Sprint (what).",c:true},
      {t:"An actionable plan for delivering the Increment (how).",c:true},
      {t:"A list of stakeholder approvals required to release."},
      {t:"A capacity calendar of each Developer's availability per day."}
    ], exp:"The Scrum Guide 2020 states the Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), and an actionable plan for delivering the Increment (how). It is a plan by and for the Developers. Stakeholder approvals and individual capacity calendars are not part of the Sprint Backlog as defined by Scrum." },

    { type:"single", cat:"backlog", q:"Three Scrum Teams collaborate on the same product. According to the Scrum Guide 2020, how should their Product Backlogs and Product Goals be structured?", opts:[
      {t:"All three teams share the same Product Backlog and the same Product Goal, with one Product Owner who is accountable for both.",c:true},
      {t:"Each team has its own Product Backlog and its own Product Goal."},
      {t:"Two of the teams use a shared backlog; the third works independently."},
      {t:"The Scrum Master maintains a master backlog that synchronizes the three teams."}
    ], exp:"The Scrum Guide 2020 states that if Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner. There is one Product Backlog and one Product Goal per product." },

    { type:"single", cat:"backlog", q:"How do the Product Goal and the Sprint Goal relate to each other?", opts:[
      {t:"The Product Goal describes a future state of the product and is the long-term objective; the Sprint Goal is the single objective of a Sprint and represents a concrete step toward the Product Goal.",c:true},
      {t:"They are synonyms used interchangeably."},
      {t:"The Sprint Goal is set first; the Product Goal is derived from completed Sprint Goals."},
      {t:"The Product Goal is set by the Developers, the Sprint Goal by the Product Owner."}
    ], exp:"The Scrum Guide 2020 states the Product Goal is the long-term objective for the Scrum Team — it describes a future state of the product. The Sprint Goal is the single objective of the Sprint and is the commitment for the Sprint Backlog. Each Sprint should bring the product closer to the overall Product Goal." },

    { type:"single", cat:"backlog", q:"A team asks whether they must define a 'Definition of Ready' before items can enter a Sprint. What does the Scrum Guide 2020 say?", opts:[
      {t:"It does not define or require a Definition of Ready; the Scrum Team may adopt such an agreement, but Product Backlog items only need to be refined to where the Developers consider them doable within one Sprint.",c:true},
      {t:"Yes; the Definition of Ready is a Scrum artifact alongside the Definition of Done."},
      {t:"Yes; the Product Owner must publish a Definition of Ready in writing before each Sprint."},
      {t:"No; pre-Sprint refinement is forbidden in Scrum."}
    ], exp:"The Scrum Guide 2020 does not define a Definition of Ready. It states Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event. They usually acquire this degree of transparency after refining activities. Teams are free to adopt their own working agreements about readiness, but it is not a Scrum requirement." },

    { type:"single", cat:"backlog", q:"How does the level of detail of Product Backlog items typically compare between the top and the bottom of the backlog?", opts:[
      {t:"Items near the top are smaller and more detailed; items near the bottom are larger and less precise, reflecting how much is known and how soon they will be worked on.",c:true},
      {t:"Items are uniformly detailed regardless of position in the backlog."},
      {t:"Items at the bottom are the most detailed because they have been waiting longest."},
      {t:"Detail is determined only by stakeholder requests, not position."}
    ], exp:"The Scrum Guide 2020 describes refinement as the act of breaking down and further defining Product Backlog items into smaller, more precise items. This is an ongoing activity, and items are refined more as they move higher in the order, so that the most imminent items have enough detail and small enough size to be selected in Sprint Planning." },

    { type:"single", cat:"backlog", q:"A Developer feels strongly that a particular Product Backlog item is in the wrong order and would like it moved up. What is the most appropriate path per the Scrum Guide 2020?", opts:[
      {t:"The Developer raises the concern with the Product Owner, who weighs the input and decides; the Product Owner remains accountable for ordering the Product Backlog.",c:true},
      {t:"The Developer reorders the item directly, since the Scrum Team is self-managing."},
      {t:"The Scrum Master decides between the Developer's and the Product Owner's view."},
      {t:"The team votes on the new order during the next Daily Scrum."}
    ], exp:"The Scrum Guide 2020 states the Product Owner is accountable for the Product Backlog, including its content, availability, and ordering. Anyone — Developers included — can propose changes, but the decision is the Product Owner's. Self-management refers to the Developers' work, not authority over the Product Backlog." },

    { type:"single", cat:"stakeholders", q:"Who attends the Sprint Review?", opts:[
      {t:"The Scrum Team and key stakeholders invited by the Product Owner.",c:true},
      {t:"Only the Product Owner and the Scrum Master."},
      {t:"All employees of the organization."},
      {t:"Only the Developers, who demonstrate the work themselves."}
    ], exp:"The Scrum Guide 2020 describes the Sprint Review as a working session where the Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. The Product Owner is accountable for stakeholder collaboration and invites the right stakeholders for the conversation." },

    { type:"multi", cat:"stakeholders", q:"Which of the following are valid outcomes of a Sprint Review per the Scrum Guide 2020? (select 2)", opts:[
      {t:"The Product Backlog may be adjusted to meet new opportunities.",c:true},
      {t:"Stakeholders and the Scrum Team collaborate on what to do next.",c:true},
      {t:"A formal sign-off document that locks the next Sprint's content."},
      {t:"Individual performance ratings of each Developer."}
    ], exp:"The Scrum Guide 2020 states the Sprint Review's purpose is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed; based on this and any changes to the environment, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities." },

    { type:"single", cat:"stakeholders", q:"An influential stakeholder is openly skeptical of Scrum and refuses to attend Sprint Reviews. What is the most appropriate response by the Product Owner?", opts:[
      {t:"Engage the stakeholder directly to understand their concerns, share evidence of value delivered, and invite them into the empirical process where their input shapes upcoming work.",c:true},
      {t:"Escalate to leadership to force the stakeholder to attend."},
      {t:"Exclude the stakeholder from all future product decisions."},
      {t:"Revert to a non-Scrum process for that stakeholder's requests only."}
    ], exp:"The Scrum Guide 2020 says the Product Owner is accountable for effective Product Backlog management, which includes stakeholder collaboration. Engaging the stakeholder, surfacing real outcomes via inspection, and inviting collaboration aligns with empiricism. Coercion or exclusion is contrary to the Scrum values of openness and respect and undermines transparency." },

    { type:"single", cat:"stakeholders", q:"When is it appropriate for the Scrum Team to abandon a Product Goal?", opts:[
      {t:"When inspection of outcomes and the environment shows the Product Goal is no longer the most valuable direction; the Product Owner decides to abandon it and the team commits to a new one.",c:true},
      {t:"Never; once set, a Product Goal must be completed."},
      {t:"Whenever the Developers find the work technically challenging."},
      {t:"Only at the start of a calendar year, during annual planning."}
    ], exp:"The Scrum Guide 2020 states the Scrum Team must fulfill (or abandon) one Product Goal before taking on the next. The Product Goal can be abandoned when inspection of outcomes and the environment makes it clear that pursuing it no longer maximizes value; the Product Owner is accountable for that decision. Abandonment is part of empiricism, not failure." },

    { type:"single", cat:"stakeholders", q:"A Scrum Team finished a Sprint primarily focused on validating a risky assumption; no end-user feature was released. How should the Product Owner communicate Sprint outcomes to stakeholders?", opts:[
      {t:"Share what was learned, how it changes the team's understanding of value, and how the Product Backlog and Product Goal are being adapted as a result.",c:true},
      {t:"Hide the Sprint outcome until a user-facing feature is ready to demo."},
      {t:"Report the Sprint as a failure since no new feature was released."},
      {t:"Promise stakeholders the next Sprint will deliver double the features to compensate."}
    ], exp:"EBM and the Scrum Guide 2020 both emphasize value and outcomes over output. Validated learning that changes Product Backlog ordering or Product Goal direction is a legitimate outcome of a Sprint. Transparent reporting — including what was learned and what will change — supports inspection and adaptation by stakeholders." },

    { type:"single", cat:"stakeholders", q:"Two senior stakeholders demand different items be next on the Product Backlog. What is the Product Owner's best course of action?", opts:[
      {t:"Listen to both, weigh their requests against overall product value and the Product Goal, and make a single ordering decision the team will work to.",c:true},
      {t:"Implement both requests in parallel by splitting the team in half."},
      {t:"Escalate to a committee that will vote on the order."},
      {t:"Defer the decision until both stakeholders agree."}
    ], exp:"The Scrum Guide 2020 states the Product Owner is one person, not a committee, and is accountable for ordering Product Backlog items so as to maximize value. The Product Owner may represent the needs of many stakeholders, but the decision is theirs. The whole organization must respect that decision." },

    { type:"single", cat:"stakeholders", q:"A sales leader has promised an external customer that a specific list of features will ship by a fixed date. What is the Product Owner's most appropriate response?", opts:[
      {t:"Engage the sales leader transparently about what is known and unknown, use empirical data and the Product Backlog to discuss likely scope at that date, and renegotiate scope or expectations as needed.",c:true},
      {t:"Accept the promise and silently pressure the Developers to skip the Definition of Done if needed."},
      {t:"Refuse to talk to sales since they are external to the Scrum Team."},
      {t:"Cancel the current Sprint immediately to redirect all work to the promised list."}
    ], exp:"The Scrum Guide 2020 emphasizes empiricism and transparency. Fixed-scope/fixed-date commitments in complex environments are hypotheses, not facts. The Product Owner uses inspection of progress and value to negotiate transparently with stakeholders, never by compromising the Definition of Done or hiding reality. Cancelling the Sprint mid-flight ignores empirical data and disrupts the team without need." },

    { type:"single", cat:"stakeholders", q:"How can a Product Owner use the Evidence-Based Management Key Value Areas with stakeholders?", opts:[
      {t:"As a shared lens to discuss whether changes to the product actually improve value (Current and Unrealized) and the organization's capability to deliver it (Time to Market and Ability to Innovate).",c:true},
      {t:"As a compliance reporting framework to grade each Developer."},
      {t:"As a substitute for the Sprint Review."},
      {t:"As a budgeting tool only used by finance, not by Product Owners."}
    ], exp:"Per the EBM Guide, the four Key Value Areas — Current Value, Unrealized Value, Time to Market, Ability to Innovate — give Product Owners and stakeholders a shared language for inspecting and adapting decisions about the product. EBM complements Scrum events (it does not replace them) and focuses on customer value, not on individual performance." },

    { type:"single", cat:"stakeholders", q:"What is the most appropriate purpose of a product roadmap in a Scrum context?", opts:[
      {t:"To communicate the Product Goal and likely direction over a horizon, while explicitly acknowledging uncertainty and the right to change based on empirical evidence.",c:true},
      {t:"To lock in fixed feature delivery dates for the next 18 months."},
      {t:"To replace the Product Backlog as the team's source of work."},
      {t:"To assign individual Developers to features by quarter."}
    ], exp:"The Scrum Guide 2020 does not prescribe a roadmap, but Product Owners commonly use one to communicate direction. Effective roadmaps reflect empiricism — they describe intent and likely sequence with appropriate uncertainty rather than fixed commitments. Locking in long-term feature dates contradicts the empirical foundation Scrum depends on." },

    { type:"multi", cat:"stakeholders", q:"Which of the following are characteristics of an effective product vision? (select 2)", opts:[
      {t:"It describes a desired future state and the value the product is intended to create for customers and the organization.",c:true},
      {t:"It provides direction that helps the Scrum Team make day-to-day trade-offs aligned to the Product Goal.",c:true},
      {t:"It is a complete set of detailed requirements for the next 12 months."},
      {t:"It is fixed and must never be updated as the product or market changes."}
    ], exp:"While the Scrum Guide 2020 does not prescribe a vision artifact, a useful product vision describes the desired future state and the value the product creates, providing direction for ordering trade-offs in line with the Product Goal. Visions are not detailed requirements documents and should evolve as learning makes a better direction clear." },

    { type:"single", cat:"stakeholders", q:"A Product Owner is mapping stakeholders for a product. Which group is most often overlooked but still influences product success?", opts:[
      {t:"Indirect stakeholders such as internal operations teams, regulators, or partners whose work is affected by the product.",c:true},
      {t:"Direct end users of the product."},
      {t:"The Scrum Master."},
      {t:"The Developers."}
    ], exp:"The Product Owner balances the needs of many stakeholders — both direct (end users, paying customers) and indirect (operations, support, compliance, partners). Indirect stakeholders are easy to overlook yet often determine whether value is actually realized. The Scrum Master and Developers are part of the Scrum Team, not external stakeholders." },

    { type:"tf", cat:"stakeholders", q:"Because the Product Owner represents the needs of stakeholders, they must accept every stakeholder request and add it to the Product Backlog.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 states the Product Owner is accountable for the Product Backlog and is one person, not a committee. They may represent the needs of many stakeholders, but they decide what to add and how to order. Accepting every request would undermine focus on maximizing value and could endanger the Product Goal." },

    { type:"single", cat:"framework", q:"Who is responsible for creating the Definition of Done used by the Scrum Team?", opts:[
      {t:"If the organization provides a Definition of Done, the Scrum Team uses it as a minimum; otherwise, the Scrum Team creates one appropriate for the product.",c:true},
      {t:"The Product Owner alone, since they are accountable for value."},
      {t:"The Scrum Master, since they enforce quality."},
      {t:"The organization's QA department exclusively, who hands it to the team."}
    ], exp:"The Scrum Guide 2020 states that if the Definition of Done is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. The whole Scrum Team owns the DoD." },

    { type:"single", cat:"framework", q:"Three Scrum Teams collaborate on the same product. Each team has historically used a different Definition of Done. What does the Scrum Guide 2020 require?", opts:[
      {t:"The teams must mutually define and comply with the same Definition of Done; individual teams may add stricter criteria but the shared Increment must meet a shared minimum bar.",c:true},
      {t:"Each team keeps its own Definition of Done; the strongest one applies to the integrated Increment."},
      {t:"The Product Owner picks one Definition of Done and imposes it on all three teams."},
      {t:"The Scrum Master of each team negotiates a separate DoD per Sprint."}
    ], exp:"The Scrum Guide 2020 states that if there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done. A shared DoD is what allows their work to integrate into a single Increment with consistent quality. Individual teams may add stricter criteria for their own work, but they cannot weaken the shared bar." },

    { type:"single", cat:"framework", q:"At the end of a Sprint, several Product Backlog items selected for the Sprint do not meet the Definition of Done. What happens to them?", opts:[
      {t:"They are not part of the Increment and return to the Product Backlog; the Product Owner orders them along with other work.",c:true},
      {t:"They automatically roll into the next Sprint."},
      {t:"They are still part of the Increment as partial work, with reduced credit."},
      {t:"They are released as 'beta' versions to gather user feedback."}
    ], exp:"The Scrum Guide 2020 states that work that does not meet the Definition of Done cannot be released, presented at Sprint Review, or counted toward the Increment. Such items are returned to the Product Backlog and the Product Owner decides their next ordering based on remaining value." },

    { type:"single", cat:"framework", q:"On the Tuesday of a two-week Sprint, the Developers complete a Product Backlog item that meets the Definition of Done and delivers customer value. The Sprint Review is the following Friday. When can this Increment be released?", opts:[
      {t:"Immediately, if the Product Owner decides to release it; the Sprint Review is not a gate to releasing value.",c:true},
      {t:"Only after the Sprint Review, since stakeholders must inspect the work first."},
      {t:"Only at the end of the Sprint, alongside all other Done items."},
      {t:"Only after the next quarterly release cycle."}
    ], exp:"The Scrum Guide 2020 explicitly states the Increment may be delivered to stakeholders prior to the end of the Sprint, and the Sprint Review should never be considered a gate to releasing value. Multiple Increments may be created within a Sprint. The Product Owner decides when the Increment is released — continuous delivery as soon as Done is fully Scrum-compliant." },

    { type:"single", cat:"framework", q:"A Product Owner is concerned that a particular Developer has been carrying too much of a critical area. What is the Product Owner's most appropriate action?", opts:[
      {t:"Raise the concern transparently with the Scrum Team; the Developers, as a self-managing team, decide internally who does what.",c:true},
      {t:"Assign the next critical Product Backlog item to a different Developer to balance load."},
      {t:"Privately ask the Scrum Master to reassign work."},
      {t:"Escalate to a line manager to redistribute responsibilities."}
    ], exp:"The Scrum Guide 2020 states Scrum Teams are self-managing: they internally decide who does what, when, and how. The Product Owner is accountable for value and Product Backlog ordering, not for assigning tasks. Raising the observation transparently with the team respects self-management and lets the Developers act on it." },

    { type:"single", cat:"framework", q:"Who has authority over the SIZE (estimate) of a Product Backlog item?", opts:[
      {t:"The Developers, who will perform the work.",c:true},
      {t:"The Product Owner, who orders the backlog and knows what is most valuable."},
      {t:"The Scrum Master, who tracks team velocity."},
      {t:"The stakeholders who funded the item."}
    ], exp:"The Scrum Guide 2020 states the Developers who will be doing the work are responsible for the sizing. The Product Owner may influence Developers by helping them understand and select trade-offs, but the people who will do the work make the final estimate." },

    { type:"single", cat:"framework", q:"A Product Owner spends nearly all their time transcribing exactly what stakeholders ask for into Product Backlog items, with no shaping or value judgment. Which Product Owner anti-pattern best describes this?", opts:[
      {t:"Scribe — the PO surrenders the value-maximization accountability and acts purely as a request-recorder.",c:true},
      {t:"Visionary — the PO is over-focused on long-term direction."},
      {t:"Decision Maker — the PO makes too many independent calls."},
      {t:"Collaborator — the PO over-relies on stakeholder collaboration."}
    ], exp:"The 'Scribe' is a recognized PO anti-pattern (Schuurman, McGreal/Jocham). The Product Owner is accountable for maximizing the value of the product, which requires judgment about which work belongs in the backlog and how to order it — not just recording requests." },

    { type:"single", cat:"framework", q:"A team is told their 'Product Owner' must escalate every backlog ordering and acceptance decision to a separate, unavailable executive who is the real decider. What is the most accurate description of this situation per Scrum?", opts:[
      {t:"This is a 'Proxy' Product Owner anti-pattern; the team does not have an empowered Product Owner as Scrum requires.",c:true},
      {t:"This is acceptable as long as the proxy attends Sprint Reviews."},
      {t:"This is a Decision Maker stance because decisions are still made."},
      {t:"This is a normal scaling pattern when products are large."}
    ], exp:"The Scrum Guide 2020 requires the Product Owner to be one person who is accountable for maximizing value and effective Product Backlog management — and for the PO to succeed, the entire organization must respect their decisions. A 'Proxy' PO without real authority is a recognized anti-pattern that prevents Scrum from working as intended." },

    { type:"single", cat:"value", q:"Which statement most accurately describes a Minimum Viable Product (MVP) as Eric Ries originally defined it?", opts:[
      {t:"The version of a product that allows a team to collect the maximum amount of validated learning about customers with the least effort.",c:true},
      {t:"The smallest set of features that customers will pay for."},
      {t:"A complete first release with all 'must-have' features cut to the minimum."},
      {t:"A beta version released only to internal employees."}
    ], exp:"Eric Ries defined the MVP as a learning vehicle: 'the version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.' Many teams mistakenly treat it as a stripped-down v1; Marty Cagan notes an MVP is better understood as a prototype for learning, not a product." },

    { type:"multi", cat:"value", q:"Which of the following are steps in the Build-Measure-Learn loop that an empirical Product Owner uses? (select 3)", opts:[
      {t:"Build the smallest thing that tests the hypothesis.",c:true},
      {t:"Measure real customer behavior or outcomes.",c:true},
      {t:"Learn whether the hypothesis is supported and decide to persevere, pivot, or kill.",c:true},
      {t:"Forecast the next quarter's revenue from the increment."},
      {t:"Get formal stakeholder sign-off before any user contact."}
    ], exp:"Build-Measure-Learn (Eric Ries, aligned with EBM) is iterative: build the minimum needed to test a hypothesis, measure real behavior, learn from the evidence, and adapt. Speed through the loop is the key competitive advantage. Forecasting revenue or formal sign-offs are not part of the loop itself." },

    { type:"single", cat:"value", q:"A Product Owner reports that the product has reached 100,000 total registered users since launch as evidence of success. What is the most likely issue with this metric from an empirical product-management view?", opts:[
      {t:"It is a vanity metric — it can only go up and does not connect to a specific decision or behavior change.",c:true},
      {t:"It is too actionable and should be aggregated into a higher-level KPI."},
      {t:"It is one of the four EBM Key Value Areas."},
      {t:"It is the appropriate measure of Time to Market."}
    ], exp:"Vanity metrics (Eric Ries) are numbers that only trend up and cannot drive a decision. Total registered users tells you nothing about activation, retention, or value delivered. Actionable metrics tie clearly to cause-and-effect for specific decisions. EBM emphasizes outcome-focused, actionable measures." },

    { type:"single", cat:"value", q:"Which of the following is an example of an outcome rather than an output?", opts:[
      {t:"Weekly active users increased by 22% after the onboarding redesign.",c:true},
      {t:"The team shipped 14 features this quarter."},
      {t:"The team completed 240 story points last Sprint."},
      {t:"Three pull requests were merged into the main branch yesterday."}
    ], exp:"Outputs are what the team produces (features, code, story points). Outcomes are measurable changes in user/customer behavior (activation, retention, task success). The EBM Guide warns that 'working more hours and delivering more features does not necessarily lead to improved customer experiences.'" },

    { type:"single", cat:"value", q:"A Product Owner wants a metric they can use mid-quarter to steer decisions, before the quarter's revenue is in. Which type of indicator best fits?", opts:[
      {t:"A leading indicator (e.g. weekly activation rate) that predicts the lagging revenue outcome.",c:true},
      {t:"A lagging indicator (e.g. quarterly revenue) so the team only optimizes for the final result."},
      {t:"A vanity metric (e.g. cumulative downloads) since it always trends up."},
      {t:"An output metric (e.g. story points completed) because it is fully under the team's control."}
    ], exp:"Leading indicators (activation, engagement, early conversion) predict future outcomes and let the team adjust now. Lagging indicators (revenue, churn) confirm what already happened. Both have value; for in-flight steering, leading indicators are essential. EBM's Key Value Measures mix both." },

    { type:"single", cat:"value", q:"A Scrum Team completed every selected Product Backlog item this Sprint and met the Definition of Done. Stakeholders are pleased with the demo. The Product Owner notices, however, that none of the released features are actually being used in production. From an EBM lens, how should the PO interpret this?", opts:[
      {t:"Output was high, but outcome (Current Value, customer usage) did not improve; the next Sprint should test why and adjust.",c:true},
      {t:"The Sprint was a clear success since all forecast items were delivered."},
      {t:"The team should be praised and given a higher velocity target."},
      {t:"This is not a Product Owner concern; release decisions and adoption are stakeholder responsibilities."}
    ], exp:"EBM stresses managing toward value (outcomes) rather than output. Shipping features that are not used means Current Value did not improve and the customer satisfaction gap (Unrealized Value) remains. The PO is accountable for maximizing value and must close that loop empirically." },

    { type:"single", cat:"backlog", q:"A team is preparing to split a large Product Backlog item to fit a Sprint. Which split most aligns with delivering a usable Increment?", opts:[
      {t:"A vertical slice that delivers a thin end-to-end working capability (UI + business logic + data), even if narrow.",c:true},
      {t:"A horizontal slice that delivers only the database schema first."},
      {t:"A horizontal slice that delivers only the UI mockup first."},
      {t:"Three parallel components assigned to three different Developers for separate delivery."}
    ], exp:"To produce a usable Increment each Sprint, items should be split vertically — each slice contains all layers (UI, logic, data) needed to deliver value end-to-end. Horizontal (technical-layer) splits leave you with an unreleasable mid-state. Vertical slicing also supports clearer customer feedback per slice." },

    { type:"single", cat:"backlog", q:"A support team forwards 12 production defects to the Scrum Team this week. The Developers want to know where to record them so the work is transparent. What is the best approach?", opts:[
      {t:"Capture each defect as a Product Backlog item; the Product Owner orders them against features by value, risk, and other factors.",c:true},
      {t:"Keep defects in a separate bug-tracker so they don't dilute the feature backlog."},
      {t:"Push all 12 defects directly into the current Sprint Backlog regardless of the Sprint Goal."},
      {t:"Let the Scrum Master triage defects privately and decide which ones reach the team."}
    ], exp:"The Scrum Guide 2020 states the Product Backlog is the single source of work undertaken by the Scrum Team. Defects belong on it like any other work, ordered by the Product Owner based on value, risk, and other factors — preserving transparency. Pushing them into the current Sprint without regard for the Sprint Goal, or hiding them in a parallel tracker, both violate Scrum principles." },

    { type:"single", cat:"backlog", q:"A Product Owner discovers the Developers have been carrying significant technical debt that is starting to slow new feature delivery. From an EBM perspective, what is the most appropriate response?", opts:[
      {t:"Treat technical debt reduction as Product Backlog work that competes for ordering with features, recognizing it directly affects Ability to Innovate (A2I).",c:true},
      {t:"Ignore it since technical debt is an internal Developer concern."},
      {t:"Forbid the Developers from spending Sprint capacity on it until all feature work is done."},
      {t:"Have the Scrum Master maintain a parallel 'tech debt' backlog the PO does not see."}
    ], exp:"EBM's Ability to Innovate (A2I) Key Value Area explicitly includes technical debt as a measure. Unaddressed debt accumulates, consumes capacity, and reduces the organization's capacity to innovate. Making it visible in the Product Backlog lets the PO balance it against features in a transparent ordering decision." },

    { type:"single", cat:"backlog", q:"How small should a Product Backlog item be to be considered 'ready' for selection in Sprint Planning?", opts:[
      {t:"Small enough that the Developers consider it doable within one Sprint, with enough transparency for the team to plan it.",c:true},
      {t:"Sized at exactly 3 story points or fewer."},
      {t:"As small as a single Developer can complete in one day."},
      {t:"As small as can be implemented with no clarifying questions."}
    ], exp:"The Scrum Guide 2020 states that Product Backlog items 'that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event. They usually acquire this degree of transparency after refining activities.' Scrum does not prescribe a specific point or hour size; doability within a Sprint and sufficient clarity is the bar." },

    { type:"tf", cat:"stakeholders", q:"Although the Product Vision is not a formal Scrum artifact in the Scrum Guide 2020, Scrum.org and recognized Product Owner literature treat developing and communicating a Product Vision as a standard Product Owner practice.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 does not list 'Vision' as a Scrum artifact (it lists Product Backlog, Sprint Backlog, Increment, each with a commitment). However, Scrum.org's Professional Scrum Competencies and Suggested Reading for PSPO I explicitly include Product Vision; the McGreal/Jocham 'Professional Product Owner' book emphasizes vision as a core PO activity that 'sits above' the Scrum framework." },

    { type:"multi", cat:"stakeholders", q:"According to widely-cited Product Vision guidance (e.g. Roman Pichler), which of the following are characteristics of an effective product vision? (select 3)", opts:[
      {t:"Inspiring — emotionally connects with team and stakeholders.",c:true},
      {t:"Broad and ambitious — survives pivots, multi-year.",c:true},
      {t:"Solution-independent — describes the desired change or benefit, not specific features.",c:true},
      {t:"A detailed feature list — enumerates everything the team will build."},
      {t:"Fixed and unchangeable — never revised regardless of new learning."}
    ], exp:"Pichler's widely-used criteria for a good product vision include being inspiring, shared, broad/ambitious, brief/memorable, solution-independent, testable, and customer-focused. Visions are not detailed requirement lists; they should evolve when new learning makes a better direction clear." },

    { type:"single", cat:"stakeholders", q:"How do the Product Vision and the Product Goal differ?", opts:[
      {t:"The Vision is the long-term aspirational 'why' for the product; the Product Goal is a measurable intermediate target on the way there, committed to the Product Backlog.",c:true},
      {t:"They are interchangeable terms for the same thing."},
      {t:"The Product Goal sets direction; the Vision is the current Sprint outcome."},
      {t:"The Vision is owned by the Developers; the Product Goal is owned by stakeholders."}
    ], exp:"The Product Vision describes the long-term purpose and desired future state. The Scrum Guide 2020's Product Goal is a 'future state of the product' as a target for the Scrum Team to plan against — it serves as an intermediate stepping stone toward the vision. Both are owned/communicated by the Product Owner." },

    { type:"single", cat:"stakeholders", q:"A Product Owner is forming a new product vision and is debating whether to define it in isolation and then announce it, or to involve the Scrum Team and key stakeholders in shaping it. Which is more aligned with recognized Product Owner practice?", opts:[
      {t:"Involve the Scrum Team and key stakeholders in shaping the vision; accountability remains with the PO but a co-created vision is more durable and shared.",c:true},
      {t:"Define it alone — visions are personal expressions the team should accept."},
      {t:"Outsource it to a marketing team since vision is a branding concern."},
      {t:"Skip the vision and start writing Product Backlog items immediately."}
    ], exp:"Recognized PO practice (Pichler, Scrum.org) treats vision as something the PO is accountable for but co-creates with the team and stakeholders. A shared vision is more inspiring and more likely to survive in execution. The Scrum Guide 2020 also expects the PO to engage stakeholders meaningfully — the vision is one of the key shared anchors." },

    { type:"single", cat:"stakeholders", q:"During Sprint Review a senior stakeholder demands a feature be re-ordered to the very top of the Product Backlog. Several other stakeholders disagree. What is the most appropriate Product Owner response?", opts:[
      {t:"Listen, weigh inputs against the Product Goal and value, and make a single ordering decision that the team can act on.",c:true},
      {t:"Defer the decision to a vote among the stakeholders present."},
      {t:"Add the requested item to the next Sprint immediately to satisfy the senior stakeholder."},
      {t:"Postpone the decision indefinitely until all stakeholders agree."}
    ], exp:"The Scrum Guide 2020 states the Product Owner is one person who is accountable for maximizing value. The PO may take input from many but the decision is theirs. The 'Decision Maker' stance (Schuurman/McGreal/Jocham) is making the call — keeping Time to Market short by keeping decision time short — once stakeholders have been heard." },

    { type:"tf", cat:"forecasting", q:"The Sprint Backlog is a commitment by the Developers to deliver exactly the set of Product Backlog items selected in Sprint Planning.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 explicitly says the selected items are a forecast. The Developers' commitment is the Sprint Goal, not the exact list. Scope may be renegotiated with the Product Owner as more is learned during the Sprint, as long as the Sprint Goal is not endangered. Treating the forecast as a contract is a recognized anti-pattern that historically led to teams sacrificing quality." },

    { type:"single", cat:"forecasting", q:"A manager wants to use a Scrum Team's average velocity to commit to stakeholders that the team will deliver an exact number of story points each Sprint. What is the issue with this?", opts:[
      {t:"Velocity is a team-internal empirical measure, not a commitment; using it as a promise of output incentivizes inflated estimates and compromised quality.",c:true},
      {t:"Velocity is unreliable until measured for at least one year."},
      {t:"Velocity should be measured in hours, not story points."},
      {t:"Velocity must be approved by the Product Owner before use."}
    ], exp:"Velocity (or throughput) is an empirical observation of past delivery, used by the team to forecast upcoming work probabilistically. It is not a commitment device. The Scrum Guide 2020 makes the Sprint Goal the commitment, not the forecast; velocity is also team-internal and not comparable across teams." },

    { type:"single", cat:"forecasting", q:"A Product Owner is tracking progress toward a release date that spans several Sprints. Stakeholders are adding and removing items as the work progresses. Which chart best supports transparency about this progress?", opts:[
      {t:"A burn-up chart, because it plots completed work against a separate scope line and makes scope changes visible.",c:true},
      {t:"A burn-down chart, because the line always trends to zero."},
      {t:"A bar chart of story points per Sprint."},
      {t:"A Gantt chart of upfront-planned features and dates."}
    ], exp:"Burn-down charts hide scope changes — added work makes the team appear to underperform. Burn-up charts plot completed work and total scope as two lines, so scope additions and removals are explicitly visible. Burn-up is widely recommended for release/product-level tracking under changing scope." },

    { type:"single", cat:"forecasting", q:"A stakeholder asks 'When will all 80 remaining backlog items be done?' Which kind of answer is most consistent with empirical, evidence-based forecasting?", opts:[
      {t:"A probabilistic range, e.g. '85% confidence we finish by date X, 50% confidence by date Y,' based on historical throughput.",c:true},
      {t:"A precise single date guaranteed by the team's velocity."},
      {t:"A date based on adding up each item's hour estimate from the Developers."},
      {t:"A statement that Scrum cannot make any kind of forecast."}
    ], exp:"Empirical forecasting techniques such as Monte Carlo simulation (Daniel Vacanti and others) use historical throughput to produce probability-banded forecasts rather than single-point promises. Single-point dates ignore variability; hour-based estimates are not what Scrum or modern forecasting recommend; and Scrum absolutely supports forecasting — using evidence." },

    { type:"single", cat:"forecasting", q:"A senior stakeholder insists on a fixed scope, a fixed delivery date, and a fixed budget for a release. From a Scrum + EBM perspective, which variable is most likely to suffer if all three are held rigid?", opts:[
      {t:"Quality — the team may be pressured to skip the Definition of Done to make all three hold, eroding long-term value and Ability to Innovate.",c:true},
      {t:"Team size — additional Developers will silently solve the problem."},
      {t:"Sprint length — Sprints will get longer automatically."},
      {t:"Stakeholder count — fewer stakeholders will be involved."}
    ], exp:"With scope, date, and budget all fixed in a complex environment, the implicit variable becomes quality. The Scrum Guide 2020 protects quality through the Definition of Done; Scrum.org guidance emphasizes that the PO's job is to shift conversations from 'original scope' to 'value delivered.' Empirical forecasting flexes scope, not quality." },

    { type:"single", cat:"forecasting", q:"When can the Scrum Team release a Done Increment to customers or users?", opts:[
      {t:"At any time during the Sprint, as soon as the Increment meets the Definition of Done; the Product Owner decides timing.",c:true},
      {t:"Only at the end of the Sprint, at or after the Sprint Review."},
      {t:"Only on dates pre-approved by stakeholders in advance."},
      {t:"Only once per quarter to align with reporting cycles."}
    ], exp:"The Scrum Guide 2020 states the Sprint Review should never be considered a gate to releasing value, and multiple Increments may be created within a Sprint. The Product Owner decides when the Increment is released. Continuous delivery — release as soon as Done — improves Time to Market (an EBM KVA)." },

    { type:"single", cat:"forecasting", q:"A stakeholder asks the Product Owner, 'If one story point equals two hours, how many hours will this 13-point item take?' What is the most appropriate response?", opts:[
      {t:"Decline the conversion and offer an empirical forecast instead: based on recent throughput, communicate how soon similar items have historically been completed.",c:true},
      {t:"Multiply 13 by 2 and report 26 hours as the precise estimate."},
      {t:"Ask the Developers to re-estimate the item in hours."},
      {t:"Refuse to forecast anything since Scrum does not allow predictions."}
    ], exp:"Story points are relative ratios reflecting effort, complexity, and risk — not durations. Converting them to hours defeats their purpose and reintroduces single-point time estimation, which is poor at forecasting complex work. Empirical, throughput-based forecasts are the appropriate response; Scrum supports forecasting using evidence." },

    { type:"single", cat:"forecasting", q:"Mid-Sprint, the Developers discover one of the selected items is significantly larger than estimated and threatens the Sprint Goal. What is the appropriate course of action?", opts:[
      {t:"The Developers and Product Owner renegotiate the scope of the Sprint Backlog to protect the Sprint Goal; only the PO can cancel the Sprint if the goal becomes obsolete.",c:true},
      {t:"Automatically extend the Sprint by a few days to fit the work."},
      {t:"Force the Developers to skip Definition of Done items to finish on time."},
      {t:"Cancel the Sprint immediately regardless of the Sprint Goal."}
    ], exp:"The Scrum Guide 2020 states the Sprint Backlog is updated throughout the Sprint as more is learned; scope can be renegotiated with the Product Owner. The Sprint Goal is the commitment and should be protected. Sprint length is fixed (no extensions); skipping DoD is an anti-pattern; only the PO can cancel a Sprint." },

    { type:"single", cat:"strategy", q:"In the EBM Guide, the goals hierarchy is Strategic Goal → Intermediate Goals → Immediate Tactical Goal. Which of these typically maps to the Scrum Product Goal?", opts:[
      {t:"Intermediate Goal — a measurable, medium-term target on the path to the Strategic Goal.",c:true},
      {t:"Strategic Goal — the long-term, aspirational organizational target."},
      {t:"Immediate Tactical Goal — the single near-term objective."},
      {t:"None — the Product Goal is independent of the EBM hierarchy."}
    ], exp:"Per Scrum.org's mapping of EBM and Scrum, the Product Goal usually corresponds to an Intermediate Goal — a measurable, medium-term target — while the Sprint Goal is the Immediate Tactical Goal. The Strategic Goal aligns with the longer-term Product Vision or organizational mission." },

    { type:"tf", cat:"strategy", q:"In the EBM goals hierarchy, the Scrum Sprint Goal corresponds most naturally to an Immediate Tactical Goal.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"True. Per Scrum.org and the EBM Guide, the Sprint Goal is the single near-term objective for a Sprint — fitting the EBM definition of an Immediate Tactical Goal that a team works to in the very short term to move toward an Intermediate Goal (Product Goal)." },

    { type:"single", cat:"strategy", q:"A Product Owner is mapping how product-direction artifacts relate to each other. Which order is correct, from longest-term to most-tactical?", opts:[
      {t:"Vision → Strategy → Roadmap → Product Backlog.",c:true},
      {t:"Product Backlog → Roadmap → Strategy → Vision."},
      {t:"Roadmap → Vision → Strategy → Product Backlog."},
      {t:"Vision → Roadmap → Strategy → Product Backlog."}
    ], exp:"The Vision describes the long-term future state of the product. The Strategy explains how to reach it (problem, market, differentiators, business goals). The Roadmap is a medium-term outcome-based plan. The Product Backlog is the emergent list of items that will deliver the next steps. Each layer becomes more concrete and shorter-horizon. The Scrum Guide 2020's Product Goal lives inside the Product Backlog as its commitment." },

    { type:"single", cat:"strategy", q:"A Product Owner wants a single guiding metric the Scrum Team can use to steer in-flight product decisions, that ties day-to-day work to long-term business outcomes. Which kind of metric is most appropriate?", opts:[
      {t:"A leading indicator of sustainable customer value (e.g. weekly active users delivering the product's core action).",c:true},
      {t:"A lagging revenue indicator reviewed only at year-end."},
      {t:"A vanity metric (e.g. total cumulative downloads since launch)."},
      {t:"The team's velocity normalized across Sprints."}
    ], exp:"A single guiding customer-value metric must be a leading indicator — one that the team can move now and that predicts long-term outcomes. Lagging indicators arrive too late to steer. Vanity metrics only trend up and cannot drive decisions. Velocity is an internal team measure of output, not customer value. EBM stresses managing toward outcomes rather than output." },

    { type:"single", cat:"strategy", q:"Per Scrum.org's 'Managing Products with Agility' competency, one of the Product Owner's core responsibilities under 'Business Strategy' is best described as:", opts:[
      {t:"Bridging the organization's mission and strategy to product execution, aligning product decisions with strategy and adapting based on Increment feedback.",c:true},
      {t:"Setting the company's overall business strategy independently."},
      {t:"Limiting the team's work to whatever the company strategy explicitly mentions."},
      {t:"Avoiding business strategy entirely since that is leadership's job."}
    ], exp:"Per the Scrum.org 'Managing Products with Agility' competency, the PO bridges company mission/strategy and product execution. They do not set the company's strategy alone, and they do not detach product work from strategy. They translate strategy into product decisions and adapt those decisions empirically based on Increment outcomes." },

    { type:"tf", cat:"strategy", q:"When multiple Scrum Teams work on the same product, each team should set its own Product Goal aligned with its slice of the work.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 is explicit: multiple Scrum Teams working together on the same product share the same Product Goal, Product Backlog, and Product Owner. One product → one Product Goal, regardless of how many teams contribute." },

    { type:"single", cat:"framework", q:"During refinement, a Product Owner begins specifying which database tables and class structures the Developers should use to implement an item. What is the most accurate description of this behavior?", opts:[
      {t:"It is a Product Owner anti-pattern; the Developers, as a self-managing team, decide how the work is technically implemented.",c:true},
      {t:"It is appropriate as long as the Product Owner has a technical background."},
      {t:"It is the Product Owner's accountability under 'effective Product Backlog management.'"},
      {t:"It is required by Scrum so that Sprint Planning can finish on time."}
    ], exp:"The Scrum Guide 2020 states the Scrum Team is self-managing — the Developers internally decide who does what, when, and how. The Product Owner is accountable for what and why (value, ordering, the Product Goal), not for how the work is implemented. Dictating implementation is a 'Controller' Product Owner anti-pattern that erodes Developer ownership." },

    { type:"single", cat:"framework", q:"During Sprint Planning, the Developers are deciding which Product Backlog items to select for the Sprint. The Product Owner says, 'I'll select these eight items because I think they're the right ones.' What is the most appropriate correction?", opts:[
      {t:"The Developers select how many items they take on; the Product Owner ensures the team understands value and trade-offs but does not select on the team's behalf.",c:true},
      {t:"The Product Owner is correct — the PO has final say on which items are pulled into the Sprint."},
      {t:"The Scrum Master should select the items as a neutral party."},
      {t:"Stakeholders should be consulted to break the tie."}
    ], exp:"The Scrum Guide 2020 states that through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. The Developers know best what they can accomplish. The Product Owner helps clarify and influences ordering, but does not pull items on the team's behalf." },

    { type:"single", cat:"framework", q:"A Product Owner is preparing for refinement and is considering writing all backlog item details alone, then handing the items to the Developers fully specified. What is the most appropriate stance per the Scrum Guide 2020?", opts:[
      {t:"Refinement is an ongoing activity of the whole Scrum Team; the PO collaborates with Developers (who size and add technical perspective) and may invite stakeholders as needed.",c:true},
      {t:"The Product Owner should write items alone to avoid wasting Developer time."},
      {t:"Refinement is a Scrum Master responsibility; the PO contributes items only."},
      {t:"Refinement only happens during Sprint Planning."}
    ], exp:"The Scrum Guide 2020 describes refinement as an ongoing activity. The Product Owner is accountable for the Product Backlog content, but Developers do the sizing and contribute technical perspective. A PO who refines alone misses Developer insight (feasibility, dependencies, splitting) and undermines the whole-team responsibility for a high-quality backlog." },

    { type:"single", cat:"framework", q:"Mid-Sprint, a Developer realizes they should swap one selected item for a different Product Backlog item that better serves the Sprint Goal. What is the appropriate path?", opts:[
      {t:"The Developer discusses the change with the Product Owner; the Sprint Backlog is updated collaboratively, with the Sprint Goal protected.",c:true},
      {t:"The Developer makes the swap silently — the Sprint Backlog is a Developer-owned plan."},
      {t:"The change must wait for the next Sprint Planning."},
      {t:"The Scrum Master decides whether the swap is allowed."}
    ], exp:"The Scrum Guide 2020 states the Sprint Backlog is updated throughout the Sprint as more is learned, and scope can be renegotiated with the Product Owner. The Developers own the Sprint Backlog (the plan by and for the Developers), but changes that affect the work selected — and therefore the path to the Sprint Goal — are made in collaboration with the Product Owner." },

    { type:"single", cat:"framework", q:"Mid-Sprint, a Product Owner walks up to a Developer and says: 'Stop what you are doing and start this new item I just thought of.' What is the most appropriate framing per Scrum?", opts:[
      {t:"This violates Developer self-management; the PO can propose changes to the Sprint Backlog through collaboration with the Developers, but cannot direct individual Developer work.",c:true},
      {t:"This is the PO's right since they are accountable for value."},
      {t:"This is appropriate if the new item has higher business value than the current work."},
      {t:"This is appropriate as long as the Scrum Master is informed."}
    ], exp:"The Scrum Guide 2020 states the Scrum Team is self-managing — the Developers decide who does what, when, and how. The Product Owner cannot reassign work or interrupt Developer tasks. Mid-Sprint changes to the Sprint Backlog must be negotiated with the Developers as a whole and must protect the Sprint Goal. Direct command of individual Developers is a Product Owner anti-pattern." },

    { type:"single", cat:"stakeholders", q:"A customer interview produces the request: 'Add a one-click export-to-PDF button to the dashboard.' What is the most professional first step for the Product Owner?", opts:[
      {t:"Probe the underlying problem the customer is trying to solve; the requested feature is a hypothesis about a solution, not the actual need.",c:true},
      {t:"Add the requested item to the Product Backlog exactly as worded."},
      {t:"Decline the request because it sounds like an output, not an outcome."},
      {t:"Forward the request to the Developers to implement during Sprint Planning."}
    ], exp:"Customer-stated solutions are hypotheses about value, not validated needs. Recognized Product Owner practice (continuous discovery, Jobs-to-be-Done) is to probe the underlying problem — what is the customer trying to accomplish, why now, what happens today — before committing to any solution. The actual need may be solved better by a different capability than the one requested." },

    { type:"single", cat:"stakeholders", q:"A team is using personas to align discussions about whom the product serves. A new team member asks, 'Are these real people we are designing for?' What is the most accurate description of how personas should be used?", opts:[
      {t:"Personas are research-based archetypes representing a target user segment; they are alignment tools, not substitutes for real customer feedback.",c:true},
      {t:"Personas are randomly invented characters used to add color to design discussions."},
      {t:"Personas are exact transcripts of specific real customers, including their names and emails."},
      {t:"Personas are Scrum artifacts defined in the Scrum Guide 2020."}
    ], exp:"Personas are archetypes synthesized from real customer research and used to align the team's thinking about whom they serve. They are not random invention, not substitutes for real customer feedback, and not Scrum artifacts — the Scrum Guide 2020 does not define personas. They are a widely-used Product Owner practice for stakeholder/customer focus." },

    { type:"single", cat:"stakeholders", q:"A stakeholder submits a Product Backlog item titled 'Add a dropdown of saved filters next to the search bar.' What additional content would most improve this item for the Scrum Team?", opts:[
      {t:"A clear statement of the underlying user problem the item is meant to solve, so the Developers and Product Owner can design the right solution and measure its effect.",c:true},
      {t:"A precise hour estimate written by the stakeholder."},
      {t:"A mandatory deadline date set by the stakeholder."},
      {t:"A list of which specific Developer should implement it."}
    ], exp:"Effective Product Backlog items describe the problem and the desired outcome, not just a prescribed solution. This lets the Scrum Team discuss alternatives, validate assumptions, and measure whether the work actually delivers the intended value. Hour estimates from stakeholders, externally-imposed dates, and assigning specific Developers all undermine empirical, self-managed work." },

    { type:"single", cat:"framework", q:"What is the maximum timebox for Sprint Planning for a one-month Sprint?", opts:[
      {t:"8 hours",c:true},
      {t:"4 hours"},
      {t:"2 hours"},
      {t:"No fixed timebox"}
    ], exp:"The Scrum Guide 2020 states Sprint Planning is timeboxed to a maximum of 8 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter." },

    { type:"single", cat:"framework", q:"What is the maximum timebox for the Sprint Review for a one-month Sprint?", opts:[
      {t:"4 hours",c:true},
      {t:"8 hours"},
      {t:"2 hours"},
      {t:"No fixed timebox"}
    ], exp:"The Scrum Guide 2020 states the Sprint Review is timeboxed to a maximum of 4 hours for a one-month Sprint, shorter for shorter Sprints." },

    { type:"single", cat:"framework", q:"What is the maximum timebox for the Sprint Retrospective for a one-month Sprint?", opts:[
      {t:"3 hours",c:true},
      {t:"1 hour"},
      {t:"2 hours"},
      {t:"4 hours"}
    ], exp:"The Scrum Guide 2020 states the Sprint Retrospective is timeboxed to a maximum of 3 hours for a one-month Sprint. Shorter Sprints have shorter timeboxes." },

    { type:"single", cat:"framework", q:"On what foundation is Scrum built per the Scrum Guide 2020?", opts:[
      {t:"Empiricism and lean thinking",c:true},
      {t:"Detailed up-front planning"},
      {t:"Resource utilization optimization"},
      {t:"Predictive process control"}
    ], exp:"The Scrum Guide 2020 explicitly states Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and decisions are based on what is observed. Lean thinking reduces waste and focuses on essentials." },

    { type:"single", cat:"framework", q:"An organization has no Definition of Done as a standard. Who creates it?", opts:[
      {t:"The Scrum Team creates a Definition of Done appropriate for the product",c:true},
      {t:"The Product Owner writes it alone"},
      {t:"The Scrum Master imposes it"},
      {t:"The organization must mandate one before work can begin"}
    ], exp:"Per the Scrum Guide 2020, if there is no organizational DoD standard, the Scrum Team must create a Definition of Done appropriate for the product. The whole Scrum Team owns and maintains it." },

    { type:"single", cat:"framework", q:"Mid-Sprint the Developers learn one of the selected items will take twice as long as estimated. The Sprint Goal is still achievable. What is the most appropriate response?", opts:[
      {t:"Renegotiate scope with the Product Owner — the Sprint Backlog evolves; the Sprint Goal stays intact",c:true},
      {t:"Extend the Sprint by a few days to accommodate the work"},
      {t:"Cancel the Sprint immediately"},
      {t:"Force the Developers to work overtime to maintain scope"}
    ], exp:"The Scrum Guide 2020 states scope may be renegotiated with the Product Owner as more is learned. Sprint length is fixed and cannot be extended. The Sprint Goal is the commitment; selected items are a forecast that can flex." },

    { type:"single", cat:"framework", q:"Why are Sprint cancellations rare in practice?", opts:[
      {t:"Sprints are short timeboxes, so completing the Sprint is usually faster than cancelling and restarting",c:true},
      {t:"The Scrum Guide forbids cancellations"},
      {t:"Only management can authorize them"},
      {t:"They require unanimous team vote"}
    ], exp:"The Scrum Guide 2020 notes Sprint cancellations are uncommon because Sprints are short. A Sprint may be cancelled only if the Sprint Goal becomes obsolete; only the Product Owner has authority. Practically, completing a short Sprint is usually more efficient than restarting." },

    { type:"single", cat:"value", q:"A team uses 'Product Cost Ratio' (total expenses and operational costs vs. revenue) as a measure. Which EBM Key Value Area does this most naturally belong to?", opts:[
      {t:"Current Value",c:true},
      {t:"Unrealized Value"},
      {t:"Time to Market"},
      {t:"Ability to Innovate"}
    ], exp:"Per the EBM Guide Appendix, Product Cost Ratio is a Current Value KVM. It reflects the value the product delivers today relative to what it costs to operate. CV KVMs include revenue per employee, product cost ratio, employee satisfaction, customer satisfaction, customer usage index." },

    { type:"single", cat:"value", q:"A Product Owner reports 'employee satisfaction' as part of value reporting. Per the EBM Guide, this is a measure of:", opts:[
      {t:"Current Value — engaged employees are key producers of the value the product delivers today",c:true},
      {t:"Unrealized Value — happiness gap to ideal"},
      {t:"Time to Market — how fast they deliver"},
      {t:"Ability to Innovate — capacity for new capabilities"}
    ], exp:"The EBM Guide explicitly lists Employee Satisfaction as a Current Value KVM. Engaged employees are 'ultimately the producers of value' — happy employees are more engaged and productive, contributing to today's value delivery." },

    { type:"single", cat:"value", q:"A team tracks 'Customer Usage Index' — measurement of usage by feature, used to infer how useful customers find the product. Which KVA does this belong to?", opts:[
      {t:"Current Value",c:true},
      {t:"Unrealized Value"},
      {t:"Time to Market"},
      {t:"Ability to Innovate"}
    ], exp:"Customer Usage Index is a Current Value KVM per the EBM Guide. It reveals whether customers find the product useful TODAY and whether actual usage matches expectations. It is not about future potential (UV), delivery speed (T2M), or innovation capacity (A2I)." },

    { type:"single", cat:"value", q:"A team measures 'Mean Time to Repair' (MTTR) — average time from error detection to fix. This is a measure of:", opts:[
      {t:"Time to Market — efficiency of the organization to fix an error",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Ability to Innovate"}
    ], exp:"MTTR is a Time to Market KVM per the EBM Guide. It reveals the efficiency of an organization to fix an error. T2M includes anything affecting how quickly the organization responds — release cadence, lead time, MTTR, cycle time." },

    { type:"single", cat:"value", q:"A team's CI pipeline produces N integrated and tested builds per day. As an EBM value measure, this maps to:", opts:[
      {t:"Time to Market",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Ability to Innovate"}
    ], exp:"Build and Integration Frequency is a Time to Market KVM per the EBM Guide. It reflects how often the team can integrate and test work — a leading indicator of how fast new value can reach customers." },

    { type:"single", cat:"value", q:"A team tracks 'Customer Cycle Time' — elapsed time from when work starts on a release until release. Which KVA?", opts:[
      {t:"Time to Market",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Ability to Innovate"}
    ], exp:"Customer Cycle Time is a Time to Market KVM. It reflects the organization's ability to reach its customer — start-to-release elapsed time. T2M is about responsiveness; CV is value delivered today; UV is unrealized potential; A2I is innovation capacity." },

    { type:"single", cat:"value", q:"A team measures 'Innovation Rate' — percentage of effort spent on new product capabilities vs. maintaining existing product. This is a measure of:", opts:[
      {t:"Ability to Innovate",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Time to Market"}
    ], exp:"Innovation Rate is the headline KVM for Ability to Innovate per the EBM Guide. It directly reflects the organization's capacity to deliver new capabilities — when too much effort goes to maintenance, A2I degrades." },

    { type:"single", cat:"value", q:"A team tracks 'Defect Trends' — change in defects period over period. Which KVA does this most directly measure?", opts:[
      {t:"Ability to Innovate",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Unrealized Value"}
    ], exp:"Defect Trends is an Ability to Innovate KVM. Defects reduce the value the product delivers and consume capacity that could be spent on innovation. Rising defects directly indicate A2I erosion." },

    { type:"single", cat:"value", q:"A team tracks 'On-Product Index' — percentage of time team members spend working on the product itself vs. other tasks. Which KVA?", opts:[
      {t:"Ability to Innovate",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Unrealized Value"}
    ], exp:"On-Product Index is an Ability to Innovate KVM per the EBM Guide. When teams spend significant time on non-product work (admin, context switching, meetings), A2I suffers. The metric reveals systemic impediments to innovation capacity." },

    { type:"single", cat:"value", q:"A team tracks 'Installed Version Index' — number of versions of the product currently being supported. Which KVA does this affect?", opts:[
      {t:"Ability to Innovate — supporting many old versions consumes capacity for new development",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Unrealized Value"}
    ], exp:"Installed Version Index is an Ability to Innovate KVM. The EBM Guide notes that supporting and maintaining older versions consumes capacity. The more versions in the wild, the less capacity for new capabilities." },

    { type:"single", cat:"value", q:"A team measures 'Production Incident Count' — frequency of being interrupted to fix issues in installed products. What does this indicate?", opts:[
      {t:"Ability to Innovate — interruption time is lost innovation capacity; incident frequency also signals product stability",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Unrealized Value"}
    ], exp:"Production Incident Count is an Ability to Innovate KVM per the EBM Guide. Frequent interruptions to fix issues drain innovation capacity. The number and frequency of incidents also help indicate product stability." },

    { type:"single", cat:"value", q:"A team measures 'Desired Customer Experience' — a survey-based measure of what customers would like to experience. Which KVA?", opts:[
      {t:"Unrealized Value",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Ability to Innovate"}
    ], exp:"Desired Customer Experience is an Unrealized Value KVM. It captures what customers would like — the target state. Together with current measures it reveals the satisfaction gap (also a UV KVM)." },

    { type:"single", cat:"value", q:"A team tracks 'Market Share' — relative percentage of the market NOT yet controlled by the product. Which KVA?", opts:[
      {t:"Unrealized Value",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Ability to Innovate"}
    ], exp:"Market Share (the percentage NOT yet controlled — the growth opportunity) is an Unrealized Value KVM per the EBM Guide. It reveals potential market the product might achieve if it better met customer needs." },

    { type:"single", cat:"value", q:"A team measures 'Time-to-Learn' — total time to sketch an idea, build it, deliver to users, and learn from their usage. Which KVA?", opts:[
      {t:"Time to Market",c:true},
      {t:"Current Value"},
      {t:"Unrealized Value"},
      {t:"Ability to Innovate"}
    ], exp:"Time-to-Learn is a Time to Market KVM per the EBM Guide. It captures how quickly the organization can complete a full learning cycle — directly tied to responsiveness and the ability to adapt under uncertainty." },

    { type:"single", cat:"value", q:"A team measures 'Time to Pivot' — elapsed time between receiving competitor feedback/signal and responding with matching or exceeding capabilities. Which KVA?", opts:[
      {t:"Time to Market",c:true},
      {t:"Ability to Innovate"},
      {t:"Current Value"},
      {t:"Unrealized Value"}
    ], exp:"Time to Pivot is a Time to Market KVM per the EBM Guide — a measure of true business agility expressed as elapsed time between signal and response. It is responsiveness, not innovation capacity." },

    { type:"single", cat:"value", q:"A team measures 'Active Product Code Branches' — number of different versions/variants being actively developed. Which KVA does this most affect?", opts:[
      {t:"Ability to Innovate — variants multiply complexity and reduce capacity for new capability",c:true},
      {t:"Current Value"},
      {t:"Time to Market"},
      {t:"Unrealized Value"}
    ], exp:"Active Product Code Branches is an Ability to Innovate KVM per the EBM Guide. Variants increase complexity, merging cost, and maintenance burden — eroding capacity for new innovation." },

    { type:"single", cat:"value", q:"A product has both high Current Value AND high Unrealized Value. What does this combination most likely indicate?", opts:[
      {t:"A successful product with significant remaining opportunity — continued investment is likely warranted",c:true},
      {t:"A failing product that should be divested"},
      {t:"A cash cow nearing end of investment cycle"},
      {t:"A product with no further growth potential"}
    ], exp:"High CV + high UV = the product delivers strong value today AND has significant additional opportunity ahead. This combination usually justifies continued investment to capture more UV. Low UV with high CV is the 'cash cow' case where new investment may not be warranted." },

    { type:"single", cat:"value", q:"A team has stable Current Value but Time to Market is degrading (releases are getting slower). What is the most aligned EBM response?", opts:[
      {t:"Invest in reducing T2M friction (build/test/release automation, smaller batches) — degrading T2M will eventually erode the ability to respond to customers",c:true},
      {t:"Ignore T2M — CV is what matters"},
      {t:"Replace the Scrum Master"},
      {t:"Ship larger batches less frequently"}
    ], exp:"EBM treats the four KVAs as a balanced portfolio. Degrading T2M means the organization is less able to respond — over time this will hurt CV as well. Investments in delivery flow are warranted." },

    { type:"single", cat:"value", q:"A2I is improving (less tech debt, more capacity for new features), but Current Value is declining. What might this indicate from an EBM perspective?", opts:[
      {t:"The team may be investing in capacity but not in things customers actually value — outcomes need to be re-examined",c:true},
      {t:"Success — A2I always matters more than CV"},
      {t:"The team should reduce A2I investment immediately"},
      {t:"This combination is impossible"}
    ], exp:"Improving capacity without translating it into customer value is a classic trap. The PO must check that A2I gains translate into validated CV/UV improvements. Capacity invested in the wrong work is still wasted." },

    { type:"single", cat:"value", q:"A new product has very low Current Value but very high Unrealized Value. The PO is debating where to invest. The most aligned EBM action is:", opts:[
      {t:"Invest in increasing CV (and supporting T2M) — the opportunity is large, the path is to capture it through delivery",c:true},
      {t:"Skip the product since CV is low"},
      {t:"Reduce all spending until CV organically rises"},
      {t:"Focus only on A2I, ignoring market opportunity"}
    ], exp:"Per the EBM Guide example, a new product with low CV and high UV is a classic invest-aggressively scenario — the opportunity is large; the path is to deliver and capture it. T2M and A2I also support the journey." },

    { type:"tf", cat:"value", q:"Per the EBM Guide, EBM is a framework for organizations — not only for individual Scrum Teams — to measure and improve value delivery.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The EBM Guide explicitly states: 'Evidence-Based Management is an empirical approach that helps organizations to continuously improve customer outcomes, organizational capabilities, and business results.' Scope is organizational, not team-only." },

    { type:"single", cat:"value", q:"Why does the EBM Guide intentionally not define a specific list of Key Value Measures (KVMs)?", opts:[
      {t:"To encourage adaptability — organizations choose KVMs that fit their context, with the Appendix providing examples only",c:true},
      {t:"Because measurement is unimportant"},
      {t:"To make EBM harder to adopt"},
      {t:"Because the list will be defined in a future version"}
    ], exp:"The EBM Guide Appendix states explicitly: 'To encourage adaptability, EBM defines no specific Key Value Measures (KVMs). KVMs listed below are presented to show the kinds of measures that might help.' Organizations adapt KVMs to their context." },

    { type:"single", cat:"value", q:"Per the EBM Guide, the Strategic Goal is best described as:", opts:[
      {t:"Aspirational and far-away, with significant uncertainty in the path — requiring empiricism to reach",c:true},
      {t:"A short, easily-measurable target the team can hit this quarter"},
      {t:"The Sprint Goal renamed"},
      {t:"A fixed deadline imposed by management"}
    ], exp:"The EBM Guide describes the Strategic Goal as 'something important the organization would like to achieve... so big and far away, with many uncertainties along the journey that the organization must use empiricism.' It is aspirational, not tactical." },

    { type:"single", cat:"backlog", q:"Per the Scrum Guide 2020, who participates in Product Backlog refinement?", opts:[
      {t:"The whole Scrum Team — PO clarifies what/why, Developers add technical perspective and sizing, SM facilitates as needed",c:true},
      {t:"The Product Owner alone"},
      {t:"The Developers alone"},
      {t:"Only stakeholders and the Product Owner"}
    ], exp:"Refinement is an ongoing activity of the whole Scrum Team. The PO is accountable for content; Developers contribute sizing and technical perspective; the SM may facilitate. PO refining alone is a recognized anti-pattern." },

    { type:"single", cat:"backlog", q:"How often should Product Backlog refinement happen per the Scrum Guide 2020?", opts:[
      {t:"On an ongoing basis — refinement is a continuous activity, not a fixed event",c:true},
      {t:"Exactly once per Sprint with a fixed 10% time allocation"},
      {t:"Only at the start of a release"},
      {t:"Only during Sprint Planning"}
    ], exp:"The Scrum Guide 2020 describes refinement as an ongoing activity. It does NOT mandate a 10% cap (that was older guidance, now removed). It is not a formal Scrum event with a timebox — teams refine as needed throughout the Sprint." },

    { type:"single", cat:"backlog", q:"A widely-used heuristic for good Product Backlog items is 'INVEST.' What does it stand for?", opts:[
      {t:"Independent, Negotiable, Valuable, Estimable, Small, Testable",c:true},
      {t:"Integrated, Numbered, Validated, Examined, Standard, Tested"},
      {t:"Internal, Necessary, Versioned, Estimated, Selected, Tracked"},
      {t:"Inspectable, Noted, Valued, Evaluated, Specified, Trusted"}
    ], exp:"INVEST (Bill Wake) is a recognized PBI quality heuristic. It is not from the Scrum Guide but is widely adopted. Each PBI should ideally be Independent, Negotiable, Valuable, Estimable, Small (fits a Sprint), and Testable." },

    { type:"single", cat:"backlog", q:"A Scrum Team uses 'SPIDR' as a splitting technique for large Product Backlog items. What do the letters represent?", opts:[
      {t:"Spike, Path, Interface, Data, Rules — five ways to slice a large item",c:true},
      {t:"Story, Plan, Implement, Deliver, Review"},
      {t:"Sprint, Product, Item, Developer, Refinement"},
      {t:"Splittable, Prioritized, Independent, Detailed, Ready"}
    ], exp:"SPIDR (Mike Cohn) is a splitting heuristic that complements INVEST: split by Spike (learning), Path (workflow variations), Interface (different UIs/APIs), Data (variations), or Rules (business logic variations). Not from the Scrum Guide but widely used." },

    { type:"single", cat:"backlog", q:"Per the Scrum Guide 2020, Product Backlog items often have a value attribute. Who decides on the value of a PBI?", opts:[
      {t:"The Product Owner, who is accountable for maximizing the value of the product",c:true},
      {t:"The Developers, who size the work"},
      {t:"The Scrum Master, who tracks delivery"},
      {t:"Stakeholders by vote"}
    ], exp:"PBI attributes often include description, order, size, and value. While Developers size the work, the Product Owner is accountable for value — they decide on the value attribute as part of ordering for maximum product value." },

    { type:"multi", cat:"backlog", q:"A Product Owner orders the Product Backlog. Beyond business value, which other factors commonly inform the order? (select 3)", opts:[
      {t:"Risk — doing risky items early to learn fast",c:true},
      {t:"Dependencies — sequencing items to unblock",c:true},
      {t:"Learning — items that reduce uncertainty about the product",c:true},
      {t:"Developer preferences for fun work"},
      {t:"Stakeholder titles"}
    ], exp:"Scrum.org notes the Product Backlog is 'ordered' not just 'prioritized by value.' Order considers value, risk, dependencies, learning, cost, and other factors. Developer preferences and stakeholder titles are not appropriate ordering criteria." },

    { type:"single", cat:"backlog", q:"A team uses 'story mapping' to visualize the user journey across the Product Backlog. How does story mapping relate to Scrum?", opts:[
      {t:"A complementary practice — not a Scrum artifact; output feeds into the Product Backlog and helps surface gaps in the user journey",c:true},
      {t:"A required Scrum artifact alongside the Product Backlog"},
      {t:"A replacement for the Product Backlog"},
      {t:"A Scrum Master responsibility only"}
    ], exp:"Story mapping (Jeff Patton) is widely used to visualize and structure backlogs along user activities. It is NOT a Scrum artifact (not in the Scrum Guide). It complements the Product Backlog by preserving the big picture and exposing gaps." },

    { type:"single", cat:"backlog", q:"Per the Scrum Guide 2020, the Product Backlog is described as 'emergent.' This means:", opts:[
      {t:"It evolves continuously as the product and the environment in which it will be used evolve — never 'complete'",c:true},
      {t:"It is generated by an algorithm based on stakeholder requests"},
      {t:"It must be fully detailed before the first Sprint"},
      {t:"It is fixed once approved by management"}
    ], exp:"The Scrum Guide 2020 calls the Product Backlog 'an emergent, ordered list.' As long as the product exists, the Product Backlog exists — never complete. Items are added/removed/refined continuously based on what is learned." },

    { type:"single", cat:"stakeholders", q:"A stakeholder asks why the Sprint Review feels like a 'demo' to them. The PO wants to fix this. What does the Scrum Guide 2020 say the Sprint Review actually IS?", opts:[
      {t:"A working session where the Scrum Team and stakeholders inspect the Increment, discuss progress toward the Product Goal, and adapt the Product Backlog together",c:true},
      {t:"A formal stakeholder approval gate"},
      {t:"A one-way presentation of completed features"},
      {t:"A demo of polished software with no interaction"}
    ], exp:"The Scrum Guide 2020 explicitly describes the Sprint Review as a working session and cautions teams to avoid limiting it to a presentation. The Scrum Team presents results AND collaborates with stakeholders on what to do next, potentially adjusting the Product Backlog." },

    { type:"single", cat:"stakeholders", q:"A Product Owner has many stakeholders with varying influence and interest. Which approach helps decide collaboration patterns?", opts:[
      {t:"Map stakeholders by influence (or power) and interest, then engage each group with an appropriate pattern",c:true},
      {t:"Treat all stakeholders identically regardless of influence"},
      {t:"Only engage the senior-most stakeholder"},
      {t:"Refuse to engage stakeholders at all"}
    ], exp:"Stakeholder mapping (a widely-used product practice, not Scrum-specific) helps the PO segment stakeholders by power and interest. High-power+high-interest → collaborate closely; high-power+low-interest → keep informed; etc. The Scrum Guide expects PO stakeholder collaboration." },

    { type:"single", cat:"stakeholders", q:"At Sprint Review, several stakeholders consistently stay silent while one or two dominate. What is the most appropriate PO action?", opts:[
      {t:"Structure the Review with techniques that distribute participation (silent writing, paired discussion, round-robin questions) so all voices are heard",c:true},
      {t:"Accept that some stakeholders just prefer to listen"},
      {t:"Stop inviting the quiet stakeholders"},
      {t:"Let the dominant stakeholders decide all priorities"}
    ], exp:"Voice equity is a core stakeholder collaboration principle. Structural facilitation (silent writing, paired discussion, round-robin) draws out quieter voices and balances airtime — much more effective than verbal cajoling. The PO designs the Review to encourage participation." },

    { type:"single", cat:"stakeholders", q:"A stakeholder wants a precise delivery date for a feature 6 months out. The PO knows there is significant uncertainty. The most aligned PO response is:", opts:[
      {t:"Communicate honestly using probabilistic forecasts (ranges, confidence levels) based on empirical evidence — not single-point guarantees",c:true},
      {t:"Promise a specific date to keep the stakeholder happy"},
      {t:"Refuse to forecast anything"},
      {t:"Quote the longest plausible date to be safe"}
    ], exp:"Per Scrum.org guidance on forecasting, the PO communicates honestly about uncertainty using probabilistic forecasts based on empirical data. Single-point guarantees in complex environments are dishonest and lead to compromised quality when reality differs." },

    { type:"single", cat:"stakeholders", q:"During a customer interview, the PO repeatedly asks 'Would you use a feature that does X?' What is the issue with this kind of question?", opts:[
      {t:"It is hypothetical and invites polite agreement — better to ask about past behavior in specific situations",c:true},
      {t:"It is too long"},
      {t:"It is too short"},
      {t:"It uses the word 'feature' which is not allowed"}
    ], exp:"Hypothetical future-intent questions ('would you use...?') invite politeness, not evidence. Asking about past behavior in specific situations ('tell me about the last time you faced [problem] — what did you do?') surfaces real signals. This is a widely-cited customer discovery principle." },

    { type:"single", cat:"stakeholders", q:"A customer requests 'add a one-click PDF export.' Applying Jobs-to-be-Done framing, what is the PO's most appropriate next step?", opts:[
      {t:"Probe what underlying job the customer is hiring this feature to make — the request is a hypothesis about solution, not the real need",c:true},
      {t:"Add the feature to the Product Backlog exactly as requested"},
      {t:"Decline the request immediately"},
      {t:"Ask the Developers to estimate implementation"}
    ], exp:"Jobs-to-be-Done (JTBD) reframes customer requests as 'jobs' — the progress customers seek. The actual job (e.g. 'I need to share this report with a regulator who only accepts PDF') may be solved differently than the literal request. JTBD prevents falling in love with the suggested solution." },

    { type:"single", cat:"stakeholders", q:"A PO uses the Product Vision when deciding whether to accept a particular stakeholder request. The most aligned use of the vision is:", opts:[
      {t:"As a filter — accept work that moves toward the vision; decline or defer work that doesn't",c:true},
      {t:"As a marketing slogan only"},
      {t:"As a fixed feature list that cannot be deviated from"},
      {t:"As a guide for the Developers' technical choices"}
    ], exp:"An effective Product Vision provides direction that helps the Scrum Team make day-to-day trade-offs. Using it as a filter for accept/decline/defer decisions is its primary practical function. It is not a marketing slogan or feature list." },

    { type:"single", cat:"stakeholders", q:"A senior stakeholder wants to walk into the Developers' workspace mid-Sprint to direct new work. The PO's most appropriate response is:", opts:[
      {t:"Coach the stakeholder that requests go through the PO and into the Product Backlog; the team and Sprint Goal must be protected",c:true},
      {t:"Allow the stakeholder direct access — they outrank the PO"},
      {t:"Quietly redirect the team to do what the stakeholder asked"},
      {t:"Escalate to the Scrum Master to handle alone"}
    ], exp:"The Scrum Guide 2020 states no one tells the Developers to work from a different set of requirements; PO ordering and stakeholder access run through the PO. Coaching stakeholders on this is the PO's job, supported by the SM serving the organization." },

    { type:"single", cat:"stakeholders", q:"A stakeholder is skeptical of Scrum and the team's value. What is the most effective way the PO can build trust over time?", opts:[
      {t:"Show measurable value delivered (using EBM KVAs/KVMs) and invite the stakeholder into the empirical inspect-adapt cycle",c:true},
      {t:"Argue that Scrum is always correct"},
      {t:"Exclude the stakeholder from future events"},
      {t:"Escalate to the stakeholder's manager"}
    ], exp:"Trust is built with evidence. Showing real customer/business outcomes (via KVA improvements) and engaging the skeptic in the empirical process gives them agency and proof. Argument, exclusion, and escalation rarely move skeptics — empirical evidence does." },

    { type:"single", cat:"stakeholders", q:"A Product Owner is exploring whether to involve customers earlier in product decisions. The most aligned PO practice is:", opts:[
      {t:"Engage customers continuously in discovery and validation, treating them as partners in shaping the product",c:true},
      {t:"Survey customers once a year, then build for 12 months"},
      {t:"Avoid customer contact to keep the vision pure"},
      {t:"Let stakeholders speak for customers instead"}
    ], exp:"Recognized PO practice (and Scrum.org guidance) treats customers as continuous partners. Annual surveys are too coarse for empirical product development. Avoiding customer contact or relying solely on internal stakeholders disconnects the team from real signals." },

    { type:"single", cat:"forecasting", q:"Why do long-range product forecasts typically become less accurate the further into the future they extend?", opts:[
      {t:"Uncertainty compounds over time — the cone of uncertainty widens as more variables can change",c:true},
      {t:"Teams get lazier later in projects"},
      {t:"Velocity always decreases over time"},
      {t:"Stakeholders forget what they asked for"}
    ], exp:"The cone of uncertainty is a well-known concept: forecast accuracy decreases over time as more variables can change (market, team, scope, technical reality). Empirical forecasting addresses this by frequent inspection and adaptation, not by trying for higher upfront precision." },

    { type:"single", cat:"forecasting", q:"A team uses Throughput (count of completed items per Sprint) instead of Velocity (sum of story points). What is the main advantage from a forecasting view?", opts:[
      {t:"Throughput counts actual finished items, bypassing estimation noise from story points",c:true},
      {t:"Throughput is required by the Scrum Guide"},
      {t:"Throughput always produces higher numbers"},
      {t:"Throughput eliminates the need for forecasting"}
    ], exp:"Throughput is robust to estimation noise — it counts what was actually finished. Velocity multiplies subjective story points and can be gamed. Many modern teams forecast from throughput + Monte Carlo. Neither is mandated by Scrum." },

    { type:"single", cat:"forecasting", q:"What is the difference between Lead Time and Cycle Time in modern flow-based forecasting?", opts:[
      {t:"Lead Time measures from idea (or customer request) to delivery; Cycle Time measures from when work starts to when it finishes",c:true},
      {t:"They are identical terms"},
      {t:"Lead Time is in hours; Cycle Time is in days"},
      {t:"Lead Time is for releases; Cycle Time is for tests"}
    ], exp:"Lead Time typically measures from request/idea to delivery (customer-facing). Cycle Time measures from work-started to work-finished (team-facing). Both are common Time to Market KVMs in EBM and core flow metrics for forecasting." },

    { type:"single", cat:"forecasting", q:"What is the precise difference between the Sprint Goal and the Sprint Backlog selected items per the Scrum Guide 2020?", opts:[
      {t:"The Sprint Goal is the commitment; the selected Product Backlog items are a forecast that may be renegotiated as more is learned",c:true},
      {t:"They are the same thing"},
      {t:"The Sprint Goal is optional; selected items are mandatory"},
      {t:"The Sprint Goal is set by stakeholders; selected items by Developers"}
    ], exp:"The Scrum Guide 2020 is explicit: the Sprint Goal is the commitment for the Sprint Backlog. The selected items are a forecast. Scope may flex around a fixed goal — not the reverse. This distinction is a frequent exam test." },

    { type:"single", cat:"forecasting", q:"A stakeholder asks the PO 'will this feature ship by Q3?' Empirically-informed PO communication looks like:", opts:[
      {t:"'Based on recent throughput, we are 70% likely to ship by Q3 and 90% likely by end of Q4; we'll inspect each Sprint and update.'",c:true},
      {t:"'Yes, guaranteed.'"},
      {t:"'I cannot give any estimate.'"},
      {t:"'It depends on whether the Developers work harder.'"}
    ], exp:"Empirical forecasting produces probability ranges based on actual throughput. Honest PO communication uses these ranges, commits to inspect-adapt, and avoids single-point guarantees. Refusing to forecast at all is the opposite anti-pattern." },

    { type:"single", cat:"forecasting", q:"Why does the Scrum Guide 2020 cap Sprint length at one month?", opts:[
      {t:"Shorter cycles increase the frequency of inspection and adaptation, reducing risk and complexity",c:true},
      {t:"Longer Sprints are forbidden by labor law"},
      {t:"Shorter Sprints are easier to plan in detail"},
      {t:"Stakeholders are too busy for longer Sprints"}
    ], exp:"The Scrum Guide 2020 explains shorter Sprints generate more learning cycles and limit risk to a smaller window. When a Sprint's horizon is too long, the Sprint Goal may become invalid, complexity may rise, risk may increase." },

    { type:"single", cat:"forecasting", q:"Empirical process control (which Scrum is founded on) differs from predictive process control in that:", opts:[
      {t:"Empirical relies on inspecting actual evidence frequently and adapting; predictive relies on detailed upfront plans assumed to hold",c:true},
      {t:"Empirical means no plans at all"},
      {t:"Predictive is what Scrum recommends"},
      {t:"They are interchangeable terms"}
    ], exp:"Empirical process control (transparency, inspection, adaptation) navigates complexity by frequent observation and adjustment. Predictive process control assumes the future is knowable enough to plan in detail upfront — appropriate only for simple/complicated domains, not complex product work." },

    { type:"multi", cat:"forecasting", q:"A Product Owner is producing a release forecast. Which inputs are most useful per modern empirical forecasting? (select 2)", opts:[
      {t:"Historical throughput from recent Sprints",c:true},
      {t:"Statistical distribution of past cycle times",c:true},
      {t:"A senior leader's preferred date"},
      {t:"The longest possible single estimate from each Developer"}
    ], exp:"Empirical forecasting uses historical throughput and cycle time distribution to project future likelihoods (often via Monte Carlo). Imposed dates and worst-case individual estimates do not reflect real flow data and yield poor forecasts." },

    { type:"single", cat:"strategy", q:"How do the time horizons of a Product Vision and a Product Goal typically compare?", opts:[
      {t:"Vision is long-term (often years, sometimes never fully reached); Product Goal is medium-term (months, achievable and replaced when fulfilled or abandoned)",c:true},
      {t:"They are the same horizon"},
      {t:"Vision is short-term; Product Goal is long-term"},
      {t:"Both must be completed each Sprint"}
    ], exp:"Vision is aspirational and long-horizon (often multi-year). Product Goal is a measurable, achievable intermediate target — when fulfilled (or abandoned), the team picks a new one. Sprint Goal is the immediate near-term step." },

    { type:"single", cat:"strategy", q:"How does a hypothesis-driven roadmap differ from a traditional feature roadmap?", opts:[
      {t:"A hypothesis-driven roadmap communicates intended outcomes and bets with explicit uncertainty; a feature roadmap commits to specific features by date",c:true},
      {t:"They are identical"},
      {t:"A hypothesis-driven roadmap is shorter"},
      {t:"A feature roadmap is required by Scrum"}
    ], exp:"Hypothesis-driven roadmaps express intended outcomes and the bets being made with explicit uncertainty — supporting empirical adaptation. Feature roadmaps locked to specific dates contradict the empirical nature of complex product work." },

    { type:"single", cat:"strategy", q:"Per the EBM Guide, characteristics of a good Strategic Goal include:", opts:[
      {t:"Aspirational, focused on a desired customer or organizational outcome, measurable, and far-reaching enough to require empirical navigation",c:true},
      {t:"Concrete enough to deliver this Sprint"},
      {t:"Set in stone and never revised"},
      {t:"Measured only by feature count"}
    ], exp:"Per the EBM Guide, a Strategic Goal is something important the organization wants to achieve — usually focused on an outcome (improved happiness, safety, well-being). It is aspirational and far enough that the path requires empirical learning, but measurable enough to know if progress is being made." },

    { type:"single", cat:"strategy", q:"Evidence after several Sprints shows the current Intermediate Goal will not move the team meaningfully toward the Strategic Goal. The most aligned response is:", opts:[
      {t:"Adapt or replace the Intermediate Goal based on evidence; reassess whether the Strategic Goal still holds",c:true},
      {t:"Persist with the same Intermediate Goal regardless"},
      {t:"Immediately abandon both Strategic and Intermediate Goals"},
      {t:"Wait until next quarter to consider any changes"}
    ], exp:"EBM is empirical: when evidence disconfirms a goal, adapt or replace based on evidence. Intermediate Goals turn over more frequently than Strategic Goals. Persisting blindly is anti-empirical; abandoning everything is overreaction." },

    { type:"single", cat:"strategy", q:"An organization has multiple products contributing to one Strategic Goal. What does this imply for each product's Product Goal?", opts:[
      {t:"Each product has its own Product Goal that contributes to the shared Strategic Goal — alignment without uniformity",c:true},
      {t:"All products must share one identical Product Goal"},
      {t:"Each product sets its Strategic Goal independently"},
      {t:"Product Goals are unnecessary if there is a Strategic Goal"}
    ], exp:"Multiple products can roll up to a single organizational Strategic Goal while each has its own Product Goal that addresses a specific slice of the journey. This is portfolio-level alignment — different products, complementary contributions, shared destination." },

    { type:"single", cat:"strategy", q:"A PO is asked how the team's Product Goal links to the company's mission statement. The most aligned PO answer is:", opts:[
      {t:"The Product Goal is a measurable intermediate step that contributes to the company's longer-term mission and strategy",c:true},
      {t:"The two are unrelated"},
      {t:"The Product Goal must restate the mission verbatim"},
      {t:"The mission is owned by the Scrum Master"}
    ], exp:"Per Scrum.org's 'Managing Products with Agility' competency, the PO bridges company mission/strategy and product execution. The Product Goal is a concrete intermediate step that should align with — but is more specific and measurable than — the broader mission." }
  ]
};
})();
