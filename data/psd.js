(function(){
window.BANKS = window.BANKS || {};
window.BANKS["psd"] = {
  id: "psd",
  short: "PSD I",
  name: "Professional Scrum Developer",
  url: "https://www.scrum.org/assessments/professional-scrum-developer-certification",
  source: "Scrum Guide 2020 + Developing & Delivering Products Professionally Focus Areas + XP/CI/CD/TDD canon (Fowler, Beck, Farley, Uncle Bob, DORA)",
  pass: 85,
  examCount: 80,
  minutes: 60,
  status: "complete",
  cats: { scrum:"Scrum Framework", team:"Cross-Functional Team", practices:"CI/CD & Programming", testing:"Testing & TDD", quality:"Quality & DoD", design:"Design & Architecture", refinement:"Backlog Refinement" },
  questions: [
    { type:"single", cat:"quality", q:"Who is responsible for creating a usable Increment that meets the Definition of Done every Sprint?", opts:[{t:"The Developers"},{t:"The whole Scrum Team",c:true},{t:"The Scrum Master"},{t:"The Product Owner alone"}], exp:"The Scrum Guide 2020 makes the entire Scrum Team accountable for creating a valuable, useful Increment every Sprint. While the Developers do the technical work, accountability for the outcome sits with the team as a whole." },
    { type:"single", cat:"quality", q:"In Test-Driven Development (TDD), what is the correct order of the red-green-refactor cycle?", opts:[{t:"Write a failing test, write just enough code to pass, then refactor",c:true},{t:"Write production code, write a passing test, then refactor"},{t:"Refactor the code, write a test, then make it fail"},{t:"Write all tests, write all code, then refactor once at the end"}], exp:"TDD follows red (write a failing test that expresses the desired behavior), green (write the minimum code to make it pass), refactor (improve the design while keeping tests green). The test is written before the production code." },
    { type:"single", cat:"design", q:"In Scrum, when does the architecture and design of the product emerge?", opts:[{t:"It is fully defined up front before the first Sprint"},{t:"It emerges and evolves as the product is built across Sprints",c:true},{t:"It is owned and dictated solely by an enterprise architect"},{t:"It is finalized during a dedicated design Sprint before development"}], exp:"Scrum favors emergent design and architecture: the Developers make design decisions as they build, allowing the architecture to evolve with learning. Scrum does not prescribe a big up-front design phase or a separate design Sprint." },
    { type:"single", cat:"practices", q:"What is the primary purpose of Continuous Integration (CI)?", opts:[{t:"To deploy every change directly to production automatically"},{t:"To frequently merge developers' work into a shared mainline and verify it with an automated build and tests",c:true},{t:"To replace the need for a Definition of Done"},{t:"To allow each developer to work in isolation for the whole Sprint"}], exp:"CI is the practice of integrating work frequently (often many times a day) into a shared mainline, with each integration verified by an automated build and automated tests. This surfaces integration problems early. Automatic deployment to production is Continuous Deployment, a separate concern." },
    { type:"single", cat:"scrum", q:"A Developer realizes mid-Sprint that a Product Backlog item cannot be finished to the Definition of Done. What is the most appropriate action?", opts:[{t:"Lower the Definition of Done so the item can be marked done"},{t:"Raise it with the team and Product Owner so the Sprint Backlog can be renegotiated",c:true},{t:"Release the unfinished work to production anyway"},{t:"Wait until the Sprint Review to mention it"}], exp:"The scope of the Sprint may be clarified and renegotiated with the Product Owner as more is learned. The Definition of Done is not lowered to fit the work, and incomplete work that does not meet the DoD is not released." },
    { type:"single", cat:"quality", q:"Which statement best describes the Definition of Done in Scrum?", opts:[{t:"A formal description of the state of the Increment when it meets the quality measures required for the product",c:true},{t:"A list of acceptance criteria written by the Product Owner for a single Product Backlog item"},{t:"A checklist owned only by the Scrum Master"},{t:"The set of tasks in the Sprint Backlog"}], exp:"The Scrum Guide 2020 defines the Definition of Done as a formal description of the state of the Increment when it meets the quality measures required for the product. It is a commitment for the Increment and applies to all work, distinct from per-item acceptance criteria." },
    { type:"multi", cat:"practices", q:"Which of the following are recognized benefits of pair programming? (Choose all that apply.)", opts:[{t:"Continuous, real-time code review as code is written",c:true},{t:"Knowledge sharing and reduced single points of failure",c:true},{t:"It guarantees zero defects in the delivered code"},{t:"It eliminates the need for any automated tests"}], exp:"Pair programming provides immediate, continuous review and spreads knowledge across the team, reducing bus-factor risk. It does not guarantee defect-free code, and it complements rather than replaces automated testing." },
    { type:"single", cat:"design", q:"What is technical debt in software development?", opts:[{t:"The implied future cost of rework caused by choosing an easy or limited solution now instead of a better approach",c:true},{t:"The money a team owes for its development tools and licenses"},{t:"The number of open Product Backlog items"},{t:"Time spent writing automated tests"}], exp:"Technical debt is a metaphor for the future cost incurred when expedient short-term decisions create rework later. Like financial debt, it accrues interest: the longer it is left, the more it slows future change. Managing it is a key developer responsibility." },
    { type:"tf", cat:"quality", q:"If the Definition of Done for an item is not met, that item may still be presented as completed at the Sprint Review.", opts:[{t:"True"},{t:"False",c:true}], exp:"Work that does not meet the Definition of Done cannot be released or presented as done. Per the Scrum Guide, such work returns to the Product Backlog for future consideration; it is not part of the Increment." },
    { type:"single", cat:"practices", q:"What is the main goal of refactoring?", opts:[{t:"To improve the internal structure of code without changing its external behavior",c:true},{t:"To add new features as quickly as possible"},{t:"To fix all outstanding bugs in a release"},{t:"To rewrite the application in a new programming language"}], exp:"Refactoring is the disciplined technique of restructuring existing code to improve its design, readability, and maintainability while preserving its observable behavior. Automated tests give the safety net that makes refactoring safe." },
    { type:"single", cat:"scrum", q:"Who is accountable for managing the Sprint Backlog and the day-to-day work needed to meet the Sprint Goal?", opts:[{t:"The Developers",c:true},{t:"The Scrum Master"},{t:"The Product Owner"},{t:"A separate technical lead outside the Scrum Team"}], exp:"The Developers own the Sprint Backlog. They plan the work, self-manage how to turn Product Backlog items into an Increment, and adapt their plan daily toward the Sprint Goal. No one tells them how to do the work." },
    { type:"multi", cat:"design", q:"Which of the following are characteristics of a well-designed, maintainable system that Scrum Teams aim for? (Choose all that apply.)", opts:[{t:"High cohesion within modules",c:true},{t:"Loose coupling between components",c:true},{t:"Tight coupling so every change touches the whole system"},{t:"Duplicated logic spread across many files"}], exp:"Good design favors high cohesion (each module has a focused responsibility) and loose coupling (components depend on each other minimally), which makes the system easier to change and test. Tight coupling and duplication increase the cost and risk of change." },
    { type:"single", cat:"practices", q:"In Behavior-Driven Development (BDD), what is the typical purpose of writing scenarios in a Given-When-Then format?", opts:[{t:"To express expected behavior in a shared, readable language that aligns developers and stakeholders",c:true},{t:"To replace the version control system"},{t:"To define the database schema"},{t:"To measure CPU performance of the application"}], exp:"BDD uses Given-When-Then scenarios to describe behavior in ubiquitous, business-readable language, fostering shared understanding among developers, testers, and stakeholders. These scenarios often double as executable acceptance tests." },
    { type:"tf", cat:"scrum", q:"In Scrum, the Definition of Done can vary, but if multiple Scrum Teams work on the same product they must mutually define and comply with a Definition of Done appropriate for that product.", opts:[{t:"True",c:true},{t:"False"}], exp:"The Scrum Guide 2020 states that if there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done. This keeps the integrated Increment consistent and releasable." },
    { type:"single", cat:"quality", q:"Why is a fast, reliable suite of automated tests especially valuable to a Scrum Team?", opts:[{t:"It lets the team deliver an Increment that meets the Definition of Done every Sprint and refactor with confidence",c:true},{t:"It removes the need for a Product Owner"},{t:"It guarantees the product needs no further changes"},{t:"It allows the team to skip the Sprint Retrospective"}], exp:"Automated tests give rapid feedback that the Increment still works, enabling the team to meet the Definition of Done each Sprint and to refactor safely. They support sustainable pace and frequent integration, but do not replace any Scrum accountability or event." },
    { type:"multi", cat:"practices", q:"Which practices directly support delivering a working, integrated Increment frequently? (Choose all that apply.)", opts:[{t:"Continuous Integration with an automated build",c:true},{t:"Automated regression testing",c:true},{t:"Maintaining the Definition of Done as a quality commitment",c:true},{t:"Deferring all integration and testing until the final Sprint"}], exp:"Continuous Integration, automated regression testing, and a strong Definition of Done all help a team produce a usable, integrated Increment often. Deferring integration and testing to the end (a mini-waterfall) increases risk and works against frequent delivery." },

    { type:"multi", cat:"scrum", q:"Per the Scrum Guide 2020, which of the following are Developer accountabilities? (select 3)", opts:[{t:"Creating a plan for the Sprint (the Sprint Backlog)",c:true},{t:"Instilling quality by adhering to a Definition of Done",c:true},{t:"Adapting their plan each day toward the Sprint Goal",c:true},{t:"Maximizing the value of the product"},{t:"Ordering the Product Backlog"}], exp:"The Scrum Guide 2020 lists Developer accountabilities: creating the Sprint Backlog, instilling quality via DoD, adapting their plan daily, and holding each other accountable. Maximizing value and ordering the Product Backlog are Product Owner accountabilities." },

    { type:"single", cat:"scrum", q:"During Sprint Planning, who selects how much Product Backlog work the Developers will take into the Sprint?", opts:[{t:"The Developers, after discussion with the Product Owner around the Sprint Goal",c:true},{t:"The Product Owner alone, based on stakeholder demands"},{t:"The Scrum Master, based on previous velocity"},{t:"Management, based on the quarterly plan"}], exp:"The Scrum Guide 2020 states the Developers select the items they forecast they can complete in the Sprint. The Product Owner clarifies value and trade-offs; the Scrum Master facilitates. Only the Developers decide capacity." },

    { type:"single", cat:"scrum", q:"A Product Owner asks the Developers to add items to the Sprint Backlog mid-Sprint. The Developers feel this could endanger the Sprint Goal. What is the most appropriate path?", opts:[{t:"Renegotiate scope collaboratively with the PO, protecting the Sprint Goal; if the Goal becomes obsolete only the PO may cancel the Sprint",c:true},{t:"Add the items immediately — the PO has final authority over the Sprint Backlog"},{t:"Refuse to discuss until the next Sprint Planning"},{t:"Ask the Scrum Master to decide"}], exp:"The Sprint Backlog is owned by the Developers; scope can be renegotiated with the PO mid-Sprint as long as the Sprint Goal is not endangered. Only the PO can cancel a Sprint if the Goal becomes obsolete." },

    { type:"tf", cat:"scrum", q:"Per the Scrum Guide 2020, the Sprint Backlog is a forecast — the Developers' commitment is the Sprint Goal, not the exact list of selected items.", opts:[{t:"True",c:true},{t:"False"}], exp:"The Scrum Guide 2020 explicitly says the selected items are a forecast. The Developers' commitment is the Sprint Goal. Scope may be renegotiated as more is learned; the Sprint Goal stays intact." },

    { type:"single", cat:"scrum", q:"A Developer wants to swap one Sprint Backlog item for another mid-Sprint to better serve the Sprint Goal. What is the appropriate path?", opts:[{t:"Discuss with the Product Owner and update the Sprint Backlog collaboratively, keeping the Sprint Goal intact",c:true},{t:"Swap silently — the Sprint Backlog is Developer-owned"},{t:"Wait until the next Sprint Planning"},{t:"Ask the Scrum Master to authorize the swap"}], exp:"The Sprint Backlog is updated throughout the Sprint as more is learned. Scope changes are renegotiated with the PO; the Developers own the plan but coordinate with the PO when selected work changes. The Sprint Goal stays intact." },

    { type:"single", cat:"team", q:"What does it mean for a Scrum Team to be cross-functional?", opts:[{t:"The members collectively have all the skills necessary to create value each Sprint",c:true},{t:"Every Developer must be able to perform every other Developer's tasks"},{t:"The team rotates roles every Sprint"},{t:"Specialization is forbidden"}], exp:"The Scrum Guide 2020 defines cross-functional as the team collectively having all needed skills — not requiring every individual to be a generalist. Specialization is allowed; what matters is full team coverage to deliver Done value each Sprint." },

    { type:"single", cat:"team", q:"A Scrum Team needs database expertise that no current Developer has. What is the most aligned approach with Scrum's cross-functional principle?", opts:[{t:"Add a Developer with database skill (or grow it on the team) so the team has the collective skill needed",c:true},{t:"Hand the database work to a separate database team outside the Scrum Team"},{t:"Defer all database work to a future quarter"},{t:"Skip the database work entirely"}], exp:"Cross-functionality means the team collectively has all skills needed to deliver Done value each Sprint. Adding the skill (hiring or growing) keeps the team self-sufficient. Handing it off creates dependencies that violate cross-functionality." },

    { type:"single", cat:"team", q:"Pair programming as practiced by XP teams is best described as:", opts:[{t:"Two Developers working together at one workstation — one driving, one navigating — to produce code with built-in review and shared understanding",c:true},{t:"Two Developers writing the same code separately and comparing afterward"},{t:"One senior Developer instructing a junior Developer for the entire day"},{t:"Two Developers competing to finish first"}], exp:"Pair programming is a collaboration practice from XP: two Developers at one workstation, alternating driver/navigator roles. It produces code with built-in review, propagates knowledge, and raises quality. It is a recommended XP practice; Scrum does not mandate it." },

    { type:"single", cat:"team", q:"Mob programming differs from pair programming in that:", opts:[{t:"The whole team works on one item together at one workstation, taking turns driving",c:true},{t:"Mob programming is performed alone."},{t:"Mob programming requires at least 50 Developers."},{t:"Mob programming forbids refactoring."}], exp:"Mob (or ensemble) programming is the whole-team variant of pair programming — everyone works together on one item at one workstation. It maximizes collaboration, knowledge sharing, and code review at the cost of parallel work in progress. Strong-style is a common protocol." },

    { type:"single", cat:"team", q:"A new Developer joins the Scrum Team. The team wants to onboard quickly while keeping work flowing. Which practice helps most?", opts:[{t:"Pair or mob programming so the new Developer learns the codebase by working alongside experienced Developers",c:true},{t:"Isolate the new Developer for several weeks of solo study before they touch the codebase"},{t:"Assign them only documentation tasks for the first Sprint"},{t:"Have them wait for the next Sprint before joining any work"}], exp:"Pair and mob programming are the fastest, most-context-rich onboarding practices — the new Developer learns the codebase, conventions, and team norms through real collaboration. Isolation slows learning and reduces team integration." },

    { type:"single", cat:"team", q:"At the Daily Scrum, a senior Developer dominates the conversation and assigns work to the rest of the team. What is the appropriate Scrum response?", opts:[{t:"Coach the team toward true self-management — no one assigns work to Developers, and the Daily Scrum is collaborative",c:true},{t:"Allow the behavior — senior Developers usually know best"},{t:"Have the Scrum Master assign work to balance things"},{t:"Cancel the Daily Scrum"}], exp:"The Daily Scrum is for the Developers as a self-managing team to inspect progress and adapt their plan together. No one — including a senior Developer — assigns work; Developers internally decide who does what." },

    { type:"single", cat:"practices", q:"Continuous Integration requires that:", opts:[{t:"All Developers integrate their work into a shared mainline at least daily, with each integration verified by an automated build and tests",c:true},{t:"Each Developer works on a long-lived branch and merges only at end of Sprint"},{t:"Integration happens only after the code is fully tested manually"},{t:"Integration is done once per release by a dedicated build engineer"}], exp:"Continuous Integration (Fowler/Farley) requires frequent integration to mainline (at least daily) with automated verification. Long-lived branches and end-of-Sprint integration are anti-patterns that defeat CI's purpose of fast feedback on integration problems." },

    { type:"single", cat:"practices", q:"Trunk-based development is preferred over long-lived feature branches because:", opts:[{t:"It surfaces integration problems immediately and keeps the codebase always releasable",c:true},{t:"It eliminates the need for tests"},{t:"It allows each Developer to work in complete isolation"},{t:"It requires fewer commits"}], exp:"Trunk-based development integrates everyone's work to a shared mainline daily, surfacing conflicts and integration issues immediately. Long-lived branches defer integration pain, hide problems, and prevent the codebase from being continuously releasable — both DORA-required for elite performance." },

    { type:"single", cat:"practices", q:"A team wants to release small Increments to production but has incomplete features in the codebase. Which technique allows them to ship safely?", opts:[{t:"Feature toggles (feature flags) that hide incomplete work in production until ready",c:true},{t:"Long-lived feature branches merged at release time"},{t:"Deferring all releases until every feature is finished"},{t:"Releasing the incomplete work and letting users see it"}], exp:"Feature toggles let incomplete work merge to the mainline without exposing it to users. This enables trunk-based development, continuous integration, and frequent small releases — without compromising user experience." },

    { type:"single", cat:"practices", q:"Continuous Delivery (CD) differs from Continuous Deployment in that:", opts:[{t:"CD ensures every change is ready to deploy; Continuous Deployment automatically deploys every change to production",c:true},{t:"They are exactly the same thing"},{t:"CD requires manual integration of branches"},{t:"Continuous Deployment is a subset of manual release management"}], exp:"Continuous Delivery (Humble/Farley) keeps every change in a deployable state — a human chooses when to release. Continuous Deployment goes further and automatically deploys every passing change to production. Both rely on the same foundational practices (CI, automated testing, trunk-based development)." },

    { type:"single", cat:"practices", q:"DORA research identifies four key metrics for elite software delivery performance. Which set is correct?", opts:[{t:"Deployment Frequency, Lead Time for Changes, Mean Time to Restore (MTTR), Change Failure Rate",c:true},{t:"Velocity, Story Points per Sprint, Bug Count, Code Coverage"},{t:"Lines of Code, Commits per Day, Test Count, Build Time"},{t:"Number of Releases, Number of Developers, Number of Branches, Number of Bugs"}], exp:"DORA's Accelerate research identifies four metrics: Deployment Frequency, Lead Time for Changes, Mean Time to Restore (MTTR), Change Failure Rate. Elite teams deploy on-demand, restore in under an hour, and have <15% change failure rates." },

    { type:"single", cat:"practices", q:"DORA research shows that speed and stability in software delivery:", opts:[{t:"Rise together — elite teams achieve both",c:true},{t:"Are inherently a trade-off"},{t:"Are only achievable by skipping testing"},{t:"Require sacrificing quality to gain speed"}], exp:"DORA's Accelerate findings: speed and stability are not opposing — they correlate. Elite teams deploy frequently AND have low change failure rates AND restore quickly. The supporting practices (CI, automated testing, trunk-based dev, small batches) enable both simultaneously." },

    { type:"single", cat:"practices", q:"When should refactoring happen in a Scrum Team?", opts:[{t:"Continuously, as part of every Sprint and every change to the code",c:true},{t:"Only when a dedicated 'refactoring Sprint' is scheduled"},{t:"Only at the end of a project before final release"},{t:"Only with explicit Product Owner approval per refactor"}], exp:"Refactoring is a continuous activity — part of every change, every Sprint. The 'refactoring Sprint' is an anti-pattern that accumulates debt until painful. Kent Beck: 'Make the change easy, then make the easy change.' YAGNI applies to features, not to keeping code malleable." },

    { type:"single", cat:"practices", q:"A Developer practices code review through pair programming. Which statement best reflects the Uncle Bob view?", opts:[{t:"Pair programming is itself a form of continuous code review; asynchronous post-merge review is a slower substitute",c:true},{t:"Pair programming should be banned because it doubles cost"},{t:"Pair programming requires no review at all"},{t:"Pair programming only works in junior teams"}], exp:"Robert C. Martin (Uncle Bob) and Kent Beck argue pair programming provides continuous, real-time review with knowledge sharing — superior to asynchronous post-merge review in many respects. Pairing is not 'doubled cost' because it reduces defects, rework, and onboarding time." },

    { type:"single", cat:"testing", q:"Test-Driven Development (TDD) follows which cycle?", opts:[{t:"Red (write a failing test) → Green (minimum code to pass) → Refactor (improve design while tests stay green)",c:true},{t:"Green → Red → Refactor"},{t:"Write all production code, then write tests"},{t:"Refactor first, then test"}], exp:"TDD (Kent Beck) cycle is Red → Green → Refactor. Write the failing test first, write the minimum code to make it pass, then refactor while keeping tests green. The test is written BEFORE the production code — this is non-negotiable in canonical TDD." },

    { type:"tf", cat:"testing", q:"In Test-Driven Development, writing the test after the production code is still considered TDD as long as test coverage is high.", opts:[{t:"True"},{t:"False",c:true}], exp:"False. Canonical TDD (Kent Beck) requires writing the test FIRST — before the production code. Writing tests after is 'test-after development', which provides regression but loses TDD's design pressure and the red-step verification that the test actually fails when it should." },

    { type:"single", cat:"testing", q:"In Acceptance Test-Driven Development (ATDD), acceptance tests are typically written:", opts:[{t:"Before coding, often by the 'Three Amigos' (PO + Developer + Tester) collaboratively",c:true},{t:"After the Sprint, by a dedicated QA team"},{t:"By the Product Owner alone, in isolation"},{t:"After the customer accepts the feature in production"}], exp:"ATDD writes acceptance tests before coding, often through 'Three Amigos' collaboration (PO + Developer + Tester). The shared definition of acceptable behavior drives implementation. This contrasts with after-the-fact testing." },

    { type:"single", cat:"testing", q:"In Behavior-Driven Development (BDD), scenarios are usually expressed in:", opts:[{t:"Given-When-Then format using ubiquitous business-readable language (Gherkin)",c:true},{t:"Unstructured technical comments inside production code"},{t:"Database SQL queries"},{t:"Hexadecimal byte sequences"}], exp:"BDD uses Given-When-Then (Gherkin) scenarios that align Developers, testers, and stakeholders around the same vocabulary. ATDD defines what's done; BDD/Gherkin is one common syntax to express it." },

    { type:"single", cat:"testing", q:"The Test Pyramid (Cohn/Fowler) recommends:", opts:[{t:"Many fast unit tests at the base, fewer integration tests, very few brittle end-to-end UI tests at the top",c:true},{t:"Mostly end-to-end UI tests, few unit tests"},{t:"Equal numbers of each test type"},{t:"No unit tests, only manual testing"}], exp:"The Test Pyramid teaches investing heavily in fast, reliable unit tests at the base; fewer integration tests in the middle; very few end-to-end UI tests at the top. Inverted pyramids (lots of brittle UI tests) are slow and fragile — a well-known anti-pattern." },

    { type:"single", cat:"testing", q:"A team's CI pipeline relies heavily on end-to-end UI tests that take 90 minutes and are flaky. From a Test Pyramid perspective, the team should:", opts:[{t:"Push test coverage down the pyramid — add more fast unit tests and reduce reliance on brittle UI tests",c:true},{t:"Add even more end-to-end UI tests for redundancy"},{t:"Remove all unit tests to focus on UI tests"},{t:"Skip automated testing entirely"}], exp:"The team has an inverted test pyramid. Pushing tests down (more unit tests, fewer UI tests) speeds feedback, reduces flakiness, and improves Developer confidence. This is a core principle from Cohn and Fowler." },

    { type:"single", cat:"testing", q:"Which statement is most accurate about test coverage targets like '90% coverage required'?", opts:[{t:"There is no universally correct coverage number; the right target is 'enough to trust the build and meet the Definition of Done'",c:true},{t:"100% coverage is always required by Scrum"},{t:"Coverage below 80% always indicates poor quality"},{t:"Coverage above 95% always indicates good quality"}], exp:"Test coverage is a poor proxy for quality. The relevant question is whether tests give the team confidence to refactor and ship — and whether they meet the Definition of Done. PSD I-style exam answers avoid magic numbers." },

    { type:"single", cat:"testing", q:"A Developer says 'we'll add tests after the Sprint if there's time.' What is the most accurate critique?", opts:[{t:"Quality is non-negotiable; tests are part of meeting the Definition of Done, not optional after-work",c:true},{t:"That's fine as long as the work compiles"},{t:"Tests are a Scrum Master concern, not a Developer one"},{t:"Tests should only be written after release"}], exp:"Quality is built into every Increment via the Definition of Done — not added after the fact. Postponing tests creates undone work and hidden technical debt that erodes long-term Ability to Innovate. PSD I tests this principle directly." },

    { type:"single", cat:"quality", q:"Who is responsible for creating the Definition of Done if the organization does not have one as a standard?", opts:[{t:"The Scrum Team — they create one appropriate for the product",c:true},{t:"The Product Owner alone"},{t:"The Scrum Master alone"},{t:"The Developers alone, without input from PO or SM"}], exp:"Per the Scrum Guide 2020, if the organization does not have a Definition of Done as a standard, the Scrum Team must create one appropriate for the product. The whole Scrum Team owns it. If the org has one, all teams must follow it as a minimum." },

    { type:"single", cat:"quality", q:"A Product Backlog item passes its acceptance criteria but doesn't meet the Definition of Done. Is it Done?", opts:[{t:"No — Done requires both meeting acceptance criteria AND the Definition of Done",c:true},{t:"Yes — acceptance criteria are enough to be considered Done"},{t:"Yes — DoD is optional once acceptance is met"},{t:"Only if the Product Owner verbally accepts it"}], exp:"DoD is a product-wide quality bar (commitment for the Increment). Acceptance criteria are item-specific functional checks. Both must hold for a PBI to be Done. Items not meeting DoD return to the Product Backlog." },

    { type:"single", cat:"quality", q:"A PO pressures the Developers to skip DoD items (e.g. skip code review, automated tests, security checks) to ship by a fixed date. What is the most appropriate response?", opts:[{t:"Decline; DoD is the commitment for the Increment — skipping creates undone work, hidden technical debt, and erodes future Ability to Innovate",c:true},{t:"Comply; the PO is accountable for value and trade-offs"},{t:"Skip some DoD items secretly to avoid conflict"},{t:"Lower the DoD permanently to keep stakeholders happy"}], exp:"Quality is non-negotiable. Skipping DoD inflates apparent velocity but creates hidden debt and undone work. The right path is transparent renegotiation of scope, not compromising quality. EBM connects skipped DoD to long-term A2I erosion." },

    { type:"single", cat:"quality", q:"Undone work — items that don't meet the Definition of Done — at the end of a Sprint:", opts:[{t:"Returns to the Product Backlog; not part of the Increment; PO orders it against other work",c:true},{t:"Automatically rolls into the next Sprint as carry-over"},{t:"Counts toward partial credit at Sprint Review"},{t:"Is released anyway and fixed in production"}], exp:"Per the Scrum Guide 2020, undone items cannot be released, presented at Sprint Review, or counted toward the Increment. They return to the Product Backlog where the PO decides their next ordering." },

    { type:"multi", cat:"quality", q:"Per the Scrum Guide 2020, the Definition of Done provides which of the following? (select 2)", opts:[{t:"A formal description of the state of the Increment when it meets the required quality measures",c:true},{t:"Transparency about what 'Done' means for everyone",c:true},{t:"A list of acceptance criteria written by the Product Owner for a single PBI"},{t:"The Sprint Backlog plan for execution"}], exp:"DoD is a formal quality description for the Increment and creates transparency about what Done means. Acceptance criteria (per-PBI functional checks) and the Sprint Backlog plan are different artifacts." },

    { type:"single", cat:"quality", q:"Technical debt is best handled by:", opts:[{t:"Making it visible (e.g. tracked alongside other work) and addressing it continuously within Sprints",c:true},{t:"Hiding it from the Product Owner to avoid difficult conversations"},{t:"Scheduling separate 'technical debt Sprints' once a quarter"},{t:"Ignoring it until customers complain"}], exp:"Technical debt that is invisible accumulates and silently degrades Ability to Innovate. Making it visible — as backlog items or a debt register — lets the team balance it against features. Continuous reduction within Sprints (Boy Scout rule) beats periodic 'debt Sprints' which signal accumulation." },

    { type:"single", cat:"quality", q:"Which Fowler/Beck statement best characterizes the relationship between quality and speed in software development?", opts:[{t:"'The only way to go fast is to go well' — quality is what enables sustainable speed",c:true},{t:"Speed and quality are inherently a trade-off; ship fast and fix later"},{t:"High quality only matters for safety-critical systems"},{t:"Quality is a Scrum Master responsibility, not a Developer one"}], exp:"Uncle Bob's principle: 'The only way to go fast is to go well.' Sustainable speed comes from clean code, refactoring, tests, and CI — all of which keep the cost of change low. 'Ship fast, fix later' compounds debt and slows future delivery — exactly what DORA elite signals reveal." },

    { type:"single", cat:"quality", q:"A bug is discovered in a Done Increment that was released to production. What does this most likely indicate?", opts:[{t:"The Definition of Done was not strong enough to catch this kind of defect — the team should strengthen DoD and add the appropriate test layer",c:true},{t:"The team should schedule a bug-fix Sprint"},{t:"The Product Owner should be removed"},{t:"Scrum is not working for this team"}], exp:"Per Scrum, if a defect slips through a 'Done' Increment, the DoD didn't adequately cover that risk. The response is to learn — add the missing test category, update DoD, prevent recurrence. Not a 'bug-fix Sprint' which signals accumulated debt." },

    { type:"single", cat:"quality", q:"From an EBM perspective, accumulating technical debt most directly affects which Key Value Area?", opts:[{t:"Ability to Innovate (A2I) — the organization's capacity to deliver new capabilities slows as debt consumes capacity",c:true},{t:"Current Value — the value delivered today"},{t:"Unrealized Value — the gap between current and ideal customer experience"},{t:"Time to Market — only the release cadence"}], exp:"Per the EBM Guide, Ability to Innovate (A2I) is most directly affected by technical debt — defect trends, technical debt, and on-product index are explicit KVMs. As debt rises, capacity for new value falls. Time to Market is also affected but A2I is the primary direct lens." },

    { type:"single", cat:"design", q:"Why does Scrum favor emergent architecture over Big Design Up Front (BDUF)?", opts:[{t:"Complex product development is unpredictable; deferring architectural decisions until evidence is available reduces waste and enables empirical learning",c:true},{t:"BDUF is forbidden by the Scrum Guide"},{t:"Architecture is not relevant to software"},{t:"Emergent architecture means no design at all"}], exp:"Emergent architecture defers decisions to the 'last responsible moment,' informed by empirical learning each Sprint. BDUF assumes predictability that doesn't exist in complex domains. Emergent does NOT mean 'no design' — it means intentional, just-in-time design based on real evidence." },

    { type:"tf", cat:"design", q:"In Scrum, a 'Sprint 0' for setup and architecture before real Sprints begin is required for any non-trivial product.", opts:[{t:"True"},{t:"False",c:true}], exp:"False. The Scrum Guide does not define 'Sprint 0.' Every Sprint, including the first, must produce a usable Increment that meets the Definition of Done. Necessary setup happens within normal Sprints, alongside delivering value." },

    { type:"single", cat:"design", q:"YAGNI ('You Aren't Gonna Need It') applies to:", opts:[{t:"Speculative features — don't build capability based on what someone might want later",c:true},{t:"Refactoring — never refactor"},{t:"Tests — skip tests for things you might not need"},{t:"All design decisions — never make any"}], exp:"YAGNI (XP, Martin Fowler) tells you not to build speculative features. It does NOT apply to refactoring or tests — Fowler explicitly notes refactoring keeps code malleable and is not a YAGNI violation. The principle is about saying 'no' to speculative scope, not to discipline." },

    { type:"single", cat:"design", q:"A Developer wants to split a large Product Backlog item to fit a Sprint. Which split is most aligned with delivering a usable Increment?", opts:[{t:"Vertical slice — a thin end-to-end working capability (UI + logic + data), even if narrow",c:true},{t:"Horizontal slice — only the database schema first"},{t:"Horizontal slice — only the UI mockup first"},{t:"Three parallel components, each assigned to a different Developer for separate delivery"}], exp:"Vertical slices deliver thin end-to-end working capability each Sprint — supporting the Increment requirement. Horizontal (technical-layer) slices leave you with an unreleasable mid-state, violating the Increment requirement and starving the team of real feedback." },

    { type:"single", cat:"design", q:"Who is responsible for design and architecture decisions on a Scrum Team?", opts:[{t:"The Developers — design emerges from their work; no external architect dictates implementation",c:true},{t:"An enterprise architect outside the team"},{t:"The Product Owner"},{t:"The Scrum Master"}], exp:"The Scrum Guide 2020 states the Developers decide how the work is done. Architecture emerges through their decisions. Architects may embed in the team as Developers; they do not dictate from outside. PO and SM do not make design decisions." },

    { type:"single", cat:"design", q:"In emergent design, when are architectural decisions typically made?", opts:[{t:"At the 'last responsible moment' — late enough to be informed by evidence, early enough to avoid blocking",c:true},{t:"All decisions are made before the first Sprint begins"},{t:"Decisions are deferred indefinitely with no commitment"},{t:"The Scrum Master decides for the team"}], exp:"The 'last responsible moment' principle (Lean, Mary Poppendieck) defers commitment until evidence informs the decision but before it blocks progress. This is the heart of emergent design — neither BDUF nor 'never decide.'" },

    { type:"single", cat:"design", q:"A Developer wants to introduce a complex framework 'in case we need it later for scaling.' This is most likely an example of:", opts:[{t:"A YAGNI violation — speculative complexity added without current need",c:true},{t:"Emergent design done well"},{t:"Required by the Scrum Guide"},{t:"A refactoring opportunity"}], exp:"Adding complexity based on speculative future needs violates YAGNI. Emergent design adds capability when there's a real, current need backed by evidence — and refactors to enable future change cheaply at that point." },

    { type:"single", cat:"design", q:"Refactoring is most accurately described as:", opts:[{t:"Improving the internal structure of code without changing its external behavior, supported by tests",c:true},{t:"Adding new features quickly"},{t:"Rewriting code from scratch when it gets messy"},{t:"Removing tests to simplify the codebase"}], exp:"Refactoring (Fowler) changes internal structure while preserving external behavior, verified by automated tests. It is continuous, small, and disciplined — not big rewrites and not feature addition." },

    { type:"single", cat:"design", q:"Kent Beck's saying 'Make the change easy, then make the easy change' captures which design principle?", opts:[{t:"Refactor first to make the upcoming change simple; then make it",c:true},{t:"Always make the hardest change first"},{t:"Avoid changes whenever possible"},{t:"Plan all changes for the next year up front"}], exp:"Kent Beck's principle: when a change feels hard, first refactor the design so the change becomes easy, then make it. This separates structural improvement from feature work and is core to sustainable evolution of code." },

    { type:"single", cat:"refinement", q:"Per the Scrum Guide 2020, refinement is:", opts:[{t:"An ongoing activity of breaking down and further defining Product Backlog items into smaller, more precise items",c:true},{t:"A formal Scrum event with a fixed timebox"},{t:"Something only the Product Owner performs"},{t:"A one-time activity before Sprint 1"}], exp:"Refinement is an ongoing activity — not a formal Scrum event. The Scrum Team participates; Developers contribute by clarifying intent, sizing, and surfacing technical considerations. The PO is accountable for content but does not refine alone." },

    { type:"single", cat:"refinement", q:"Who participates in Product Backlog refinement?", opts:[{t:"The whole Scrum Team — PO clarifies what/why, Developers size and add technical perspective, SM facilitates as needed",c:true},{t:"The Product Owner alone"},{t:"The Developers alone"},{t:"Only stakeholders"}], exp:"Refinement is a whole-team activity. PO clarifies value/intent; Developers size and surface technical considerations (feasibility, dependencies, splitting); SM facilitates. PO refining alone is a common anti-pattern that wastes Developer insight." },

    { type:"single", cat:"refinement", q:"How small should a Product Backlog item be to be considered 'ready' for Sprint Planning per the Scrum Guide 2020?", opts:[{t:"Small enough that the Developers consider it doable within one Sprint, with enough transparency for the team to plan it",c:true},{t:"Exactly 3 story points or fewer"},{t:"As small as a single Developer can finish in one day"},{t:"As small as can be implemented with zero clarifying questions"}], exp:"The Scrum Guide 2020 says items doable by the team within a Sprint are 'ready.' No specific size is prescribed — doability within a Sprint and sufficient clarity for planning is the bar. Magic numbers are wrong answers." },

    { type:"single", cat:"refinement", q:"A 'Definition of Ready' (as a contract or gate before Sprint Planning) is:", opts:[{t:"Not defined by the Scrum Guide; teams may use one as a working agreement, but rigid DoR-as-gate is an anti-pattern",c:true},{t:"A formal Scrum artifact alongside the Definition of Done"},{t:"Required by the Scrum Guide for Sprint Planning"},{t:"The Product Owner's official sign-off document"}], exp:"The Scrum Guide does not define a Definition of Ready. Teams may adopt one as a working agreement, but using DoR as a gate that blocks Sprint Planning is an anti-pattern that creates mini-waterfall handoffs. Items just need to be 'sufficiently clear.'" },

    { type:"single", cat:"refinement", q:"A team uses INVEST as a heuristic for good Product Backlog items. What does INVEST stand for?", opts:[{t:"Independent, Negotiable, Valuable, Estimable, Small, Testable",c:true},{t:"Integrated, Necessary, Versioned, Estimated, Standard, Tested"},{t:"Inspectable, Numbered, Valued, Examined, Sized, Tracked"},{t:"Internal, New, Verified, Evaluated, Selected, Tracked"}], exp:"INVEST (Bill Wake) is a widely-used heuristic for good user stories / PBIs: Independent (minimize dependencies), Negotiable (collaborative detail), Valuable (delivers value), Estimable (team can size), Small (fits a Sprint), Testable (clear acceptance criteria)." },

    { type:"single", cat:"refinement", q:"A team is splitting a large PBI using SPIDR. What does SPIDR stand for?", opts:[{t:"Spike, Path, Interface, Data, Rules",c:true},{t:"Story, Plan, Implement, Deliver, Review"},{t:"Sprint, Product, Item, Developer, Refinement"},{t:"Slice, Push, Iterate, Develop, Refactor"}], exp:"SPIDR (Mike Cohn) complements INVEST as a splitting technique: split by Spikes (learning), Paths (workflow variations), Interfaces (different UIs/APIs), Data (variations), or Rules (business logic variations)." },

    { type:"single", cat:"refinement", q:"Estimates of Product Backlog item size are owned by:", opts:[{t:"The Developers who will perform the work",c:true},{t:"The Product Owner, who orders the backlog"},{t:"The Scrum Master, who tracks velocity"},{t:"Management, who funds the work"}], exp:"The Scrum Guide 2020 states the Developers who will do the work are responsible for sizing. The PO may influence by helping them understand trade-offs, but the size is the Developers' decision. Externally-imposed estimates undermine empiricism." },

    { type:"single", cat:"refinement", q:"Items at the top of the Product Backlog should typically be:", opts:[{t:"Smaller and more detailed than items at the bottom, ready for upcoming Sprint Planning",c:true},{t:"Larger than items at the bottom"},{t:"Equally detailed regardless of position"},{t:"Detailed only by stakeholder request"}], exp:"The Scrum Guide describes refinement as making items more precise as they move higher in order. Top-of-backlog items are smaller and more detailed (ready for selection); lower items are larger and less precise. Tapered detail is efficient — fully refining all items wastes effort." },

    /* ---------------- SCRUM FRAMEWORK — extended ---------------- */
    { type:"single", cat:"scrum", q:"A Developer says 'we're empirical because we inspect at Sprint Review.' What is missing from that statement?",
      opts:[{t:"Transparency and Adaptation — empiricism requires all three pillars, plus inspection that happens more frequently than once per Sprint",c:true},{t:"Sprint Reviews are not part of empiricism"},{t:"Inspection should happen only once per release"},{t:"Empiricism doesn't apply to Scrum"}],
      exp:"Empirical process control is Transparency + Inspection + Adaptation. Inspection happens continuously — during Daily Scrums, refinement, code reviews, CI feedback — not only at Sprint Review. Without transparency, inspections are based on wrong data; without adaptation, inspections produce no change." },
    { type:"single", cat:"scrum", q:"Which Scrum Value most directly supports a Developer admitting that a Sprint Backlog item won't be Done?",
      opts:[{t:"Courage — surfacing hard truths early enables the team to adapt rather than hiding problems",c:true},{t:"Focus"},{t:"Commitment"},{t:"Respect"}],
      exp:"Courage is doing the right thing and working on tough problems. Admitting incomplete work early is a courage act that protects transparency. Concealing it to look better undermines empiricism." },
    { type:"single", cat:"scrum", q:"During Sprint execution, who decides how a Product Backlog item gets turned into an Increment?",
      opts:[{t:"The Developers — they self-manage technical and design decisions within the Sprint",c:true},{t:"The Product Owner"},{t:"The Scrum Master"},{t:"The architect or tech lead"}],
      exp:"Per the Scrum Guide 2020, no one tells the Developers how to turn items into Increments. They self-manage the technical work. Architects/leads can advise but don't override Developer decision-making." },
    { type:"single", cat:"scrum", q:"At Sprint Planning, the Developers realize an item they took will be larger than estimated. The Sprint Goal is still achievable. The most aligned action is:",
      opts:[{t:"Renegotiate scope with the Product Owner — the Sprint Backlog forecast can flex; the Sprint Goal stays intact",c:true},{t:"Extend the Sprint length"},{t:"Cancel the Sprint"},{t:"Drop quality to fit the original scope"}],
      exp:"Per the Scrum Guide 2020, scope may be clarified and renegotiated with the PO as more is learned. Sprint length is fixed. Quality (DoD) is not negotiable. The Sprint Goal — not items — is the commitment." },
    { type:"single", cat:"scrum", q:"A Developer asks 'why can't we just skip the Daily Scrum when there's nothing to report?' The most aligned response is:",
      opts:[{t:"The Daily Scrum is an inspection-adaptation event for the Developers to re-plan their work toward the Sprint Goal — it has value even when work seems on track",c:true},{t:"Sure, skip it when convenient"},{t:"Only the Scrum Master can decide that"},{t:"It's optional in the Scrum Guide"}],
      exp:"The Daily Scrum is for inspection and adaptation — its value comes from short feedback loops, not from 'reporting.' Skipping when nothing seems to report is precisely when subtle drift goes undetected. The Scrum Guide does not make the Daily Scrum optional." },
    { type:"tf", cat:"scrum", q:"The Sprint Backlog is owned by the Product Owner and modified at their discretion.",
      opts:[{t:"False",c:true},{t:"True"}],
      exp:"The Sprint Backlog is a plan by and for the Developers. The PO maintains the Product Backlog. PO and Developers may renegotiate scope mid-Sprint, but the Sprint Backlog itself is the Developers' tool, updated daily by them." },

    /* ---------------- CROSS-FUNCTIONAL TEAM — extended ---------------- */
    { type:"single", cat:"team", q:"A Scrum Team has frontend, backend, and database specialists. Each completes only their own type of work. Which property of a Scrum Team is most at risk?",
      opts:[{t:"Cross-functionality — the team should have all skills needed to create value each Sprint, with members willing to work outside narrow specialties",c:true},{t:"Team size"},{t:"Co-location"},{t:"Hierarchical reporting"}],
      exp:"Cross-functionality requires the team collectively to have the skills to deliver value — and individuals willing to swarm across boundaries when bottlenecks emerge. Strict-specialty enforcement creates handoffs and bottlenecks, degrading flow." },
    { type:"single", cat:"team", q:"What is a 'T-shaped' developer?",
      opts:[{t:"Someone with deep expertise in one area and broader working knowledge across others — able to contribute beyond their specialty when needed",c:true},{t:"Someone with shallow knowledge in many areas"},{t:"A senior developer with management responsibilities"},{t:"A developer who only works on testing"}],
      exp:"T-shaped (and π-shaped, E-shaped) profiles describe people with deep + broad skills. They are valuable in cross-functional teams because they enable swarming and reduce single-skill bottlenecks. The concept is not formal Scrum vocabulary but widely used in agile teams." },
    { type:"single", cat:"team", q:"Conway's Law states that organizations design systems that:",
      opts:[{t:"Mirror their communication structures",c:true},{t:"Maximize lines of code"},{t:"Are easy to test"},{t:"Follow the latest framework"}],
      exp:"Melvin Conway (1968): systems reflect the organizations that build them. Implication: if you want a modular system, organize teams around modules. Many architecture problems are really organization problems." },
    { type:"single", cat:"team", q:"A team has long-running handoffs between Developers and QA in a 'separate testing phase' at end of Sprint. What is the most aligned change?",
      opts:[{t:"Integrate testing into the team's work throughout the Sprint — QA pairs with Devs, tests are written alongside code, no separate phase",c:true},{t:"Extend the Sprint to give QA more time"},{t:"Drop testing to deliver faster"},{t:"Keep the handoff but make it 'official'"}],
      exp:"Separate QA phases inside a Sprint are an anti-pattern. Quality emerges from continuous testing built into the team's flow. QA expertise belongs in the team, applied throughout the Sprint, not as a gate at the end." },
    { type:"single", cat:"team", q:"A skill gap (e.g. cloud infrastructure expertise) is identified that no current Developer has. What's the most aligned response?",
      opts:[{t:"Develop the skill within the team (training, pairing, hiring) so the team is genuinely cross-functional; avoid long-term dependence on external groups",c:true},{t:"Permanently outsource to another team"},{t:"Ignore the gap"},{t:"Add the skill to the next Sprint Goal"}],
      exp:"Long-term external dependencies create handoffs and degrade self-management. The aligned response is to grow the capability inside the team — through learning, hiring, or restructuring — so the team can deliver value end-to-end." },
    { type:"single", cat:"team", q:"A Developer is the only one who knows a critical part of the codebase. From a team-design perspective, this is:",
      opts:[{t:"A risk (single point of failure) and a flow impediment — knowledge should be spread via pairing, mobbing, documentation, and rotation",c:true},{t:"An ideal arrangement"},{t:"Required for security"},{t:"The Scrum Master's responsibility to fix alone"}],
      exp:"Knowledge silos create bus factor 1 — sickness, vacation, or departure halts work. Pair programming, mob programming, code review, and rotation distribute knowledge. Documentation is necessary but not sufficient." },
    { type:"single", cat:"team", q:"At the Daily Scrum a Developer says 'I was waiting on the database team all day.' What does this indicate?",
      opts:[{t:"A cross-functional gap — the team should reduce dependence on external teams, either by growing the skill in-team or by structural change",c:true},{t:"That the database team is uncooperative"},{t:"That the Developer should be reassigned"},{t:"That this is normal in Scrum"}],
      exp:"Outside dependencies are flow impediments. Sustained external waits indicate the Scrum Team is not truly cross-functional. SMs help the org reorganize so teams own end-to-end value delivery." },
    { type:"single", cat:"team", q:"Mob programming is best described as:",
      opts:[{t:"All (or most) of the team working on the same item, at the same computer, at the same time — typified by 'driver + navigators' rotation",c:true},{t:"A meeting to discuss code"},{t:"A code review of a finished pull request"},{t:"A team-wide hackathon"}],
      exp:"Mob programming (Woody Zuill) extends pair programming to the whole team — one keyboard (driver), the rest navigate, with frequent rotation. Used for complex problems, onboarding, or breaking down knowledge silos." },
    { type:"single", cat:"team", q:"A team practices 'swarming' on items. What does this mean?",
      opts:[{t:"Multiple Developers focus together on the same item to finish it faster, rather than each working on a separate item in parallel",c:true},{t:"Working on as many items in parallel as possible"},{t:"Adding more meetings to coordinate"},{t:"Splitting items further before starting"}],
      exp:"Swarming reduces WIP and cycle time by concentrating effort. It improves shared understanding and limits 'last-mile' integration risks. Common in cross-functional teams with high collaboration." },
    { type:"single", cat:"team", q:"A team is forming and stakeholders expect immediate velocity. What is the most accurate framing?",
      opts:[{t:"Forming teams pass through stages (Tuckman's forming-storming-norming-performing) and need time and stable membership to become high-performing",c:true},{t:"All teams perform identically from day one"},{t:"Velocity is a fixed personal property of each Developer"},{t:"New teams should be measured by output immediately"}],
      exp:"Tuckman's model (forming, storming, norming, performing) describes typical team development stages. Stability matters — re-staffing resets the cycle. SMs and leaders set realistic expectations and protect stability." },

    /* ---------------- CI/CD & PROGRAMMING — extended ---------------- */
    { type:"single", cat:"practices", q:"DORA defines four key software delivery metrics. Which TWO measure speed?",
      opts:[{t:"Deployment Frequency and Lead Time for Changes",c:true},{t:"Change Failure Rate and Time to Restore Service"},{t:"Velocity and Story Points"},{t:"Cycle Time and Throughput"}],
      exp:"DORA's four key metrics: Deployment Frequency + Lead Time for Changes (speed/throughput) and Change Failure Rate + Time to Restore Service (stability). Elite teams excel at both speed AND stability." },
    { type:"single", cat:"practices", q:"DORA's 'Change Failure Rate' measures:",
      opts:[{t:"The percentage of deployments to production that result in degraded service requiring remediation (rollback, hotfix, etc.)",c:true},{t:"How fast features are coded"},{t:"How many bugs are in the codebase"},{t:"How many Developers are on the team"}],
      exp:"Change Failure Rate is a stability metric — what percentage of deployments cause production problems. Lower is better. Elite teams achieve <15%. It pairs with Time to Restore to measure resilience." },
    { type:"single", cat:"practices", q:"A feature toggle (feature flag) is best used to:",
      opts:[{t:"Decouple deployment from release — code ships frequently but the feature is enabled/disabled per environment or audience",c:true},{t:"Permanently hide all code in production"},{t:"Replace automated tests"},{t:"Prevent any rollback"}],
      exp:"Feature toggles let teams deploy continuously without exposing incomplete features. They enable trunk-based development (no long-lived branches), gradual rollouts, A/B tests, and quick disablement. Toggles should be short-lived and tracked." },
    { type:"single", cat:"practices", q:"A canary deployment releases a new version:",
      opts:[{t:"To a small subset of users or servers first; if metrics look healthy, the rollout is widened — early signal before full exposure",c:true},{t:"To 100% of users instantly"},{t:"Only to internal testers, never production"},{t:"Only on Fridays"}],
      exp:"Canary releases use incremental rollout to detect issues with limited blast radius. Pair with monitoring + automated rollback for safe continuous deployment." },
    { type:"single", cat:"practices", q:"Blue-green deployment is characterized by:",
      opts:[{t:"Two identical production environments — traffic is switched from the current (blue) to the new (green) version, enabling fast rollback",c:true},{t:"Two teams working on different features"},{t:"Two different versions of the same code"},{t:"Deploying to test before production"}],
      exp:"Blue-green keeps an idle parallel environment with the new version. Cut-over is by traffic switch (load balancer, DNS). Rollback is a switch back. Requires double infrastructure but minimizes downtime and rollback time." },
    { type:"single", cat:"practices", q:"In a healthy CI pipeline, an integration build should:",
      opts:[{t:"Run on every commit, be fast (typically minutes), and fail loudly if anything is broken",c:true},{t:"Only run on Fridays"},{t:"Take hours so it can run everything"},{t:"Be a manual step the team triggers occasionally"}],
      exp:"CI requires frequent, fast, automated integration. If the pipeline is slow, teams batch changes and lose the fast-feedback benefit. If it doesn't run on every commit or doesn't fail visibly, teams accumulate hidden integration debt." },
    { type:"single", cat:"practices", q:"Continuous Integration's most important behavioral practice is:",
      opts:[{t:"Everyone integrates to the mainline at least daily, and a broken build is the team's top priority to fix",c:true},{t:"Use any CI tool from a vendor"},{t:"Run tests once per release"},{t:"Branch protection rules"}],
      exp:"CI is a discipline, not a tool. Daily (or more frequent) integration to mainline + immediate response to broken builds is the practice. Tools enable but don't replace the discipline." },
    { type:"single", cat:"practices", q:"A CI build is broken for 6 hours. What's the most aligned team response?",
      opts:[{t:"Treat fixing the build as top priority — no new work should compound on a broken trunk",c:true},{t:"Ignore it; keep adding new features"},{t:"Wait for the Scrum Master to fix it"},{t:"Disable the failing tests"}],
      exp:"A broken CI is an emergency. Continuing to add commits on top compounds the problem and erodes trust in the pipeline. The team stops the line (Andon) to fix it." },
    { type:"single", cat:"practices", q:"Continuous Delivery (CD) means:",
      opts:[{t:"Software is always in a releasable state and can be deployed to production at any time, on demand",c:true},{t:"Every commit is automatically deployed to production"},{t:"Only releases on Friday"},{t:"Deploying only after long QA cycles"}],
      exp:"Continuous Delivery = software is always production-ready, deployable on a button press. Continuous Deployment goes further: every passing commit is auto-deployed. CD is a prerequisite for Continuous Deployment." },
    { type:"single", cat:"practices", q:"'Shift-left' on quality and security means:",
      opts:[{t:"Move quality/security activities earlier in the development cycle — into design, coding, and CI — instead of late-stage gates",c:true},{t:"Move all testing to the right of the pipeline"},{t:"Use left-handed keyboards"},{t:"Test only in production"}],
      exp:"Shift-left moves what was traditionally end-of-cycle work earlier — embedded in development. Examples: linting, SAST/DAST in CI, threat modeling in design, security training for Developers. Outcome: earlier defect detection, lower fix cost." },
    { type:"single", cat:"practices", q:"What is 'branch by abstraction' used for?",
      opts:[{t:"Refactoring or replacing large parts of a system incrementally on trunk — using an abstraction layer instead of a long-lived branch",c:true},{t:"Avoiding all branches"},{t:"Replacing the version control system"},{t:"Hiding code from QA"}],
      exp:"Branch by abstraction (Jez Humble, Paul Hammant) lets teams refactor or replace a component without a long-lived branch. Introduce an abstraction, implement the new behind it, switch over, retire the old. Enables CI during large changes." },
    { type:"single", cat:"practices", q:"DORA's 'Time to Restore Service' measures:",
      opts:[{t:"How long it takes to recover from an incident in production — a stability metric",c:true},{t:"How long it takes to write code"},{t:"How long deploys take"},{t:"How long the Sprint is"}],
      exp:"Time to Restore (MTTR) is one of DORA's two stability metrics. Elite teams restore in under an hour. Investment in monitoring, automated rollback, and runbooks shortens this." },
    { type:"single", cat:"practices", q:"Infrastructure as Code (IaC) supports Scrum/CI by:",
      opts:[{t:"Treating infrastructure as versioned, reviewable, testable artifacts that move through the same pipeline as application code",c:true},{t:"Requiring no documentation"},{t:"Eliminating the need for security review"},{t:"Removing the need for environments"}],
      exp:"IaC (Terraform, Pulumi, etc.) makes infrastructure changes auditable, repeatable, and testable. Environments become reproducible. Drift is detectable. This supports CI/CD's promise of consistent deployments." },
    { type:"single", cat:"practices", q:"A team adds a manual approval gate to every deployment because of past incidents. From a DORA perspective, this typically:",
      opts:[{t:"Slows lead time and deployment frequency without proportionate improvement in change failure rate — peer review + automated checks usually outperform manual gates",c:true},{t:"Always reduces incidents"},{t:"Is required by Scrum"},{t:"Has no measurable effect"}],
      exp:"DORA research has shown manual approval gates correlate with worse outcomes — slower delivery and equal or worse failure rates. Peer review + automated checks + canary + fast rollback outperform heavy approval processes." },

    /* ---------------- TESTING & TDD — extended ---------------- */
    { type:"single", cat:"testing", q:"The Test Pyramid recommends:",
      opts:[{t:"Many fast unit tests, fewer integration tests, and a small number of end-to-end tests",c:true},{t:"Many end-to-end tests, no unit tests"},{t:"Equal numbers at every level"},{t:"Only manual tests"}],
      exp:"The Test Pyramid (Mike Cohn) prioritizes a wide base of fast, isolated unit tests; a smaller middle of integration tests; and a thin top of end-to-end tests. End-to-end tests are slow and brittle — useful but expensive." },
    { type:"single", cat:"testing", q:"'Arrange-Act-Assert' is a pattern for structuring:",
      opts:[{t:"Unit tests — setup state (Arrange), perform the action (Act), verify the result (Assert)",c:true},{t:"User stories"},{t:"Acceptance criteria"},{t:"Sprint Planning agenda"}],
      exp:"AAA is a clarity pattern for tests. Each section is visually separated. Improves readability and helps reviewers spot tests that do too much. Variants: Given-When-Then (BDD), Setup-Exercise-Verify-Teardown (xUnit)." },
    { type:"single", cat:"testing", q:"In TDD, what is the purpose of the 'refactor' step?",
      opts:[{t:"Improve internal design while keeping all tests green — preventing accumulation of duplication and complexity",c:true},{t:"Write new features"},{t:"Delete tests"},{t:"Add new requirements"}],
      exp:"Red-green-refactor: Red (failing test), Green (minimal code to pass), Refactor (improve design with tests as safety net). Skipping refactor leads to messy code; refactoring without tests is reckless." },
    { type:"tf", cat:"testing", q:"Mocking every external dependency in unit tests guarantees those integrations work.",
      opts:[{t:"False",c:true},{t:"True"}],
      exp:"Mocks verify unit behavior in isolation but NOT real integration. Integration tests, contract tests, and end-to-end tests exercise actual dependencies. Over-mocking can produce green unit tests while integration breaks." },
    { type:"single", cat:"testing", q:"Contract testing (e.g., Pact) is most useful when:",
      opts:[{t:"Independent services interact and you want to verify their integration contract without running expensive end-to-end tests against all services",c:true},{t:"Replacing all unit tests"},{t:"Only for monoliths"},{t:"Only for UI testing"}],
      exp:"Contract testing verifies provider/consumer agreement at boundaries. Each side tests against the contract. Catches integration issues earlier and cheaper than full end-to-end suites. Especially valuable in microservices." },
    { type:"single", cat:"testing", q:"Mutation testing measures:",
      opts:[{t:"Test suite effectiveness — by introducing small code changes (mutants) and checking whether tests catch them",c:true},{t:"Code complexity"},{t:"Test execution speed"},{t:"Number of bugs in production"}],
      exp:"Mutation testing (e.g., Pitest, Stryker) modifies code and re-runs tests. A surviving mutant means tests didn't catch the change — they may exercise code but not assert effectively. Complements coverage metrics, which only show what executes." },
    { type:"single", cat:"testing", q:"Test coverage of 100% statement coverage means:",
      opts:[{t:"Every statement executes during tests — but says NOTHING about whether tests assert correctness or branch behavior",c:true},{t:"The code is bug-free"},{t:"All requirements are tested"},{t:"All edge cases are handled"}],
      exp:"100% coverage is a measure of execution, not assertion. Tests can run lines without asserting anything meaningful. Useful as a floor (very low coverage signals problems) but not a ceiling (high coverage doesn't prove quality)." },
    { type:"single", cat:"testing", q:"A flaky test (passes sometimes, fails sometimes) should be:",
      opts:[{t:"Treated as a defect — investigated and fixed, or quarantined; never ignored, because flaky tests destroy trust in the entire suite",c:true},{t:"Re-run until it passes"},{t:"Deleted silently"},{t:"Disabled permanently without fixing"}],
      exp:"Flaky tests erode trust — once one is ignored, all failures become suspect. Fix the cause (timing, state leak, environment) or quarantine + create a ticket. Persistent flakiness signals deeper design issues." },
    { type:"single", cat:"testing", q:"Exploratory testing is best described as:",
      opts:[{t:"Simultaneous learning, test design, and test execution by a skilled tester — uncovers issues automated tests won't predict",c:true},{t:"Random clicking without strategy"},{t:"A replacement for automated tests"},{t:"Only for performance"}],
      exp:"Exploratory testing (James Bach, Cem Kaner) is structured and skilled — testers form hypotheses, probe, and learn in parallel. It complements automation by surfacing the unpredictable. Charters and time-boxed sessions structure the work." },
    { type:"single", cat:"testing", q:"In TDD, writing the test AFTER the production code is:",
      opts:[{t:"Not TDD — it loses TDD's design-driving property; the test then describes what was built rather than what should be built",c:true},{t:"Equivalent to TDD"},{t:"Faster than TDD"},{t:"Required by the Scrum Guide"}],
      exp:"TDD's value is in design pressure — writing the test first forces clarity about behavior and surfaces design issues. Tests written after may verify behavior but miss the design feedback. Both have value; only test-first is TDD." },
    { type:"single", cat:"testing", q:"BDD's Given-When-Then format is primarily used to:",
      opts:[{t:"Express behavior in a ubiquitous language readable by business + technical stakeholders, bridging requirements and tests",c:true},{t:"Replace all unit tests"},{t:"Only for UI testing"},{t:"Document architecture"}],
      exp:"BDD (Dan North) emphasizes shared understanding. Given-When-Then scenarios connect business intent to executable specifications. Tools like Cucumber/SpecFlow link these scenarios to code." },
    { type:"single", cat:"testing", q:"A team writes one giant unit test that exercises 30 scenarios. The issue is:",
      opts:[{t:"Tests should be focused — one behavior per test — so failures point precisely to what broke and tests remain readable",c:true},{t:"There's no issue if it covers everything"},{t:"Tests must be in alphabetical order"},{t:"Giant tests are required for complex logic"}],
      exp:"Focused tests fail informatively and are easier to maintain. Giant tests obscure causes ('something in the 30 scenarios broke'), tangle setup, and resist refactoring. Split by behavior, not by code." },
    { type:"single", cat:"testing", q:"Property-based testing differs from example-based testing in that:",
      opts:[{t:"It generates many inputs and checks invariant properties hold — surfacing edge cases humans wouldn't think of",c:true},{t:"It's only for UI"},{t:"It runs slower than every other approach"},{t:"It replaces all unit tests"}],
      exp:"Property-based tests (QuickCheck, Hypothesis, FsCheck) assert invariants (e.g., 'reversing a list twice equals the original') across generated inputs. Catches edge cases overlooked by example-based tests. Complement to traditional TDD." },
    { type:"single", cat:"testing", q:"A pyramid 'inverted' (many UI tests, few unit tests) typically results in:",
      opts:[{t:"Slow, flaky test suites that erode developer confidence and slow CI",c:true},{t:"Higher confidence at lower cost"},{t:"Faster builds"},{t:"More reliable deployments"}],
      exp:"Inverted pyramids (ice-cream cones) suffer from slow, brittle suites. Tests take long, flake often, and don't pinpoint failure causes. Rebalance by pushing tests down: extract logic from UI, write unit tests for it, prune redundant E2E." },
    { type:"single", cat:"testing", q:"A team writes tests only after a defect is found in production. This is:",
      opts:[{t:"Reactive — useful as regression protection but doesn't prevent defects; emergent design and TDD aim to prevent them first",c:true},{t:"Equivalent to TDD"},{t:"Sufficient quality discipline"},{t:"All that Scrum requires"}],
      exp:"Reactive tests prevent regression of known defects but don't surface the next one. Proactive practices (TDD, BDD, pairing, code review) prevent defects. Combined: test-first for new code + regression tests when bugs occur." },

    /* ---------------- QUALITY & DOD — extended ---------------- */
    { type:"single", cat:"quality", q:"Acceptance criteria for a Product Backlog item and the Definition of Done are:",
      opts:[{t:"Different — acceptance criteria are item-specific behavior; DoD is the Increment-level quality bar that applies to all work",c:true},{t:"Synonyms"},{t:"Both written by the Scrum Master"},{t:"Both optional"}],
      exp:"DoD is one quality bar all work must pass to be 'Done.' Acceptance criteria define when a specific PBI satisfies its intent. An item that meets criteria but not DoD is not Done; an item meeting DoD but failing criteria is built but not 'right.'" },
    { type:"single", cat:"quality", q:"A Scrum Team starts with a weak DoD (manual deploys, manual tests). Over time the DoD should:",
      opts:[{t:"Strengthen as the team's engineering capability grows — automation, security scans, accessibility, etc. become part of 'Done'",c:true},{t:"Stay frozen forever"},{t:"Weaken to keep velocity high"},{t:"Only change by management decree"}],
      exp:"DoD evolves with the team's capability. Initially it may be modest; as automation, monitoring, and practices mature, DoD strengthens. This is empirical: inspect-adapt the DoD itself periodically." },
    { type:"tf", cat:"quality", q:"A Product Owner can override the Definition of Done to ship a feature for an urgent deadline.",
      opts:[{t:"False",c:true},{t:"True"}],
      exp:"The DoD is the commitment for the Increment. Shipping below DoD creates undone work, hidden defects, and tech debt. The PO may renegotiate scope (which item) but not quality (DoD). SMs coach POs and stakeholders on this distinction." },
    { type:"single", cat:"quality", q:"Multiple teams work on one product with different DoDs (one strong, one weak). What problem does this create?",
      opts:[{t:"The integrated Increment's quality is set by the weakest DoD — and the gap creates hidden 'undone work'",c:true},{t:"No problem"},{t:"Faster delivery"},{t:"Stronger empiricism"}],
      exp:"The product's actual quality is bounded by the weakest team's DoD. Shared products need shared minimum DoDs to ensure the integrated Increment is truly Done. Teams may add stricter local criteria." },
    { type:"single", cat:"quality", q:"Nonfunctional requirements (performance, security, accessibility) are best handled by:",
      opts:[{t:"Building them into the Definition of Done so every Increment satisfies them — not deferring to a 'hardening Sprint' at the end",c:true},{t:"Treating them as Product Backlog items only after release"},{t:"Adding a Sprint at the end for NFRs"},{t:"Ignoring them"}],
      exp:"NFRs apply continuously. Deferring NFRs creates undone work, late surprises, and 'hardening Sprints' (a Scrum anti-pattern). Embedding NFRs in DoD makes every Increment trustworthy." },
    { type:"single", cat:"quality", q:"Done means the work is:",
      opts:[{t:"Verified against the DoD — generally usable and potentially releasable; not the same as 'released' but releasable",c:true},{t:"Released to all customers"},{t:"Demo-ready but possibly buggy"},{t:"Approved by stakeholders at Sprint Review"}],
      exp:"Done = meets DoD = potentially releasable. The PO decides if/when to actually release. The Sprint Review doesn't grant Done; the DoD does." },
    { type:"single", cat:"quality", q:"Technical debt that accumulates without being repaid most directly degrades:",
      opts:[{t:"The team's ability to add new value (Ability to Innovate in EBM terms) — change becomes slower, riskier, and more costly",c:true},{t:"Sprint Goal phrasing"},{t:"Stakeholder enthusiasm"},{t:"Team size"}],
      exp:"Technical debt compounds. Each new feature is harder; refactoring grows in cost; bugs multiply. In EBM, this hits Ability to Innovate (and indirectly Current Value, as defects rise and delivery slows)." },
    { type:"single", cat:"quality", q:"A new team has no DoD and no organizational standard. What's the most aligned action?",
      opts:[{t:"Create an initial DoD as a Scrum Team — strong enough that work is usable, modest enough that the team can hit it, and evolve from there",c:true},{t:"Wait for management to write one"},{t:"Skip DoD until it's needed"},{t:"Use another team's DoD verbatim"}],
      exp:"Per the Scrum Guide 2020, if no org standard exists, the Scrum Team must create a DoD appropriate for the product. Start with what's actionable and strengthen over time." },
    { type:"single", cat:"quality", q:"The DoD should be:",
      opts:[{t:"Transparent and shared — known by Developers, PO, stakeholders, and the organization, so everyone has the same understanding of Done",c:true},{t:"Secret to avoid pressure"},{t:"Different for each Developer"},{t:"Only known to the Scrum Master"}],
      exp:"DoD is a transparency artifact. Hiding it undermines trust and inspection. Stakeholders rely on knowing what Done means to interpret the Increment. Lack of shared DoD is a frequent source of misalignment." },
    { type:"single", cat:"quality", q:"A code review reveals serious quality issues but the Sprint ends in 1 hour. The PO suggests accepting the item now and fixing it next Sprint. The team should:",
      opts:[{t:"Not accept the item as Done — the DoD must hold; the item is not Done and returns to the Product Backlog or rolls in next Sprint",c:true},{t:"Accept and fix later — the PO is the authority"},{t:"Override the code review"},{t:"Skip the DoD this once"}],
      exp:"DoD discipline matters most when convenient to bend. Accepting undone work creates hidden debt and hurts the Increment. The work returns to the Backlog; the PO can prioritize the fix." },
    { type:"single", cat:"quality", q:"'Done Done' (or 'really Done') as a colloquial term highlights:",
      opts:[{t:"That teams sometimes have weak DoDs and call work 'Done' when it isn't truly releasable — pushing toward strong DoD",c:true},{t:"A new Scrum artifact"},{t:"A Scrum.org certification"},{t:"A formal phase after the Sprint"}],
      exp:"'Done Done' surfaces the gap between weak DoDs (just-passing-tests) and strong DoDs (releasable, monitored, documented). The remedy is strengthening the DoD until 'Done' actually means 'really Done.'" },
    { type:"single", cat:"quality", q:"Accessibility (a11y) as part of the DoD is:",
      opts:[{t:"A quality dimension that should be built in, not bolted on — making it part of DoD prevents costly retrofits and excludes-no-one",c:true},{t:"Optional in modern Scrum"},{t:"Only for government products"},{t:"Handled at the end of the project"}],
      exp:"Accessibility late = expensive and incomplete. Building a11y into DoD (keyboard navigation, contrast, semantics, screen-reader support) ensures every Increment is inclusive from the start." },
    { type:"single", cat:"quality", q:"Security review and threat modeling as DoD criteria are:",
      opts:[{t:"Examples of 'shifting left' on security — moving practices earlier into development rather than waiting for a late security gate",c:true},{t:"A waste of Sprint time"},{t:"Required only after public release"},{t:"The Scrum Master's job alone"}],
      exp:"Late security findings are expensive and risky. Integrating security into DoD — threat models, SAST, dependency checks, pen-test review — makes secure-by-default the team's working mode." },
    { type:"single", cat:"quality", q:"A team that periodically inspects and updates its DoD demonstrates:",
      opts:[{t:"Empiricism applied to the team's own working agreements — the DoD itself is subject to inspection and adaptation",c:true},{t:"Indecision"},{t:"A Scrum anti-pattern"},{t:"Lack of discipline"}],
      exp:"DoD evolution is a sign of a healthy, improving team. Retrospectives and reviews often surface DoD changes (add automation step, add monitoring, drop manual check). Static DoDs miss growth opportunities." },
    { type:"single", cat:"quality", q:"At Sprint Review, the Scrum Team shows work that meets acceptance criteria but not DoD. Per the Scrum Guide 2020:",
      opts:[{t:"It cannot be presented as part of the Increment — it is not Done",c:true},{t:"It can be shown if the PO approves"},{t:"It is fine for the first half of the year"},{t:"It is fine if stakeholders don't notice"}],
      exp:"The Scrum Guide 2020 is unambiguous: work that doesn't meet DoD cannot be presented as part of the Increment at Sprint Review. The team may show progress, but it isn't Done." },

    /* ---------------- DESIGN & ARCHITECTURE — extended ---------------- */
    { type:"single", cat:"design", q:"Evolutionary architecture (Ford/Parsons/Kua) treats architecture as:",
      opts:[{t:"Something that evolves over time guided by fitness functions — not fixed up-front, but constantly evaluated and adapted",c:true},{t:"Fixed at the project start"},{t:"Owned by an architecture team outside Scrum"},{t:"A single document signed off before coding"}],
      exp:"Evolutionary architecture treats architectural decisions as deferrable and revisable. Fitness functions (automated checks on properties — performance, security, modularity) keep the system aligned to its intended characteristics as it changes." },
    { type:"single", cat:"design", q:"The Hexagonal (Ports and Adapters) architecture (Cockburn) is primarily useful for:",
      opts:[{t:"Isolating business logic from external systems via well-defined ports, making testing and swap-outs easier",c:true},{t:"Storing data in hexagons"},{t:"Performance"},{t:"Replacing version control"}],
      exp:"Hexagonal isolates domain logic from external dependencies (DB, UI, network). Ports define interfaces; adapters implement them. Outcome: business logic is testable in isolation; dependencies are pluggable; tests don't require a database." },
    { type:"single", cat:"design", q:"SOLID's 'D' (Dependency Inversion) states:",
      opts:[{t:"High-level modules should depend on abstractions, not concrete implementations — and vice versa",c:true},{t:"Use dependency injection libraries always"},{t:"Avoid all dependencies"},{t:"Use only third-party code"}],
      exp:"DIP makes systems easier to test, change, and reason about. Abstractions decouple layers. DI containers are one implementation technique, not the principle itself." },
    { type:"single", cat:"design", q:"High coupling and low cohesion typically indicate:",
      opts:[{t:"A design that resists change — small modifications ripple widely, modules do too many unrelated things",c:true},{t:"Excellent design"},{t:"Fast performance"},{t:"Easy testability"}],
      exp:"Coupling = degree of interconnection (lower is generally better). Cohesion = focus of a module (higher is better). High coupling + low cohesion = brittle, hard-to-test, hard-to-change. Refactor toward looser coupling and higher cohesion." },
    { type:"single", cat:"design", q:"Domain-Driven Design's 'bounded context' is:",
      opts:[{t:"An explicit boundary within which a particular domain model is defined and applicable — the same word can mean different things in different contexts",c:true},{t:"A single shared model across the entire enterprise"},{t:"A team boundary only"},{t:"Just a folder structure"}],
      exp:"Bounded contexts (Eric Evans) recognize that one ubiquitous language can't span the entire enterprise. Each context has its own model. Integration is explicit (context mapping). Misaligned with team structure produces friction (Conway's Law)." },
    { type:"single", cat:"design", q:"A Walking Skeleton is:",
      opts:[{t:"A thin end-to-end implementation of a feature/system covering all major layers, used to validate architecture and CI early",c:true},{t:"A complete UI without backend"},{t:"A design document"},{t:"A rough wireframe"}],
      exp:"A Walking Skeleton (Cockburn) is the minimal end-to-end slice that exercises every architectural layer. It de-risks integration, deployment, and CI early. Subsequent work adds flesh on a verified skeleton." },
    { type:"single", cat:"design", q:"A team adds a complex microservice 'because microservices are best practice.' What's the issue?",
      opts:[{t:"Architectural decisions should be driven by the problem, not by trend — adding distribution costs (network, ops, data consistency) without need",c:true},{t:"Microservices are always wrong"},{t:"It's an excellent practice always"},{t:"Architects make these decisions, not teams"}],
      exp:"Microservices solve specific problems (team autonomy, independent deploys, scaling boundaries) at significant cost (network, consistency, observability). Defaulting to them without justification adds complexity without benefit." },
    { type:"single", cat:"design", q:"Refactoring is:",
      opts:[{t:"Changing internal structure without changing external behavior — keeping tests green throughout",c:true},{t:"Adding new features"},{t:"Rewriting from scratch"},{t:"Deleting tests to go faster"}],
      exp:"Martin Fowler's definition: 'a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.' Tests stay green. Distinct from rewriting and from feature work." },
    { type:"single", cat:"design", q:"A team plans to use a spike to:",
      opts:[{t:"Explore an unknown technical question or risk in a time-boxed effort that produces learning (and possibly throwaway code)",c:true},{t:"Force a Developer to work harder"},{t:"Add features faster"},{t:"Replace refinement"}],
      exp:"A spike is a learning activity (Beck, XP). Time-boxed exploration to reduce uncertainty. Output is knowledge — sometimes throwaway code, sometimes a usable starting point. Differentiated from regular work because outcome is information." },
    { type:"single", cat:"design", q:"Kent Beck's 'Make the change easy (warning: this may be hard), then make the easy change' captures:",
      opts:[{t:"Often the path to a change is not direct — first refactor so the change becomes simple, then make it",c:true},{t:"Skip refactoring"},{t:"Always rewrite"},{t:"Always avoid hard work"}],
      exp:"Direct attempts at change in tangled code create chaos. Beck's principle: clean up first (make the change easy — possibly via refactoring), then perform the now-easy change. Often faster overall than hacking through complexity." },

    /* ---------------- BACKLOG REFINEMENT — extended ---------------- */
    { type:"single", cat:"refinement", q:"Vertical slicing of a Product Backlog item is preferred over horizontal slicing because:",
      opts:[{t:"Vertical slices deliver end-to-end value through all architectural layers — testable, demonstrable, releasable",c:true},{t:"Vertical slices are required by the Scrum Guide"},{t:"Horizontal slices are faster"},{t:"There's no difference"}],
      exp:"Horizontal slices (e.g., 'all DB work,' 'all UI work') don't deliver value individually and stall validation. Vertical slices cut through every layer, producing thin but functioning capabilities. Verifiable, value-generating, supports empiricism." },
    { type:"single", cat:"refinement", q:"'Elephant carpaccio' refers to:",
      opts:[{t:"Slicing a large item into very thin, end-to-end slices, each independently shippable",c:true},{t:"Eating during the Daily Scrum"},{t:"A type of refactoring"},{t:"A retrospective format"}],
      exp:"Elephant carpaccio (Alistair Cockburn) — slicing a 'huge' (elephant-sized) item into thin (carpaccio) end-to-end slices. Each slice delivers a small but real piece of value. Forces clarity on what's truly essential per slice." },
    { type:"single", cat:"refinement", q:"A team uses 'Story Mapping' (Jeff Patton). Its primary purpose is:",
      opts:[{t:"Visualizing the user journey to preserve big-picture context while ordering and prioritizing backlog items",c:true},{t:"Replacing the Product Backlog"},{t:"Estimating story points"},{t:"Choosing testing frameworks"}],
      exp:"Story Mapping organizes items along user activities (the 'backbone') and slices for releases. Preserves narrative coherence the flat backlog can lose. Surfaces gaps. Output flows into the Product Backlog." },
    { type:"single", cat:"refinement", q:"INVEST asks PBIs to be Negotiable. Negotiable means:",
      opts:[{t:"The item is a placeholder for a conversation — details emerge from collaboration, not a fixed contract",c:true},{t:"The team can change the price"},{t:"Stakeholders can override the PO"},{t:"Items can be skipped"}],
      exp:"Ron Jeffries: 'card, conversation, confirmation.' The card is a reminder; conversation creates shared understanding; confirmation is acceptance criteria. Items being negotiable means they invite collaboration, not just acceptance." },
    { type:"single", cat:"refinement", q:"Splitting by 'workflow steps' (SPIDR's 'Path') means:",
      opts:[{t:"Breaking a large item along distinct user workflow paths or scenarios that can each be delivered independently",c:true},{t:"Splitting by team member"},{t:"Splitting by sprint"},{t:"Splitting by file"}],
      exp:"SPIDR's 'P' (Path) splits along user workflows — e.g., 'happy path first, then error cases,' or 'paid users first, then free.' Each path produces value independently and reduces risk of biting off too much." },
    { type:"single", cat:"refinement", q:"Relative estimation (e.g., story points) is useful because:",
      opts:[{t:"Humans estimate relative size more reliably than absolute duration — and the team learns its own scale empirically",c:true},{t:"It produces exact hour predictions"},{t:"It's required by Scrum"},{t:"It eliminates uncertainty"}],
      exp:"Relative sizing (planning poker, t-shirt sizes) leverages human intuition for comparison. Combined with throughput data, it supports forecasting without false precision. Hour estimates are notoriously inaccurate." },
    { type:"single", cat:"refinement", q:"A Developer asks 'should we estimate items in the Product Backlog if we know forecasting is uncertain?' The most aligned answer is:",
      opts:[{t:"Estimation is a learning conversation — it surfaces hidden complexity and risks; the number is less important than the discussion",c:true},{t:"No, never estimate"},{t:"Yes, and treat the estimate as a binding contract"},{t:"Estimate exact hours always"}],
      exp:"The conversation around estimation often produces more value than the number — surfaces assumptions, complexity, and risks. The Scrum Guide says Developers size items; it doesn't mandate story points or hours." },
    { type:"single", cat:"refinement", q:"Refinement is most useful when it produces:",
      opts:[{t:"Smaller, clearer items ready for upcoming Sprints with shared understanding across the Scrum Team",c:true},{t:"A frozen contract"},{t:"A list of all features for the next year"},{t:"Detailed task lists for Sprint execution"}],
      exp:"Refinement adds clarity (the item is understood), order, and right-sized scope. Outcome: 'ready' items for upcoming Sprints, not exhaustive forward planning. Top of backlog is detailed; bottom is broad." },
    { type:"single", cat:"refinement", q:"A team treats refinement as a single weekly meeting only. Per the Scrum Guide 2020, this is:",
      opts:[{t:"Acceptable but not ideal — refinement is an ongoing activity, often happening continuously, not just in a single fixed session",c:true},{t:"Required by Scrum"},{t:"Mandatory weekly"},{t:"Forbidden"}],
      exp:"The Scrum Guide 2020 calls refinement an ongoing activity, not a formal event. Teams may schedule sessions; many also refine in conversations, pairings, or async. Single meeting only often misses opportunities." },
    { type:"single", cat:"refinement", q:"A 'Definition of Ready' applied as a hard gate before items enter Sprint Planning is:",
      opts:[{t:"Not a Scrum concept — and applied as a gate often becomes an anti-pattern by creating waterfall-style handoffs and a separate analysis phase",c:true},{t:"Required by the Scrum Guide"},{t:"Mandatory in Scrum"},{t:"A Scrum artifact"}],
      exp:"The Scrum Guide does not define a DoR. As a heuristic for 'small + clear,' it's fine; as a strict gate, it tends to recreate phase-gates ('analysis Sprint' upstream). The Scrum Team decides what 'ready enough' means." },

    /* ---------------- NEW MULTI-SELECT — pushes multi share higher ---------------- */
    { type:"multi", cat:"scrum", q:"Which Scrum Values are most directly tested when a Sprint runs into trouble? (select 3)",
      opts:[
        {t:"Courage — to admit incomplete work and surface impediments",c:true},
        {t:"Openness — to share difficulties early rather than at the end",c:true},
        {t:"Commitment — to the Sprint Goal as a team, not just to scope",c:true},
        {t:"Velocity — to maximize point throughput at any cost"},
        {t:"Compliance — to follow each assigned task strictly"}
      ],
      exp:"Courage, Openness, and Commitment are explicit Scrum Values that the Scrum Guide 2020 highlights — they show up most when work gets hard. Velocity and Compliance are not Scrum Values; chasing them often degrades the empirical cycle." },
    { type:"multi", cat:"scrum", q:"Mid-Sprint the Developers discover scope larger than estimated. Which actions are consistent with the Scrum Guide 2020? (select 3)",
      opts:[
        {t:"Renegotiate scope with the Product Owner without endangering the Sprint Goal",c:true},
        {t:"Adjust the Sprint Backlog plan as Developers learn more",c:true},
        {t:"Surface the discovery at the Daily Scrum to coordinate response",c:true},
        {t:"Extend the Sprint length to fit the additional work"},
        {t:"Skip Definition of Done items to deliver on the original forecast"}
      ],
      exp:"Scope flexes around a fixed Sprint Goal; the plan emerges; the Daily Scrum is the natural place to surface and adjust. Sprint length and DoD are not negotiable." },
    { type:"multi", cat:"team", q:"Which practices help a Scrum Team reduce knowledge silos? (select 3)",
      opts:[
        {t:"Pair programming on tricky work",c:true},
        {t:"Mob programming for onboarding and complex problems",c:true},
        {t:"Code review combined with intentional ownership rotation",c:true},
        {t:"Permanently assigning each Developer to one isolated module"},
        {t:"Treating written documentation as the only knowledge-transfer mechanism"}
      ],
      exp:"Pairing, mobbing, and rotation distribute knowledge socially — faster and stickier than docs alone. Permanent narrow ownership creates bus-factor risks and flow impediments." },
    { type:"multi", cat:"team", q:"Which statements correctly describe a cross-functional Scrum Team? (select 3)",
      opts:[
        {t:"Collectively has all skills needed to create value each Sprint",c:true},
        {t:"Reduces dependence on outside teams or specialists",c:true},
        {t:"Members willing to work outside their narrow specialty when needed",c:true},
        {t:"Every Developer personally has every skill"},
        {t:"Specialists who refuse to help outside their area"}
      ],
      exp:"Cross-functionality is about the team's collective capability + willingness to collaborate across boundaries — not about each person being a generalist or specialists locking down their lane." },
    { type:"multi", cat:"team", q:"Which behaviors support psychological safety on a Scrum Team? (select 3)",
      opts:[
        {t:"Treating mistakes as systemic learning opportunities",c:true},
        {t:"Making 'I don't know' a normal and respected statement",c:true},
        {t:"Running blameless post-mortems after incidents",c:true},
        {t:"Publicly punishing the Developer responsible for a production bug"},
        {t:"Ranking Developers by lines of code shipped each Sprint"}
      ],
      exp:"Psychological safety (Edmondson) is built by separating people from systems, normalizing learning, and resisting blame. Public punishment and individual ranking destroy it." },
    { type:"multi", cat:"practices", q:"Which behaviors characterize effective Continuous Integration? (select 3)",
      opts:[
        {t:"Everyone integrates to the mainline at least daily",c:true},
        {t:"A fast automated build that runs on every commit",c:true},
        {t:"A broken build is the team's top priority to fix",c:true},
        {t:"Manual integration once per week in a coordination meeting"},
        {t:"Skipping the build pipeline when releases are imminent"}
      ],
      exp:"CI is a discipline — frequent integration, fast feedback, immediate response to breaks. Manual cadences, batch integration, and skipping the pipeline all defeat its purpose." },
    { type:"multi", cat:"practices", q:"DORA elite delivery performers consistently demonstrate which combination? (select 3)",
      opts:[
        {t:"High deployment frequency",c:true},
        {t:"Short lead time for changes",c:true},
        {t:"Low change failure rate with fast restore",c:true},
        {t:"Long-lived feature branches merged near release"},
        {t:"Heavy manual approval gates on every deployment"}
      ],
      exp:"DORA research shows elite teams achieve BOTH speed (deploy frequency, lead time) AND stability (CFR, MTTR). Long branches and heavy manual gates correlate with lower performance, not higher." },
    { type:"multi", cat:"practices", q:"Which patterns enable Continuous Delivery? (select 3)",
      opts:[
        {t:"Feature toggles to decouple deploy from release",c:true},
        {t:"Trunk-based development with short-lived branches",c:true},
        {t:"Automated rollback / quick recovery procedures",c:true},
        {t:"Year-long release cycles to accumulate features"},
        {t:"Manually-run regression tests as the primary release gate"}
      ],
      exp:"Toggles, trunk-based work, and recovery automation make 'always releasable' achievable. Long cycles and manual-only regression are CD anti-patterns." },
    { type:"multi", cat:"testing", q:"Which characteristics describe good unit tests? (select 3)",
      opts:[
        {t:"Fast (typically milliseconds)",c:true},
        {t:"Isolated from external dependencies (DB, network, filesystem)",c:true},
        {t:"Focused on one behavior per test, with clear failure messages",c:true},
        {t:"Cover entire UI flows end-to-end through the browser"},
        {t:"Require a live database instance for setup"}
      ],
      exp:"Unit tests sit at the base of the Test Pyramid: fast, isolated, focused. UI/E2E coverage and live-DB needs belong in higher pyramid layers (integration, end-to-end) — and should be relatively few." },
    { type:"multi", cat:"testing", q:"Which approaches improve overall test suite reliability? (select 3)",
      opts:[
        {t:"Investigating and fixing flaky tests as real defects",c:true},
        {t:"Following the Test Pyramid (many unit, fewer integration, few end-to-end)",c:true},
        {t:"Using contract testing at service boundaries",c:true},
        {t:"Re-running tests until they happen to pass"},
        {t:"Deleting tests that fail occasionally rather than investigating"}
      ],
      exp:"Reliability comes from disciplined investigation and structural choices. Re-running until green and silent deletion hide problems and erode trust in the entire suite." },
    { type:"multi", cat:"testing", q:"TDD's red-green-refactor cycle includes which activities? (select 3)",
      opts:[
        {t:"Writing a failing test first (red)",c:true},
        {t:"Writing the minimum code to make it pass (green)",c:true},
        {t:"Improving design while keeping tests green (refactor)",c:true},
        {t:"Writing the test only after the production code is finished"},
        {t:"Deleting tests that no longer pass after a refactor"}
      ],
      exp:"TDD: red (test fails) → green (minimum code passes) → refactor (design improves). Test-after isn't TDD; tests failing after refactor mean fix the code or update the test consciously, never silent deletion." },
    { type:"multi", cat:"quality", q:"Which elements are appropriate to include in a strong Definition of Done? (select 3)",
      opts:[
        {t:"Code review completed",c:true},
        {t:"Automated tests pass in the CI pipeline",c:true},
        {t:"Non-functional requirements (security, accessibility, performance) appropriate to the product",c:true},
        {t:"Pre-approval from every stakeholder for every item"},
        {t:"A specific hour budget the item must fit within"}
      ],
      exp:"DoD encodes the team's quality bar — typically reviews + automation + NFRs. It's not a stakeholder gate or a time budget; those are different concerns." },
    { type:"multi", cat:"quality", q:"Which statements correctly describe the relationship between the Definition of Done and acceptance criteria? (select 3)",
      opts:[
        {t:"The DoD is the Increment-level quality bar applying to ALL work",c:true},
        {t:"Acceptance criteria are item-specific behavior conditions",c:true},
        {t:"An item must meet BOTH its acceptance criteria AND the DoD to be Done",c:true},
        {t:"Acceptance criteria and DoD are interchangeable terms"},
        {t:"DoD applies only to user-facing items, not backend work"}
      ],
      exp:"DoD = product-wide quality bar; AC = item-specific intent. Both must hold for Done. Confusing the two is a common source of weak Increments." },
    { type:"multi", cat:"quality", q:"Which signs indicate accumulating technical debt that hurts long-term Ability to Innovate? (select 3)",
      opts:[
        {t:"Code increasingly costly and risky to change safely",c:true},
        {t:"Slow, flaky CI pipeline that erodes trust",c:true},
        {t:"Mounting bug count in previously stable areas",c:true},
        {t:"A team practicing continuous refactoring during regular work"},
        {t:"Frequent small Increments shipped per Sprint"}
      ],
      exp:"Tech debt manifests as change cost, build degradation, and rising defects. Continuous refactoring and small frequent Increments are antidotes — not symptoms." },
    { type:"multi", cat:"design", q:"Which are signs of well-designed code per recognized engineering practice? (select 3)",
      opts:[
        {t:"Low coupling between modules",c:true},
        {t:"High cohesion within modules",c:true},
        {t:"Behavior testable in isolation from infrastructure",c:true},
        {t:"Many tightly-linked global variables",c:true ? false : true},
        {t:"One giant class that handles every concern"}
      ],
      exp:"Low coupling + high cohesion + testability = maintainable code (Martin, Fowler). Global state and god-classes are well-known indicators of poor design." },
    { type:"multi", cat:"design", q:"Emergent architecture in Scrum is supported by which behaviors? (select 3)",
      opts:[
        {t:"Deferring architectural decisions until they're justified by need",c:true},
        {t:"Using fitness functions to keep the system aligned to desired properties",c:true},
        {t:"Refactoring continuously to shape the architecture as it grows",c:true},
        {t:"Locking the architecture before Sprint 1 begins"},
        {t:"Forbidding any structural changes after the initial design"}
      ],
      exp:"Emergent architecture (Ford/Parsons/Kua) treats structure as evolving — guided by fitness functions and refactoring. Lock-down anti-patterns prevent adaptation as the product is learned." },
    { type:"multi", cat:"design", q:"Which SOLID principles are correctly described? (select 3)",
      opts:[
        {t:"Single Responsibility — a class should have one reason to change",c:true},
        {t:"Open/Closed — open for extension, closed for modification",c:true},
        {t:"Dependency Inversion — depend on abstractions, not concrete implementations",c:true},
        {t:"Single Repository — one source-control repo per organization"},
        {t:"Optimistic Default — assume all inputs are valid"}
      ],
      exp:"SRP, OCP, DIP are three of the five SOLID principles (Martin). The other two are LSP (Liskov Substitution) and ISP (Interface Segregation). 'Single Repository' and 'Optimistic Default' are not SOLID." },
    { type:"multi", cat:"refinement", q:"Which statements describe vertical slicing of a Product Backlog item? (select 3)",
      opts:[
        {t:"Cuts through every architectural layer end-to-end",c:true},
        {t:"Delivers a thin but functioning capability that can be validated",c:true},
        {t:"Supports independent release or stakeholder feedback per slice",c:true},
        {t:"Always divides work by component (UI / API / DB) per Sprint"},
        {t:"Requires a hardening phase afterward to integrate slices"}
      ],
      exp:"Vertical slices are end-to-end and demonstrable. Component-based ('horizontal') splits aren't vertical. Hardening phases are an anti-pattern Scrum aims to eliminate." },
    { type:"multi", cat:"refinement", q:"Effective Product Backlog refinement produces which outcomes? (select 3)",
      opts:[
        {t:"Items become smaller and clearer as they approach the top",c:true},
        {t:"The whole Scrum Team contributes (not just the PO)",c:true},
        {t:"Estimates emerge from collaborative conversation that surfaces risk",c:true},
        {t:"Every backlog item is estimated to the nearest hour"},
        {t:"Refinement is a formal Scrum event with a fixed 10% Sprint timebox"}
      ],
      exp:"Refinement tapers detail toward the top with whole-team input. Hour-precision and the '10% rule' are not Scrum requirements (the 10% guidance was removed in 2020)." },
    { type:"multi", cat:"refinement", q:"Which are valid PBI splitting strategies (per SPIDR and common practice)? (select 3)",
      opts:[
        {t:"By workflow path — happy path first, error cases later",c:true},
        {t:"By data variation — one customer segment first, then others",c:true},
        {t:"By interface — one channel first, then others",c:true},
        {t:"By Developer — split a single feature across each Developer's daily work"},
        {t:"By time of day — work to be completed in morning vs afternoon"}
      ],
      exp:"Splits along Path / Data / Interface / Rules / Spike yield independently valuable slices. Splitting by person or time-of-day doesn't deliver smaller value increments — those are scheduling tactics, not splits." }
  ]
};
})();
