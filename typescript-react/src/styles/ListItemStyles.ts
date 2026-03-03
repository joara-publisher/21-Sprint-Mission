import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export interface ListItemProps {
  variant: "bestItemList" | "itemList";
}

const gapStyles = {
  bestItemList: css`
    gap: 24px;

    @media (max-width: 1199px) {
      gap: 10px;
    }

    @media (max-width: 767px) {
      gap: 0;
    }
  `,
  itemList: css`
    gap: 40px 24px;

    @media (max-width: 1199px) {
      gap: 40px 16px;
    }

    @media (max-width: 767px) {
      gap: 32px 8px;
    }
  `,
};

export const ItemListWrapper = styled.ul<ListItemProps>`
  display: flex;
  flex-wrap: wrap;

  /* variant 스타일 자동 적용 */
  ${({ variant }) => gapStyles[variant]}
`;

const ItemGapStyles = {
  bestItemList: css`
    width: calc((100% - (24px * 3)) / 4);

    @media (max-width: 1199px) {
      width: calc((100% - 10px) / 2);
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  `,
  itemList: css`
    @media (max-width: 1199px) {
      width: calc((100% - (16px * 2)) / 3);
    }

    @media (max-width: 767px) {
      width: calc((100% - 8px) / 2);
    }
  `,
};

export const ListItem = styled.li<ListItemProps>`
  width: calc((100% - (24px * 4)) / 5);
  color: var(--gray800);

  /* variant 스타일 자동 적용 */
  ${({ variant }) => ItemGapStyles[variant]}
`;

export const ListItemLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const ListItemImg = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  min-height: 221px;
  object-fit: cover;
  margin-bottom: 16px;
  border-radius: 16px;
`;

export const ListItemName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 6px;
`;

export const ListItemPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 6px;
`;

export const ListItemFavoritButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const FavoritButtonImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const FavoritButtonCount = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray600);
`;
