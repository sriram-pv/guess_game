function Result(props){
let result;
const num=props.num
const secretnum = props.seceretnum
if (num)
{
if(num>secretnum)
{
    result='Higher'
}
else if(num<secretnum)
{
    result='Lower'
}
else if(num==secretnum)
    {
        result='Congrats!! You guessed correct number'
    }
    else
    {
        result='please enter valid input'
    }
    return <h3>You Guessed:{result}</h3>
}
}
export default Result