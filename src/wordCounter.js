const pattern = /\b[^\d\W]+\b/g

const getMatchRegex = (text)=>text.match(pattern)

const wordCounter = (text)=>{
   return getMatchRegex(text).reduce((acc, curr)=>{
      return acc[curr] ? acc[curr]++ : {[curr]:1}
    },{})
}

export default wordCounter
