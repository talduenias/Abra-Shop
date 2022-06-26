import styled from "styled-components"
import ItemCard from "./ItemCard"
import { deviceSize } from "../../constants"
const ItemsList = () => {
    return (<ItemsListWrapper>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="890 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />

    </ItemsListWrapper>)
}

const ItemsListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 48px 24px;
    flex-wrap: wrap;
    @media (max-width: ${deviceSize.mobile}) {
      gap: 20px 18px;
    }

`

export default ItemsList;