interface props {
    columns: string[];
    data: any[]
}
export const table = ({ columns, data }: props) => {
    return (
        <table><thead>
            {
                columns.map(col => <th>{col}</th>)

            }
        </thead>
            <tbody>
                {
                    data.map(row => <tr>
                        {
                            columns.map(c => <td>{row[c]}</td>)
                        }
                    </tr>)
                }
            </tbody>
        </table>
    )
}
