import React from "react";
import styled from "styled-components";

function VideoViewr() {
  return (
    <Container>
      <Wrap>
        <Link>
          <img src="http://logos-download.com/wp-content/uploads/2016/06/Disney_logo.png" />

          <video autoPlay={true} loop={true}>
            <source src="https://www.youtube.com/watch?v=SyxwEAukR30" type="video/mp4" />
          </video>
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/07/30/netflix.png" />

          <video autoPlay={true} loop={true}>
            <source src="/https://www.youtube.com/watch?v=SyxwEAukR30" type="video/mp4" />
          </video>
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="https://fanart.tv/fanart/movies/528888/hdmovielogo/dolemite-is-my-name-5d7d02f933941.png" />

          <video autoPlay={true} loop={true}>
            <source src="https://www.youtube.com/watch?v=z1qy5wSZAQI" />
          </video>
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="http://fanart.tv/fanart/movies/11224/movielogo/cinderella-4f91baeda627f.png" />

          <video autoPlay={true} loop={true}>
            <source src="https://stock.adobe.com/search/free?gallery_id=l8WrDPvUywXrMdtXYZW05TfmyHiXEyop&filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfree_collection%5D=1&filters%5Border%5D=relevance&order=relevance&safe_search=1&limit=100&search_type=asset-type-change&search_page=1&get_facets=0&asset_id=414937322" />
          </video>
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_log_03.png" />

          <video autoPlay={true} loop={true}>
            <source src="/images/video3.mp4" type="video/mp4" />
          </video>
        </Link>
      </Wrap>
    </Container>
  );
}

export default VideoViewr;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Wrap = styled.div`
  position: relative;
  height: 50vh;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms ease-in-out;
  border: 3px solid grey;
  margin: 60px;
  transform:scale(1);
  @media (min-width: 768px) {
    margin: 0;
    height: 150px;
  }

  :hover {
    border: 4px solid whitesmoke;
    transform:scale(1.05);
    video {
      opacity: 1;
    
    }
  }
`;

const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  max-width: 500px;
  > img {
    width: 100%;
    max-width: 650px;
    z-index: 1;
    height: 100%;
  }
  > video {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    opacity: 0;
  }
`;
