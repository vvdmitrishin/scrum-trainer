(function(){
window.BANKS = window.BANKS || {};
window.BANKS["psf"] = {
  id: "psf",
  short: "PSF Skills",
  name: "Professional Scrum Facilitation Skills",
  url: "https://www.scrum.org/assessments/professional-scrum-facilitation-skills-certification",
  source: "Scrum.org PSF Focus Areas + Liberating Structures + IAF Core Competencies + Kaner Diamond of Participation + Thomas-Kilmann + Sociocracy consent",
  pass: 85,
  examCount: 20,
  minutes: 30,
  status: "complete",
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
    ], exp:"A shared purpose and desired outcome focus the group's energy and provide criteria for recognizing when the session has achieved its goal." },

    { type:"single", cat:"principles", q:"A Scrum Team has matured and now runs most of their own events smoothly. The facilitator notices they keep looking at her for approval before each step. What is the most appropriate response?", opts:[
      {t:"Step back deliberately — over-facilitation creates dependency and undermines self-management; coach the team to own the process.",c:true},
      {t:"Continue facilitating actively so the team stays sharp."},
      {t:"Replace the facilitator with another one to refresh the dynamic."},
      {t:"Insist the team continue depending on facilitator approval to maintain quality."}
    ], exp:"Mature teams need less facilitation, not more. Continuing to facilitate when not needed creates dependency, slides into supervision, and undermines self-management. Recognizing when NOT to facilitate is a core PSF principle." },

    { type:"single", cat:"principles", q:"Before facilitating a workshop, a facilitator should explicitly define which of the following?", opts:[
      {t:"Purpose, desired outcome, agenda, roles/rules, and time — the basic facilitation design.",c:true},
      {t:"Only the agenda; everything else emerges in the room."},
      {t:"The exact decisions the group must reach by the end."},
      {t:"The personal opinions the facilitator will share to anchor the discussion."}
    ], exp:"Every facilitated session needs explicit Purpose, Outcome, Agenda, Roles/Rules, and Time. This is the foundation of any facilitation design. The facilitator does not dictate decisions or share personal opinions — they create the container; the group fills it." },

    { type:"single", cat:"principles", q:"Silence has fallen in the room after a tough question. What is the most appropriate facilitator response?", opts:[
      {t:"Hold the silence — it gives quieter voices space to think and prepare; resist the urge to fill it.",c:true},
      {t:"Quickly fill the silence with the facilitator's own ideas."},
      {t:"Call on the most outspoken person to break the tension."},
      {t:"End the session and try again later."}
    ], exp:"Silence is a deliberate facilitation tool. It signals respect for thinking time, invites quieter voices to prepare, and resists the urge to rescue the group from discomfort. 'Holding space' means tolerating ambiguity without steering." },

    { type:"single", cat:"principles", q:"During a session, one senior person consistently dominates airtime. What is the best structural response by the facilitator?", opts:[
      {t:"Use a structure that distributes participation — round-robin, silent writing first, paired discussions before group share.",c:true},
      {t:"Privately confront the dominant person after the session."},
      {t:"Ask the senior person to leave the room."},
      {t:"Let the situation continue — senior voices are usually the most informed."}
    ], exp:"Voice equity is a core facilitation principle. The best response is structural (silent writing, paired discussions, round-robin), not personal confrontation. Distributing participation through structure preserves dignity while balancing airtime — sometimes called multipartiality (consciously amplifying under-heard perspectives)." },

    { type:"single", cat:"principles", q:"Why is the distinction between 'facilitator' and 'leader/coach' important per Scrum.org?", opts:[
      {t:"A facilitator owns the process and stays content-neutral; switching stances without naming it confuses the team and undermines trust.",c:true},
      {t:"There is no real distinction — they are interchangeable terms."},
      {t:"A facilitator is always senior to a coach."},
      {t:"Coaches advocate for solutions; facilitators do not work with groups."}
    ], exp:"Facilitator and Coach are both content-neutral process roles. Teacher and Mentor are content-rich (share knowledge/experience). A Scrum Master shifts among these stances and should make the shift explicit to avoid confusion. Stance ambiguity is a recognized anti-pattern." },

    { type:"single", cat:"events", q:"The Scrum Master is preparing to facilitate a Daily Scrum. What is the most appropriate stance per the Scrum Guide 2020?", opts:[
      {t:"The Daily Scrum is a 15-minute event for the Developers; the SM ensures it happens and stays within the timebox but does not run it.",c:true},
      {t:"The SM leads the Daily Scrum and asks each Developer three questions."},
      {t:"The SM presents a status report to the Developers at the Daily Scrum."},
      {t:"The SM cancels the Daily Scrum if Developers are too busy."}
    ], exp:"The Scrum Guide 2020 explicitly states the Daily Scrum is for the Developers. The SM ensures it happens but does not facilitate it actively. Developers may structure it as they wish — the three-question format was removed in 2020." },

    { type:"single", cat:"events", q:"At Sprint Review, stakeholders sit passively while the team presents slides. What is the best facilitator move for the next Sprint Review?", opts:[
      {t:"Redesign as a working session — live use of the Increment, structured questions, written feedback techniques to draw out stakeholder input on the Product Backlog.",c:true},
      {t:"Add a more polished slide deck to keep stakeholders engaged."},
      {t:"Switch to email summaries instead of in-person Reviews."},
      {t:"Restrict attendance to only senior stakeholders for tighter discussion."}
    ], exp:"The Scrum Guide 2020 describes Sprint Review as a working session where the team and stakeholders inspect the outcome and adapt the Product Backlog. Passive presentation is an anti-pattern. The facilitator designs interactive engagement — not better slides." },

    { type:"single", cat:"events", q:"A team has used the same Retrospective format for six months and engagement is dropping. The facilitator should:", opts:[
      {t:"Vary the format — rotate through 1-2-4-All, ORID, Mad Tea, Sailboat, Five Whys, or Liberating Structures based on what the team needs to inspect.",c:true},
      {t:"Keep the same format — consistency matters more than energy."},
      {t:"Skip the Retrospective until energy returns."},
      {t:"Make the Retrospective optional."}
    ], exp:"Retrospectives are never skipped — they are essential to empiricism. Rotating formats tailored to what the team needs to inspect keeps engagement and surfaces different insights. Liberating Structures, ORID, and many other techniques exist for this purpose." },

    { type:"single", cat:"techniques", q:"Which Liberating Structure is best for ensuring every voice is heard in a large group before whole-group discussion?", opts:[
      {t:"1-2-4-All — silent reflection → pairs → quads → group share.",c:true},
      {t:"TRIZ — list ways to guarantee the worst result."},
      {t:"World Café — rotating table conversations."},
      {t:"Fishbowl — inner circle discusses, outer observes."}
    ], exp:"1-2-4-All is the canonical Liberating Structure for ensuring every voice contributes. The progression from silent → pairs → quads → whole group amplifies all voices while preventing dominance. TRIZ stops counterproductive behavior; World Café and Fishbowl serve different purposes." },

    { type:"single", cat:"techniques", q:"A team has lots of energy spent on things they know they shouldn't do. Which technique helps them surface and stop counterproductive behaviors?", opts:[
      {t:"TRIZ — list everything they could do to guarantee the worst result, then commit to stopping those things.",c:true},
      {t:"Dot voting on which good ideas to pursue."},
      {t:"World Café for open dialogue."},
      {t:"Brainwriting for silent idea generation."}
    ], exp:"TRIZ (a Liberating Structure) flips the question — asks what would guarantee failure — to surface 'sacred cow' behaviors the team can stop doing. Acknowledging what to stop often unlocks more impact than adding new initiatives." },

    { type:"single", cat:"techniques", q:"After a difficult incident, the team needs to make sense of what happened. Which structured conversation format walks them through facts → feelings → meaning → actions?", opts:[
      {t:"ORID — Objective, Reflective, Interpretive, Decisional.",c:true},
      {t:"TRIZ — anti-patterns first, then stop."},
      {t:"25/10 — bold ideas, scored quickly."},
      {t:"Roman voting — thumbs up/down."}
    ], exp:"ORID (Objective/Reflective/Interpretive/Decisional) is a focused conversation method that walks a group from facts to feelings to meaning to action. It is widely used for retrospectives and post-mortems where the group needs to process and then act." },

    { type:"single", cat:"techniques", q:"A group has 40 potential action items and 10 minutes to narrow them down. Which technique is most efficient?", opts:[
      {t:"Dot voting — each person spends a fixed number of dots across options.",c:true},
      {t:"Consensus — discuss each item until everyone agrees on which to keep."},
      {t:"Have the facilitator pick the top 5 based on their judgment."},
      {t:"Ignore the list and start with a blank slate."}
    ], exp:"Dot voting is the fastest way to surface group priority across many options with low conflict. Consensus would be far too slow for 40 items in 10 minutes. The facilitator deciding violates neutrality." },

    { type:"single", cat:"techniques", q:"A group of 50+ needs to make sense of a complex topic through multiple rounds of table conversations. Which technique fits?", opts:[
      {t:"World Café — rotating table conversations on linked questions, host stays at each table.",c:true},
      {t:"1-2-4-All — silent then pairs then quads."},
      {t:"Roman voting — thumbs up/down."},
      {t:"ORID — fact/feeling/meaning/action."}
    ], exp:"World Café is the canonical large-group sense-making technique. Tables of 4-5 discuss linked questions over multiple rounds, with one host staying to share threads — patterns emerge across the room. Other techniques fit different sizes or purposes." },

    { type:"single", cat:"techniques", q:"A team wants individual contributions before any verbal discussion to prevent groupthink and amplify quieter voices. Which technique?", opts:[
      {t:"Silent writing / brainwriting — everyone writes their ideas individually before sharing.",c:true},
      {t:"Open brainstorming — everyone shouts ideas as they come."},
      {t:"Fishbowl — inner circle of senior people discusses."},
      {t:"Autocratic decision — one person decides."}
    ], exp:"Silent writing or brainwriting prevents anchoring on the loudest voice and amplifies introverts and those with less positional power. Open brainstorming biases toward dominant voices; Fishbowl works for modeling conversation, not for inclusive idea generation." },

    { type:"single", cat:"techniques", q:"A facilitator needs to model a productive conversation pattern for the team. Which technique places a small group in dialogue while the rest observe?", opts:[
      {t:"Fishbowl — inner circle discusses, outer observes; chairs may rotate.",c:true},
      {t:"Dot voting — silent prioritization."},
      {t:"TRIZ — reverse the question."},
      {t:"Brainwriting — silent individual writing."}
    ], exp:"Fishbowl is a focused dialogue at scale: an inner circle has the conversation while an outer circle observes. It is used for modeling productive conversation, cross-team dialogue, or focused discussion without losing larger-group attention." },

    { type:"single", cat:"conflict", q:"A facilitator needs to know that a decision has enough support to act without requiring full enthusiastic agreement. Which decision method best fits?", opts:[
      {t:"Consent — no paramount objection; 'good enough for now, safe enough to try.'",c:true},
      {t:"Consensus — everyone actively agrees and is enthusiastic."},
      {t:"Autocratic — one person decides without group input."},
      {t:"Coin flip — random outcome."}
    ], exp:"Consent (sociocracy) is faster than consensus and preserves momentum. The bar is 'no paramount objection' — can you live with it? — rather than enthusiastic agreement. Most team decisions can use consent; consensus is reserved for high-stakes irreversible decisions." },

    { type:"single", cat:"conflict", q:"During a heated disagreement, two team members express increasingly personal frustration. From the Thomas-Kilmann perspective, the facilitator should:", opts:[
      {t:"Surface the dynamic neutrally, hold space, and help the team move from a Competing mode toward Collaborating without taking sides.",c:true},
      {t:"Tell them to stop arguing and follow the SM's preferred answer."},
      {t:"Cancel the session and reschedule when emotions have cooled."},
      {t:"Pick the more senior person's side to end the discussion."}
    ], exp:"Thomas-Kilmann describes 5 conflict modes (Competing/Avoiding/Accommodating/Compromising/Collaborating). The facilitator helps the team navigate among modes — they do not solve the conflict by picking a side. Surfacing and naming dynamics neutrally is a core PSF skill." },

    { type:"single", cat:"conflict", q:"A team is debating predictability vs adaptability and seems unable to choose between them. The facilitator recognizes this as:", opts:[
      {t:"A polarity to be managed (ongoing tension with two valid sides), not a problem to be solved.",c:true},
      {t:"A simple problem with a single right answer the facilitator should provide."},
      {t:"Evidence the team needs to be reorganized."},
      {t:"A failure of the team's commitment that should be punished."}
    ], exp:"Some tensions are polarities (Barry Johnson) — ongoing dilemmas with two valid sides — not problems with single answers. Trying to 'solve' a polarity oscillates the team between two downsides. Facilitating a polarity means naming it and agreeing on guardrails for both sides." },

    { type:"single", cat:"conflict", q:"A team wants a quick gradient sense of support across the group — not just yes/no but how strongly people support an idea. Which technique fits?", opts:[
      {t:"Fist of Five — show 0 to 5 fingers indicating support level; anyone below 3 sparks discussion before re-vote.",c:true},
      {t:"Roman voting — binary thumbs up or down."},
      {t:"Autocratic decision — one person decides."},
      {t:"Coin flip — random outcome."}
    ], exp:"Fist of Five surfaces the strength of agreement, not just majority. Anyone showing 0-2 indicates concerns to surface before re-voting. Roman voting (thumbs up/down/sideways) is binary and faster but less nuanced." }
  ]
};
})();
