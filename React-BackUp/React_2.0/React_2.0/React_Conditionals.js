/*  React Conditionals

 --> React components and elements can be conditionally displayed.
 --> One approach is to create a separate return with an if-statement.

*/

function Conditionals() {
    const isAuthUser = useAuth();

    if (isAuthUser) {
        // if our user is authenticated, let them use the app 
        return <AuthApp />
    }
    // if user is not authenticated, show a different screen
    return <UnAuthApp />
}
export default Conditionals;


/*  --> If you want to write a conditional within a return statement, however, you must use a conditional that resloves to value.
    --> To use the ternary operator, wrap the entire conditional in curly braces.
*/

// function Conditional1() {
//     const isAuthUser = useAuth();

//     return (
//         <>
//         <h1>My Conditional</h1>
//         {isAuthUser ? <AuthApp /> : <UnAuthApp/>}
//         </>
//     )
// }
// export default Conditional1;