const Card = ({index, name, sells, visitors}) => {
    return <div>
          <p>{`№${index+1} ${name}`}</p>
          <p>Общее число покупок: {sells}</p>
          <p>Общее число посетителей: {visitors}</p>
    </div>
}

export default Card;