import {useState} from 'react'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

     return (
         <div>
             <form onSubmit={handleFormSubmit}>
                 <input
                     onChange={handleChange}
                     type="text"
                     value={term}
                     className="border border-gray-300 p-2"
                 />
             </form>
         </div>
     )
}

export default SearchBar