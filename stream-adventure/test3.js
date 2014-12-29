/*---[INPUT OUTPUT]---(03/15)

Take data from `process.stdin` and pipe it to `process.stdout`.

With `.pipe()`. `process.stdin.pipe()` to be exact.

Don't overthink this.

To verify your program, run: `stream-adventure verify program.js`.
*/

process.stdin.pipe(process.stdout);
