
export function ClienteList({ props }){
    console.log(props);
    return (
        <div>
            <h2>Lista de:{props.nome}</h2>
            <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            </ul>
        </div>
    );
}

