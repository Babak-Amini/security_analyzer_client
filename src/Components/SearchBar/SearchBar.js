import React, {useEffect, useState, useRef} from 'react';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
			inputRef.current.focus();
        }
    }, [])

    return <form>
        <input
            ref={inputRef}
            title='Search a Stock'
            value={input}
            onChange={event => setInput(event.target.value)}
        />
    </form>
}

export default SearchBar;