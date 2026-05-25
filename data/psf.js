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
    ], exp:"Fist of Five surfaces the strength of agreement, not just majority. Anyone showing 0-2 indicates concerns to surface before re-voting. Roman voting (thumbs up/down/sideways) is binary and faster but less nuanced." },

    /* ---------------- FACILITATION PRINCIPLES — extended ---------------- */
    { type:"single", cat:"principles", q:"Process vs content separation in facilitation means:",
      opts:[{t:"The facilitator owns the process (how the conversation flows) while the group owns the content (the decisions and ideas)",c:true},{t:"The facilitator owns both"},{t:"The group owns both"},{t:"There is no distinction"}],
      exp:"A core facilitation principle. The facilitator designs and shepherds the process — agenda, structure, pacing, participation patterns — while staying out of the content. This preserves neutrality and group ownership of outcomes." },
    { type:"single", cat:"principles", q:"What does 'holding space' mean as a facilitation skill?",
      opts:[{t:"Creating the conditions where participants can be present, contribute fully, and process difficult content — psychologically and structurally",c:true},{t:"Reserving a physical room"},{t:"Standing silently for the whole session"},{t:"Forcing silence"}],
      exp:"Holding space includes managing the room's emotional tone, allowing silence when needed, naming difficult dynamics, and protecting against derailment. It's an active, attentive practice — not passive presence." },
    { type:"single", cat:"principles", q:"Why does a facilitator typically establish ground rules or working agreements at the start of a session?",
      opts:[{t:"To create explicit shared expectations about behavior so the group can self-manage interactions and the facilitator can hold the agreed standard",c:true},{t:"To restrict creative thinking"},{t:"To slow the meeting down"},{t:"As a legal requirement"}],
      exp:"Working agreements give the group a self-management tool. When someone violates an agreement, the group (or facilitator) can refer to the shared norm rather than calling out the individual. They also clarify what 'good' looks like." },
    { type:"single", cat:"principles", q:"A facilitator notices they are getting emotionally activated during a difficult moment. The most aligned response is:",
      opts:[{t:"Self-management — notice the activation, breathe, return to neutral; if needed, name the dynamic and continue facilitating",c:true},{t:"Match the group's emotion"},{t:"Stop the session immediately"},{t:"Side with the loudest voice"}],
      exp:"Facilitator self-management is foundational. Activated facilitators lose neutrality and pacing. Practices: pause, breathe, observe; if intense, name what's happening and re-anchor in the agreed process. Co-facilitation helps." },
    { type:"single", cat:"principles", q:"Before facilitating a session, a facilitator gathers context about participants, stakes, and history. Why?",
      opts:[{t:"To design appropriate structure, anticipate dynamics, and adapt techniques — generic design rarely fits real groups",c:true},{t:"To gossip about participants"},{t:"To pre-decide outcomes"},{t:"To shorten the meeting"}],
      exp:"Pre-session context-gathering helps design fit-for-purpose structure. Knowing about prior tensions, decision authority, time pressure, and individual styles enables choices that won't blow up on contact with reality." },
    { type:"single", cat:"principles", q:"A team asks the facilitator 'just tell us your answer.' The most aligned response is:",
      opts:[{t:"Decline gracefully and offer to help the team find their own answer through the process — facilitator content advocacy undermines neutrality and group ownership",c:true},{t:"Give the answer to be helpful"},{t:"Argue the team is unable to decide"},{t:"Refuse to engage further"}],
      exp:"Giving content answers compromises the facilitator role. The aligned move: decline (neutrally), redirect to process. If the facilitator has expertise needed, they can name the dual-role conflict and explicitly switch hats with the group's consent." },

    /* ---------------- FACILITATING SCRUM EVENTS — extended ---------------- */
    { type:"single", cat:"events", q:"For Sprint Planning facilitation, a useful structure is to:",
      opts:[{t:"Walk the team through topics 1, 2, 3 from the Scrum Guide (Why, What, How) with techniques that build shared understanding at each step",c:true},{t:"Skip the Sprint Goal"},{t:"Have the PO present alone"},{t:"Skip the planning of how the work gets done"}],
      exp:"The Scrum Guide 2020 defines Sprint Planning's three topics. Facilitators design the event so each topic gets dedicated structure: Why → Sprint Goal crafting; What → selection technique; How → planning the work. Each may need different techniques." },
    { type:"single", cat:"events", q:"A distributed Scrum Team holds events over video. The most aligned facilitation adaptation is:",
      opts:[{t:"Use techniques designed for remote (digital whiteboards, async prework, structured turn-taking, breakout rooms) — not co-located techniques over webcams",c:true},{t:"Use the exact same in-person techniques"},{t:"Skip events for remote teams"},{t:"Talk longer to fill the time"}],
      exp:"Remote facilitation requires deliberate redesign. Co-located techniques (sticky notes, gallery walks) don't translate well over webcams. Digital tools (Miro, Mural), structured turn-taking, async prework, and breakouts adapt to remote context." },
    { type:"single", cat:"events", q:"A Retrospective format gets stale after several Sprints. The most aligned response is:",
      opts:[{t:"Vary formats based on what the team needs to inspect — different formats surface different signals (relational, technical, system, emotional)",c:true},{t:"Cancel the Retrospective"},{t:"Force the same format until results improve"},{t:"Let stakeholders choose the format"}],
      exp:"Format variety matches the inspection focus. Examples: Mad/Sad/Glad (emotions), 4Ls (Liked/Learned/Lacked/Longed-For), Sailboat (forces), Timeline (event-based), 5 Whys (causes). The facilitator picks based on what the team needs to see." },
    { type:"single", cat:"events", q:"At the Daily Scrum, the team starts using it as a status meeting for the SM. The most aligned facilitation move is:",
      opts:[{t:"Redirect the team to inspect progress toward the Sprint Goal and re-plan together — Daily Scrum is by/for the Developers, not a status report",c:true},{t:"Let it continue as status"},{t:"Add a Scrum Master report"},{t:"Cancel the Daily Scrum"}],
      exp:"Daily Scrum is for Developers to inspect-adapt their plan toward the Sprint Goal. Drifting into 'status to the SM' is an anti-pattern. The facilitator/SM coaches the team to re-anchor in Sprint Goal and forecast." },
    { type:"single", cat:"events", q:"At Sprint Review, the PO wants to spend most of the time presenting slides. The most aligned facilitation move is:",
      opts:[{t:"Coach toward a working session — Increment inspection, stakeholder interaction, Product Backlog adaptation — rather than one-way presentation",c:true},{t:"Let the PO present slides for the full duration"},{t:"Remove the PO from the event"},{t:"Cancel Sprint Review"}],
      exp:"The Scrum Guide 2020 frames Sprint Review as a working session. Slide-heavy formats reduce interaction and feedback. Facilitators design the Review to invite stakeholder engagement and collaborative backlog adaptation." },
    { type:"single", cat:"events", q:"Refinement is often unfacilitated and drifts. A facilitation pattern that helps is:",
      opts:[{t:"Define purpose, agenda, and exit criteria each session; use focused techniques (item walkthrough, splitting workshop, estimation poker)",c:true},{t:"Add more items to refine"},{t:"Make refinement longer"},{t:"Remove the PO from refinement"}],
      exp:"Refinement isn't a formal Scrum event but benefits from facilitation discipline. Clear purpose, agenda, and exit criteria prevent drift. Techniques (splitting, sizing, clarifying) match the item state. Time-boxing is helpful." },
    { type:"single", cat:"events", q:"Multiple Scrum Teams hold a joint Sprint Review for one product. The facilitator's most aligned design is:",
      opts:[{t:"Structure so each team's Increment is inspectable, then collaborative backlog adaptation across teams — avoid round-robin demos that exhaust stakeholders",c:true},{t:"Have each team present serially for 30 minutes"},{t:"Skip the Review for joint Sprints"},{t:"Let stakeholders run the Review"}],
      exp:"Joint Reviews need structure beyond simple stacking. Techniques: market-of-ideas, gallery walks, breakouts per stakeholder interest, single integrated Increment demo. The aim: inspection + adaptation, not endurance." },

    /* ---------------- TECHNIQUES & TOOLS — extended ---------------- */
    { type:"single", cat:"techniques", q:"ORID (Objective, Reflective, Interpretive, Decisional) is a structured conversation technique that:",
      opts:[{t:"Moves a group from facts → feelings → meaning → decision, ensuring each layer is processed before deciding",c:true},{t:"Skips to a decision quickly"},{t:"Bypasses emotions"},{t:"Replaces brainstorming"}],
      exp:"ORID (Institute of Cultural Affairs) walks groups through layers: Objective (what happened/facts), Reflective (how we felt), Interpretive (what it means), Decisional (what we'll do). Prevents jumping to action without understanding." },
    { type:"single", cat:"techniques", q:"World Café is best used for:",
      opts:[{t:"Allowing a larger group to explore a topic across multiple small-table conversations with rotation, capturing emergent themes",c:true},{t:"Quick yes/no decisions"},{t:"Reviewing code line-by-line"},{t:"Stand-up meetings"}],
      exp:"World Café accommodates groups of 20–200. Small tables converse on a question; people rotate; insights cross-pollinate; a synthesis captures emergent themes. Best for exploration and engagement, not fast convergence." },
    { type:"single", cat:"techniques", q:"1-2-4-All (Liberating Structures) is used to:",
      opts:[{t:"Engage every voice in scaling waves — 1 min individual, 2 min pair, 4 min foursome, then all — surfaces ideas + filters before group discussion",c:true},{t:"Make decisions by majority vote only"},{t:"Eliminate small-group work"},{t:"Slow down a meeting"}],
      exp:"1-2-4-All is a high-engagement structure for groups of any size. Each scaling step strengthens ideas and ensures wide participation before reaching 'all.' Variant: 1-2-4-All-Action." },
    { type:"single", cat:"techniques", q:"TRIZ (Liberating Structures) is best used when:",
      opts:[{t:"A group needs to surface what it should stop doing — by first describing how to make things worse (humorous reverse brainstorm)",c:true},{t:"Selecting the best alternative"},{t:"Estimating Product Backlog items"},{t:"Generating new features"}],
      exp:"TRIZ asks 'how could we make X catastrophically worse?' — surfaces hidden behaviors people already do. Then 'what are we doing today that resembles this?' creates a stop-doing list. Humor lowers defensiveness." },
    { type:"single", cat:"techniques", q:"A 'Sailboat' Retrospective uses which metaphor?",
      opts:[{t:"Wind = helps; Anchors = slows; Rocks = risks; Land = goals — visual prompts for what's helping/hindering progress",c:true},{t:"Voting on Sprint outcomes"},{t:"Time-boxing only"},{t:"Estimating Product Backlog items"}],
      exp:"Sailboat is a visual Retrospective format. The metaphor frames inspection as a journey. Different teams find different metaphor formats (Hot Air Balloon, Rocket, Highway) engaging in turn. Variety prevents staleness." },
    { type:"single", cat:"techniques", q:"5 Whys is used to:",
      opts:[{t:"Probe a problem's causes by asking 'why' iteratively until reaching a root cause that explains downstream symptoms",c:true},{t:"Reach a quick decision"},{t:"Estimate stories"},{t:"Vote on alternatives"}],
      exp:"5 Whys (Toyota) drills past symptoms to systemic causes. Often a fix at level 4 or 5 prevents recurrence, while level 1 fixes recur. Used in Retrospectives, post-mortems, and continuous improvement work." },
    { type:"single", cat:"techniques", q:"A 'silent writing' technique at the start of a session is most effective when:",
      opts:[{t:"You want individual thinking before group discussion to prevent groupthink and anchor on the first/loudest voice",c:true},{t:"You need fast verbal alignment"},{t:"You want to pick one expert's idea"},{t:"You want to skip thinking entirely"}],
      exp:"Silent writing produces independent ideas before social influence kicks in. Avoids anchoring on the first verbal contribution. Often paired with shared visualization (sticky notes, shared docs) and structured sharing." },
    { type:"single", cat:"techniques", q:"Dot voting is most appropriate when:",
      opts:[{t:"A group needs to converge from a long list of options to a shorter set, with each person allocating limited votes",c:true},{t:"Anonymity is required and no facilitator is present"},{t:"You want a binding contractual decision"},{t:"Time is unlimited"}],
      exp:"Dot voting (sticker voting) is a fast convergence tool. Each participant has N votes to allocate, supporting nuance (multiple votes on one item). Surface convergence; for final decisions a more structured method may be needed." },

    /* ---------------- CONFLICT & DECISIONS — extended ---------------- */
    { type:"single", cat:"conflict", q:"Thomas-Kilmann identifies five conflict modes. Which two are most often appropriate in Scrum team disagreements?",
      opts:[{t:"Collaborating (high concern for self + others) and Compromising — preserve relationships while resolving substance",c:true},{t:"Avoiding and Competing"},{t:"Competing and Accommodating"},{t:"Avoiding and Accommodating"}],
      exp:"TKI's five modes: Competing, Collaborating, Compromising, Avoiding, Accommodating. Collaborating fits when stakes and relationship matter; Compromising for time pressure or mid-priority issues. Avoiding and Competing harm Scrum teams over time." },
    { type:"single", cat:"conflict", q:"Glasl's nine-stage conflict escalation model says interventions should match the stage. A conflict at the personal-attack stage (Level 4-5) typically requires:",
      opts:[{t:"More structured mediation, sometimes external facilitation — direct collaborative problem-solving rarely works once attack patterns set in",c:true},{t:"Letting the parties fight it out"},{t:"Ignoring it"},{t:"Treating it as a minor disagreement"}],
      exp:"Lower-level (Glasl 1–3) conflicts respond to direct collaborative talk. Mid-levels (4–6) need stronger structural interventions: mediation, separated parties, neutral facilitation. Higher levels need significant outside help. Match intervention to severity." },
    { type:"single", cat:"conflict", q:"Active listening as a facilitation tool means:",
      opts:[{t:"Hearing for content + emotion, reflecting back, and confirming understanding — without judgment or rebuttal",c:true},{t:"Waiting silently for the speaker to finish so you can speak"},{t:"Recording the conversation only"},{t:"Interrupting to clarify"}],
      exp:"Active listening (Rogers) involves attending, reflecting, and validating. The speaker feels heard, which often de-escalates tension and surfaces deeper concerns. The facilitator (and team) model the skill, building safety." },
    { type:"single", cat:"conflict", q:"Naming the dynamic ('I notice we keep returning to this point — what might be underneath?') is useful because:",
      opts:[{t:"It surfaces an implicit pattern the group can then address explicitly — instead of being stuck in it unconsciously",c:true},{t:"It diverts attention from the topic"},{t:"It picks a side"},{t:"It ends the conversation"}],
      exp:"Naming the dynamic is a powerful facilitation move (also called 'naming what's in the room' or 'meta-comment'). It externalizes an implicit pattern (anxiety, avoidance, looping) so the group can examine it." },
    { type:"single", cat:"conflict", q:"During a heated session, the facilitator decides to call a short break. The most aligned reason is:",
      opts:[{t:"Emotional regulation — a break lets activated nervous systems settle, enabling productive thought to resume",c:true},{t:"To make the meeting longer"},{t:"To avoid the conflict"},{t:"To let the loudest person consult their manager"}],
      exp:"When emotion runs high, cognition drops. A 5–15 minute break restores capacity for thought and reduces reactivity. Facilitators read the room and use breaks deliberately — not as avoidance but as regulation." },
    { type:"single", cat:"conflict", q:"A group is stuck between two strong proposals. A useful facilitation move is:",
      opts:[{t:"Surface the underlying interests behind each position — often interests are compatible even when positions conflict (Fisher & Ury)",c:true},{t:"Ask the boss to decide"},{t:"Drop both proposals"},{t:"Coin flip"}],
      exp:"Positions are what people demand; interests are why they want it. Two positions may serve the same interest (or compatible interests). 'Getting to Yes' (Fisher/Ury) — explore interests, generate options, use objective criteria — unlocks creative solutions." }
  ]
};
})();
