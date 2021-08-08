const Form = ({ inputValue,setInputValue,todos,setTodos }) => {
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    }
    const generateRandomColor = (hashTag) => {
        let symbols = '0123456789ABCDEF';
        for (let i = 0; i < 6; ++i) {
            hashTag += symbols[Math.floor(Math.random() * 16)];
        }
        // returns random color
        return hashTag;
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            id: Math.floor(Math.random() * 2000),
            text: inputValue,
            checked: false,
            color: generateRandomColor('#')
        }])
        setInputValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={inputValue} onChange={inputValueHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
        </form>
    )
}

export default Form;