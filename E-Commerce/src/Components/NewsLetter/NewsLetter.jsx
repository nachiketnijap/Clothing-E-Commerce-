import './NewsLetter.css';

const NewsLetter =()=>{
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
          <input type="email" placeholder='Your Email Id' />
          <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter;