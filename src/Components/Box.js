import Heading from "./Heading";
import Paragraph from "./Paragraph";
function Box({head,desc}){
    return(
        <div>
            <h3>{head}</h3>
            <p>{desc}</p>
            {/*<Heading/>
            <Paragraph/>*/}
        </div>
    );
}
export default Box;