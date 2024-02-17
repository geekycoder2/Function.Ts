// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// TypeScript function to create a t-shirt
function make_shirt(size: string , message: string): void {
    console.log(`T-shirt Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Summary: T-shirt with size ${size} will have the message "${message}".`);
}

// Call the function with sample values
make_shirt("Large", "I Love Coding!");