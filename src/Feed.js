import Post from "./Post";

const Feed=({posts}) => {
    return(
     <>
       
          {posts.map(post=> (

            <Post key={post.id} post={post} />
          )


          )}  
      
      
           
               <h3>About This is a Small  web app</h3>
         
              
           
   
     
     
   
               
      </> 
     
   
    )
   }
   
   export default Feed;