import { Link } from 'react-router-dom'
import './fun.css'

function Fun() {
  return (
    <div>
        <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo'/>
  
</head>



  <section class="page_404">
  <div class="container">
    <div class="row"> 
    <div class="col-sm-12 ">
    <div class="col-sm-10 col-sm-offset-1  text-center">
    <div class="four_zero_four_bg">
      <h1 class="text-center ">404</h1>
    </div>
    
    <div class="contant_box_404">
    <h3 class="h2">
    this bage not found 
    </h3>
    
    <p>the page you are looking for not avaible!</p>
    
    <Link to={'/home'} class="link_404 " >Go to Home</Link>
  </div>
    </div>
    </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Fun