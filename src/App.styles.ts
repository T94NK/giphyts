import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  margin-left: 160px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledButton = styled(Button)`
  width: 150px;

  margin: 20px 0px;
  background-color: #4e53a5;

  & .MuiButton-label {
    text-align: center;
    padding: 20px 20px;
    border-radius: 50px;

    color: #e2a8be;
    font-size: 20px;
    font-family: 'Permanent Marker';
    background-color: #4e53a5;
  }
  & .MuiTouchRipple-root {
    border-radius: 50px;
    padding: 20px 50px;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 30px 0;
  padding-left: 42%;
  margin: 20px 0px;
  & .MuiInput-input {
    color: #e2a8be;
    font-size: 25px;
    font-family: 'Permanent Marker';
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Images = styled(ImageList)`
  width: 100%;
  height: 100%;
  overflow-y: none;
  overflow-x: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: none;
  overflow-x: none;
  &:hover {
    transform: scale(1.3, 1.3);
    z-index: 1;
  }
`;
export const ImagesList = styled(ImageListItem)`
  overflow-y: none;
  overflow-x: none;
`;
export const SearchPagination = styled(Pagination)`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4e53a5;
  & .MuiPaginationItem-text {
    color: #e2a8be;
    font-size: 18px;
    font-family: 'Permanent Marker';
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
