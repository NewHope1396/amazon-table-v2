import { FC } from "react";
import { Pagination as BSPagination } from "react-bootstrap";

export const Pagination: FC<{
  perPage: number;
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ perPage, totalPage, currentPage, setCurrentPage }) => {
  const items = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    items.push(
      <BSPagination.Item
        onClick={() => {
          setCurrentPage(i);
        }}
        key={i}
        active={i === currentPage}
      >
        {i}
      </BSPagination.Item>
    );
  }

  return <BSPagination>{items}</BSPagination>;
};
