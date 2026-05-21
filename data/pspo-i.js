(function(){
window.BANKS = window.BANKS || {};
window.BANKS["pspo-i"] = {
  id: "pspo-i",
  short: "PSPO I",
  name: "Professional Scrum Product Owner I",
  url: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
  source: "Scrum Guide 2020 + Evidence-Based Management Guide",
  pass: 85,
  examCount: 80,
  minutes: 60,
  status: "starter",
  cats: { framework:"Scrum & PO Accountability", value:"Product Value & EBM", backlog:"Product Backlog & Goal", stakeholders:"Stakeholders & Vision" },
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
    ], exp:"The Scrum Guide 2020 states that the moment a Product Backlog item meets the Definition of Done, an Increment is born, and multiple Increments may be created within a Sprint. Work that does not meet the Definition of Done cannot be released or even presented at the Sprint Review; the Definition of Done is the commitment for the Increment that creates transparency about quality." }
  ]
};
})();
