import wordCounter from '../wordCounter'
test('find one word',()=>{
    const text ='mot'
    expect(wordCounter(text)).toEqual({mot:1})
})
