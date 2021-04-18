import React from 'react';

const Loading = () => {
    return ( <div

style = {{ height: "100vh", display: "flex", justifyContent: 'center',
alignItems:'center'}} >
<div className="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>

    </div> );
}
 
export default Loading;