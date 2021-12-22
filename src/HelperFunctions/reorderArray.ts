 function reorderArray<T>(array:T[],sourceIndex:number,destinationIndex:number){
  

    const elements=Array.from(array);
    const [removed] = elements.splice(sourceIndex,1);
    elements.splice(destinationIndex,0,removed);
    return [...elements];

}

export default reorderArray