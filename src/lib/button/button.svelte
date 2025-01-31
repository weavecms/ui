<script>
	let {
		class: className = "",
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		children,
		...restProps
	} = $$props;
</script>

{#if href}
	<a
		bind:this={ref}
		class="button {variant} {size} {className}"
		{href}
		{...restProps}
	>
		<slot><!-- optional fallback --></slot>
	</a>
{:else}
	<button
		bind:this={ref}
		class="button {variant} {size} {className}"
		{type}
		{...restProps}
	>
		<slot><!-- optional fallback --></slot>
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		white-space: nowrap;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s;
		outline: none;
	}

	.button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.button :global(svg) {
		pointer-events: none;
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
	}

	/* Variants */
	.default {
		background: var(--primary-color);
		color: var(--primary-foreground);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
	.default:hover {
		background: var(--primary-color-hover);
	}

	.destructive {
		background: var(--destructive-color);
		color: var(--destructive-foreground);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}
	.destructive:hover {
		background: var(--destructive-color-hover);
	}

	.outline {
		border: 1px solid var(--border-color);
		background: var(--background);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}
	.outline:hover {
		background: var(--accent-color);
		color: var(--accent-foreground);
	}

	.secondary {
		background: var(--secondary-color);
		color: var(--secondary-foreground);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}
	.secondary:hover {
		background: var(--secondary-color-hover);
	}

	.ghost:hover {
		background: var(--accent-color);
		color: var(--accent-foreground);
	}

	.link {
		color: var(--primary-color);
		text-decoration-line: none;
		text-underline-offset: 4px;
	}
	.link:hover {
		text-decoration-line: underline;
	}

	/* Sizes */
	.default {
		height: 2.25rem;
		padding: 0.5rem 1rem;
	}

	.sm {
		height: 2rem;
		padding: 0.375rem 0.75rem;
		font-size: 0.75rem;
	}

	.lg {
		height: 2.5rem;
		padding: 0.5rem 2rem;
	}

	.icon {
		height: 2.25rem;
		width: 2.25rem;
		padding: 0;
	}
</style>
