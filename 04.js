const accountId = 122345
let accountEmail = "krishna@google.com"
var accountPassword = "123456"
accountCity = "Ujjain" // If a variable is assigned without let, const, or var, JavaScript creates an implicit global variable in non-strict mode. In strict mode, this causes a ReferenceError. 
let accountState;

// accountId = 232732 //Not allowed

/*
Prefer not to use var due to its block and functional scope issue
*/

console.table([accountId, accountEmail, accountPassword, accountState])
/*
Output
┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 122345               │
│ 1       │ 'krishna@google.com' │
│ 2       │ '123456'             │
│ 3       │ undefined            │
└─────────┴──────────────────────┘
*/
