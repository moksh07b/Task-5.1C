import { useState } from "react";
import PostSelection from "./PostSelection";
import Title from "./Title";
import Question from "./Question";
import Article from "./Article";
import TagPostButton from "./TagPostButton";

function App(){
    const [msg, Setmsg] = useState("Start your question with how, what, why, etc.");
    const [display, SetDisplay] = useState(<Question />)

  function checkState(selectOption){
    if(selectOption === "article"){
        Setmsg("Enter a descriptive title");
        SetDisplay(<Article />)
    }
    else{
      Setmsg("Start your question with how, what, why, etc.");
      SetDisplay(<Question />)
    }
    
  }
  
  console.log(msg);
  
  return(
    <div>
    <PostSelection checkState={checkState} />
    <Title placeholder_msg = {msg} />
    {display}
    <TagPostButton />
    </div>
  )
  
  
  }

  export default App