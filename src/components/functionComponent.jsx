import { React} from 'react';

function FunctionComponent(){

 const _htmlString = ( 
 `      import { React } from 'react'; 

            function FunctionComponent() {
                const _template = (
                <div > This is code snippet for function component</div>
                )
                return _template;
            }
        export default FunctionComponent`
 )


const _template = (
    <div> 
        <h3 className="content-heading"> Function Component Code Snippet </h3> 
        <p> Function component is component which contains functions.</p>

        <h3 className="content-heading"> Code Snippet </h3>  
        <textarea className="code-snippet-textarea"  readOnly value={_htmlString} /> <br /> <br /> 

        <h3 className="content-heading"> Code Explanation </h3>  
        <p> <code>  import &#123; React &#125;  from 'react';  </code>: We have to import this and this will help to render the dom.</p>
        <p> <code>  function FunctionComponent() &#123; ..... &#125;   </code>: Function </p>
        <p> <code>  const _template = ( ..... )  </code>: constant that is holding the html tag along with js</p>
        <p> <code> export default FunctionComponent  </code>: Exporting</p>
    </div>

)
     return  _template ; 
}

export default FunctionComponent

 