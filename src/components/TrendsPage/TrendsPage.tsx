/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ResizeObserver from 'react-resize-observer';
import { Grid, Gif } from '@giphy/react-components';
import { ModalWrapper } from '../../App.styles';

const giphyFetch = new GiphyFetch('UqaC64gWpzwVvwhR5BUpR4B6z86ZdTmj');

const GridDemo = ({ onGifClick }: any) => {
  const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 10 });
  const [width, setWidth] = React.useState(window.innerWidth);

  return (
    <>
      <Grid onGifClick={onGifClick} fetchGifs={fetchGifs} width={width} columns={4} gutter={6} />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
};

const TrendsPage: React.FC = () => {
  const [modalGif, setModalGif] = React.useState();

  return (
    <>
      {modalGif && (
        <ModalWrapper
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}>
          <Gif gif={modalGif} width={400} />
        </ModalWrapper>
      )}
      <GridDemo
        onGifClick={(gif: any, e: { preventDefault: () => void }) => {
          e.preventDefault();
          setModalGif(gif);
        }}
      />
    </>
  );
};

export default TrendsPage;
