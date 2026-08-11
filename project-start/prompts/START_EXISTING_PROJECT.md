# Start Existing Project

Use this prompt when the project already has code, documentation, architecture decisions, users, deployments, or other established state.

## Input

Provide a project scenario file and references to the existing project material that is available to the agent.

## Agent Instruction

Read the Product Engine authority/read-order files first, then read the project scenario and available existing-project context.

Treat existing project facts as source evidence, not as permission to bypass Product Engine contracts.

For an existing project:

- distinguish confirmed current state from stale or uncertain information,
- preserve existing valid decisions and constraints,
- identify documentation gaps and contradictions,
- use the Engine's existing package/document selection rules,
- normalize the project through the canonical intake and lifecycle,
- do not overwrite established facts with speculative defaults,
- stop at the canonical approval gate when approval is required.

Do not perform unrelated refactors or implementation work unless a later approved Engine stage explicitly requires it.
