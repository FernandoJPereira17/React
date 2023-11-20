import { ListItem } from "./components/ListItem.jsx";

export default function List( {nome, items, index} ) {
    return (
        <div>
            <h2 className="text-center sm:h-1 text-6xl">Lista de {nome} :</h2>
            <ul>
                {items.map((value) =>(
                    <ListItem key={index} item={value}/>
                ))}
            </ul>
        </div>

    );
}


