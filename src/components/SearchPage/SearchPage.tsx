/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import axios from 'axios';

import { GIFObject } from '../../Interfaces/Interfaces';

import { GIPHY_API } from '../../constants/api';

import {
  StyledButton,
  StyledInput,
  Images,
  Image,
  ImagesList,
  SearchPagination,
  SearchWrapper,
} from '../../App.styles';

const SearchPage = () => {
  const [gifs, setGifs] = React.useState<Array<GIFObject>>([]);
  const [search, setSearch] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(1);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const fetchSearchData = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios(GIPHY_API, {
        params: {
          api_key: 'UqaC64gWpzwVvwhR5BUpR4B6z86ZdTmj',
          q: search,
          limit: 18,
        },
      });

      setGifs(results.data.data);
      setCount(results.data.pagination.total_count);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      {gifs.length > 0 && (
        <SearchPagination
          count={Math.ceil(count / 18)}
          page={currentPage}
          onChange={handleChange}
        />
      )}

      <SearchWrapper>
        <StyledInput
          type='text'
          placeholder='Search GIF'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <StyledButton type='button' onClick={fetchSearchData}>
          Search
        </StyledButton>
      </SearchWrapper>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Images cols={6} rowHeight={300}>
          {gifs?.map((gif) => (
            <ImagesList key={gif.id}>
              <Image
                src={`${gif.images.fixed_width.url}?w=164&h=164&fit=crop&auto=format`}
                alt='123'
              />
            </ImagesList>
          ))}
        </Images>
      )}
    </>
  );
};

export default SearchPage;
