
export default function MyButton({myText}) {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <>
            <button onClick={handleClick}>{myText}</button>
        </>
    )
}

