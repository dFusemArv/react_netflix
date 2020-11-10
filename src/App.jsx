import React from 'react';
import Cards from './Cards';
import seriesData from './seriesData';
function App(){
    let cssStyle={color:'green'};
    return(
        <>
            <h1 className='heading_style' style={cssStyle}>This is my list of fave movies and series</h1>
            

            {seriesData.map((val) => {
                return(
                    <Cards 
                    imgSource={val.imgSource}
                    title={val.title}
                    link={val.link}
                    message={val.message}
                    />
                );
                
            })}
        </>
    );
}

export default App;