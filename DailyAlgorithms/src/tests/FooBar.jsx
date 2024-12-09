
function FooBar() {

    const display = (num) => {

        const numbers = Array(num).fill('');
        const myNumbers = numbers.map((_, num) => {
        
            const current = num + 1
            if (current % 5 === 0 && current % 7 === 0) {
                return <div className="squares">
                    FooBar
                </div>
            } else if (current % 5 === 0) {
                return <div className="squares">Foo</div>
            } else if (current % 7 === 0) {
                return <div className="squares">Bar</div>
            } else {
                return <div className="squares">{current}</div>
            }
        })
return myNumbers
    }




    return (
        <>
        <h1 className="shadow">FooBar</h1>
        <div className="main">
         {display(200)}
        </div>
        </>
    )
}
export default FooBar