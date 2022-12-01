/**
 *   Skipping Effects (No array dependency)
 *  Without an array dependency, the effect function will be run after every single render.
 */

useEffect(() => {
  console.log("This will be logged after every render!");
});
