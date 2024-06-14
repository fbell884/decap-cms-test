import Image from "next/image";
import Script from "next/script";
import { attributes } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;
  return (
    <main className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src="/img/bitmoji.png" className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src="/img/bitmoji.png" className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src="/img/bitmoji.png" className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {cats.map((cat, k) => (
          <span key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </span>
        ))}
      </div> */}
    </main>
  );
}
