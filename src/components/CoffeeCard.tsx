type Props = {
  name: string
  description: string
  imageUrl: string
  price: string
}

export const CoffeeCard = ({ name, description, imageUrl, price }: Props) => (
  <div>
    <img src={imageUrl} alt="" />
    <h3>{name}</h3>
    <p>{description}</p>

    <footer>{price}</footer>
  </div>
)
