
export default function Divisors({integer}) {
 
    function number() {
        const divisor = [];
        for(let i = 2; i < integer; i++){
            if(integer % i === 0){
                divisor.push(i)
            }
        }
            if(divisor.length === 0){
                return `${integer} is prime`
            } else {
                return divisor
            }
    }

    return (
        <>
        <h1>Divisors of {integer}</h1>
        <h2>
        {number()}
        </h2>
        
        </>
    )
}

