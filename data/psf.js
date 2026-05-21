(function(){
window.BANKS = window.BANKS || {};
window.BANKS["psf"] = {
  id: "psf",
  short: "PSF Skills",
  name: "Professional Scrum Facilitation Skills",
  url: "https://www.scrum.org/assessments/professional-scrum-facilitation-skills-certification",
  source: "Scrum.org Professional Scrum Facilitation Skills learning objectives; Scrum Guide 2020",
  pass: 85,
  examCount: 20,
  minutes: 30,
  status: "starter",
  cats: { principles:"Facilitation Principles", events:"Facilitating Events", techniques:"Techniques & Tools", conflict:"Conflict & Decisions" },
  questions: [
    { type:"single", cat:"principles", q:"During a heated design discussion, a developer asks the facilitating Scrum Master, \"Which option do you think is technically best?\" What is the most appropriate response that preserves the facilitator stance?", opts:[
      {t:"Share their own preferred option so the team can move faster"},
      {t:"Decline to take a side and instead ask the group to weigh the trade-offs of each option",c:true},
      {t:"Defer the entire decision to the Product Owner"},
      {t:"End the discussion and put it to an immediate majority vote"}
    ], exp:"A core facilitation principle is neutrality on content: the facilitator guides the process and helps the group decide, rather than advocating their own answer." },

    { type:"single", cat:"principles", q:"What does it mean for a facilitator to be \"neutral\" in a session?", opts:[
      {t:"They remain silent for the entire session"},
      {t:"They are neutral about the content and outcome, while actively managing the process",c:true},
      {t:"They have no opinions on any subject"},
      {t:"They make the final decision only when the group cannot agree"}
    ], exp:"Facilitator neutrality means staying impartial about what the group decides while still actively shaping how the conversation runs." },

    { type:"single", cat:"techniques", q:"In the Diamond of Participatory Decision-Making, what is the primary purpose of the divergent thinking phase?", opts:[
      {t:"To narrow many options down to a single decision"},
      {t:"To generate and surface a wide range of ideas and perspectives without judgment",c:true},
      {t:"To assign action items to individuals"},
      {t:"To validate that the team followed the agenda"}
    ], exp:"Divergent thinking opens up the discussion to gather diverse ideas freely before any evaluation; convergence comes later." },

    { type:"single", cat:"conflict", q:"A retrospective grows tense and confused as people struggle to reconcile very different views. Recognizing this as the \"groan zone,\" how should a skilled facilitator respond?", opts:[
      {t:"Force an immediate vote to end the discomfort"},
      {t:"Acknowledge the discomfort as a normal part of integrating perspectives and help the group work through it",c:true},
      {t:"Cancel the retrospective and reschedule"},
      {t:"Decide the outcome themselves to save time"}
    ], exp:"The groan zone sits between divergence and convergence; good facilitation normalizes the struggle and helps the group build shared understanding rather than escaping it." },

    { type:"single", cat:"events", q:"Who is accountable for ensuring that the Scrum events take place and are positive, productive, and kept within the timebox?", opts:[
      {t:"The Product Owner"},
      {t:"The Scrum Master",c:true},
      {t:"The most senior Developer"},
      {t:"An external professional facilitator"}
    ], exp:"Per the Scrum Guide 2020, the Scrum Master ensures all events take place and are positive, productive, and kept within the timebox, and may serve as a facilitator." },

    { type:"single", cat:"events", q:"A Sprint Retrospective has produced a long list of issues but no agreement on what to act on. Which facilitation move best helps the team converge?", opts:[
      {t:"Let everyone keep adding more issues until the timebox ends"},
      {t:"Use dot voting or another prioritization technique to focus on a few high-value improvements",c:true},
      {t:"Have the Scrum Master pick the improvements for the team"},
      {t:"Defer all improvements to the next retrospective"}
    ], exp:"Convergent techniques such as dot voting help a group narrow many options into a focused, actionable set the team owns." },

    { type:"multi", cat:"principles", q:"Which of the following are appropriate facilitation behaviors that support healthy collaboration in a Scrum Team? (Choose all that apply.)", opts:[
      {t:"Actively drawing out quieter participants so diverse views are heard",c:true},
      {t:"Making the decision for the group whenever discussion takes too long"},
      {t:"Helping the group surface and consider differing perspectives",c:true},
      {t:"Steering the group toward the facilitator's preferred conclusion"}
    ], exp:"Good facilitation encourages participation and surfaces diverse perspectives; it does not impose the facilitator's own outcome on the group." },

    { type:"multi", cat:"techniques", q:"Which of the following are valid reasons to establish a clear decision rule (e.g., consent, majority, consensus) before a group decision? (Choose all that apply.)", opts:[
      {t:"It sets a shared expectation for how the decision will be reached",c:true},
      {t:"It helps the group know when the discussion is actually finished",c:true},
      {t:"It lets the facilitator override the group's choice"},
      {t:"It guarantees that everyone will be equally happy with every outcome"}
    ], exp:"Agreeing the decision rule up front clarifies the process and signals closure; it neither hands control to the facilitator nor guarantees universal satisfaction." },

    { type:"multi", cat:"events", q:"Which Scrum events can benefit from deliberate facilitation? (Choose all that apply.)", opts:[
      {t:"Sprint Planning",c:true},
      {t:"Sprint Retrospective",c:true},
      {t:"Daily Scrum",c:true},
      {t:"Sprint Review",c:true}
    ], exp:"Facilitation skills and techniques can improve all of the Scrum events, helping each one reach its purpose effectively." },

    { type:"tf", cat:"principles", q:"A facilitator should advocate for the solution they personally believe is best so the team reaches a decision faster.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"Advocating a personal solution breaks neutrality; the facilitator guides the process and lets the group own the content and outcome." },

    { type:"tf", cat:"conflict", q:"Conflict in a facilitated session is always destructive and should be shut down as quickly as possible.", opts:[
      {t:"True"},
      {t:"False",c:true}
    ], exp:"Constructive conflict can surface diverse perspectives and improve decisions; the facilitator channels it productively rather than suppressing it." },

    { type:"tf", cat:"techniques", q:"Convergent thinking is the phase where a group narrows down options and works toward a decision.", opts:[
      {t:"True",c:true},
      {t:"False"}
    ], exp:"Convergent thinking consolidates the ideas generated during divergence and moves the group toward a decision or solution." },

    { type:"single", cat:"conflict", q:"Two developers repeatedly interrupt each other and the rest of the team has gone quiet. What is the best first facilitation intervention?", opts:[
      {t:"Tell the two developers they are wrong and move on"},
      {t:"Reaffirm working agreements and use a structure (such as round-robin) so everyone gets airtime",c:true},
      {t:"Escalate the conflict to their line manager immediately"},
      {t:"Let the two strongest voices settle it between themselves"}
    ], exp:"Reinforcing group agreements and applying a turn-taking structure restores balanced participation without taking sides on the content." },

    { type:"single", cat:"techniques", q:"Why would a facilitator open a session by collaboratively setting a clear purpose and desired outcome with the group?", opts:[
      {t:"To fill time before the real work begins"},
      {t:"To give the conversation a shared focus and a way to know when it is complete",c:true},
      {t:"To remove the need for any decision rule later"},
      {t:"To let the facilitator decide the outcome in advance"}
    ], exp:"A shared purpose and desired outcome focus the group's energy and provide criteria for recognizing when the session has achieved its goal." }
  ]
};
})();
