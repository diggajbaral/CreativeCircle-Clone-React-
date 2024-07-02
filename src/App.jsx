import React from 'react'
import './App.css'
import Header from './Component/Header'
import Homecard from './Component/Homecard'

function App() {
  // const [count, setCount] = useState(0)


  var imagecard = [
    {
      id: 1,
      imageURL: "https://www.creativecircle.com/wp-content/uploads/2024/04/Ad-Agencies-and-AI.png",
      cardTitle: "Ad Agencies & AI"
    },
    {
      id: 2,
      imageURL: "https://www.creativecircle.com/wp-content/uploads/2024/04/Personalization-On-Demand-and-At-Scale-1.png",
      cardTitle: "AI & Personalization"
    },
    {
      id: 3,
      imageURL: "https://www.creativecircle.com/wp-content/uploads/2024/04/Reducing-Bias-and-Ensuring-Compliance-1.png",
      cardTitle: "AI & Compliance"
    }
  ]

  return (
    <>
      <Header />
      <div className="Banner Main-Margin /// container">
        <div className="row">
          <div className="Welcome col-lg-6">
            <h1>We’ve got the solution.</h1>
            <p>Creative Circle provides marketing and creative services for companies looking to solve business challenges of all sizes, including flex bench and studio teams, agency services, talent acquisition, and consulting services.</p>
          </div>
          <div className="Image col-lg-6">
            <figure>
              <img src="https://www.creativecircle.com/wp-content/uploads/2022/03/CLIENTS_020222.gif" alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="Information Main-Margin">
        <div className="container">
          <h3>Let us handle it.</h3>
          <p>At Creative Circle, we don’t just offer solutions; we forge transformative partnerships that drive meaningful results. From crafting compelling brand narratives to executing targeted digital campaigns, we are here to help you reach your marketing goals and elevate your brand to new heights.</p>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div>
                <h5>Brand Strategy</h5>
                <p>Compelling brand stories and strategies to captivate your audience.</p>
              </div>
              <div>
                <h5>Creative Design</h5>
                <p>Eye-catching visuals and graphics that resonate with your brand.</p>
              </div>
              <div>
                <h5>Digital Marketing</h5>
                <p>Breakthrough digital campaigns designed to drive results.</p>
              </div>
              <div>
                <h5>Content Creation</h5>
                <p>Engaging content that tells your brand’s story.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h5>Social Media Management</h5>
                <p>Strategic audience engagement that builds community and brand loyalty.</p>
              </div>
              <div>
                <h5>Web Design & Development</h5>
                <p>Captivating design and best in class UX tailored to reach your audience.</p>
              </div>
              <div>
                <h5>Analytics & Reporting</h5>
                <p>Insights and analytics to measure and improve campaign performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Quote Main-Margin /// container">
        <h2>Our talent is not just keeping pace with the AI revolution—they’re leading it. </h2>
        <p>Explore our AI insights and industry expertise.</p>
      </div>

      <div className="ImageCard Main-Margin /// container">
        {
          imagecard.map((items) => {
            return <Homecard data={items} />
          })
        }
      </div>

      <div className="More Main-Margin">
        <button>MORE INSIGHT</button>
      </div>

      <div className="FeedBack Main-Margin">
        <div className="container">
          <h2>What Our Clients Say:</h2>
          <div className="row mt-5">
            <div className="col-lg-6">
              <p><span>“The team at Creative Circle has played a crucial role in our social media success.</span> With a focus on social performance metrics such as likes, comments, saves, and reshares, our campaigns have consistently outperformed industry benchmarks. We attribute Creative Circle’s successful delivery to the efficient processes the team has put in place, and the level of talent and expertise that they provide. It sets them apart in delivering impactful marketing solutions.”</p>
            </div>
            <div className="col-lg-6">
              <p><span>“Our experience with Creative Circle has been exceptional.</span> They took full ownership of our point-of-purchase production initiative and handled all associated deadlines with efficiency and professionalism. The team’s proactive approach and attention to detail have been invaluable, and we look forward to continuing our partnership.”</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
