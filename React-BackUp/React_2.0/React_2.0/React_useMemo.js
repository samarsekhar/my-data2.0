/*  React useMemo

  --> useMemo is another performance hook that allows us to 'memoize' a given operation.

  --> Memoization makes it possible to remember the result of expensive calculations when they have already been made so we don't have to make them again.

  --> Like useEffect and useCallback, useMemo accepts a callback function and a dependencies array.

  --> Unlike both of these functions, however, useMemo is intended to return a value.

  // must return the value either explicitly with the return keyword or implicitly but using the arrow function shorthand (seen below).

  --> A real-worls example of useMemo comes from the mdx-bundler documentation. mdx-undler isa library for converting ,mdx files into Recat components.

  --> Here it uses useMemo to convert a raw string of code into Recat component.

*/

import * as React from "react";
import {getMDXComponent} from "mdx-bundler/client"

function Post({code, frontmatter}) {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);

    return (
        <>
        <header>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.description}</p>
        </header>
        <main>
            <Component />
        </main>
        </>
    )
}
export default Post


/*  The reason for doig so is to prevent the Component value from being recreated unnecessarily when the component re-renders.

   useMemo therefore will only execute its callback function if the code dependency changes.
   
*/