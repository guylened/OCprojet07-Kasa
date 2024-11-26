import "../styles/index.scss";
import { Banner1 } from "../components/Banner";
//import dataHousing from '../data/dataHousing.json'

function Home() {
  return (
    <>
      <Banner1 />
      <div className="housingInsert">
        <a href="">
          <article className="housingCard">
            <img
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
              alt="test"
            />
            <p className="housingCardText">test de text</p>
          </article>
        </a>
      </div>
    </>
  );
}

export default Home;

/*{dataHousing.map((item, id) => (        
        key={id}  
        title={item.title}
        img={item.content}*/
