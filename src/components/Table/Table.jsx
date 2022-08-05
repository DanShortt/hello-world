import TableRow from "../TableRow/TableRow";

const Table = () =>{

    return (
        <div>
             <table id="simple-board">
                <tbody>
                
                <tr id="row0">
                    <td id="cell0-0">ID</td>
                    <td id="cell0-1">Date</td>
                    <td id="cell0-2">Country</td>
                    <td id="cell0-2">Currency</td>
                    <td id="cell0-2">Amount</td>
                </tr>
                <TableRow id="1" date = "05/08/2022" country = "UK" currency="GBP" amount="10.02" />
                <TableRow id="2" date = "05/08/2022" country = "IRE" currency="EUR" amount="15.96" />
                <TableRow id="3" date = "05/08/2022" country = "USA" currency="USD" amount="8.57" />
                </tbody>
            </table>
        </div>
    )
}

export default Table;