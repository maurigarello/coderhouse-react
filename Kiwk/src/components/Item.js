

const Item = ( { id, name, stock }) => {
  return (
    <li className="border border-neutral-800 py-5 mx-5 my-5">{id}. {name} - stock: {stock}</li>
  )
}
export default Item