import './MenuItem.css'

const MenuItem = ({name, thumb, price}) => {
    return (
        <div className="menuItem">
            <img src={thumb} alt={name} />
            <h3>{name}</h3>
            <span>{price} €</span>
        </div>
    )
}

export default MenuItem