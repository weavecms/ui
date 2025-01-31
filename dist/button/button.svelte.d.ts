export default Button;
type Button = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Button: import("svelte").Component<{
    class?: string;
    variant?: string;
    size?: string;
    ref?: any;
    href?: any;
    type?: string;
    children: any;
} & Record<string, any>, {}, "ref">;
type $$ComponentProps = {
    class?: string;
    variant?: string;
    size?: string;
    ref?: any;
    href?: any;
    type?: string;
    children: any;
} & Record<string, any>;
