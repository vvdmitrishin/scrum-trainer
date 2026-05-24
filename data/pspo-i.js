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

    { type:"tf", cat:"framework", q:"The Sprint Goal is the single objective of the Sprint and is the commitment for the Sprint Backlog.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 states the Sprint Goal is the single objective for the Sprint and is the commitment for the Sprint Backlog. Each artifact contains a commitment: Product Backlog → Product Goal; Sprint Backlog → Sprint Goal; Increment → Definition of Done." },

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

    { type:"tf", cat:"backlog", q:"The Product Backlog is the single source of work undertaken by the Scrum Team.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 explicitly states the Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team. Work that does not appear in the Product Backlog should not be undertaken by the Scrum Team." },

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

    { type:"tf", cat:"backlog", q:"Only the Product Owner can add, remove, or reorder items in the Product Backlog.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 states the Product Owner is accountable for the Product Backlog, including its content, availability, and ordering. While anyone may propose changes, only the Product Owner has the authority to decide what enters, what is removed, and in what order. The whole organization must respect those decisions." },

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

    { type:"tf", cat:"framework", q:"When multiple Scrum Teams work together on the same product, each team can maintain its own independent Definition of Done with no overlap with the others.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 states that if there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done. Individual teams may add stricter criteria for their own context, but the shared product Increment must meet a shared minimum bar." },

    { type:"single", cat:"framework", q:"At the end of a Sprint, several Product Backlog items selected for the Sprint do not meet the Definition of Done. What happens to them?", opts:[
      {t:"They are not part of the Increment and return to the Product Backlog; the Product Owner orders them along with other work.",c:true},
      {t:"They automatically roll into the next Sprint."},
      {t:"They are still part of the Increment as partial work, with reduced credit."},
      {t:"They are released as 'beta' versions to gather user feedback."}
    ], exp:"The Scrum Guide 2020 states that work that does not meet the Definition of Done cannot be released, presented at Sprint Review, or counted toward the Increment. Such items are returned to the Product Backlog and the Product Owner decides their next ordering based on remaining value." },

    { type:"tf", cat:"framework", q:"The Increment may be delivered to stakeholders at any time during the Sprint, not only at the Sprint Review.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"The Scrum Guide 2020 explicitly states the Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value. Multiple Increments may be created within a Sprint, and the Product Owner decides when to release." },

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

    { type:"tf", cat:"backlog", q:"Defects in the product belong in a separate bug-tracking system outside the Product Backlog so they don't compete with feature work for the Product Owner's attention.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 states the Product Backlog is the single source of work undertaken by the Scrum Team. Defects, like any other work that affects product value, belong in the Product Backlog so the Product Owner can order them against other items by value, risk, and other factors — and so transparency is preserved." },

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

    { type:"tf", cat:"forecasting", q:"Story points should be directly converted to hours so stakeholders can be given a precise time estimate.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. As Mike Cohn explains, story points are relative ratios reflecting effort, complexity, and risk — not durations. Converting them to hours defeats their purpose and reintroduces single-point time estimation, which is poor at forecasting in complex work. Velocity (points per Sprint) lets the team forecast capacity empirically without per-point hour conversion." },

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

    { type:"single", cat:"strategy", q:"Roman Pichler describes a hierarchy of product-direction artifacts. Which order is correct, from longest-term to most-tactical?", opts:[
      {t:"Vision → Strategy → Roadmap → Product Backlog.",c:true},
      {t:"Product Backlog → Roadmap → Strategy → Vision."},
      {t:"Roadmap → Vision → Strategy → Product Backlog."},
      {t:"Vision → Roadmap → Strategy → Product Backlog."}
    ], exp:"The widely-used Pichler hierarchy: the Vision describes the long-term future state, the Strategy explains how to reach it (problem, market, differentiators, business goals), the Roadmap is a medium-term outcome-based plan, and the Product Backlog is the emergent list of items that will deliver the next steps. Each layer becomes more concrete and shorter-horizon." },

    { type:"single", cat:"strategy", q:"A 'North Star Metric' is best described as:", opts:[
      {t:"A single leading indicator of sustainable customer value that ties product work to long-term business outcomes.",c:true},
      {t:"A lagging revenue indicator reviewed only at year-end."},
      {t:"A vanity metric used in marketing campaigns."},
      {t:"The team's velocity normalized across Sprints."}
    ], exp:"The North Star Metric (popularized by Sean Ellis and Amplitude) is a single leading indicator chosen to represent the value the product delivers to customers, intentionally tied to long-term business outcomes. It cannot usually be moved directly, forcing teams to build real value rather than game a number. Velocity and vanity metrics are explicitly contrasted with this concept." },

    { type:"single", cat:"strategy", q:"Per Scrum.org's 'Managing Products with Agility' competency, one of the Product Owner's core responsibilities under 'Business Strategy' is best described as:", opts:[
      {t:"Bridging the organization's mission and strategy to product execution, aligning product decisions with strategy and adapting based on Increment feedback.",c:true},
      {t:"Setting the company's overall business strategy independently."},
      {t:"Limiting the team's work to whatever the company strategy explicitly mentions."},
      {t:"Avoiding business strategy entirely since that is leadership's job."}
    ], exp:"Per the Scrum.org 'Managing Products with Agility' competency, the PO bridges company mission/strategy and product execution. They do not set the company's strategy alone, and they do not detach product work from strategy. They translate strategy into product decisions and adapt those decisions empirically based on Increment outcomes." },

    { type:"tf", cat:"strategy", q:"When multiple Scrum Teams work on the same product, each team should set its own Product Goal aligned with its slice of the work.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"False. The Scrum Guide 2020 is explicit: multiple Scrum Teams working together on the same product share the same Product Goal, Product Backlog, and Product Owner. One product → one Product Goal, regardless of how many teams contribute." }
  ]
};
})();
