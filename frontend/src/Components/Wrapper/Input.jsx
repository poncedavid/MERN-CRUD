const Input = ({ filter, setFilter }) => (
    <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
    />
)
 
export default Input;