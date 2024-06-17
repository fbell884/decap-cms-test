import Image from "next/image";
import Script from "next/script";
import { attributes } from "../content/home.md";

export default function Home() {
  let { images, homeCards } = attributes;

  const newPath = images.map(image => {
    let newPath = { ...image };
    newPath.imagepath = newPath.imagepath.replace("public", "");
    return newPath;
  });

  console.log(newPath);
  console.log(homeCards);

  return (
    <main className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src="/img/bitmoji.png" className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">{homeCards[0].title}</h5>
                <p className="card-text">{homeCards[0].description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src={newPath[0].imagepath} className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">{homeCards[1].title}</h5>
                <p className="card-text">{homeCards[1].description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <Image src={newPath[1].imagepath} className="card-img-top" width={500} height={500} alt="Test Image" />
              <div className="card-body">
                <h5 className="card-title">{homeCards[2].title}</h5>
                <p className="card-text">{homeCards[2].description}</p>
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
