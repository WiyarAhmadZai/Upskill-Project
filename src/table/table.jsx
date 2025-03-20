import "./style.css";
function Table(){
    return(
        <>
            <div className="row">
                <div></div>
                <div>
                    <table>
                        <tr>
                            <th>id</th>
                            <th>F_name</th>
                            <th>L_name</th>
                            <th>job</th>
                            <th>salary</th>
                            <th>s_date</th>
                            <th>R_date</th>
                            <th>paid</th>
                            <th>remind</th>
                            <th>total</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Khan</td>
                            <td>sahil</td>
                            <td>elictrician</td>
                            <td>40000</td>
                            <td>2022/02/22</td>
                            <td>202402/22</td>
                            <td>25000</td>
                            <td>15000</td>
                            <td>40000</td>
                        </tr>
                    </table>
                </div>
                <div></div>
            </div>
        </>
    )
}
export default Table;