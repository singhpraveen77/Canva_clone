import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleState, change_to ,set_theme_red} from '../Store';

const Hovers = () => {

  const sharedState = useSelector((state) => state.shared.value);
  // const set_theme_State = useSelector((state) => state.set_theme_red.value); // Corrected selector for theme state
  const themeState = useSelector((state) => state.theme.value); // Corrected selector for theme state

  const dispatch = useDispatch();

//setting the theme
  const handle_Theme_in= () => {
    
        dispatch(set_theme_red(true));
    
};

  const handle_theme_out = () => {
    
        dispatch(set_theme_red(false));
    
};

// hovering effect of bada div 
  const handleMouseEnter = () => {
    
        dispatch(toggleState(true));
    
};

  const handleMouseLeave = () => {
    
        dispatch(toggleState(false));
    
};

// hovering effect of theme button
const theme_enter = () => {

  dispatch(change_to(true));

};

const theme_leave = () => {

  dispatch(change_to(false));

};




  const heads=["Visual documents","Photos and videos","Print","Marketing"];

  const lists=[
    ["Visual Suite","Docs","Presentation","WhiteBoards","PDF editor","Graphs and Charts"],
    ["Visual Suite","Docs","Presentation","WhiteBoards","PDF editor","Graphs and Charts"],
    ["Visual Suite","Docs","Presentation","WhiteBoards","PDF editor","Graphs and Charts"],
    ["Visual Suite","Docs","Presentation","WhiteBoards","PDF editor","Graphs and Charts"]
  ]

  
  return (
  <div>

  
        <div 
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        className={`  h-[40vh] w-[80vw] z-50 absolute top-[8vh] left-[10vh] rounded-xl bg-white shadow-xl border ${sharedState ? 'block' : 'hidden'}`}>
          <div className="flex h-full ">
            {heads.map((head, index) => (
              <div key={index} className="flex-1 p-4">
                <h2 className="font-bold mb-2">{head}</h2>
                {lists[index].map((item, idx) => (
                  <div key={idx} className="mb-1">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div 
         onMouseEnter={()=>theme_enter()}
         onMouseLeave={()=>theme_leave()}
        className={`${themeState ? 'block':'hidden'} theme shadow-2xl rounded-md absolute bg-white top-[8vh] right-[50vh] h-[28vh] w-[25vw] border-[#a9a7a7] border-[1px] flex flex-wrap justify-center gap-3 items-center`}>
          <div 
          onMouseEnter={()=>handle_Theme_in()}
          onMouseLeave={()=>handle_theme_out()}
          onClick={()=>{
            handle_Theme_in();
            // theme_leave();
          }}

          className='one-theme shadow-md hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] h-[10vh] w-[10vw] flex relative items-center justify-center' >
            <div className='h-full w-[50%] bg-black'></div>
            <h1 className='z-50 bg-transparent absolute text-white font-serif text-xl'>Night Owl</h1>
            <div className='h-full w-[50%] bg-slate-600'></div>
          </div>
          <div className='one-theme h-[10vh] w-[10vw]  flex relative items-center justify-center' >
            <div className='h-full w-[50%] bg-purple-800'></div>
            <h1 className='z-50 bg-transparent absolute  text-white font-serif text-xl'>Wanderlust</h1>
            <div className='h-full w-[50%] bg-pink-500'></div>
            
          </div>
          
          <div className='one-theme h-[10vh] w-[10vw]  flex relative items-center justify-center' >
            <div className='h-full w-[50%] bg-[#E8F5E9]'></div>
            <h1 className='z-50 bg-transparent absolute  text-[#161b65] font-serif text-xl'>Haven</h1>
            <div className='h-full w-[50%] bg-[#2E7D32]'></div>
            
          </div>
          <div className='one-theme h-[10vh] w-[10vw]  flex relative items-center justify-center' >
            <div className='h-full w-[50%] bg-black'></div>
            <h1 className='z-50 bg-transparent absolute  text-white font-serif text-xl'>ChicStyle</h1>
            <div className='h-full w-[50%] bg-slate-600'></div>
            
          </div>
          
        </div>

      
    </div>
  )
}

export default Hovers