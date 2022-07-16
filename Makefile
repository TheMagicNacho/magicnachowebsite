fmt: ## Format the project
	@deno fmt

lint: fmt ## Lint and fix
	@deno lint

up:
	@deno task start