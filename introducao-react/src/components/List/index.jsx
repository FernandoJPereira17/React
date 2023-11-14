import { ListItem } from "./components/ListItem.jsx";

export default function List( {nome, items} ) {
    return (
        <div>
            <h2>Lista de:{nome}</h2>
            <ul>
                {items.map((value) =>(
                    <ListItem item={value}/>
                ))}
            </ul>
        </div>

    );
}
