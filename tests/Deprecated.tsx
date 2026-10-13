/** @deprecated Use greet instead. */
const salute = (name: string) => `Hello ${name}`;

const greet = (name: string) => `Hello ${name}`;

export const deprecatedGreeting = salute("world");
export const greeting = greet("world");
