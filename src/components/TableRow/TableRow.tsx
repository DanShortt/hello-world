const TableRow = (props : TableRowProps) =>{

    return (
        <tr>
            <td id="cell1-0">{props.id}</td>
            <td id="cell1-1">{props.date}</td>
            <td id="cell1-2">{props.country}</td>
            <td id="cell1-2">{props.currency}</td>
            <td id="cell1-2">{props.amount}</td>
        </tr>
    )
}

type TableRowProps = {
    id : String,
    date : String,
    country : String,
    currency : String,
    amount : String
}

export default TableRow;